/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { ArrowLeft, Lightbulb, Check, X, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeEditor from "@/components/code-editor";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function VariablesHardExercise() {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const initialCode = `// Exercise: Movie Ticket Pricing System
// Implement a complex ticket pricing system with multiple variables

// TODO: Create constants for base ticket prices
// - STANDARD_PRICE: $10
// - IMAX_PRICE: $15
// - PREMIUM_PRICE: $20
// - MATINEE_PRICE: $8

// TODO: Create constants for various discounts (as percentages in decimal form)
// - CHILD_DISCOUNT: 50% (for ages under 13)
// - SENIOR_DISCOUNT: 30% (for ages 65 and over)
// - STUDENT_DISCOUNT: 15% (for students with ID)
// - MEMBER_DISCOUNT: 10% (for theater members)
// - TUESDAY_DISCOUNT: 20% (for Tuesday showings)
// - EARLY_BIRD_DISCOUNT: 15% (for showings before noon)
// - LATE_NIGHT_DISCOUNT: 10% (for showings after 10 PM)
// - GROUP_DISCOUNT: 10% (for groups of 5 or more)

// TODO: Create variables for customer information
// - age: 22
// - isStudent: true
// - isMember: false
// - groupSize: 3

// TODO: Create variables for showing information
// - movieType: "imax"
// - dayOfWeek: "tuesday"
// - hour: 19 (7 PM, in 24-hour format)

// TODO: Determine the base price based on movie type
// Use the appropriate constant based on movieType (standard, imax, premium, matinee)

// TODO: Calculate applicable discounts
// A customer should get the HIGHEST SINGLE discount they qualify for based on age/status
// (child, senior, student, or member discount - they don't stack)
// PLUS any applicable discounts for day/time/group (these can stack with the age/status discount)

// TODO: Calculate the final ticket price
// Apply all applicable discounts to the base price

// TODO: Create a variable to store the discount breakdown
// This should be a string that explains which discounts were applied

// Display the ticket pricing information
console.log("MOVIE TICKET PRICING CALCULATOR");
console.log("-------------------------------");
console.log("Customer Information:");
console.log("Age: " + age);
console.log("Student: " + (isStudent ? "Yes" : "No"));
console.log("Member: " + (isMember ? "Yes" : "No"));
console.log("Group Size: " + groupSize);
console.log("-------------------------------");
console.log("Showing Information:");
console.log("Movie Type: " + movieType);
console.log("Day: " + dayOfWeek);
console.log("Time: " + hour + ":00");
console.log("-------------------------------");
console.log("Pricing Breakdown:");
console.log("Base Price: $" + basePrice);
console.log("Discount: " + discountBreakdown);
console.log("Final Price: $" + finalPrice.toFixed(2));

// TODO: Create a function to format the ticket receipt
// The function should take a customerName parameter and return a formatted receipt string
function generateTicketReceipt(customerName) {
  // Your code here
}

// Test the function
const receipt = generateTicketReceipt("John Doe");
console.log("-------------------------------");
console.log(receipt);`;

  const solutionCode = `// Exercise: Movie Ticket Pricing System
// Implement a complex ticket pricing system with multiple variables

// Create constants for base ticket prices
const STANDARD_PRICE = 10;
const IMAX_PRICE = 15;
const PREMIUM_PRICE = 20;
const MATINEE_PRICE = 8;

// Create constants for various discounts (as percentages in decimal form)
const CHILD_DISCOUNT = 0.5;    // 50% (for ages under 13)
const SENIOR_DISCOUNT = 0.3;   // 30% (for ages 65 and over)
const STUDENT_DISCOUNT = 0.15; // 15% (for students with ID)
const MEMBER_DISCOUNT = 0.1;   // 10% (for theater members)
const TUESDAY_DISCOUNT = 0.2;  // 20% (for Tuesday showings)
const EARLY_BIRD_DISCOUNT = 0.15; // 15% (for showings before noon)
const LATE_NIGHT_DISCOUNT = 0.1;  // 10% (for showings after 10 PM)
const GROUP_DISCOUNT = 0.1;    // 10% (for groups of 5 or more)

// Create variables for customer information
const age = 22;
const isStudent = true;
const isMember = false;
const groupSize = 3;

// Create variables for showing information
const movieType = "imax";
const dayOfWeek = "tuesday";
const hour = 19; // 7 PM, in 24-hour format

// Determine the base price based on movie type
let basePrice;
if (movieType === "standard") {
  basePrice = STANDARD_PRICE;
} else if (movieType === "imax") {
  basePrice = IMAX_PRICE;
} else if (movieType === "premium") {
  basePrice = PREMIUM_PRICE;
} else if (movieType === "matinee") {
  basePrice = MATINEE_PRICE;
} else {
  basePrice = STANDARD_PRICE; // Default to standard if type is unknown
}

// Calculate applicable discounts
let statusDiscount = 0;
let statusDiscountName = "";

// Determine the highest status discount (age/status based)
if (age < 13) {
  statusDiscount = CHILD_DISCOUNT;
  statusDiscountName = "Child Discount (50%)";
} else if (age >= 65) {
  statusDiscount = SENIOR_DISCOUNT;
  statusDiscountName = "Senior Discount (30%)";
} else if (isStudent) {
  statusDiscount = STUDENT_DISCOUNT;
  statusDiscountName = "Student Discount (15%)";
} else if (isMember) {
  statusDiscount = MEMBER_DISCOUNT;
  statusDiscountName = "Member Discount (10%)";
}

// Calculate other applicable discounts
let otherDiscounts = 0;
let otherDiscountNames = [];

// Tuesday discount
if (dayOfWeek.toLowerCase() === "tuesday") {
  otherDiscounts += TUESDAY_DISCOUNT;
  otherDiscountNames.push("Tuesday Discount (20%)");
}

// Early bird discount
if (hour < 12) {
  otherDiscounts += EARLY_BIRD_DISCOUNT;
  otherDiscountNames.push("Early Bird Discount (15%)");
}

// Late night discount
if (hour >= 22) {
  otherDiscounts += LATE_NIGHT_DISCOUNT;
  otherDiscountNames.push("Late Night Discount (10%)");
}

// Group discount
if (groupSize >= 5) {
  otherDiscounts += GROUP_DISCOUNT;
  otherDiscountNames.push("Group Discount (10%)");
}

// Calculate the final ticket price
const statusDiscountAmount = basePrice * statusDiscount;
const otherDiscountsAmount = basePrice * otherDiscounts;
const totalDiscountAmount = statusDiscountAmount + otherDiscountsAmount;
const finalPrice = basePrice - totalDiscountAmount;

// Create a variable to store the discount breakdown
let discountBreakdown = "";
if (statusDiscountName) {
  discountBreakdown += statusDiscountName;
}
if (otherDiscountNames.length > 0) {
  if (statusDiscountName) {
    discountBreakdown += " + ";
  }
  discountBreakdown += otherDiscountNames.join(" + ");
}

// If no discounts apply
if (!statusDiscountName && otherDiscountNames.length === 0) {
  discountBreakdown = "No discounts applied";
}

// Display the ticket pricing information
console.log("MOVIE TICKET PRICING CALCULATOR");
console.log("-------------------------------");
console.log("Customer Information:");
console.log("Age: " + age);
console.log("Student: " + (isStudent ? "Yes" : "No"));
console.log("Member: " + (isMember ? "Yes" : "No"));
console.log("Group Size: " + groupSize);
console.log("-------------------------------");
console.log("Showing Information:");
console.log("Movie Type: " + movieType);
console.log("Day: " + dayOfWeek);
console.log("Time: " + hour + ":00");
console.log("-------------------------------");
console.log("Pricing Breakdown:");
console.log("Base Price: $" + basePrice);
console.log("Discount: " + discountBreakdown);
console.log("Final Price: $" + finalPrice.toFixed(2));

// Create a function to format the ticket receipt
function generateTicketReceipt(customerName) {
  const date = new Date();
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();
  
  let receipt = "MOVIE TICKET RECEIPT\n";
  receipt += "==============================\n";
  receipt += "Customer: " + customerName + "\n";
  receipt += "Date: " + formattedDate + "\n";
  receipt += "Time: " + formattedTime + "\n";
  receipt += "------------------------------\n";
  receipt += "Movie Type: " + movieType.toUpperCase() + "\n";
  receipt += "Showing: " + dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1) + " at " + hour + ":00\n";
  receipt += "------------------------------\n";
  receipt += "Base Price: $" + basePrice + "\n";
  
  if (statusDiscountName || otherDiscountNames.length > 0) {
    receipt += "Discounts Applied:\n";
    if (statusDiscountName) {
      receipt += "  - " + statusDiscountName + ": -$" + statusDiscountAmount.toFixed(2) + "\n";
    }
    
    otherDiscountNames.forEach((name, index) => {
      const discountAmount = basePrice * (
        name.includes("Tuesday") ? TUESDAY_DISCOUNT :
        name.includes("Early Bird") ? EARLY_BIRD_DISCOUNT :
        name.includes("Late Night") ? LATE_NIGHT_DISCOUNT :
        name.includes("Group") ? GROUP_DISCOUNT : 0
      );
      receipt += "  - " + name + ": -$" + discountAmount.toFixed(2) + "\n";
    });
  }
  
  receipt += "------------------------------\n";
  receipt += "TOTAL: $" + finalPrice.toFixed(2) + "\n";
  receipt += "==============================\n";
  receipt += "Thank you for your purchase!";
  
  return receipt;
}

// Test the function
const receipt = generateTicketReceipt("John Doe");
console.log("-------------------------------");
console.log(receipt);`;

  const checkSolution = (code: string) => {
    try {
      // Check if the code contains the required elements
      const hasBaseTicketPrices =
        code.includes("STANDARD_PRICE") &&
        code.includes("IMAX_PRICE") &&
        code.includes("PREMIUM_PRICE") &&
        code.includes("MATINEE_PRICE");

      const hasDiscountConstants =
        code.includes("CHILD_DISCOUNT") &&
        code.includes("SENIOR_DISCOUNT") &&
        code.includes("STUDENT_DISCOUNT") &&
        code.includes("MEMBER_DISCOUNT") &&
        code.includes("TUESDAY_DISCOUNT") &&
        code.includes("EARLY_BIRD_DISCOUNT") &&
        code.includes("LATE_NIGHT_DISCOUNT") &&
        code.includes("GROUP_DISCOUNT");

      const hasCustomerVariables =
        code.includes("age") &&
        code.includes("isStudent") &&
        code.includes("isMember") &&
        code.includes("groupSize");

      const hasShowingVariables =
        code.includes("movieType") &&
        code.includes("dayOfWeek") &&
        code.includes("hour");

      const hasBasePriceLogic = code.includes("basePrice");

      const hasDiscountLogic =
        code.includes("statusDiscount") ||
        code.includes("otherDiscounts") ||
        (code.includes("discount") && code.includes("if"));

      const hasFinalPriceCalculation = code.includes("finalPrice");

      const hasReceiptFunction =
        code.includes("function generateTicketReceipt") &&
        code.includes("return receipt");

      if (
        hasBaseTicketPrices &&
        hasDiscountConstants &&
        hasCustomerVariables &&
        hasShowingVariables &&
        hasBasePriceLogic &&
        hasDiscountLogic &&
        hasFinalPriceCalculation &&
        hasReceiptFunction
      ) {
        setResult({
          success: true,
          message:
            "Excellent work! You've successfully implemented the complex movie ticket pricing system.",
        });
      } else {
        const missingItems = [];
        if (!hasBaseTicketPrices)
          missingItems.push("base ticket price constants");
        if (!hasDiscountConstants) missingItems.push("discount constants");
        if (!hasCustomerVariables)
          missingItems.push("customer information variables");
        if (!hasShowingVariables)
          missingItems.push("showing information variables");
        if (!hasBasePriceLogic)
          missingItems.push("base price determination logic");
        if (!hasDiscountLogic) missingItems.push("discount calculation logic");
        if (!hasFinalPriceCalculation)
          missingItems.push("final price calculation");
        if (!hasReceiptFunction)
          missingItems.push("ticket receipt generation function");

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
            <h1 className="text-3xl font-bold">Movie Ticket Pricing System</h1>
            <div className="flex items-center mt-1">
              <div className="bg-blue-600 px-2 py-0.5 rounded text-xs mr-2">
                Variables
              </div>
              <div className="bg-orange-900/20 border border-orange-600 px-2 py-0.5 rounded text-xs flex items-center">
                <Zap className="h-3 w-3 mr-1 text-orange-500" />
                <span className="text-orange-500">Hard</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Exercise: Movie Ticket Pricing System
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Instructions</h3>
                <p className="mb-4">
                  In this exercise, you&apos;ll implement a complex movie ticket
                  pricing system that calculates ticket prices based on multiple
                  factors:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Movie type (standard, IMAX, premium, matinee)</li>
                  <li>
                    Customer age and status (child, senior, student, member)
                  </li>
                  <li>Day of the week and time of showing</li>
                  <li>Group size</li>
                </ul>
                <p className="mt-4">
                  You&apos;ll need to apply different discount rules and
                  generate a detailed receipt.
                </p>
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
                        Start by defining all the constants for prices and
                        discount percentages
                      </li>
                      <li>
                        Use conditional statements (if/else) to determine the
                        base price based on movie type
                      </li>
                      <li>
                        For status discounts (age/student/member), use if/else
                        if to find the highest applicable discount
                      </li>
                      <li>
                        For other discounts (day/time/group), check each
                        condition separately as they can stack
                      </li>
                      <li>
                        Keep track of which discounts were applied using arrays
                        or strings
                      </li>
                      <li>
                        For the receipt function, use string concatenation or
                        template literals to build the formatted output
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
                          We define constants for base prices and discount
                          percentages using{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            const
                          </code>
                          . We use decimal values for discounts (e.g., 0.5 for
                          50%) to make calculations easier. We also define
                          variables for customer information and showing
                          details.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          2. Base Price Determination
                        </h4>
                        <p className="text-sm">
                          We use conditional statements to set the base price
                          based on the movie type. We include a default case to
                          handle unknown movie types.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">3. Discount Logic</h4>
                        <p className="text-sm">
                          We separate discounts into two categories:
                          <ul className="list-disc pl-6 mt-1">
                            <li>
                              Status discounts (age/student/member): Only the
                              highest one applies
                            </li>
                            <li>
                              Other discounts (day/time/group): These can stack
                              with status discounts and each other
                            </li>
                          </ul>
                          We use if/else if for status discounts to ensure only
                          one applies, and separate if statements for other
                          discounts to allow stacking.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          4. Discount Tracking
                        </h4>
                        <p className="text-sm">
                          We keep track of which discounts were applied using a
                          string variable for the status discount and an array
                          for other discounts. This allows us to display a
                          detailed breakdown of the applied discounts.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">
                          5. Receipt Generation
                        </h4>
                        <p className="text-sm">
                          The{" "}
                          <code className="bg-gray-950 px-1 rounded">
                            generateTicketReceipt
                          </code>{" "}
                          function creates a formatted receipt string that
                          includes all the ticket details, applied discounts,
                          and the final price. We use string concatenation with
                          newline characters to format the receipt.
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
                  <h3 className="font-semibold text-blue-500">Constants</h3>
                  <p className="text-sm text-gray-400">
                    Values that don&apos;t change during execution.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`const TAX_RATE = 0.08;
const MAX_TICKETS = 10;
const BASE_PRICE = 12.99;`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-500">
                    Conditional Logic
                  </h3>
                  <p className="text-sm text-gray-400">
                    Using variables in conditions.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`if (age < 13) {
  price = basePrice * 0.5;
} else if (age >= 65) {
  price = basePrice * 0.7;
} else {
  price = basePrice;
}`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-500">
                    String Manipulation
                  </h3>
                  <p className="text-sm text-gray-400">
                    Working with text in variables.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`// Concatenation
let message = "Hello, " + name;

// Template literals
let greeting = \`Welcome, \${name}!\`;

// String methods
let upper = name.toUpperCase();
let first = name.charAt(0);`}</code>
                  </pre>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Next Challenges</h3>
                  <div className="flex flex-col space-y-2 mt-2">
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
                    <Link href="/exercises/data-types/easy">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start border-gray-700 hover:border-green-600"
                      >
                        <span className="bg-green-900/20 border border-green-600 px-2 py-0.5 rounded text-xs text-green-500 mr-2">
                          Next Topic
                        </span>
                        Data Types
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
