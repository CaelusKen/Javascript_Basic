/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { ArrowLeft, Lightbulb, Check, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeEditor from "@/components/code-editor";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ErrorHandlingEasyExercise() {
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const initialCode = `// Movie Validator Exercise
// This exercise will test your understanding of error handling in JavaScript

// Simulated movie database
const movieDatabase = [
  { id: 1, title: "The JavaScript Adventure", year: 2023, genre: "Action", rating: 4.8 },
  { id: 2, title: "Array of Darkness", year: 2022, genre: "Horror", rating: 4.5 },
  { id: 3, title: "Promise Me Forever", year: 2023, genre: "Romance", rating: 4.2 }
];

// TODO: Create a custom MovieValidationError class
// It should extend Error and include a code property

// TODO: Implement the validateMovie function
// It should validate a movie object and throw appropriate errors
function validateMovie(movie) {
  // Your code here
  // Check if movie exists
  // Check if title is a string and not empty
  // Check if year is a number between 1900 and current year
  // Check if genre is a string and not empty
  // Check if rating is a number between 0 and 5
}

// TODO: Implement the addMovie function
// It should validate the movie and add it to the database if valid
function addMovie(movie) {
  // Your code here
}

// TODO: Implement the tryAddMovie function
// It should use try/catch to handle errors when adding a movie
function tryAddMovie(movie) {
  // Your code here
}

// Test cases
console.log("Starting movie validation tests...");

// Valid movie
const validMovie = {
  id: 4,
  title: "The DOM Chronicles",
  year: 2021,
  genre: "Fantasy",
  rating: 4.0
};

// Invalid movies
const movieWithoutTitle = { id: 5, year: 2023, genre: "Sci-Fi", rating: 4.7 };
const movieWithInvalidYear = { id: 6, title: "Future Movie", year: 2030, genre: "Sci-Fi", rating: 4.7 };
const movieWithInvalidRating = { id: 7, title: "Overrated", year: 2022, genre: "Comedy", rating: 6.5 };

// Test with valid movie
console.log("Testing with valid movie:");
tryAddMovie(validMovie);

// Test with invalid movies
console.log("\\nTesting with movie without title:");
tryAddMovie(movieWithoutTitle);

console.log("\\nTesting with movie with invalid year:");
tryAddMovie(movieWithInvalidYear);

console.log("\\nTesting with movie with invalid rating:");
tryAddMovie(movieWithInvalidRating);

// Check the database
console.log("\\nFinal movie database:");
console.log(movieDatabase);`;

  const solutionCode = `// Movie Validator Exercise
// This exercise will test your understanding of error handling in JavaScript

// Simulated movie database
const movieDatabase = [
  { id: 1, title: "The JavaScript Adventure", year: 2023, genre: "Action", rating: 4.8 },
  { id: 2, title: "Array of Darkness", year: 2022, genre: "Horror", rating: 4.5 },
  { id: 3, title: "Promise Me Forever", year: 2023, genre: "Romance", rating: 4.2 }
];

// Created a custom MovieValidationError class
class MovieValidationError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "MovieValidationError";
    this.code = code;
  }
}

// Implemented the validateMovie function
function validateMovie(movie) {
  // Check if movie exists
  if (!movie) {
    throw new MovieValidationError("Movie object is required", "MISSING_MOVIE");
  }
  
  // Check if title is a string and not empty
  if (!movie.title || typeof movie.title !== "string") {
    throw new MovieValidationError("Movie title is required and must be a string", "INVALID_TITLE");
  }
  
  // Check if year is a number between 1900 and current year
  const currentYear = new Date().getFullYear();
  if (!movie.year || typeof movie.year !== "number" || movie.year < 1900 || movie.year > currentYear) {
    throw new MovieValidationError(
      \`Movie year must be a number between 1900 and \${currentYear}\`, 
      "INVALID_YEAR"
    );
  }
  
  // Check if genre is a string and not empty
  if (!movie.genre || typeof movie.genre !== "string") {
    throw new MovieValidationError("Movie genre is required and must be a string", "INVALID_GENRE");
  }
  
  // Check if rating is a number between 0 and 5
  if (movie.rating === undefined || typeof movie.rating !== "number" || movie.rating < 0 || movie.rating > 5) {
    throw new MovieValidationError("Movie rating must be a number between 0 and 5", "INVALID_RATING");
  }
  
  // If we get here, the movie is valid
  return true;
}

// Implemented the addMovie function
function addMovie(movie) {
  // Validate the movie
  validateMovie(movie);
  
  // Check if movie with this ID already exists
  const existingMovie = movieDatabase.find(m => m.id === movie.id);
  if (existingMovie) {
    throw new MovieValidationError(\`Movie with ID \${movie.id} already exists\`, "DUPLICATE_ID");
  }
  
  // Add the movie to the database
  movieDatabase.push({ ...movie });
  
  return { success: true, message: \`Movie "\${movie.title}" added successfully\` };
}

// Implemented the tryAddMovie function
function tryAddMovie(movie) {
  try {
    // Try to add the movie
    const result = addMovie(movie);
    console.log(\`Success: \${result.message}\`);
    return true;
  } catch (error) {
    // Handle different types of errors
    if (error instanceof MovieValidationError) {
      console.error(\`Validation Error (\${error.code}): \${error.message}\`);
    } else {
      console.error(\`Unexpected Error: \${error.message}\`);
    }
    return false;
  }
}

// Test cases
console.log("Starting movie validation tests...");

// Valid movie
const validMovie = {
  id: 4,
  title: "The DOM Chronicles",
  year: 2021,
  genre: "Fantasy",
  rating: 4.0
};

// Invalid movies
const movieWithoutTitle = { id: 5, year: 2023, genre: "Sci-Fi", rating: 4.7 };
const movieWithInvalidYear = { id: 6, title: "Future Movie", year: 2030, genre: "Sci-Fi", rating: 4.7 };
const movieWithInvalidRating = { id: 7, title: "Overrated", year: 2022, genre: "Comedy", rating: 6.5 };

// Test with valid movie
console.log("Testing with valid movie:");
tryAddMovie(validMovie);

// Test with invalid movies
console.log("\\nTesting with movie without title:");
tryAddMovie(movieWithoutTitle);

console.log("\\nTesting with movie with invalid year:");
tryAddMovie(movieWithInvalidYear);

console.log("\\nTesting with movie with invalid rating:");
tryAddMovie(movieWithInvalidRating);

// Check the database
console.log("\\nFinal movie database:");
console.log(movieDatabase);`;

  const checkSolution = (code: string) => {
    try {
      // Check if the code contains the required elements
      const hasCustomErrorClass =
        code.includes("class MovieValidationError extends Error") &&
        code.includes("this.code = code");

      const hasValidateMovie =
        code.includes("function validateMovie") &&
        code.includes("throw new MovieValidationError");

      const hasAddMovie =
        code.includes("function addMovie") &&
        code.includes("validateMovie(movie)");

      const hasTryAddMovie =
        code.includes("function tryAddMovie") &&
        code.includes("try") &&
        code.includes("catch") &&
        code.includes("instanceof MovieValidationError");

      if (
        hasCustomErrorClass &&
        hasValidateMovie &&
        hasAddMovie &&
        hasTryAddMovie
      ) {
        setResult({
          success: true,
          message:
            "Great job! You've successfully implemented error handling for the movie validation system.",
        });
      } else {
        const missingItems = [];
        if (!hasCustomErrorClass)
          missingItems.push(
            "custom MovieValidationError class with code property"
          );
        if (!hasValidateMovie)
          missingItems.push(
            "validateMovie function with proper validation checks"
          );
        if (!hasAddMovie)
          missingItems.push("addMovie function that validates and adds movies");
        if (!hasTryAddMovie)
          missingItems.push(
            "tryAddMovie function with try/catch and error type checking"
          );

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
            <h1 className="text-3xl font-bold">Movie Validator</h1>
            <div className="flex items-center mt-1">
              <div className="bg-red-600 px-2 py-0.5 rounded text-xs mr-2">
                Error Handling
              </div>
              <div className="bg-green-900/20 border border-green-600 px-2 py-0.5 rounded text-xs flex items-center">
                <Check className="h-3 w-3 mr-1 text-green-500" />
                <span className="text-green-500">Easy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Exercise: Movie Validator
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Instructions</h3>
                <p className="mb-4">
                  In this exercise, you'll practice error handling in JavaScript
                  by implementing a movie validation system.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Create a custom{" "}
                    <code className="bg-gray-950 px-1 rounded">
                      MovieValidationError
                    </code>{" "}
                    class that extends Error
                  </li>
                  <li>
                    Implement the{" "}
                    <code className="bg-gray-950 px-1 rounded">
                      validateMovie
                    </code>{" "}
                    function to validate movie properties
                  </li>
                  <li>
                    Implement the{" "}
                    <code className="bg-gray-950 px-1 rounded">addMovie</code>{" "}
                    function to add valid movies to the database
                  </li>
                  <li>
                    Implement the{" "}
                    <code className="bg-gray-950 px-1 rounded">
                      tryAddMovie
                    </code>{" "}
                    function with proper error handling
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
                        For the custom error class, extend the built-in Error
                        class and add a code property in the constructor
                      </li>
                      <li>
                        In the validateMovie function, check each property of
                        the movie object and throw a specific error with an
                        appropriate code if validation fails
                      </li>
                      <li>
                        In the addMovie function, call validateMovie first, then
                        check for duplicate IDs before adding the movie
                      </li>
                      <li>
                        In the tryAddMovie function, use try/catch to handle
                        errors and check the error type using instanceof
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
                        <h4 className="font-medium mb-1">
                          1. Custom Error Class
                        </h4>
                        <p className="text-sm">
                          The{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            MovieValidationError
                          </code>{" "}
                          class extends the built-in Error class to create a
                          specialized error type for movie validation. By adding
                          a code property, we can provide more specific
                          information about what went wrong, which is useful for
                          error handling and debugging.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          2. Validation Function
                        </h4>
                        <p className="text-sm">
                          The{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            validateMovie
                          </code>{" "}
                          function checks each property of the movie object
                          against specific criteria. If any validation fails, it
                          throws a{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            MovieValidationError
                          </code>{" "}
                          with a descriptive message and a specific error code.
                          This approach allows for detailed error reporting.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          3. Add Movie Function
                        </h4>
                        <p className="text-sm">
                          The{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            addMovie
                          </code>{" "}
                          function first validates the movie using the{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            validateMovie
                          </code>{" "}
                          function. If validation passes, it checks for
                          duplicate IDs before adding the movie to the database.
                          This demonstrates the principle of "fail fast" -
                          checking for errors early in the process.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          4. Error Handling Function
                        </h4>
                        <p className="text-sm">
                          The{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            tryAddMovie
                          </code>{" "}
                          function uses a try/catch block to handle any errors
                          that might occur when adding a movie. It checks the
                          type of the error using{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            instanceof
                          </code>{" "}
                          to provide different handling for validation errors
                          versus other types of errors. This pattern allows for
                          graceful error handling without crashing the
                          application.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          5. Error Handling Best Practices
                        </h4>
                        <p className="text-sm">
                          This solution demonstrates several error handling best
                          practices:
                          <ul className="list-disc pl-6 mt-1">
                            <li>
                              Using custom error classes for specific error
                              types
                            </li>
                            <li>
                              Including error codes for programmatic error
                              handling
                            </li>
                            <li>Providing descriptive error messages</li>
                            <li>
                              Checking error types to handle different errors
                              differently
                            </li>
                            <li>
                              Using try/catch blocks to prevent application
                              crashes
                            </li>
                          </ul>
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
              <h2 className="text-xl font-bold mb-4">
                Error Handling Reference
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-red-500">Try/Catch</h3>
                  <p className="text-sm text-gray-400">
                    Basic error handling structure.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`try {
  // Code that might throw an error
  riskyOperation();
} catch (error) {
  // Handle the error
  console.error(error);
} finally {
  // Always runs
  cleanup();
}`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-red-500">Custom Errors</h3>
                  <p className="text-sm text-gray-400">
                    Creating application-specific errors.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`class MyError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "MyError";
    this.code = code;
  }
}

throw new MyError("Error message", "ERROR_CODE");`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-red-500">Error Checking</h3>
                  <p className="text-sm text-gray-400">Checking error types.</p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`try {
  // Code that might throw
} catch (error) {
  if (error instanceof TypeError) {
    // Handle type errors
  } else if (error instanceof MyError) {
    // Handle custom errors
  } else {
    // Handle other errors
  }
}`}</code>
                  </pre>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Best Practices</h3>
                  <ul className="text-sm text-gray-400 list-disc pl-4 space-y-1 mt-2">
                    <li>Be specific with error types</li>
                    <li>Provide meaningful error messages</li>
                    <li>Include error codes for programmatic handling</li>
                    <li>Don't swallow errors without handling</li>
                    <li>Log errors for debugging</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <Link href="/learn/error-handling">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Review Error Handling Lesson
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
