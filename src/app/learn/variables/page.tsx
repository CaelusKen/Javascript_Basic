import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CodeExample from "@/components/code-example";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InteractiveExercise from "@/components/interactive-exercise";
import SyntaxHighlighter from "@/components/syntax-highlighter";

export default function VariablesPage() {
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
          <h1 className="text-3xl font-bold">JavaScript Variables</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">What are Variables?</h2>
              <p className="mb-4">
                Variables are containers for storing data values. In JavaScript,
                there are three ways to declare variables:
              </p>

              <Tabs defaultValue="let" className="mb-6">
                <TabsList className="bg-gray-950 border-gray-800">
                  <TabsTrigger
                    value="let"
                    className="data-[state=active]:bg-blue-600"
                  >
                    let
                  </TabsTrigger>
                  <TabsTrigger
                    value="const"
                    className="data-[state=active]:bg-blue-600"
                  >
                    const
                  </TabsTrigger>
                  <TabsTrigger
                    value="var"
                    className="data-[state=active]:bg-blue-600"
                  >
                    var
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="let" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">let</h3>
                  <p className="mb-4">
                    The <code className="bg-gray-950 px-1 rounded">let</code>{" "}
                    keyword was introduced in ES6 (2015). Variables declared
                    with <code className="bg-gray-950 px-1 rounded">let</code>{" "}
                    can be reassigned but cannot be redeclared in the same
                    scope. They are block-scoped, meaning they only exist within
                    the block they are defined in.
                  </p>
                  <CodeExample
                    code={`// Declaring a variable with let
let movieTitle = "The JavaScript Adventure";

// We can change the value
movieTitle = "Array of Darkness";
console.log(movieTitle); // "Array of Darkness"

// Block scope example
{
  let movieYear = 2023;
  console.log(movieYear); // 2023
}
// console.log(movieYear); // Error: movieYear is not defined`}
                  />
                </TabsContent>

                <TabsContent value="const" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">const</h3>
                  <p className="mb-4">
                    The <code className="bg-gray-950 px-1 rounded">const</code>{" "}
                    keyword was also introduced in ES6. Variables declared with{" "}
                    <code className="bg-gray-950 px-1 rounded">const</code>{" "}
                    cannot be reassigned or redeclared. They are also
                    block-scoped like{" "}
                    <code className="bg-gray-950 px-1 rounded">let</code>.
                  </p>
                  <CodeExample
                    code={`// Declaring a constant
const RATING_MAX = 5;

// This will cause an error
// RATING_MAX = 10; // TypeError: Assignment to constant variable

// However, for objects and arrays, the content can be modified
const movie = {
  title: "The JavaScript Adventure",
  year: 2023
};

// This is allowed
movie.year = 2024;
console.log(movie); // { title: "The JavaScript Adventure", year: 2024 }

// But this is not allowed
// movie = { title: "New Movie" }; // TypeError: Assignment to constant variable`}
                  />
                </TabsContent>

                <TabsContent value="var" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">var</h3>
                  <p className="mb-4">
                    The <code className="bg-gray-950 px-1 rounded">var</code>{" "}
                    keyword is the old way of declaring variables before ES6.
                    Variables declared with{" "}
                    <code className="bg-gray-950 px-1 rounded">var</code> can be
                    reassigned and redeclared. They are function-scoped, not
                    block-scoped, which can lead to unexpected behavior.
                  </p>
                  <CodeExample
                    code={`// Declaring a variable with var
var director = "Code Master";

// We can redeclare it (this is not possible with let)
var director = "Loop Walker";
console.log(director); // "Loop Walker"

// Function vs block scope
function showMovieInfo() {
  var title = "The JavaScript Adventure";
  if (true) {
    var year = 2023; // This exists throughout the function
  }
  console.log(title); // "The JavaScript Adventure"
  console.log(year);  // 2023
}

showMovieInfo();
// console.log(title); // Error: title is not defined`}
                  />
                </TabsContent>
              </Tabs>

              <h3 className="text-xl font-semibold mb-2">
                When to Use Each Type
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <strong>const:</strong> Use for values that should not change
                  (default choice for most variables)
                </li>
                <li>
                  <strong>let:</strong> Use for values that need to be
                  reassigned
                </li>
                <li>
                  <strong>var:</strong> Generally avoid in modern JavaScript
                  (use let or const instead)
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">
                Variable Naming Rules
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Names can contain letters, digits, underscores, and dollar
                  signs
                </li>
                <li>Names must begin with a letter, $ or _</li>
                <li>Names are case sensitive (y and Y are different)</li>
                <li>
                  Reserved words (like JavaScript keywords) cannot be used as
                  names
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Variables in Action: Movie Example
              </h2>
              <p className="mb-4">
                Let&apos;s see how variables are used in a movie database
                context:
              </p>

              <CodeExample
                code={`// Movie information using different variable types
const MOVIE_ID = 1; // Constant ID that shouldn't change
let viewCount = 0; // View count that will change
var isAvailable = true; // Availability flag (using var for demonstration)

// Incrementing the view count when someone watches the movie
function watchMovie() {
  viewCount += 1;
  console.log(\`Movie #\${MOVIE_ID} has been watched \${viewCount} time(s)\`);
  
  // Check if we need to update availability based on licensing
  if (viewCount > 1000) {
    isAvailable = false;
    console.log("Movie is no longer available due to licensing restrictions");
  }
}

// Call the function multiple times
watchMovie(); // "Movie #1 has been watched 1 time(s)"
watchMovie(); // "Movie #1 has been watched 2 time(s)"

// Movie object with multiple properties
const movie = {
  id: MOVIE_ID,
  title: "The JavaScript Adventure",
  year: 2023,
  rating: 4.8,
  cast: ["Dev Developer", "Sara Script", "Tom TypeScript"]
};

// We can modify properties of the constant object
movie.rating = 4.9;
console.log(movie.rating); // 4.9

// But we cannot reassign the entire object
// movie = { id: 2, title: "New Movie" }; // Error!`}
              />
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Interactive Exercise</h2>
              <p className="mb-4">
                Try the exercise below to test your understanding of JavaScript
                variables:
              </p>

              <InteractiveExercise
                instructions="Fix the code below to correctly track movie ratings using variables."
                initialCode={`// TODO: Fix the variable declarations and values
rating = 4.5; // Initial rating

// Function to update the rating
function updateRating(newRating) {
  // TODO: Make sure we can update the rating
  rating = newRating;
  console.log("Rating updated to: " + rating);
}

// Constants for rating limits
MIN_RATING = 1;
MAX_RATING = 5;

// TODO: Fix this validation function
function validateRating(rating) {
  if (rating < MIN_RATING || rating > MAX_RATING) {
    return false;
  }
  return true;
}

// Test the code
updateRating(4.8);
console.log("Is rating valid?", validateRating(4.8));
MIN_RATING = 0; // Should this work?`}
                solution={`// Fixed variable declarations
let rating = 4.5; // Initial rating - using let since it needs to be updated

// Function to update the rating
function updateRating(newRating) {
  // Now we can update the rating since it's declared with let
  rating = newRating;
  console.log("Rating updated to: " + rating);
}

// Constants for rating limits - using const since these shouldn't change
const MIN_RATING = 1;
const MAX_RATING = 5;

// Fixed validation function
function validateRating(rating) {
  if (rating < MIN_RATING || rating > MAX_RATING) {
    return false;
  }
  return true;
}

// Test the code
updateRating(4.8);
console.log("Is rating valid?", validateRating(4.8));
// MIN_RATING = 0; // This would cause an error since MIN_RATING is a constant`}
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-20">
              <h2 className="text-xl font-bold mb-4">Quick Reference</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-500">let</h3>
                  <p className="text-sm text-gray-400">
                    Block-scoped, can be updated but not redeclared in same
                    scope.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code='let title = "Movie" ;'
                      language="javascript"
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-green-500">const</h3>
                  <p className="text-sm text-gray-400">
                    Block-scoped, cannot be updated or redeclared.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter code="const ID = 123;" />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-yellow-500">var</h3>
                  <p className="text-sm text-gray-400">
                    Function-scoped, can be updated and redeclared.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter code="var count = 0;" />
                  </pre>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Common Mistakes</h3>
                  <ul className="text-sm text-gray-400 list-disc pl-4 space-y-1 mt-2">
                    <li>Using variables before declaration</li>
                    <li>Confusing scope rules between var and let</li>
                    <li>Trying to reassign const variables</li>
                    <li>Not initializing variables</li>
                  </ul>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Related Concepts</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Link href="/learn/data-types">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Data Types
                      </Button>
                    </Link>
                    <Link href="/learn/scope">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Scope
                      </Button>
                    </Link>
                    <Link href="/learn/hoisting">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Hoisting
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <div className="flex justify-between">
                  <span className="text-gray-400">Next Topic:</span>
                  <Link href="/learn/data-types">
                    <Button variant="link" className="text-red-600 p-0">
                      Data Types
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
