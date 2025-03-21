import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CodeExample from "@/components/code-example";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InteractiveExercise from "@/components/interactive-exercise";
import SyntaxHighlighter from "@/components/syntax-highlighter";

export default function DataTypesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link href="/learn">
            <Button
              variant="outline"
              className="mr-4 border-gray-700 bg-black/50 text-white hover:bg-black/70"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Learning Center
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">JavaScript Data Types</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Understanding Data Types
              </h2>
              <p className="mb-4">
                JavaScript has several built-in data types that are crucial for
                working with different kinds of values. These data types can be
                categorized into primitive and reference types.
              </p>

              <Tabs defaultValue="primitive" className="mb-6">
                <TabsList className="bg-gray-950 border-gray-800">
                  <TabsTrigger
                    value="primitive"
                    className="data-[state=active]:bg-green-600"
                  >
                    Primitive Types
                  </TabsTrigger>
                  <TabsTrigger
                    value="reference"
                    className="data-[state=active]:bg-green-600"
                  >
                    Reference Types
                  </TabsTrigger>
                  <TabsTrigger
                    value="special"
                    className="data-[state=active]:bg-green-600"
                  >
                    Special Types
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="primitive" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Primitive Data Types
                  </h3>
                  <p className="mb-4">
                    Primitive data types are basic types that store simple
                    values. They are immutable, meaning their values cannot be
                    changed once created.
                  </p>
                  <CodeExample
                    code={`// String - represents text
const movieTitle = "The JavaScript Adventure";
console.log(typeof movieTitle); // "string"

// Number - represents numeric values
const rating = 4.8;
console.log(typeof rating); // "number"

// Boolean - represents true or false
const isReleased = true;
console.log(typeof isReleased); // "boolean"

// BigInt - represents integers with arbitrary precision
const boxOffice = 9007199254740991n; // Note the 'n' at the end
console.log(typeof boxOffice); // "bigint"

// Symbol - represents a unique identifier
const movieSymbol = Symbol("movie-id");
console.log(typeof movieSymbol); // "symbol"`}
                  />
                </TabsContent>

                <TabsContent value="reference" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Reference Data Types
                  </h3>
                  <p className="mb-4">
                    Reference data types store complex values and are mutable.
                    They don&apos;t store the value directly but rather a
                    reference to where the value is stored in memory.
                  </p>
                  <CodeExample
                    code={`// Object - represents a collection of related data
const movie = {
  title: "The JavaScript Adventure",
  year: 2023,
  rating: 4.8,
  genres: ["Action", "Adventure"]
};
console.log(typeof movie); // "object"

// Array - represents an ordered list of values
const cast = ["Dev Developer", "Sara Script", "Tom TypeScript"];
console.log(typeof cast); // "object" (arrays are objects in JavaScript)
console.log(Array.isArray(cast)); // true

// Function - represents a reusable block of code
function getMovieInfo(title) {
  return \`Movie: \${title}\`;
}
console.log(typeof getMovieInfo); // "function"

// Date - represents dates and times
const releaseDate = new Date(2023, 0, 15); // January 15, 2023
console.log(typeof releaseDate); // "object"`}
                  />
                </TabsContent>

                <TabsContent value="special" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Special Data Types
                  </h3>
                  <p className="mb-4">
                    JavaScript has two special data types that represent the
                    absence of a value.
                  </p>
                  <CodeExample
                    code={`// null - represents the intentional absence of any object value
let director = null; // We don't know the director yet
console.log(typeof director); // "object" (this is a known JavaScript quirk)

// undefined - represents a variable that has been declared but not assigned a value
let producer;
console.log(producer); // undefined
console.log(typeof producer); // "undefined"

// The difference between null and undefined
console.log(null === undefined); // false
console.log(null == undefined); // true (loose equality)`}
                  />
                </TabsContent>
              </Tabs>

              <h3 className="text-xl font-semibold mb-2">
                Type Coercion and Conversion
              </h3>
              <p className="mb-4">
                JavaScript is a dynamically typed language, which means
                variables can change types. It also performs automatic type
                conversion (coercion) in certain situations.
              </p>
              <CodeExample
                code={`// Explicit type conversion
const ratingString = "4.8";
const ratingNumber = Number(ratingString);
console.log(ratingNumber); // 4.8
console.log(typeof ratingNumber); // "number"

// String conversion
const year = 2023;
const yearString = String(year);
console.log(yearString); // "2023"
console.log(typeof yearString); // "string"

// Boolean conversion
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true

// Implicit type coercion
console.log("5" + 3); // "53" (number is converted to string)
console.log("5" - 3); // 2 (string is converted to number)
console.log("5" * "3"); // 15 (both strings are converted to numbers)`}
              />
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Data Types in Action: Movie Example
              </h2>
              <p className="mb-4">
                Let&apos;s see how different data types are used in a movie
                database context:
              </p>

              <CodeExample
                code={`// Creating a movie database using various data types
// Movie object with different data types
const movie = {
  id: 1, // Number
  title: "The JavaScript Adventure", // String
  releaseYear: 2023, // Number
  isReleased: true, // Boolean
  rating: 4.8, // Number
  director: "Code Master", // String
  cast: ["Dev Developer", "Sara Script", "Tom TypeScript"], // Array of Strings
  genres: ["Action", "Adventure"], // Array of Strings
  releaseDate: new Date(2023, 0, 15), // Date object
  boxOffice: 1234567890n, // BigInt
  description: "A thrilling journey through the world of JavaScript.", // String
  
  // Method (Function)
  getInfo: function() {
    return \`\${this.title} (\${this.releaseYear}) - Rating: \${this.rating}/5\`;
  }
};

// Accessing and using the movie data
console.log(movie.title); // "The JavaScript Adventure"
console.log(movie.getInfo()); // "The JavaScript Adventure (2023) - Rating: 4.8/5"

// Working with arrays
console.log(movie.cast.length); // 3
console.log(movie.cast[0]); // "Dev Developer"
movie.cast.push("Jake JavaScript"); // Add a new cast member
console.log(movie.cast); // ["Dev Developer", "Sara Script", "Tom TypeScript", "Jake JavaScript"]

// Working with dates
const releaseYear = movie.releaseDate.getFullYear();
const releaseMonth = movie.releaseDate.toLocaleString('default', { month: 'long' });
console.log(\`Released in \${releaseMonth} \${releaseYear}\`); // "Released in January 2023"

// Type checking
console.log(typeof movie.rating); // "number"
console.log(Array.isArray(movie.genres)); // true
console.log(movie.releaseDate instanceof Date); // true`}
              />
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Interactive Exercise</h2>
              <p className="mb-4">
                Try the exercise below to test your understanding of JavaScript
                data types:
              </p>

              <InteractiveExercise
                instructions="Fix the code below to correctly identify and use different data types for a movie database."
                initialCode={`// TODO: Fix the data types in this movie object
const movie = {
  id: "1", // This should be a number
  title: 123, // This should be a string
  releaseYear: "2023", // This should be a number
  isAvailable: "yes", // This should be a boolean
  rating: "4.5", // This should be a number
  genres: "Action, Adventure", // This should be an array
  cast: { lead: "Dev Developer" } // This should be an array
};

// TODO: Fix the type conversion and operations
let totalRatings = 100;
let averageRating = "4.5";
let totalScore = totalRatings * averageRating; // This should calculate correctly

// TODO: Fix the type checking
function displayMovieInfo(movieObj) {
  if (typeof movieObj.id === "string") {
    console.log("ID: " + movieObj.id);
  }
  
  if (movieObj.genres.includes("Action")) {
    console.log("This is an action movie!");
  }
  
  if (movieObj.isAvailable) {
    console.log("This movie is available to watch!");
  }
}

// Test the function
displayMovieInfo(movie);
console.log("Total score from all ratings: " + totalScore);`}
                solution={`// Fixed data types in the movie object
const movie = {
  id: 1, // Changed to number
  title: "123", // Changed to string
  releaseYear: 2023, // Changed to number
  isAvailable: true, // Changed to boolean
  rating: 4.5, // Changed to number
  genres: ["Action", "Adventure"], // Changed to array
  cast: ["Dev Developer"] // Changed to array
};

// Fixed type conversion and operations
let totalRatings = 100;
let averageRating = 4.5; // Changed to number
let totalScore = totalRatings * averageRating; // Now calculates correctly

// Fixed type checking
function displayMovieInfo(movieObj) {
  if (typeof movieObj.id === "number") { // Fixed type check
    console.log("ID: " + movieObj.id);
  }
  
  if (Array.isArray(movieObj.genres) && movieObj.genres.includes("Action")) { // Fixed array check
    console.log("This is an action movie!");
  }
  
  if (movieObj.isAvailable === true) { // Explicit boolean check
    console.log("This movie is available to watch!");
  }
}

// Test the function
displayMovieInfo(movie);
console.log("Total score from all ratings: " + totalScore);`}
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-20">
              <h2 className="text-xl font-bold mb-4">Quick Reference</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-green-500">
                    Primitive Types
                  </h3>
                  <p className="text-sm text-gray-400">
                    Basic data types that store simple values.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter code="string, number, boolean, bigint, symbol, undefined, null" />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-500">
                    Reference Types
                  </h3>
                  <p className="text-sm text-gray-400">
                    Complex data types that store references.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter code="object, array, function, date, map, set" />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-yellow-500">
                    Type Checking
                  </h3>
                  <p className="text-sm text-gray-400">
                    Ways to check data types in JavaScript.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`typeof value
Array.isArray(value)
value instanceof Constructor`}
                    />
                  </pre>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Common Mistakes</h3>
                  <ul className="text-sm text-gray-400 list-disc pl-4 space-y-1 mt-2">
                    <li>
                      Forgetting that typeof null returns &quot;object&quot;
                    </li>
                    <li>Not checking if a value is an array</li>
                    <li>Unexpected type coercion in comparisons</li>
                    <li>Using == instead of === for equality checks</li>
                  </ul>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Related Concepts</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Link href="/learn/variables">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Variables
                      </Button>
                    </Link>
                    <Link href="/learn/type-conversion">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Type Conversion
                      </Button>
                    </Link>
                    <Link href="/learn/objects">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Objects
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <div className="flex justify-between">
                  <Link href="/learn/variables">
                    <Button variant="link" className="text-red-600 p-0">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Variables
                    </Button>
                  </Link>
                  <Link href="/learn/conditions">
                    <Button variant="link" className="text-red-600 p-0">
                      Conditions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <Link href="/exercises/data-types/easy">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Practice with Exercises
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
