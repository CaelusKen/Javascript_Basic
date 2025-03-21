import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CodeExample from "@/components/code-example";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InteractiveExercise from "@/components/interactive-exercise";
import SyntaxHighlighter from "@/components/syntax-highlighter";

export default function ConditionsPage() {
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
          <h1 className="text-3xl font-bold">JavaScript Conditions</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Conditional Statements
              </h2>
              <p className="mb-4">
                Conditional statements allow you to execute different blocks of
                code based on different conditions. JavaScript has several ways
                to express conditions.
              </p>

              <Tabs defaultValue="if-else" className="mb-6">
                <TabsList className="bg-gray-950 border-gray-800">
                  <TabsTrigger
                    value="if-else"
                    className="data-[state=active]:bg-yellow-600"
                  >
                    if...else
                  </TabsTrigger>
                  <TabsTrigger
                    value="switch"
                    className="data-[state=active]:bg-yellow-600"
                  >
                    switch
                  </TabsTrigger>
                  <TabsTrigger
                    value="ternary"
                    className="data-[state=active]:bg-yellow-600"
                  >
                    Ternary Operator
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="if-else" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    if...else Statement
                  </h3>
                  <p className="mb-4">
                    The if...else statement is the most basic conditional
                    statement. It executes a block of code if a specified
                    condition is true, and another block of code if the
                    condition is false.
                  </p>
                  <CodeExample
                    code={`// Basic if statement
const movieRating = 4.8;

if (movieRating >= 4.5) {
  console.log("This is an excellent movie!");
}

// if...else statement
if (movieRating >= 4.0) {
  console.log("This is a good movie!");
} else {
  console.log("This movie might not be worth watching.");
}

// if...else if...else statement (multiple conditions)
if (movieRating >= 4.5) {
  console.log("Excellent movie!");
} else if (movieRating >= 4.0) {
  console.log("Very good movie!");
} else if (movieRating >= 3.0) {
  console.log("Good movie.");
} else {
  console.log("You might want to skip this one.");
}

// Nested if statements
const isReleased = true;
const hasAwards = true;

if (isReleased) {
  if (hasAwards) {
    console.log("This movie has been released and won awards!");
  } else {
    console.log("This movie has been released but hasn't won any awards yet.");
  }
} else {
  console.log("This movie hasn't been released yet.");
}`}
                  />
                </TabsContent>

                <TabsContent value="switch" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    switch Statement
                  </h3>
                  <p className="mb-4">
                    The switch statement evaluates an expression and matches it
                    against multiple case clauses. It&apos;s useful when you
                    have multiple conditions based on the same value.
                  </p>
                  <CodeExample
                    code={`// Basic switch statement
const movieGenre = "Action";

switch (movieGenre) {
  case "Action":
    console.log("Expect exciting sequences and stunts!");
    break;
  case "Comedy":
    console.log("Prepare to laugh!");
    break;
  case "Drama":
    console.log("Expect emotional moments!");
    break;
  case "Horror":
    console.log("Get ready to be scared!");
    break;
  default:
    console.log("Enjoy the movie!");
    break;
}

// Switch with multiple cases sharing the same code
const movieRating = 4;

switch (movieRating) {
  case 5:
    console.log("Perfect score!");
    break;
  case 4:
  case 4.5:
    console.log("Excellent movie!");
    break;
  case 3:
  case 3.5:
    console.log("Good movie.");
    break;
  case 2:
  case 2.5:
    console.log("Average movie.");
    break;
  case 1:
  case 1.5:
    console.log("Poor movie.");
    break;
  default:
    console.log("Invalid rating.");
    break;
}

// Switch without break (falls through to next case)
const dayOfWeek = 3; // Wednesday
let schedule = "Movie schedule for: ";

switch (dayOfWeek) {
  case 1:
    schedule += "Monday";
    break;
  case 2:
    schedule += "Tuesday";
    break;
  case 3:
    schedule += "Wednesday";
    break;
  case 4:
    schedule += "Thursday";
    break;
  case 5:
    schedule += "Friday";
    break;
  case 6:
  case 7:
    schedule += "Weekend";
    break;
  default:
    schedule += "Invalid day";
}

console.log(schedule); // "Movie schedule for: Wednesday"`}
                  />
                </TabsContent>

                <TabsContent value="ternary" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Ternary Operator
                  </h3>
                  <p className="mb-4">
                    The ternary operator is a shorthand way to write an
                    if...else statement. It&apos;s useful for simple conditional
                    expressions, especially when assigning values.
                  </p>
                  <CodeExample
                    code={`// Basic ternary operator
const movieRating = 4.8;
const recommendation = movieRating >= 4.0 ? "Recommended" : "Not recommended";
console.log(recommendation); // "Recommended"

// Ternary operator with variable assignment
const isNewRelease = true;
const ticketPrice = isNewRelease ? 15 : 10;
console.log(ticketPrice); // 15

// Nested ternary operators (use with caution for readability)
const age = 25;
const ticketType = age < 12 ? "Child" : age < 18 ? "Teen" : age >= 65 ? "Senior" : "Adult";
console.log(ticketType); // "Adult"

// Ternary operator in template literals
const movieTitle = "The JavaScript Adventure";
const movieYear = 2023;
console.log(\`\${movieTitle} (\${movieYear < 2023 ? "Old release" : "New release"})\`);
// "The JavaScript Adventure (New release)"

// Ternary operator with functions
function getMovieStatus(rating) {
  return rating >= 4.5 ? "Must watch!" : "Consider watching";
}
console.log(getMovieStatus(4.8)); // "Must watch!"`}
                  />
                </TabsContent>
              </Tabs>

              <h3 className="text-xl font-semibold mb-2">Logical Operators</h3>
              <p className="mb-4">
                Logical operators are used to combine multiple conditions and
                can also be used for conditional execution.
              </p>
              <CodeExample
                code={`// Logical AND (&&)
const hasGoodRating = true;
const isAvailable = true;

if (hasGoodRating && isAvailable) {
  console.log("This movie is worth watching and it's available!");
}

// Logical OR (||)
const isNewRelease = false;
const isAwardWinner = true;

if (isNewRelease || isAwardWinner) {
  console.log("This movie is either new or has won awards!");
}

// Logical NOT (!)
const isRestricted = false;

if (!isRestricted) {
  console.log("This movie is suitable for all audiences.");
}

// Short-circuit evaluation with &&
// The second expression is only evaluated if the first one is true
const movieRating = 4.8;
movieRating > 4.5 && console.log("This is a top-rated movie!");

// Short-circuit evaluation with ||
// The second expression is only evaluated if the first one is false
const movieTitle = "";
const defaultTitle = movieTitle || "Untitled Movie";
console.log(defaultTitle); // "Untitled Movie"

// Nullish coalescing operator (??)
// Similar to || but only considers null or undefined as falsy
const director = null;
const defaultDirector = director ?? "Unknown Director";
console.log(defaultDirector); // "Unknown Director"`}
              />
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Conditions in Action: Movie Example
              </h2>
              <p className="mb-4">
                Let&apos;s see how conditions are used in a movie recommendation
                system:
              </p>

              <CodeExample
                code={`// Movie recommendation system using conditions
function recommendMovie(preferences) {
  const { genre, minRating, maxDuration, releaseYear } = preferences;
  
  // Sample movie database
  const movies = [
    { title: "The JavaScript Adventure", genre: "Action", rating: 4.8, duration: 120, year: 2023 },
    { title: "Array of Darkness", genre: "Horror", rating: 4.5, duration: 105, year: 2022 },
    { title: "Promise Me Forever", genre: "Romance", rating: 4.2, duration: 118, year: 2023 },
    { title: "The DOM Chronicles", genre: "Fantasy", rating: 4.0, duration: 135, year: 2021 },
    { title: "Recursion", genre: "Sci-Fi", rating: 4.7, duration: 150, year: 2022 }
  ];
  
  // Filter movies based on user preferences
  const recommendations = movies.filter(movie => {
    // Check if the genre matches (if specified)
    if (genre && movie.genre !== genre) {
      return false;
    }
    
    // Check if the rating meets the minimum (if specified)
    if (minRating && movie.rating < minRating) {
      return false;
    }
    
    // Check if the duration is within the maximum (if specified)
    if (maxDuration && movie.duration > maxDuration) {
      return false;
    }
    
    // Check if the release year matches (if specified)
    if (releaseYear && movie.year !== releaseYear) {
      return false;
    }
    
    // If all conditions pass, include this movie
    return true;
  });
  
  // Return recommendations or a message if none found
  if (recommendations.length > 0) {
    return {
      success: true,
      message: \`Found \${recommendations.length} movie(s) matching your preferences.\`,
      movies: recommendations
    };
  } else {
    return {
      success: false,
      message: "No movies found matching your preferences.",
      movies: []
    };
  }
}

// Test the recommendation system
const userPreferences = {
  genre: "Action",
  minRating: 4.5,
  maxDuration: 130,
  releaseYear: 2023
};

const result = recommendMovie(userPreferences);

if (result.success) {
  console.log(result.message);
  result.movies.forEach(movie => {
    console.log(\`- \${movie.title} (\${movie.year}) - Rating: \${movie.rating}/5\`);
  });
} else {
  console.log(result.message);
  console.log("Try adjusting your preferences.");
}`}
              />
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Interactive Exercise</h2>
              <p className="mb-4">
                Try the exercise below to test your understanding of JavaScript
                conditions:
              </p>

              <InteractiveExercise
                instructions="Fix the code below to correctly implement a movie ticket pricing system using conditions."
                initialCode={`// Movie Ticket Pricing System
// Prices are determined by age, time of day, and movie type

// Customer information
const age = 25;
const isStudent = true;
const showTime = 19; // 24-hour format (7 PM)
const is3D = true;
const isNewRelease = true;

// TODO: Fix the ticket pricing logic
function calculateTicketPrice() {
  let basePrice = 10; // Base ticket price
  
  // Age-based discounts
  // Children (under 12): 50% off
  // Seniors (65+): 30% off
  // Students: 20% off (only if not already discounted)
  if (age < 12) {
    basePrice = basePrice / 2;
  }
  if (age >= 65) {
    basePrice = basePrice * 0.7;
  }
  if (isStudent) {
    basePrice = basePrice * 0.8;
  }
  
  // Time-based pricing
  // Matinee (before 5 PM): $2 off
  // Late night (after 10 PM): $1 off
  if (showTime < 17) {
    basePrice = basePrice - 2;
  }
  if (showTime > 22) {
    base  $1 off
  if (showTime < 17) {
    basePrice = basePrice - 2;
  }
  if (showTime > 22) {
    basePrice = basePrice - 1;
  }
  
  // Movie type pricing
  // 3D movies: $3 extra
  // New releases: $2 extra
  if (is3D) {
    basePrice = basePrice + 3;
  }
  if (isNewRelease) {
    basePrice = basePrice + 2;
  }
  
  return basePrice;
}

// Calculate and display the ticket price
const ticketPrice = calculateTicketPrice();
console.log("Ticket price: $" + ticketPrice);`}
                solution={`// Movie Ticket Pricing System
// Prices are determined by age, time of day, and movie type

// Customer information
const age = 25;
const isStudent = true;
const showTime = 19; // 24-hour format (7 PM)
const is3D = true;
const isNewRelease = true;

// Fixed ticket pricing logic
function calculateTicketPrice() {
  let basePrice = 10; // Base ticket price
  
  // Age-based discounts
  // Children (under 12): 50% off
  // Seniors (65+): 30% off
  // Students: 20% off (only if not already discounted)
  if (age < 12) {
    basePrice = basePrice * 0.5; // 50% of original price
  } else if (age >= 65) {
    basePrice = basePrice * 0.7; // 70% of original price
  } else if (isStudent) {
    basePrice = basePrice * 0.8; // 80% of original price
  }
  
  // Time-based pricing
  // Matinee (before 5 PM): $2 off
  // Late night (after 10 PM): $1 off
  if (showTime < 17) {
    basePrice -= 2;
  } else if (showTime >= 22) {
    basePrice -= 1;
  }
  
  // Movie type pricing
  // 3D movies: $3 extra
  // New releases: $2 extra
  if (is3D) {
    basePrice += 3;
  }
  if (isNewRelease) {
    basePrice += 2;
  }
  
  // Ensure price is never negative
  return basePrice > 0 ? basePrice : 0;
}

// Calculate and display the ticket price
const ticketPrice = calculateTicketPrice();
console.log("Ticket price: $" + ticketPrice);`}
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-20">
              <h2 className="text-xl font-bold mb-4">Quick Reference</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-yellow-500">if...else</h3>
                  <p className="text-sm text-gray-400">
                    Basic conditional structure in JavaScript.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`if (condition) {
  // code if true
} else {
  // code if false
}`}
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-yellow-500">switch</h3>
                  <p className="text-sm text-gray-400">
                    Evaluates an expression against multiple cases.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // code
}`}
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-yellow-500">
                    Ternary Operator
                  </h3>
                  <p className="text-sm text-gray-400">
                    Shorthand for simple if...else statements.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`condition ? valueIfTrue : valueIfFalse`}
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-yellow-500">
                    Logical Operators
                  </h3>
                  <p className="text-sm text-gray-400">
                    Combine or negate conditions.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`&& // AND
|| // OR
!  // NOT
?? // Nullish coalescing`}
                    />
                  </pre>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Common Mistakes</h3>
                  <ul className="text-sm text-gray-400 list-disc pl-4 space-y-1 mt-2">
                    <li>Using = instead of == or === in conditions</li>
                    <li>Forgetting break statements in switch cases</li>
                    <li>
                      Overcomplicating conditions when simpler logic would work
                    </li>
                    <li>Not handling all possible cases</li>
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
                    <Link href="/learn/loops">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Loops
                      </Button>
                    </Link>
                    <Link href="/learn/operators">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Operators
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <div className="flex justify-between">
                  <Link href="/learn/data-types">
                    <Button variant="link" className="text-red-600 p-0">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Data Types
                    </Button>
                  </Link>
                  <Link href="/learn/data-structures">
                    <Button variant="link" className="text-red-600 p-0">
                      Data Structures
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <Link href="/exercises/conditions/easy">
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
