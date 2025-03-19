/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { ArrowLeft, Lightbulb, Check, X, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeEditor from "@/components/code-editor";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function DataStructuresMediumExercise() {
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const initialCode = `// Exercise: Movie Database Queries
// Implement search and filter operations on a movie database

// Movie database
const movies = [
  { id: 1, title: "The JavaScript Adventure", year: 2023, genre: "Action", rating: 4.8, director: "Code Master" },
  { id: 2, title: "Array of Darkness", year: 2022, genre: "Horror", rating: 4.5, director: "Loop Walker" },
  { id: 3, title: "Promise Me Forever", year: 2023, genre: "Romance", rating: 4.2, director: "Async Annie" },
  { id: 4, title: "The DOM Chronicles", year: 2021, genre: "Fantasy", rating: 4.0, director: "Document Object" },
  { id: 5, title: "Recursion", year: 2022, genre: "Sci-Fi", rating: 4.7, director: "Recursion" },
  { id: 6, title: "The Variable Ultimatum", year: 2023, genre: "Thriller", rating: 3.9, director: "Scope Master" },
  { id: 7, title: "Object of Desire", year: 2021, genre: "Drama", rating: 4.3, director: "Property Chain" },
  { id: 8, title: "The Conditional", year: 2022, genre: "Mystery", rating: 4.1, director: "If Else" }
];

// TODO: Implement a function to search movies by title (partial match, case-insensitive)
function searchByTitle(query) {
  // Your code here
}

// TODO: Implement a function to filter movies by multiple criteria
// criteria is an object that can contain: minRating, genre, year
function filterMovies(criteria) {
  // Your code here
}

// TODO: Implement a function to sort movies by a given field (title, year, rating)
// order can be "asc" or "desc"
function sortMovies(field, order = "asc") {
  // Your code here
}

// Test the functions
console.log("Search results for 'script':");
console.log(searchByTitle("script"));

console.log("\\nFiltered movies (Rating >= 4.5, Year: 2023):");
console.log(filterMovies({ minRating: 4.5, year: 2023 }));

console.log("\\nMovies sorted by rating (descending):");
console.log(sortMovies("rating", "desc"));`;

  const solutionCode = `// Exercise: Movie Database Queries
// Implement search and filter operations on a movie database

// Movie database
const movies = [
  { id: 1, title: "The JavaScript Adventure", year: 2023, genre: "Action", rating: 4.8, director: "Code Master" },
  { id: 2, title: "Array of Darkness", year: 2022, genre: "Horror", rating: 4.5, director: "Loop Walker" },
  { id: 3, title: "Promise Me Forever", year: 2023, genre: "Romance", rating: 4.2, director: "Async Annie" },
  { id: 4, title: "The DOM Chronicles", year: 2021, genre: "Fantasy", rating: 4.0, director: "Document Object" },
  { id: 5, title: "Recursion", year: 2022, genre: "Sci-Fi", rating: 4.7, director: "Recursion" },
  { id: 6, title: "The Variable Ultimatum", year: 2023, genre: "Thriller", rating: 3.9, director: "Scope Master" },
  { id: 7, title: "Object of Desire", year: 2021, genre: "Drama", rating: 4.3, director: "Property Chain" },
  { id: 8, title: "The Conditional", year: 2022, genre: "Mystery", rating: 4.1, director: "If Else" }
];

// TODO: Implement a function to search movies by title (partial match, case-insensitive)
function searchByTitle(query) {
  return movies.filter(movie => 
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
}

// TODO: Implement a function to filter movies by multiple criteria
// criteria is an object that can contain: minRating, genre, year
function filterMovies(criteria) {
  return movies.filter(movie => {
    // Check if movie meets all provided criteria
    if (criteria.minRating && movie.rating < criteria.minRating) {
      return false;
    }
    
    if (criteria.genre && movie.genre !== criteria.genre) {
      return false;
    }
    
    if (criteria.year && movie.year !== criteria.year) {
      return false;
    }
    
    // If it passed all checks, include it
    return true;
  });
}

// TODO: Implement a function to sort movies by a given field (title, year, rating)
// order can be "asc" or "desc"
function sortMovies(field, order = "asc") {
  // Create a copy of the movies array to avoid modifying the original
  const sortedMovies = [...movies];
  
  return sortedMovies.sort((a, b) => {
    // Compare the values based on the field
    let comparison = 0;
    
    if (a[field] < b[field]) {
      comparison = -1;
    } else if (a[field] > b[field]) {
      comparison = 1;
    }
    
    // Reverse the comparison if order is descending
    return order === "desc" ? comparison * -1 : comparison;
  });
}

// Test the functions
console.log("Search results for 'script':");
console.log(searchByTitle("script"));

console.log("\\nFiltered movies (Rating >= 4.5, Year: 2023):");
console.log(filterMovies({ minRating: 4.5, year: 2023 }));

console.log("\\nMovies sorted by rating (descending):");
console.log(sortMovies("rating", "desc"));`;

  const checkSolution = (code: string) => {
    try {
      // Check if the code contains the required elements
      const hasSearchFunction =
        code.includes("function searchByTitle") &&
        (code.includes(".filter") ||
          code.includes(".toLowerCase()") ||
          code.includes(".includes("));

      const hasFilterFunction =
        code.includes("function filterMovies") &&
        code.includes("criteria.minRating") &&
        code.includes("criteria.genre") &&
        code.includes("criteria.year");

      const hasSortFunction =
        code.includes("function sortMovies") &&
        code.includes("sort(") &&
        (code.includes('order === "desc"') ||
          code.includes("order === 'desc'"));

      if (hasSearchFunction && hasFilterFunction && hasSortFunction) {
        setResult({
          success: true,
          message:
            "Excellent work! You've successfully implemented all the movie database query functions.",
        });
      } else {
        const missingItems = [];
        if (!hasSearchFunction)
          missingItems.push("proper search function implementation");
        if (!hasFilterFunction)
          missingItems.push("complete filter function with all criteria");
        if (!hasSortFunction)
          missingItems.push("sort function with ascending/descending support");

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
            <h1 className="text-3xl font-bold">Movie Database Queries</h1>
            <div className="flex items-center mt-1">
              <div className="bg-purple-600 px-2 py-0.5 rounded text-xs mr-2">
                Data Structures
              </div>
              <div className="bg-yellow-900/20 border border-yellow-600 px-2 py-0.5 rounded text-xs flex items-center">
                <AlertTriangle className="h-3 w-3 mr-1 text-yellow-500" />
                <span className="text-yellow-500">Medium</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Exercise: Movie Database Queries
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Instructions</h3>
                <p className="mb-4">
                  In this exercise, you&apos;ll implement search, filter, and
                  sort operations on a movie database using JavaScript data
                  structures and array methods.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Implement{" "}
                    <code className="bg-gray-950 px-1 rounded">
                      searchByTitle()
                    </code>{" "}
                    to find movies by partial title match (case-insensitive)
                  </li>
                  <li>
                    Implement{" "}
                    <code className="bg-gray-950 px-1 rounded">
                      filterMovies()
                    </code>{" "}
                    to filter movies by multiple criteria (rating, genre, year)
                  </li>
                  <li>
                    Implement{" "}
                    <code className="bg-gray-950 px-1 rounded">
                      sortMovies()
                    </code>{" "}
                    to sort movies by a specified field in ascending or
                    descending order
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
                          searchByTitle()
                        </code>
                        , use{" "}
                        <code className="bg-gray-950 px-1 rounded">
                          filter()
                        </code>{" "}
                        with{" "}
                        <code className="bg-gray-950 px-1 rounded">
                          toLowerCase()
                        </code>{" "}
                        and{" "}
                        <code className="bg-gray-950 px-1 rounded">
                          includes()
                        </code>{" "}
                        to find partial matches
                      </li>
                      <li>
                        For{" "}
                        <code className="bg-gray-950 px-1 rounded">
                          filterMovies()
                        </code>
                        , check each criterion only if it&apos;s provided in the
                        criteria object
                      </li>
                      <li>
                        For{" "}
                        <code className="bg-gray-950 px-1 rounded">
                          sortMovies()
                        </code>
                        , use the{" "}
                        <code className="bg-gray-950 px-1 rounded">sort()</code>{" "}
                        method with a comparison function, and make a copy of
                        the array first to avoid modifying the original
                      </li>
                      <li>
                        Remember to handle the ascending/descending order in
                        your sort function
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
                        <h4 className="font-medium mb-1">1. Search Function</h4>
                        <p className="text-sm">
                          The{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            searchByTitle()
                          </code>{" "}
                          function uses the{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            filter()
                          </code>{" "}
                          array method to create a new array with movies that
                          match the search query. We convert both the movie
                          title and the search query to lowercase using{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            toLowerCase()
                          </code>{" "}
                          to make the search case-insensitive. The{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            includes()
                          </code>{" "}
                          method checks if the movie title contains the search
                          query as a substring.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">2. Filter Function</h4>
                        <p className="text-sm">
                          The{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            filterMovies()
                          </code>{" "}
                          function also uses{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            filter()
                          </code>
                          , but with multiple criteria. We check each criterion
                          (minRating, genre, year) only if it&apos;s provided in
                          the criteria object. If a movie doesn&apos;t meet any
                          of the provided criteria, we return{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            false
                          </code>{" "}
                          to exclude it from the results. If it passes all
                          checks, we return{" "}
                          <code className="bg-gray-950 px-1 rounded">true</code>{" "}
                          to include it.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">3. Sort Function</h4>
                        <p className="text-sm">
                          The{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            sortMovies()
                          </code>{" "}
                          function creates a copy of the movies array using the
                          spread operator{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            [...movies]
                          </code>{" "}
                          to avoid modifying the original array. We use the{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            sort()
                          </code>{" "}
                          method with a comparison function that compares the
                          values of the specified field. The comparison function
                          returns -1, 0, or 1 based on whether the first value
                          is less than, equal to, or greater than the second
                          value. We handle the sort order by multiplying the
                          comparison result by -1 if the order is
                          &quot;desc&quot; (descending).
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
                Data Structures Reference
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-purple-500">
                    Array Methods
                  </h3>
                  <p className="text-sm text-gray-400">
                    Common array methods for data manipulation.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`// Filter
array.filter(item => condition)

// Sort
array.sort((a, b) => comparison)

// Map
array.map(item => transformation)

// Find
array.find(item => condition)`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-green-500">
                    String Methods
                  </h3>
                  <p className="text-sm text-gray-400">
                    Useful string methods for searching.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`// Case conversion
str.toLowerCase()
str.toUpperCase()

// Searching
str.includes(substring)
str.startsWith(prefix)
str.endsWith(suffix)`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-yellow-500">
                    Object Operations
                  </h3>
                  <p className="text-sm text-gray-400">
                    Working with objects in JavaScript.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`// Accessing properties
object.property
object['property']

// Checking if property exists
'property' in object
object.hasOwnProperty('property')

// Copying objects
const copy = {...original}`}</code>
                  </pre>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Next Challenges</h3>
                  <div className="flex flex-col space-y-2 mt-2">
                    <Link href="/exercises/data-structures/hard">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start border-gray-700 hover:border-orange-600"
                      >
                        <span className="bg-orange-900/20 border border-orange-600 px-2 py-0.5 rounded text-xs text-orange-500 mr-2">
                          Hard
                        </span>
                        Movie Relationship Graph
                      </Button>
                    </Link>
                    <Link href="/exercises/data-structures/extreme">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start border-gray-700 hover:border-red-600"
                      >
                        <span className="bg-red-900/20 border border-red-600 px-2 py-0.5 rounded text-xs text-red-500 mr-2">
                          Extreme
                        </span>
                        Movie Recommendation Algorithm
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <Link href="/learn/data-structures">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Review Data Structures Lesson
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
