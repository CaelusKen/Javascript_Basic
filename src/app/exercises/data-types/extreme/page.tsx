/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { ArrowLeft, Lightbulb, Check, X, Trophy } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeEditor from "@/components/code-editor";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function DataTypesExtremeExercise() {
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const initialCode = `// Exercise: Custom Movie Type System
// Create a sophisticated type validation system for a movie database

// This is a challenging exercise that requires you to create a custom type system
// to validate and transform movie data from various sources.

// Step 1: Define type validators for basic types
const validators = {
  // TODO: Implement string validator that checks if value is a string
  // and optionally validates min/max length
  string: function(value, options = {}) {
    // Your code here
  },
  
  // TODO: Implement number validator that checks if value is a number
  // and optionally validates min/max values
  number: function(value, options = {}) {
    // Your code here
  },
  
  // TODO: Implement boolean validator
  boolean: function(value) {
    // Your code here
  },
  
  // TODO: Implement array validator that checks if value is an array
  // and optionally validates each item using another validator
  array: function(value, itemValidator, options = {}) {
    // Your code here
  },
  
  // TODO: Implement enum validator that checks if value is one of the allowed values
  enum: function(value, allowedValues) {
    // Your code here
  }
};

// Step 2: Define the movie schema using our validators
const movieSchema = {
  id: (value) => validators.number(value, { min: 1 }),
  title: (value) => validators.string(value, { minLength: 1, maxLength: 100 }),
  year: (value) => validators.number(value, { min: 1900, max: new Date().getFullYear() }),
  genre: (value) => validators.enum(value, [
    "Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Thriller", "Romance", "Fantasy", "Mystery"
  ]),
  rating: (value) => validators.number(value, { min: 0, max: 5 }),
  watched: (value) => validators.boolean(value),
  tags: (value) => validators.array(value, validators.string, { maxLength: 10 })
};

// Step 3: Implement the validateMovie function
// It should validate a movie object against the schema
// and return { valid: true, movie: validatedMovie } if valid
// or { valid: false, errors: [...] } if invalid
function validateMovie(movie) {
  // Your code here
}

// Step 4: Implement the parseAndValidate function
// It should handle different input formats (JSON string, form data object)
// and convert them to a validated movie object
function parseAndValidate(input) {
  // Your code here
}

// Test cases
const validMovie = {
  id: 1,
  title: "The JavaScript Adventure",
  year: 2023,
  genre: "Action",
  rating: 4.8,
  watched: true,
  tags: ["javascript", "adventure"]
};

const invalidMovie = {
  id: 0, // Invalid: below minimum
  title: "", // Invalid: empty string
  year: 2030, // Invalid: future year
  genre: "Educational", // Invalid: not in enum
  rating: 6, // Invalid: above maximum
  watched: "yes", // Invalid: not a boolean
  tags: 123 // Invalid: not an array
};

console.log("Valid movie test:");
console.log(validateMovie(validMovie));

console.log("\\nInvalid movie test:");
console.log(validateMovie(invalidMovie));

console.log("\\nParse and validate JSON string:");
const jsonInput = '{"id": 2, "title": "Array of Darkness", "year": 2022, "genre": "Horror", "rating": 4.5, "watched": false, "tags": ["arrays", "horror"]}';
console.log(parseAndValidate(jsonInput));`;

  const solutionCode = `// Exercise: Custom Movie Type System
// Create a sophisticated type validation system for a movie database

// This is a challenging exercise that requires you to create a custom type system
// to validate and transform movie data from various sources.

// Step 1: Define type validators for basic types
const validators = {
  // Implement string validator that checks if value is a string
  // and optionally validates min/max length
  string: function(value, options = {}) {
    if (typeof value !== 'string') {
      return { valid: false, error: \`Expected string, got \${typeof value}\` };
    }
    
    const { minLength, maxLength } = options;
    
    if (minLength !== undefined && value.length < minLength) {
      return { valid: false, error: \`String length must be at least \${minLength}\` };
    }
    
    if (maxLength !== undefined && value.length > maxLength) {
      return { valid: false, error: \`String length must not exceed \${maxLength}\` };
    }
    
    return { valid: true, value };
  },
  
  // Implement number validator that checks if value is a number
  // and optionally validates min/max values
  number: function(value, options = {}) {
    // Handle string conversion if needed
    if (typeof value === 'string') {
      const parsed = parseFloat(value);
      if (isNaN(parsed)) {
        return { valid: false, error: \`Cannot convert "\${value}" to a number\` };
      }
      value = parsed;
    }
    
    if (typeof value !== 'number' || isNaN(value)) {
      return { valid: false, error: \`Expected number, got \${typeof value}\` };
    }
    
    const { min, max } = options;
    
    if (min !== undefined && value < min) {
      return { valid: false, error: \`Number must be at least \${min}\` };
    }
    
    if (max !== undefined && value > max) {
      return { valid: false, error: \`Number must not exceed \${max}\` };
    }
    
    return { valid: true, value };
  },
  
  // Implement boolean validator
  boolean: function(value) {
    // Handle string conversion if needed
    if (typeof value === 'string') {
      if (value.toLowerCase() === 'true') return { valid: true, value: true };
      if (value.toLowerCase() === 'false') return { valid: true, value: false };
    }
    
    if (typeof value !== 'boolean') {
      return { valid: false, error: \`Expected boolean, got \${typeof value}\` };
    }
    
    return { valid: true, value };
  },
  
  // Implement array validator that checks if value is an array
  // and optionally validates each item using another validator
  array: function(value, itemValidator, options = {}) {
    if (!Array.isArray(value)) {
      return { valid: false, error: \`Expected array, got \${typeof value}\` };
    }
    
    const { minLength, maxLength } = options;
    
    if (minLength !== undefined && value.length < minLength) {
      return { valid: false, error: \`Array length must be at least \${minLength}\` };
    }
    
    if (maxLength !== undefined && value.length > maxLength) {
      return { valid: false, error: \`Array length must not exceed \${maxLength}\` };
    }
    
    if (itemValidator) {
      const validatedItems = [];
      const errors = [];
      
      for (let i = 0; i < value.length; i++) {
        const result = itemValidator(value[i]);
        if (result.valid) {
          validatedItems.push(result.value);
        } else {
          errors.push(\`Item at index \${i}: \${result.error}\`);
        }
      }
      
      if (errors.length > 0) {
        return { valid: false, error: errors.join(', ') };
      }
      
      return { valid: true, value: validatedItems };
    }
    
    return { valid: true, value };
  },
  
  // Implement enum validator that checks if value is one of the allowed values
  enum: function(value, allowedValues) {
    if (!allowedValues.includes(value)) {
      return { 
        valid: false, 
        error: \`Value must be one of: \${allowedValues.join(', ')}\` 
      };
    }
    
    return { valid: true, value };
  }
};

// Step 2: Define the movie schema using our validators
const movieSchema = {
  id: (value) => validators.number(value, { min: 1 }),
  title: (value) => validators.string(value, { minLength: 1, maxLength: 100 }),
  year: (value) => validators.number(value, { min: 1900, max: new Date().getFullYear() }),
  genre: (value) => validators.enum(value, [
    "Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Thriller", "Romance", "Fantasy", "Mystery"
  ]),
  rating: (value) => validators.number(value, { min: 0, max: 5 }),
  watched: (value) => validators.boolean(value),
  tags: (value) => validators.array(value, validators.string, { maxLength: 10 })
};

// Step 3: Implement the validateMovie function
// It should validate a movie object against the schema
// and return { valid: true, movie: validatedMovie } if valid
// or { valid: false, errors: [...] } if invalid
function validateMovie(movie) {
  if (typeof movie !== 'object' || movie === null) {
    return { valid: false, errors: ['Input must be an object'] };
  }
  
  const validatedMovie = {};
  const errors = [];
  
  // Validate each field according to the schema
  for (const [field, validator] of Object.entries(movieSchema)) {
    if (movie[field] === undefined) {
      errors.push(\`Missing required field: \${field}\`);
      continue;
    }
    
    const result = validator(movie[field]);
    
    if (result.valid) {
      validatedMovie[field] = result.value;
    } else {
      errors.push(\`\${field}: \${result.error}\`);
    }
  }
  
  if (errors.length > 0) {
    return { valid: false, errors };
  }
  
  return { valid: true, movie: validatedMovie };
}

// Step 4: Implement the parseAndValidate function
// It should handle different input formats (JSON string, form data object)
// and convert them to a validated movie object
function parseAndValidate(input) {
  let movieData;
  
  // Handle JSON string input
  if (typeof input === 'string') {
    try {
      movieData = JSON.parse(input);
    } catch (error) {
      return { valid: false, errors: [\`Invalid JSON: \${error.message}\`] };
    }
  } 
  // Handle FormData object
  else if (input instanceof FormData) {
    movieData = {};
    for (const [key, value] of input.entries()) {
      movieData[key] = value;
    }
  }
  // Handle plain object
  else if (typeof input === 'object' && input !== null) {
    movieData = input;
  }
  else {
    return { valid: false, errors: ['Input must be a JSON string, FormData, or object'] };
  }
  
  // Validate the parsed data
  return validateMovie(movieData);
}

// Test cases
const validMovie = {
  id: 1,
  title: "The JavaScript Adventure",
  year: 2023,
  genre: "Action",
  rating: 4.8,
  watched: true,
  tags: ["javascript", "adventure"]
};

const invalidMovie = {
  id: 0, // Invalid: below minimum
  title: "", // Invalid: empty string
  year: 2030, // Invalid: future year
  genre: "Educational", // Invalid: not in enum
  rating: 6, // Invalid: above maximum
  watched: "yes", // Invalid: not a boolean
  tags: 123 // Invalid: not an array
};

console.log("Valid movie test:");
console.log(validateMovie(validMovie));

console.log("\\nInvalid movie test:");
console.log(validateMovie(invalidMovie));

console.log("\\nParse and validate JSON string:");
const jsonInput = '{"id": 2, "title": "Array of Darkness", "year": 2022, "genre": "Horror", "rating": 4.5, "watched": false, "tags": ["arrays", "horror"]}';
console.log(parseAndValidate(jsonInput));`;

  const checkSolution = (code: string) => {
    try {
      // Check if the code contains the required elements
      const hasStringValidator =
        code.includes("string: function") &&
        code.includes("typeof value !== 'string'");

      const hasNumberValidator =
        code.includes("number: function") &&
        (code.includes("min !== undefined") ||
          code.includes("max !== undefined"));

      const hasBooleanValidator =
        code.includes("boolean: function") &&
        code.includes("typeof value !== 'boolean'");

      const hasArrayValidator =
        code.includes("array: function") &&
        code.includes("!Array.isArray(value)");

      const hasEnumValidator =
        code.includes("enum: function") &&
        code.includes("allowedValues.includes");

      const hasValidateMovie =
        code.includes("function validateMovie") &&
        code.includes("valid: true, movie:") &&
        code.includes("valid: false, errors:");

      const hasParseAndValidate =
        code.includes("function parseAndValidate") &&
        code.includes("JSON.parse");

      if (
        hasStringValidator &&
        hasNumberValidator &&
        hasBooleanValidator &&
        hasArrayValidator &&
        hasEnumValidator &&
        hasValidateMovie &&
        hasParseAndValidate
      ) {
        setResult({
          success: true,
          message:
            "Outstanding work! You've successfully implemented a sophisticated type validation system for movies.",
        });
      } else {
        const missingItems = [];
        if (!hasStringValidator) missingItems.push("complete string validator");
        if (!hasNumberValidator)
          missingItems.push("complete number validator with min/max checks");
        if (!hasBooleanValidator) missingItems.push("boolean validator");
        if (!hasArrayValidator) missingItems.push("array validator");
        if (!hasEnumValidator) missingItems.push("enum validator");
        if (!hasValidateMovie)
          missingItems.push("validateMovie function with proper return format");
        if (!hasParseAndValidate)
          missingItems.push("parseAndValidate function with JSON handling");

        setResult({
          success: false,
          message: `Your solution is missing: ${missingItems.join(", ")}`,
        });
      }
    } catch (error) {
      setResult({
        success: false,
        message: "There's an error in your code. Please check and try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link href="/exercises">
            <Button
              variant="outline"
              className="mr-4 border-gray-700 bg-black/50 text-white hover:bg-black/70"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Exercises
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Custom Movie Type System</h1>
            <div className="flex items-center mt-1">
              <div className="bg-green-600 px-2 py-0.5 rounded text-xs mr-2">
                Data Types
              </div>
              <div className="bg-red-900/20 border border-red-600 px-2 py-0.5 rounded text-xs flex items-center">
                <Trophy className="h-3 w-3 mr-1 text-red-500" />
                <span className="text-red-500">Extreme</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Exercise: Custom Movie Type System
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Instructions</h3>
                <p className="mb-4">
                  In this advanced exercise, you&apos;ll create a sophisticated
                  type validation system for a movie database. This will test
                  your understanding of JavaScript data types, type conversion,
                  and validation techniques.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Implement validators for different data types (string,
                    number, boolean, array, enum)
                  </li>
                  <li>Create a movie schema using these validators</li>
                  <li>
                    Build a function to validate movie objects against the
                    schema
                  </li>
                  <li>
                    Create a function to parse and validate different input
                    formats
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Code Editor</h3>
                <CodeEditor initialCode={initialCode} onCheck={checkSolution} />
              </div>

              {result && (
                <Alert
                  className={
                    result.success
                      ? "bg-green-900/20 border-green-600"
                      : "bg-red-900/20 border-red-600"
                  }
                >
                  {result.success ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <X className="h-4 w-4 text-red-500" />
                  )}
                  <AlertTitle>
                    {result.success ? "Success!" : "Not quite right"}
                  </AlertTitle>
                  <AlertDescription>{result.message}</AlertDescription>
                </Alert>
              )}
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <Tabs defaultValue="hint" className="mb-6">
                <TabsList className="bg-gray-950 border-gray-800">
                  <TabsTrigger
                    value="hint"
                    className="data-[state=active]:bg-blue-600"
                  >
                    Hint
                  </TabsTrigger>
                  <TabsTrigger
                    value="solution"
                    className="data-[state=active]:bg-green-600"
                  >
                    Solution
                  </TabsTrigger>
                  <TabsTrigger
                    value="explanation"
                    className="data-[state=active]:bg-purple-600"
                  >
                    Explanation
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="hint" className="mt-4">
                  <div className="p-4 bg-blue-900/20 border border-blue-600 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Lightbulb className="h-5 w-5 text-blue-500 mr-2" />
                      <h3 className="font-semibold text-blue-500">Hints</h3>
                    </div>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        For each validator, first check if the value is of the
                        expected type using{" "}
                        <code className="bg-gray-950 px-1 rounded">
                          &#123; valid: true, value &#125;
                        </code>{" "}
                        or{" "}
                        <code className="bg-gray-950 px-1 rounded">
                          &#123; valid: false, error &#125;
                        </code>
                      </li>
                      <li>
                        For each validator, first check if the value is of the
                        expected type using{" "}
                        <code className="bg-gray-950 px-1 rounded">typeof</code>{" "}
                        or{" "}
                        <code className="bg-gray-950 px-1 rounded">
                          Array.isArray()
                        </code>
                      </li>
                      <li>
                        For the boolean validator, consider handling string
                        inputs like &quot;true&quot; and &quot;false&quot;
                      </li>
                      <li>
                        In the array validator, use recursion to validate each
                        item if an item validator is provided
                      </li>
                      <li>
                        For{" "}
                        <code className="bg-gray-950 px-1 rounded">
                          parseAndValidate
                        </code>
                        , use{" "}
                        <code className="bg-gray-950 px-1 rounded">
                          try/catch
                        </code>{" "}
                        when parsing JSON to handle invalid input
                      </li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="solution" className="mt-4">
                  <div className="p-4 bg-green-900/20 border border-green-600 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <h3 className="font-semibold text-green-500">Solution</h3>
                    </div>
                    <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{solutionCode}</code>
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="explanation" className="mt-4">
                  <div className="p-4 bg-purple-900/20 border border-purple-600 rounded-lg">
                    <h3 className="font-semibold text-purple-500 mb-2">
                      Explanation
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-1">1. Type Validators</h4>
                        <p className="text-sm">
                          Each validator follows a consistent pattern: check if
                          the value is of the expected type, apply additional
                          validation rules if needed, and return a result object
                          with{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            valid
                          </code>{" "}
                          flag and either the validated{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            value
                          </code>{" "}
                          or an{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            error
                          </code>{" "}
                          message.
                        </p>
                        <p className="text-sm mt-2">
                          The string validator checks for string type and
                          optional length constraints. The number validator
                          handles type conversion from strings and validates
                          min/max values. The boolean validator supports
                          conversion from string
                          &quot;true&quot;/&quot;false&quot;. The array
                          validator checks each item using a provided validator.
                          The enum validator ensures the value is one of the
                          allowed options.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">2. Movie Schema</h4>
                        <p className="text-sm">
                          The schema defines the structure of a valid movie
                          object by mapping each field to a validator function.
                          This declarative approach makes it easy to understand
                          and modify the validation rules.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          3. Validation Function
                        </h4>
                        <p className="text-sm">
                          The{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            validateMovie
                          </code>{" "}
                          function applies each validator from the schema to the
                          corresponding field in the input object. It collects
                          all validation errors and returns either a valid movie
                          object or a list of errors.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          4. Parse and Validate
                        </h4>
                        <p className="text-sm">
                          The{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            parseAndValidate
                          </code>{" "}
                          function handles different input formats (JSON string,
                          FormData, or plain object) and converts them to a
                          movie object before validation. This makes the system
                          more flexible and user-friendly.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          5. Advanced Concepts Used
                        </h4>
                        <p className="text-sm">
                          This solution demonstrates several advanced JavaScript
                          concepts: type checking and conversion, functional
                          programming patterns, error handling, and creating a
                          declarative validation system. It&apos;s similar to
                          how production-grade validation libraries like Joi,
                          Yup, or Zod work.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-20">
              <h2 className="text-xl font-bold mb-4">Data Types Reference</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-green-500">
                    Type Checking
                  </h3>
                  <p className="text-sm text-gray-400">
                    Methods to determine data types in JavaScript.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`// Basic type checking
typeof value === 'string'
typeof value === 'number'
typeof value === 'boolean'
typeof value === 'object'

// Array checking
Array.isArray(value)

// Null checking
value === null`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-500">
                    Type Conversion
                  </h3>
                  <p className="text-sm text-gray-400">
                    Converting between different data types.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`// String to number
Number(str)
parseInt(str, 10)
parseFloat(str)

// To string
String(value)
value.toString()

// To boolean
Boolean(value)

// JSON parsing
JSON.parse(str)
JSON.stringify(obj)`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-purple-500">
                    Validation Patterns
                  </h3>
                  <p className="text-sm text-gray-400">
                    Common patterns for data validation.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`// Range validation
value >= min && value <= max

// String validation
str.length >= minLength

// Required fields
if (field === undefined) {
  // Error: missing required field
}

// Try-catch for parsing
try {
  const data = JSON.parse(str);
} catch (error) {
  // Handle parsing error
}`}</code>
                  </pre>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Related Concepts</h3>
                  <div className="flex flex-col space-y-2 mt-2">
                    <Link href="/learn/data-types">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start border-gray-700 hover:border-green-600"
                      >
                        JavaScript Data Types
                      </Button>
                    </Link>
                    <Link href="/learn/type-conversion">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start border-gray-700 hover:border-blue-600"
                      >
                        Type Conversion
                      </Button>
                    </Link>
                    <Link href="/learn/error-handling">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start border-gray-700 hover:border-red-600"
                      >
                        Error Handling
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <Link href="/learn/data-types">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Review Data Types Lesson
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
