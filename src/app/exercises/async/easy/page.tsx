/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { ArrowLeft, Lightbulb, Check, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeEditor from "@/components/code-editor";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AsyncEasyExercise() {
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const initialCode = `// Movie Data Fetcher Exercise
// This exercise will test your understanding of asynchronous JavaScript

// Simulated movie database API
const movieDatabase = {
  movies: [
    { id: 1, title: "The JavaScript Adventure", genre: "Action", rating: 4.8 },
    { id: 2, title: "Array of Darkness", genre: "Horror", rating: 4.5 },
    { id: 3, title: "Promise Me Forever", genre: "Romance", rating: 4.2 },
    { id: 4, title: "The DOM Chronicles", genre: "Fantasy", rating: 4.0 }
  ],
  
  // Simulated API delay
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
  
  // Get all movies (simulates an API call)
  async getAllMovies() {
    await this.delay(1000); // Simulate network delay
    return [...this.movies];
  },
  
  // Get a movie by ID (simulates an API call)
  async getMovieById(id) {
    await this.delay(800); // Simulate network delay
    const movie = this.movies.find(movie => movie.id === id);
    
    if (!movie) {
      throw new Error(\`Movie with ID \${id} not found\`);
    }
    
    return { ...movie };
  }
};

// TODO: Implement the fetchMovieData function
// It should fetch a movie by ID and return a promise
function fetchMovieData(movieId) {
  // Your code here
}

// TODO: Implement the displayMovieData function
// It should take a movie object and display its properties
function displayMovieData(movie) {
  // Your code here
}

// TODO: Implement the handleError function
// It should display an error message
function handleError(error) {
  // Your code here
}

// TODO: Implement the loadMovie function
// It should use async/await to load a movie and handle errors
async function loadMovie(movieId) {
  // Your code here
}

// Test the functions
console.log("Starting to load movie data...");

// Call loadMovie with ID 2 (should succeed)
loadMovie(2);

// Call loadMovie with ID 99 (should fail and show error)
loadMovie(99);

console.log("This should appear before the movie data is displayed");`;

  const solutionCode = `// Movie Data Fetcher Exercise
// This exercise will test your understanding of asynchronous JavaScript

// Simulated movie database API
const movieDatabase = {
  movies: [
    { id: 1, title: "The JavaScript Adventure", genre: "Action", rating: 4.8 },
    { id: 2, title: "Array of Darkness", genre: "Horror", rating: 4.5 },
    { id: 3, title: "Promise Me Forever", genre: "Romance", rating: 4.2 },
    { id: 4, title: "The DOM Chronicles", genre: "Fantasy", rating: 4.0 }
  ],
  
  // Simulated API delay
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
  
  // Get all movies (simulates an API call)
  async getAllMovies() {
    await this.delay(1000); // Simulate network delay
    return [...this.movies];
  },
  
  // Get a movie by ID (simulates an API call)
  async getMovieById(id) {
    await this.delay(800); // Simulate network delay
    const movie = this.movies.find(movie => movie.id === id);
    
    if (!movie) {
      throw new Error(\`Movie with ID \${id} not found\`);
    }
    
    return { ...movie };
  }
};

// Implemented fetchMovieData function
// It fetches a movie by ID and returns a promise
function fetchMovieData(movieId) {
  return movieDatabase.getMovieById(movieId);
}

// Implemented displayMovieData function
// It takes a movie object and displays its properties
function displayMovieData(movie) {
  console.log("Movie Data Loaded:");
  console.log(\`Title: \${movie.title}\`);
  console.log(\`Genre: \${movie.genre}\`);
  console.log(\`Rating: \${movie.rating}/5\`);
}

// Implemented handleError function
// It displays an error message
function handleError(error) {
  console.error("Error loading movie data:", error.message);
}

// Implemented loadMovie function
// It uses async/await to load a movie and handle errors
async function loadMovie(movieId) {
  try {
    console.log(\`Loading movie with ID \${movieId}...\`);
    
    // Fetch the movie data
    const movie = await fetchMovieData(movieId);
    
    // Display the movie data
    displayMovieData(movie);
    
    return movie;
  } catch (error) {
    // Handle any errors
    handleError(error);
    return null;
  }
}

// Test the functions
console.log("Starting to load movie data...");

// Call loadMovie with ID 2 (should succeed)
loadMovie(2);

// Call loadMovie with ID 99 (should fail and show error)
loadMovie(99);

console.log("This should appear before the movie data is displayed");`;

  const checkSolution = (code: string) => {
    try {
      // Check if the code contains the required elements
      const hasFetchMovieData =
        code.includes("function fetchMovieData") &&
        (code.includes("return movieDatabase.getMovieById") ||
          code.includes("movieDatabase.getMovieById"));

      const hasDisplayMovieData =
        code.includes("function displayMovieData") &&
        code.includes("console.log") &&
        code.includes("movie.title");

      const hasHandleError =
        code.includes("function handleError") && code.includes("console.error");

      const hasLoadMovie =
        code.includes("async function loadMovie") &&
        code.includes("try") &&
        code.includes("catch") &&
        code.includes("await");

      if (
        hasFetchMovieData &&
        hasDisplayMovieData &&
        hasHandleError &&
        hasLoadMovie
      ) {
        setResult({
          success: true,
          message:
            "Great job! You've successfully implemented all the required functions for asynchronous movie data fetching.",
        });
      } else {
        const missingItems = [];
        if (!hasFetchMovieData)
          missingItems.push("fetchMovieData function that returns a promise");
        if (!hasDisplayMovieData)
          missingItems.push(
            "displayMovieData function that logs movie properties"
          );
        if (!hasHandleError)
          missingItems.push("handleError function that logs error messages");
        if (!hasLoadMovie)
          missingItems.push(
            "async loadMovie function with try/catch and await"
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
            <h1 className="text-3xl font-bold">Movie Data Fetcher</h1>
            <div className="flex items-center mt-1">
              <div className="bg-blue-600 px-2 py-0.5 rounded text-xs mr-2">
                Async JavaScript
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
                Exercise: Movie Data Fetcher
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Instructions</h3>
                <p className="mb-4">
                  In this exercise, you&apos;ll practice working with
                  asynchronous JavaScript by implementing functions to fetch and
                  display movie data.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Implement the{" "}
                    <code className="bg-gray-950 px-1 rounded">
                      fetchMovieData
                    </code>{" "}
                    function to fetch a movie by ID
                  </li>
                  <li>
                    Implement the{" "}
                    <code className="bg-gray-950 px-1 rounded">
                      displayMovieData
                    </code>{" "}
                    function to display movie properties
                  </li>
                  <li>
                    Implement the{" "}
                    <code className="bg-gray-950 px-1 rounded">
                      handleError
                    </code>{" "}
                    function to display error messages
                  </li>
                  <li>
                    Implement the{" "}
                    <code className="bg-gray-950 px-1 rounded">loadMovie</code>{" "}
                    function using async/await with proper error handling
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
                        For{" "}
                        <code className="bg-gray-950 px-1 rounded">
                          fetchMovieData
                        </code>
                        , simply return the result of calling{" "}
                        <code className="bg-gray-950 px-1 rounded">
                          movieDatabase.getMovieById(movieId)
                        </code>
                      </li>
                      <li>
                        For{" "}
                        <code className="bg-gray-950 px-1 rounded">
                          displayMovieData
                        </code>
                        , use{" "}
                        <code className="bg-gray-950 px-1 rounded">
                          console.log
                        </code>{" "}
                        to display the movie&apos;s title, genre, and rating
                      </li>
                      <li>
                        For{" "}
                        <code className="bg-gray-950 px-1 rounded">
                          handleError
                        </code>
                        , use{" "}
                        <code className="bg-gray-950 px-1 rounded">
                          console.error
                        </code>{" "}
                        to display the error message
                      </li>
                      <li>
                        For{" "}
                        <code className="bg-gray-950 px-1 rounded">
                          loadMovie
                        </code>
                        , use{" "}
                        <code className="bg-gray-950 px-1 rounded">
                          try/catch
                        </code>{" "}
                        with{" "}
                        <code className="bg-gray-950 px-1 rounded">await</code>{" "}
                        to handle asynchronous operations and errors
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
                          1. fetchMovieData Function
                        </h4>
                        <p className="text-sm">
                          This function simply returns the Promise from{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            movieDatabase.getMovieById()
                          </code>
                          . Since the database method already returns a Promise,
                          we can just pass it through. This is a common pattern
                          when working with asynchronous APIs.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          2. displayMovieData Function
                        </h4>
                        <p className="text-sm">
                          This function takes a movie object and displays its
                          properties using{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            console.log
                          </code>
                          . In a real application, this would update the UI
                          instead.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          3. handleError Function
                        </h4>
                        <p className="text-sm">
                          This function takes an error object and displays its
                          message using{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            console.error
                          </code>
                          . Error handling is crucial in asynchronous code to
                          provide feedback when things go wrong.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          4. loadMovie Function
                        </h4>
                        <p className="text-sm">
                          This is the main function that ties everything
                          together. It uses{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            async/await
                          </code>{" "}
                          to handle the asynchronous operation of fetching movie
                          data. The{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            try/catch
                          </code>{" "}
                          block ensures that any errors are properly handled.
                          This pattern makes asynchronous code look and behave
                          more like synchronous code, making it easier to read
                          and maintain.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">5. Execution Order</h4>
                        <p className="text-sm">
                          Notice that &quot;This should appear before the movie
                          data is displayed&quot; appears in the console before
                          the movie data, even though it comes after the{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            loadMovie
                          </code>{" "}
                          calls in the code. This demonstrates the asynchronous
                          nature of JavaScript - the code continues executing
                          while the asynchronous operations are pending.
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
                Async JavaScript Reference
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-500">Promises</h3>
                  <p className="text-sm text-gray-400">
                    Objects representing eventual completion of operations.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`// Creating a Promise
const promise = new Promise((resolve, reject) => {
  // Async operation
  if (success) {
    resolve(data);
  } else {
    reject(error);
  }
});

// Using a Promise
promise
  .then(data => console.log(data))
  .catch(error => console.error(error));`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-500">Async/Await</h3>
                  <p className="text-sm text-gray-400">
                    Cleaner syntax for working with Promises.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`// Async function declaration
async function fetchData() {
  try {
    // Await pauses execution until
    // the promise resolves
    const data = await fetch(url);
    return data;
  } catch (error) {
    console.error(error);
  }
}`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-500">
                    Error Handling
                  </h3>
                  <p className="text-sm text-gray-400">
                    Handling errors in asynchronous code.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`// With Promises
fetchData()
  .then(handleSuccess)
  .catch(handleError);

// With Async/Await
async function getData() {
  try {
    const data = await fetchData();
    handleSuccess(data);
  } catch (error) {
    handleError(error);
  }
}`}</code>
                  </pre>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Common Patterns</h3>
                  <ul className="text-sm text-gray-400 list-disc pl-4 space-y-1 mt-2">
                    <li>Wrapping callbacks in Promises</li>
                    <li>Sequential vs parallel execution</li>
                    <li>Promise chaining for dependent operations</li>
                    <li>Error propagation through Promise chains</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <Link href="/learn/async">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Review Async JavaScript Lesson
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
