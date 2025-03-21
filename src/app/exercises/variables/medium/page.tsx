/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { ArrowLeft, Lightbulb, Check, X, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeEditor from "@/components/code-editor";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function VariablesMediumExercise() {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const initialCode = `// Exercise: Movie Budget Calculator
// Create a budget tracking system for a movie production

// TODO: Create a constant for the movie title
// TODO: Create a constant for the total budget amount (2,000,000)

// TODO: Create variables to track different budget categories
// - casting: 40% of total budget
// - production: 25% of total budget
// - postProduction: 15% of total budget
// - marketing: 20% of total budget

// TODO: Create variables to track how much has been spent in each category
// Initial spent values:
// - castingSpent: 650,000
// - productionSpent: 400,000
// - postProductionSpent: 75,000
// - marketingSpent: 150,000

// TODO: Calculate the remaining budget for each category

// TODO: Calculate the total spent amount

// TODO: Calculate the total remaining budget

// TODO: Calculate what percentage of the total budget has been spent
// (should be a value between 0 and 100)

// Display the budget information
console.log("Movie Budget: " + movieTitle);
console.log("Total Budget: $" + totalBudget);
console.log("----------------------------");
console.log("BUDGET BREAKDOWN:");
console.log("Casting Budget: $" + castingBudget + " | Spent: $" + castingSpent + " | Remaining: $" + castingRemaining);
console.log("Production Budget: $" + productionBudget + " | Spent: $" + productionSpent + " | Remaining: $" + productionRemaining);
console.log("Post-Production Budget: $" + postProductionBudget + " | Spent: $" + postProductionSpent + " | Remaining: $" + postProductionRemaining);
console.log("Marketing Budget: $" + marketingBudget + " | Spent: $" + marketingSpent + " | Remaining: $" + marketingRemaining);
console.log("----------------------------");
console.log("SUMMARY:");
console.log("Total Spent: $" + totalSpent + " (" + percentageSpent + "% of budget)");
console.log("Total Remaining: $" + totalRemaining);

// TODO: Create a variable to check if the project is within budget
// (true if total spent is less than or equal to total budget)
console.log("Project is within budget: " + isWithinBudget);

// TODO: Create a variable to check if any category has exceeded its budget
// (true if any category has spent more than its budget)
console.log("Budget exceeded in some categories: " + isSomeCategoryOverBudget);`;

  const solutionCode = `// Exercise: Movie Budget Calculator
// Create a budget tracking system for a movie production

// Create a constant for the movie title
const movieTitle = "The JavaScript Adventure";
// Create a constant for the total budget amount
const totalBudget = 2000000;

// Create variables to track different budget categories
const castingBudget = totalBudget * 0.4;     // 40% of total budget
const productionBudget = totalBudget * 0.25;  // 25% of total budget
const postProductionBudget = totalBudget * 0.15; // 15% of total budget
const marketingBudget = totalBudget * 0.2;   // 20% of total budget

// Create variables to track how much has been spent in each category
let castingSpent = 650000;
let productionSpent = 400000;
let postProductionSpent = 75000;
let marketingSpent = 150000;

// Calculate the remaining budget for each category
const castingRemaining = castingBudget - castingSpent;
const productionRemaining = productionBudget - productionSpent;
const postProductionRemaining = postProductionBudget - postProductionSpent;
const marketingRemaining = marketingBudget - marketingSpent;

// Calculate the total spent amount
const totalSpent = castingSpent + productionSpent + postProductionSpent + marketingSpent;

// Calculate the total remaining budget
const totalRemaining = totalBudget - totalSpent;

// Calculate what percentage of the total budget has been spent
const percentageSpent = (totalSpent / totalBudget) * 100;

// Display the budget information
console.log("Movie Budget: " + movieTitle);
console.log("Total Budget: $" + totalBudget);
console.log("----------------------------");
console.log("BUDGET BREAKDOWN:");
console.log("Casting Budget: $" + castingBudget + " | Spent: $" + castingSpent + " | Remaining: $" + castingRemaining);
console.log("Production Budget: $" + productionBudget + " | Spent: $" + productionSpent + " | Remaining: $" + productionRemaining);
console.log("Post-Production Budget: $" + postProductionBudget + " | Spent: $" + postProductionSpent + " | Remaining: $" + postProductionRemaining);
console.log("Marketing Budget: $" + marketingBudget + " | Spent: $" + marketingSpent + " | Remaining: $" + marketingRemaining);
console.log("----------------------------");
console.log("SUMMARY:");
console.log("Total Spent: $" + totalSpent + " (" + percentageSpent + "% of budget)");
console.log("Total Remaining: $" + totalRemaining);

// Create a variable to check if the project is within budget
const isWithinBudget = totalSpent <= totalBudget;
console.log("Project is within budget: " + isWithinBudget);

// Create a variable to check if any category has exceeded its budget
const isSomeCategoryOverBudget = 
  castingSpent > castingBudget || 
  productionSpent > productionBudget || 
  postProductionSpent > postProductionBudget || 
  marketingSpent > marketingBudget;
console.log("Budget exceeded in some categories: " + isSomeCategoryOverBudget);`;

  const checkSolution = (code: string) => {
    try {
      // Check if the code contains the required elements
      const hasMovieTitle = code.includes("const movieTitle");
      const hasTotalBudget =
        code.includes("const totalBudget") && code.includes("2000000");
      const hasBudgetCategories =
        code.includes("castingBudget") &&
        code.includes("productionBudget") &&
        code.includes("postProductionBudget") &&
        code.includes("marketingBudget");
      const hasSpentVariables =
        code.includes("castingSpent") &&
        code.includes("productionSpent") &&
        code.includes("postProductionSpent") &&
        code.includes("marketingSpent");
      const hasRemainingCalculations =
        code.includes("castingRemaining") &&
        code.includes("productionRemaining") &&
        code.includes("postProductionRemaining") &&
        code.includes("marketingRemaining");
      const hasTotalCalculations =
        code.includes("totalSpent") &&
        code.includes("totalRemaining") &&
        code.includes("percentageSpent");
      const hasBudgetChecks =
        code.includes("isWithinBudget") &&
        code.includes("isSomeCategoryOverBudget");

      if (
        hasMovieTitle &&
        hasTotalBudget &&
        hasBudgetCategories &&
        hasSpentVariables &&
        hasRemainingCalculations &&
        hasTotalCalculations &&
        hasBudgetChecks
      ) {
        setResult({
          success: true,
          message:
            "Great job! You've correctly implemented the movie budget calculator.",
        });
      } else {
        const missingItems = [];
        if (!hasMovieTitle) missingItems.push("movie title constant");
        if (!hasTotalBudget) missingItems.push("total budget constant");
        if (!hasBudgetCategories)
          missingItems.push("budget category variables");
        if (!hasSpentVariables) missingItems.push("spent amount variables");
        if (!hasRemainingCalculations)
          missingItems.push("remaining budget calculations");
        if (!hasTotalCalculations)
          missingItems.push("total budget calculations");
        if (!hasBudgetChecks) missingItems.push("budget check variables");

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
            <h1 className="text-3xl font-bold">Movie Budget Calculator</h1>
            <div className="flex items-center mt-1">
              <div className="bg-blue-600 px-2 py-0.5 rounded text-xs mr-2">
                Variables
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
                Exercise: Movie Budget Calculator
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Instructions</h3>
                <p className="mb-4">
                  In this exercise, you&apos;ll create a budget tracking system
                  for a movie production. You&apos;ll use variables to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Track the total budget and different budget categories
                  </li>
                  <li>Calculate spent and remaining amounts</li>
                  <li>Determine if the project is within budget</li>
                  <li>Check if any category has exceeded its budget</li>
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
                        for values that won&apos;t change (like the movie title
                        and total budget)
                      </li>
                      <li>
                        Use{" "}
                        <code className="bg-gray-950 px-1 rounded">let</code>{" "}
                        for values that might change (like the spent amounts)
                      </li>
                      <li>
                        Calculate budget percentages using multiplication:{" "}
                        <code className="bg-gray-950 px-1 rounded">
                          totalBudget * 0.4
                        </code>{" "}
                        for 40%
                      </li>
                      <li>
                        For the remaining budget in each category, subtract the
                        spent amount from the budget amount
                      </li>
                      <li>
                        Use logical operators (
                        <code className="bg-gray-950 px-1 rounded">&&</code>,{" "}
                        <code className="bg-gray-950 px-1 rounded">||</code>)
                        for the budget check variables
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
                          1. Constants and Variables
                        </h4>
                        <p className="text-sm">
                          We use{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            const
                          </code>{" "}
                          for values that won&apos;t change during execution,
                          like the movie title and total budget. We use{" "}
                          <code className="bg-gray-950 px-1 rounded">let</code>{" "}
                          for values that might change, like the spent amounts.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          2. Budget Calculations
                        </h4>
                        <p className="text-sm">
                          We calculate each budget category as a percentage of
                          the total budget using multiplication. For example,{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            castingBudget = totalBudget * 0.4
                          </code>{" "}
                          for 40% of the total budget.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          3. Remaining Budget
                        </h4>
                        <p className="text-sm">
                          For each category, we calculate the remaining budget
                          by subtracting the spent amount from the budget
                          amount:{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            castingRemaining = castingBudget - castingSpent
                          </code>
                          .
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          4. Total Calculations
                        </h4>
                        <p className="text-sm">
                          We calculate the total spent amount by adding all
                          category spent amounts. We calculate the total
                          remaining budget by subtracting the total spent from
                          the total budget. We calculate the percentage spent by
                          dividing the total spent by the total budget and
                          multiplying by 100.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">5. Budget Checks</h4>
                        <p className="text-sm">
                          We use comparison operators to check if the project is
                          within budget (
                          <code className="bg-gray-950 px-1 rounded">
                            totalSpent &lt;= totalBudget
                          </code>
                          ) and if any category has exceeded its budget using
                          logical OR (
                          <code className="bg-gray-950 px-1 rounded">||</code>)
                          to combine multiple conditions.
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
                  <h3 className="font-semibold text-blue-500">
                    Variable Types
                  </h3>
                  <p className="text-sm text-gray-400">
                    Different ways to declare variables.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`const x = 5;  // Cannot be reassigned
let y = 10;   // Can be reassigned
var z = 15;   // Older way, avoid`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-500">
                    Arithmetic Operations
                  </h3>
                  <p className="text-sm text-gray-400">
                    Common operations with variables.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`// Basic operations
x + y    // Addition
x - y    // Subtraction
x * y    // Multiplication
x / y    // Division
x % y    // Remainder (modulo)

// Shorthand
x += 5;  // x = x + 5
x -= 5;  // x = x - 5
x *= 2;  // x = x * 2
x /= 2;  // x = x / 2`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-500">
                    Comparison Operators
                  </h3>
                  <p className="text-sm text-gray-400">
                    Compare values and return booleans.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`x > y    // Greater than
x >= y   // Greater than or equal
x < y    // Less than
x <= y   // Less than or equal
x === y  // Equal (strict)
x !== y  // Not equal (strict)`}</code>
                  </pre>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Next Challenges</h3>
                  <div className="flex flex-col space-y-2 mt-2">
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
                    <Link href="/exercises/variables/extreme">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start border-gray-700 hover:border-red-600"
                      >
                        <span className="bg-red-900/20 border border-red-600 px-2 py-0.5 rounded text-xs text-red-500 mr-2">
                          Extreme
                        </span>
                        Movie Revenue Forecasting
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
