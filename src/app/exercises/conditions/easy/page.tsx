/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { ArrowLeft, Lightbulb, Check, X, Code } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeEditor from "@/components/code-editor";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ConditionsEasyExercise() {
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const initialCode = `// Exercise: Movie Rating Classifier
// Use conditions to classify movies based on their ratings

// Movie data
const movies = [
  { title: "The JavaScript Adventure", rating: 4.8 },
  { title: "Array of Darkness", rating: 3.2 },
  { title: "Promise Me Forever", rating: 4.5 },
  { title: "The DOM Chronicles", rating: 2.9 },
  { title: "Recursion", rating: 4.7 }
];

// TODO: Complete the classifyMovie function
// It should return:
// - "Excellent" for ratings >= 4.5
// - "Good" for ratings >= 3.5 and < 4.5
// - "Average" for ratings >= 2.5 and < 3.5
// - "Poor" for ratings < 2.5
function classifyMovie(rating) {
  // Your code here
  
}

// Test the function with our movies
for (const movie of movies) {
  const category = classifyMovie(movie.rating);
  console.log(\`"\${movie.title}" is rated \${movie.rating} and classified as \${category}\`);
}`;

  const solutionCode = `// Exercise: Movie Rating Classifier
// Use conditions to classify movies based on their ratings

// Movie data
const movies = [
  { title: "The JavaScript Adventure", rating: 4.8 },
  { title: "Array of Darkness", rating: 3.2 },
  { title: "Promise Me Forever", rating: 4.5 },
  { title: "The DOM Chronicles", rating: 2.9 },
  { title: "Recursion", rating: 4.7 }
];

// TODO: Complete the classifyMovie function
// It should return:
// - "Excellent" for ratings >= 4.5
// - "Good" for ratings >= 3.5 and < 4.5
// - "Average" for ratings >= 2.5 and < 3.5
// - "Poor" for ratings < 2.5
function classifyMovie(rating) {
  if (rating >= 4.5) {
    return "Excellent";
  } else if (rating >= 3.5) {
    return "Good";
  } else if (rating >= 2.5) {
    return "Average";
  } else {
    return "Poor";
  }
}

// Test the function with our movies
for (const movie of movies) {
  const category = classifyMovie(movie.rating);
  console.log(\`"\${movie.title}" is rated \${movie.rating} and classified as \${category}\`);
}`;

  const checkSolution = (code: string) => {
    try {
      // Check if the code contains the required elements
      const hasIfStatement = code.includes("if (") || code.includes("if(");
      const hasElseIf = code.includes("else if (") || code.includes("else if(");
      const hasElse = code.includes("else {") || code.includes("else{");
      const hasExcellent =
        code.includes('"Excellent"') || code.includes("'Excellent'");
      const hasGood = code.includes('"Good"') || code.includes("'Good'");
      const hasAverage =
        code.includes('"Average"') || code.includes("'Average'");
      const hasPoor = code.includes('"Poor"') || code.includes("'Poor'");

      if (
        hasIfStatement &&
        hasElseIf &&
        hasElse &&
        hasExcellent &&
        hasGood &&
        hasAverage &&
        hasPoor
      ) {
        setResult({
          success: true,
          message:
            "Great job! You've correctly implemented the movie rating classifier.",
        });
      } else {
        const missingItems = [];
        if (!hasIfStatement) missingItems.push("if statement");
        if (!hasElseIf) missingItems.push("else if statement");
        if (!hasElse) missingItems.push("else statement");
        if (!hasExcellent) missingItems.push('"Excellent" category');
        if (!hasGood) missingItems.push('"Good" category');
        if (!hasAverage) missingItems.push('"Average" category');
        if (!hasPoor) missingItems.push('"Poor" category');

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
            <h1 className="text-3xl font-bold">Movie Rating Classifier</h1>
            <div className="flex items-center mt-1">
              <div className="bg-yellow-600 px-2 py-0.5 rounded text-xs mr-2">
                Conditions
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
                Exercise: Movie Rating Classifier
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Instructions</h3>
                <p className="mb-4">
                  In this exercise, you&apos;ll practice using conditional
                  statements to classify movies based on their ratings.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Complete the{" "}
                    <code className="bg-gray-950 px-1 rounded">
                      classifyMovie
                    </code>{" "}
                    function
                  </li>
                  <li>
                    Use if, else if, and else statements to return the
                    appropriate category
                  </li>
                  <li>Follow the rating thresholds in the comments</li>
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
                        Start with the highest rating threshold first in your if
                        statement
                      </li>
                      <li>
                        Use comparison operators like{" "}
                        <code className="bg-gray-950 px-1 rounded">&gt;=</code>{" "}
                        (greater than or equal to)
                      </li>
                      <li>
                        Remember to use{" "}
                        <code className="bg-gray-950 px-1 rounded">return</code>{" "}
                        to send back the appropriate category string
                      </li>
                      <li>Make sure to handle all possible rating values</li>
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
                          1. Conditional Structure
                        </h4>
                        <p className="text-sm">
                          We use an{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            if...else if...else
                          </code>{" "}
                          structure to handle different rating ranges. This
                          creates a decision tree where only one branch will
                          execute.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          2. Order of Conditions
                        </h4>
                        <p className="text-sm">
                          We check the highest threshold first (
                          <code className="bg-gray-950 px-1 rounded">
                            rating &gt;= 4.5
                          </code>
                          ) and work our way down. This order is important
                          because the conditions are evaluated sequentially.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          3. Comparison Operators
                        </h4>
                        <p className="text-sm">
                          We use{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            &gt;=
                          </code>{" "}
                          (greater than or equal to) to check if a rating meets
                          or exceeds a threshold. The{" "}
                          <code className="bg-gray-950 px-1 rounded">else</code>{" "}
                          statement catches any rating that doesn&apos;t meet
                          the previous conditions.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          4. Return Statements
                        </h4>
                        <p className="text-sm">
                          Each branch of the conditional returns a string value
                          that represents the movie&apos;s category. The{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            return
                          </code>{" "}
                          statement immediately exits the function with the
                          specified value.
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
              <h2 className="text-xl font-bold mb-4">Conditions Reference</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-yellow-500">if...else</h3>
                  <p className="text-sm text-gray-400">
                    Basic conditional structure in JavaScript.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`if (condition) {
  // code if true
} else {
  // code if false
}`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-green-500">else if</h3>
                  <p className="text-sm text-gray-400">
                    Add additional conditions to check.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`if (condition1) {
  // code if condition1 is true
} else if (condition2) {
  // code if condition2 is true
} else {
  // code if all conditions are false
}`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-500">
                    Comparison Operators
                  </h3>
                  <p className="text-sm text-gray-400">
                    Used to compare values in conditions.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`x > y   // greater than
x >= y  // greater than or equal
x < y   // less than
x <= y  // less than or equal
x === y // strictly equal
x !== y // not equal`}</code>
                  </pre>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Next Challenges</h3>
                  <div className="flex flex-col space-y-2 mt-2">
                    <Link href="/exercises/conditions/medium">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start border-gray-700 hover:border-yellow-600"
                      >
                        <span className="bg-yellow-900/20 border border-yellow-600 px-2 py-0.5 rounded text-xs text-yellow-500 mr-2">
                          Medium
                        </span>
                        Movie Recommendation Engine
                      </Button>
                    </Link>
                    <Link href="/exercises/conditions/hard">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start border-gray-700 hover:border-orange-600"
                      >
                        <span className="bg-orange-900/20 border border-orange-600 px-2 py-0.5 rounded text-xs text-orange-500 mr-2">
                          Hard
                        </span>
                        Movie Ticket Discount System
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <Link href="/learn/conditions">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Review Conditions Lesson
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
