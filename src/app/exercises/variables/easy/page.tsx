/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { ArrowLeft, Lightbulb, Check, X, Code } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeEditor from "@/components/code-editor";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function VariablesEasyExercise() {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const initialCode = `// Exercise: Movie Rating Tracker
// Create variables to track movie ratings for a movie night selection

// TODO: Create a variable 'movieTitle' that cannot be reassigned
// and set it to "The JavaScript Adventure"


// TODO: Create a variable 'currentRating' that can be reassigned
// and set it to 4.5


// TODO: Create a variable 'isTopRated' that indicates if the movie
// is top rated (rating >= 4.5)


// TODO: Create a variable 'viewerReviews' with an initial value of 200


// TODO: Increase the viewer reviews by 50


// TODO: Update the current rating to 4.7


// Test your code (don't modify this part)
console.log("Movie:", movieTitle);
console.log("Current Rating:", currentRating);
console.log("Is Top Rated:", isTopRated);
console.log("Viewer Reviews:", viewerReviews);`;

  const solutionCode = `// Exercise: Movie Rating Tracker
// Create variables to track movie ratings for a movie night selection

// TODO: Create a variable 'movieTitle' that cannot be reassigned
// and set it to "The JavaScript Adventure"
const movieTitle = "The JavaScript Adventure";

// TODO: Create a variable 'currentRating' that can be reassigned
// and set it to 4.5
let currentRating = 4.5;

// TODO: Create a variable 'isTopRated' that indicates if the movie
// is top rated (rating >= 4.5)
const isTopRated = currentRating >= 4.5;

// TODO: Create a variable 'viewerReviews' with an initial value of 200
let viewerReviews = 200;

// TODO: Increase the viewer reviews by 50
viewerReviews += 50;

// TODO: Update the current rating to 4.7
currentRating = 4.7;

// Test your code (don't modify this part)
console.log("Movie:", movieTitle);
console.log("Current Rating:", currentRating);
console.log("Is Top Rated:", isTopRated);
console.log("Viewer Reviews:", viewerReviews);`;

  const checkSolution = (code: string) => {
    try {
      // Check if the code contains the required elements
      const hasConst = code.includes("const movieTitle");
      const hasLetRating = code.includes("let currentRating");
      const hasIsTopRated = code.includes("isTopRated");
      const hasViewerReviews = code.includes("viewerReviews");
      const hasIncreasedReviews =
        code.includes("viewerReviews += 50") ||
        code.includes("viewerReviews = viewerReviews + 50");
      const hasUpdatedRating = code.includes("currentRating = 4.7");

      if (
        hasConst &&
        hasLetRating &&
        hasIsTopRated &&
        hasViewerReviews &&
        hasIncreasedReviews &&
        hasUpdatedRating
      ) {
        setResult({
          success: true,
          message:
            "Great job! You've correctly used variables to track movie ratings.",
        });
      } else {
        const missingItems = [];
        if (!hasConst) missingItems.push("const for movieTitle");
        if (!hasLetRating) missingItems.push("let for currentRating");
        if (!hasIsTopRated) missingItems.push("isTopRated variable");
        if (!hasViewerReviews) missingItems.push("viewerReviews variable");
        if (!hasIncreasedReviews)
          missingItems.push("increasing viewerReviews by 50");
        if (!hasUpdatedRating)
          missingItems.push("updating currentRating to 4.7");

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
            <h1 className="text-3xl font-bold">Movie Rating Tracker</h1>
            <div className="flex items-center mt-1">
              <div className="bg-blue-600 px-2 py-0.5 rounded text-xs mr-2">
                Variables
              </div>
              <div className="bg-green-900/20 border border-green-600 px-2 py-0.5 rounded text-xs flex items-center">
                <Code className="h-3 w-3 mr-1 text-green-500" />
                <span className="text-green-500">Easy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Exercise: Movie Rating Tracker
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Instructions</h3>
                <p className="mb-4">
                  In this exercise, you&apos;ll practice using JavaScript
                  variables to track movie ratings for a movie night selection.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Create a constant variable for the movie title</li>
                  <li>
                    Create a variable for the current rating that can be changed
                  </li>
                  <li>
                    Create a boolean variable to indicate if the movie is
                    top-rated
                  </li>
                  <li>Create and update a variable for viewer reviews</li>
                  <li>Update the rating to a new value</li>
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
                        Use{" "}
                        <code className="bg-gray-950 px-1 rounded">const</code>{" "}
                        for variables that shouldn&apos;t change (like the movie
                        title)
                      </li>
                      <li>
                        Use{" "}
                        <code className="bg-gray-950 px-1 rounded">let</code>{" "}
                        for variables that need to be updated (like ratings and
                        review counts)
                      </li>
                      <li>
                        To increase a variable by a value, you can use the{" "}
                        <code className="bg-gray-950 px-1 rounded">+=</code>{" "}
                        operator
                      </li>
                      <li>
                        For the{" "}
                        <code className="bg-gray-950 px-1 rounded">
                          isTopRated
                        </code>{" "}
                        variable, use a comparison operator to check if the
                        rating is high enough
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
                          1. Constant Variables
                        </h4>
                        <p className="text-sm">
                          We use{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            const
                          </code>{" "}
                          for{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            movieTitle
                          </code>{" "}
                          because the title of the movie won&apos;t change.
                          Constants cannot be reassigned after they&apos;re
                          declared.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          2. Reassignable Variables
                        </h4>
                        <p className="text-sm">
                          We use{" "}
                          <code className="bg-gray-950 px-1 rounded">let</code>{" "}
                          for{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            currentRating
                          </code>{" "}
                          and{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            viewerReviews
                          </code>{" "}
                          because these values will change. The{" "}
                          <code className="bg-gray-950 px-1 rounded">let</code>{" "}
                          keyword allows us to update these variables later.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          3. Boolean Variables
                        </h4>
                        <p className="text-sm">
                          The{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            isTopRated
                          </code>{" "}
                          variable stores a boolean (true/false) value based on
                          a condition. We set it using a comparison:{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            currentRating &gt;= 4.5
                          </code>
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          4. Updating Variables
                        </h4>
                        <p className="text-sm">
                          We update{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            viewerReviews
                          </code>{" "}
                          using the{" "}
                          <code className="bg-gray-950 px-1 rounded">+=</code>{" "}
                          operator, which is shorthand for{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            viewerReviews = viewerReviews + 50
                          </code>
                          . We update{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            currentRating
                          </code>{" "}
                          by simply assigning a new value to it.
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
              <h2 className="text-xl font-bold mb-4">Variables Reference</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-500">const</h3>
                  <p className="text-sm text-gray-400">
                    Used for values that should not change after initialization.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>const TITLE = &quot;Movie&quot; ;</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-green-500">let</h3>
                  <p className="text-sm text-gray-400">
                    Used for values that need to be reassigned.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>let rating = 4.5;</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-yellow-500">
                    Variable Operations
                  </h3>
                  <p className="text-sm text-gray-400">
                    Common ways to work with variables.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`// Assignment
x = 10;

// Addition assignment
x += 5; // Same as x = x + 5

// Other operators
x -= 5; // Subtraction
x *= 2; // Multiplication
x /= 2; // Division`}</code>
                  </pre>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Next Challenges</h3>
                  <div className="flex flex-col space-y-2 mt-2">
                    <Link href="/exercises/variables/medium">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start border-gray-700 hover:border-yellow-600"
                      >
                        <span className="bg-yellow-900/20 border border-yellow-600 px-2 py-0.5 rounded text-xs text-yellow-500 mr-2">
                          Medium
                        </span>
                        Movie Budget Calculator
                      </Button>
                    </Link>
                    <Link href="/exercises/variables/hard">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start border-gray-700 hover:border-orange-600"
                      >
                        <span className="bg-orange-900/20 border border-orange-600 px-2 py-0.5 rounded text-xs text-orange-500 mr-2">
                          Hard
                        </span>
                        Movie Ticket Pricing System
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <Link href="/learn/variables">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Review Variables Lesson
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
