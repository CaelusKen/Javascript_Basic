import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CodeExample from "@/components/code-example";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InteractiveExercise from "@/components/interactive-exercise";
import SyntaxHighlighter from "@/components/syntax-highlighter";

export default function FunctionsPage() {
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
          <h1 className="text-3xl font-bold">JavaScript Functions</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Understanding Functions
              </h2>
              <p className="mb-4">
                Functions are reusable blocks of code designed to perform
                specific tasks. They help organize code, reduce repetition, and
                make your programs more maintainable.
              </p>

              <Tabs defaultValue="declaration" className="mb-6">
                <TabsList className="bg-gray-950 border-gray-800">
                  <TabsTrigger
                    value="declaration"
                    className="data-[state=active]:bg-red-600"
                  >
                    Function Declaration
                  </TabsTrigger>
                  <TabsTrigger
                    value="expression"
                    className="data-[state=active]:bg-red-600"
                  >
                    Function Expression
                  </TabsTrigger>
                  <TabsTrigger
                    value="arrow"
                    className="data-[state=active]:bg-red-600"
                  >
                    Arrow Functions
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="declaration" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Function Declaration
                  </h3>
                  <p className="mb-4">
                    Function declarations define named functions. They are
                    hoisted, meaning they can be called before they are defined
                    in the code.
                  </p>
                  <CodeExample
                    code={`// Basic function declaration
function calculateTicketPrice(age, isStudent) {
  let price = 10; // Base price
  
  if (age < 12) {
    price = price * 0.5; // 50% off for kids
  } else if (age >= 65) {
    price = price * 0.8; // 20% off for seniors
  } else if (isStudent) {
    price = price * 0.9; // 10% off for students
  }
  
  return price;
}

// Calling the function
const adultPrice = calculateTicketPrice(30, false);
console.log(adultPrice); // 10

const studentPrice = calculateTicketPrice(20, true);
console.log(studentPrice); // 9

const childPrice = calculateTicketPrice(8, false);
console.log(childPrice); // 5

// Functions with default parameters
function getMovieInfo(title, year = "Unknown", rating = "Not rated") {
  return \`\${title} (\${year}) - \${rating}/5\`;
}

console.log(getMovieInfo("The JavaScript Adventure", 2023, 4.8));
// "The JavaScript Adventure (2023) - 4.8/5"

console.log(getMovieInfo("The JavaScript Adventure"));
// "The JavaScript Adventure (Unknown) - Not rated/5"

// Functions with rest parameters
function listActors(movieTitle, ...actors) {
  console.log(\`\${movieTitle} stars:\`);
  actors.forEach((actor, index) => {
    console.log(\`\${index + 1}. \${actor}\`);
  });
}

listActors("The JavaScript Adventure", "Dev Developer", "Sara Script", "Tom TypeScript");
// The JavaScript Adventure stars:
// 1. Dev Developer
// 2. Sara Script
// 3. Tom TypeScript`}
                  />
                </TabsContent>

                <TabsContent value="expression" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Function Expression
                  </h3>
                  <p className="mb-4">
                    Function expressions define functions as part of an
                    expression. They can be anonymous or named, and are not
                    hoisted.
                  </p>
                  <CodeExample
                    code={`// Anonymous function expression
const calculateRating = function(reviews) {
  if (reviews.length === 0) return 0;
  
  const sum = reviews.reduce((total, rating) => total + rating, 0);
  return sum / reviews.length;
};

const movieRatings = [4.5, 5.0, 4.8, 4.2, 4.7];
console.log(calculateRating(movieRatings)); // 4.64

// Named function expression
const findMovie = function searchMovie(movies, id) {
  for (const movie of movies) {
    if (movie.id === id) {
      return movie;
    }
    
    // If movie has nested movies (like a franchise)
    if (movie.relatedMovies) {
      const found = searchMovie(movie.relatedMovies, id);
      if (found) return found;
    }
  }
  
  return null;
};

// Function expression as an argument
const movies = [
  { title: "The JavaScript Adventure", genre: "Action" },
  { title: "Array of Darkness", genre: "Horror" },
  { title: "Promise Me Forever", genre: "Romance" }
];

// Passing a function expression as an argument
const actionMovies = movies.filter(function(movie) {
  return movie.genre === "Action";
});

console.log(actionMovies); // [{ title: "The JavaScript Adventure", genre: "Action" }]

// Immediately Invoked Function Expression (IIFE)
const movieDatabase = (function() {
  // Private data
  const movies = [];
  let lastId = 0;
  
  // Public interface
  return {
    addMovie: function(title, genre) {
      const id = ++lastId;
      movies.push({ id, title, genre });
      return id;
    },
    getMovie: function(id) {
      return movies.find(movie => movie.id === id);
    },
    getAllMovies: function() {
      return [...movies]; // Return a copy
    }
  };
})();

movieDatabase.addMovie("The JavaScript Adventure", "Action");
console.log(movieDatabase.getAllMovies());`}
                  />
                </TabsContent>

                <TabsContent value="arrow" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Arrow Functions
                  </h3>
                  <p className="mb-4">
                    Arrow functions provide a shorter syntax for writing
                    functions. They don&apos;t have their own this, arguments,
                    super, or new.target, making them ideal for certain
                    situations.
                  </p>
                  <CodeExample
                    code={`// Basic arrow function
const calculateTicketPrice = (age, isStudent) => {
  let price = 10; // Base price
  
  if (age < 12) {
    price = price * 0.5; // 50% off for kids
  } else if (age >= 65) {
    price = price * 0.8; // 20% off for seniors
  } else if (isStudent) {
    price = price * 0.9; // 10% off for students
  }
  
  return price;
};

// Shorter syntax for simple functions
const double = x => x * 2;
console.log(double(5)); // 10

// Implicit return with object (requires parentheses)
const createMovie = (title, year) => ({ title, year });
const movie = createMovie("The JavaScript Adventure", 2023);
console.log(movie); // { title: "The JavaScript Adventure", year: 2023 }

// Arrow functions with array methods
const movies = [
  { title: "The JavaScript Adventure", year: 2023, rating: 4.8 },
  { title: "Array of Darkness", year: 2022, rating: 4.5 },
  { title: "Promise Me Forever", year: 2023, rating: 4.2 }
];

// Using arrow functions with map
const movieTitles = movies.map(movie => movie.title);
console.log(movieTitles);
// ["The JavaScript Adventure", "Array of Darkness", "Promise Me Forever"]

// Using arrow functions with filter
const recentMovies = movies.filter(movie => movie.year >= 2023);
console.log(recentMovies.length); // 2

// Using arrow functions with sort
const sortedByRating = [...movies].sort((a, b) => b.rating - a.rating);
console.log(sortedByRating[0].title); // "The JavaScript Adventure"

// "this" binding in arrow functions
// Unlike regular functions, arrow functions don't have their own "this"
const moviePlayer = {
  title: "The JavaScript Adventure",
  viewers: ["User1", "User2", "User3"],
  
  // Using a regular function
  startWithRegularFunction: function() {
    console.log(\`Now playing: \${this.title}\`);
    
    // "this" inside the callback refers to global object (or undefined in strict mode)
    this.viewers.forEach(function(viewer) {
      console.log(\`\${viewer} is watching \${this?.title || 'unknown'}\`);
    });
  },
  
  // Using an arrow function
  startWithArrowFunction: function() {
    console.log(\`Now playing: \${this.title}\`);
    
    // "this" inside the arrow function inherits from the parent scope
    this.viewers.forEach(viewer => {
      console.log(\`\${viewer} is watching \${this.title}\`);
    });
  }
};

// Compare the outputs
moviePlayer.startWithRegularFunction();
// Now playing: The JavaScript Adventure
// User1 is watching unknown
// User2 is watching unknown
// User3 is watching unknown

moviePlayer.startWithArrowFunction();
// Now playing: The JavaScript Adventure
// User1 is watching The JavaScript Adventure
// User2 is watching The JavaScript Adventure
// User3 is watching The JavaScript Adventure`}
                  />
                </TabsContent>
              </Tabs>

              <h3 className="text-xl font-semibold mb-2">
                Function Scope and Closure
              </h3>
              <p className="mb-4">
                Functions create their own scope. Variables defined inside a
                function are not accessible from outside. Closures occur when a
                function remembers the environment it was created in.
              </p>
              <CodeExample
                code={`// Function scope
function showMovieInfo() {
  const title = "The JavaScript Adventure";
  console.log(title); // Accessible inside the function
}

showMovieInfo();
// console.log(title); // Error: title is not defined

// Nested scope
function outerFunction() {
  const outerVar = "I'm outside!";
  
  function innerFunction() {
    const innerVar = "I'm inside!";
    console.log(outerVar); // Can access variables from parent scope
    console.log(innerVar);
  }
  
  innerFunction();
  // console.log(innerVar); // Error: innerVar is not defined
}

outerFunction();

// Closures
function createMovieRatingCounter() {
  let count = 0;
  
  return function(rating) {
    count++;
    console.log(\`Rating #\${count}: \${rating}/5\`);
    return count;
  };
}

const ratingCounter = createMovieRatingCounter();
ratingCounter(4.5); // "Rating #1: 4.5/5"
ratingCounter(5.0); // "Rating #2: 5.0/5"
ratingCounter(4.8); // "Rating #3: 4.8/5"

// Practical closure example: private variables
function createMovieDatabase() {
  // Private data - not accessible directly from outside
  const movies = [];
  
  // Public interface
  return {
    add: function(movie) {
      movies.push(movie);
      return movies.length;
    },
    getAll: function() {
      return [...movies]; // Return a copy to keep original array private
    },
    find: function(title) {
      return movies.find(movie => 
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }
  };
}

const db = createMovieDatabase();
db.add({ title: "The JavaScript Adventure", year: 2023 });
db.add({ title: "Array of Darkness", year: 2022 });

console.log(db.getAll()); // [{ title: "The JavaScript Adventure", year: 2023 }, { title: "Array of Darkness", year: 2022 }]
console.log(db.find("javascript")); // { title: "The JavaScript Adventure", year: 2023 }`}
              />
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Functions in Action: Movie Example
              </h2>
              <p className="mb-4">
                Let&apos;s see how functions are used in a movie recommendation
                system:
              </p>

              <CodeExample
                code={`// Movie Recommendation System
// A collection of functions to manage and recommend movies

// Sample movie database
const movies = [
  { id: 1, title: "The JavaScript Adventure", genre: "Action", year: 2023, rating: 4.8, },
  { id: 2, title: "Array of Darkness", genre: "Horror", year: 2022, rating: 4.5 },
  { id: 3, title: "Promise Me Forever", genre: "Romance", year: 2023, rating: 4.2 },
  { id: 4, title: "The DOM Chronicles", genre: "Fantasy", year: 2021, rating: 4.0 },
  { id: 5, title: "Recursion", genre: "Sci-Fi", year: 2022, rating: 4.7 }
];

// Function to get movie by ID
function getMovieById(id) {
  return movies.find(movie => movie.id === id);
}

// Function to filter movies by criteria
function filterMovies(criteria) {
  return movies.filter(movie => {
    // Check all criteria if they exist
    if (criteria.genre && movie.genre !== criteria.genre) {
      return false;
    }
    
    if (criteria.minRating && movie.rating < criteria.minRating) {
      return false;
    }
    
    if (criteria.year && movie.year !== criteria.year) {
      return false;
    }
    
    return true;
  });
}

// Function to recommend movies based on another movie
function getRelatedMovies(movieId, maxResults = 3) {
  const targetMovie = getMovieById(movieId);
  
  if (!targetMovie) {
    return [];
  }
  
  // Helper function to calculate similarity score
  function calculateSimilarity(movie) {
    let score = 0;
    
    // Same genre is a strong indicator
    if (movie.genre === targetMovie.genre) {
      score += 3;
    }
    
    // Same year indicates similar themes/styles
    if (movie.year === targetMovie.year) {
      score += 1;
    }
    
    // Similar rating indicates similar quality
    const ratingDiff = Math.abs(movie.rating - targetMovie.rating);
    if (ratingDiff < 0.5) {
      score += 2;
    }
    
    return score;
  }
  
  // Filter out the target movie itself, calculate scores, and sort
  return movies
    .filter(movie => movie.id !== movieId)
    .map(movie => ({
      ...movie,
      similarityScore: calculateSimilarity(movie)
    }))
    .sort((a, b) => b.similarityScore - a.similarityScore)
    .slice(0, maxResults);
}

// Function to format movie details
function formatMovieDetails(movie) {
  const { title, year, genre, rating } = movie;
  return \`\${title} (\${year}) - \${genre} - Rating: \${rating}/5\`;
}

// Demo of our functions
console.log("--- Movie Details ---");
const movie = getMovieById(1);
console.log(formatMovieDetails(movie));

console.log("\\n--- High-Rated Movies ---");
const highRatedMovies = filterMovies({ minRating: 4.5 });
highRatedMovies.forEach(movie => console.log(formatMovieDetails(movie)));

console.log("\\n--- Movies from 2023 ---");
const moviesFrom2023 = filterMovies({ year: 2023 });
moviesFrom2023.forEach(movie => console.log(formatMovieDetails(movie)));

console.log("\\n--- Related to 'The JavaScript Adventure' ---");
const relatedMovies = getRelatedMovies(1);
relatedMovies.forEach(movie => {
  console.log(\`\${formatMovieDetails(movie)} (Similarity: \${movie.similarityScore})\`);
});`}
              />
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Interactive Exercise</h2>
              <p className="mb-4">
                Try the exercise below to test your understanding of JavaScript
                functions:
              </p>

              <InteractiveExercise
                instructions="Fix the code below to implement a movie ticket pricing system using functions."
                initialCode={`// Movie Ticket Price Calculator
// Calculate ticket prices based on various factors

// TODO: Implement the calculateBasePrice function
// It should return different prices based on the screening type:
// - "standard": $10
// - "imax": $15
// - "3d": $13
// - "premium": $18
function calculateBasePrice(screeningType) {
  // Your code here
}

// TODO: Implement the applyAgeDiscount function
// It should apply age-based discounts to the base price:
// - Children (under 12): 50% off
// - Seniors (65+): 30% off
// If the person doesn't qualify for a discount, return the original price
function applyAgeDiscount(basePrice, age) {
  // Your code here
}

// TODO: Implement the applyTimeDiscount function
// It should apply time-based discounts:
// - Early bird (before 12 PM): $2 off
// - Late night (after 10 PM): $1 off
// hour parameter is in 24-hour format (0-23)
function applyTimeDiscount(price, hour) {
  // Your code here
}

// TODO: Fix the calculateFinalPrice function
// It should use the other functions to calculate the final price
// and ensure the price is never negative
function calculateFinalPrice(screeningType, age, hour) {
  // Calculate base price based on screening type
  const basePrice = calculateBasePrice(screeningType);
  
  // Apply age discount
  const priceAfterAgeDiscount = applyAgeDiscount(basePrice);
  
  // Apply time discount
  const finalPrice = applyTimeDiscount(priceAfterAgeDiscount);
  
  // Make sure price is never negative
  return finalPrice;
}

// Test the functions
console.log("IMAX ticket for a 25-year-old at 8 PM: $" + calculateFinalPrice("imax", 25, 20));
console.log("Standard ticket for a 10-year-old at 3 PM: $" + calculateFinalPrice("standard", 10, 15));
console.log("3D ticket for a 70-year-old at 11 AM: $" + calculateFinalPrice("3d", 70, 11));
console.log("Premium ticket for a 15-year-old at 11 PM: $" + calculateFinalPrice("premium", 15, 23));`}
                solution={`// Movie Ticket Price Calculator
// Calculate ticket prices based on various factors

// Implemented the calculateBasePrice function
// It returns different prices based on the screening type:
// - "standard": $10
// - "imax": $15
// - "3d": $13
// - "premium": $18
function calculateBasePrice(screeningType) {
  switch (screeningType.toLowerCase()) {
    case "standard":
      return 10;
    case "imax":
      return 15;
    case "3d":
      return 13;
    case "premium":
      return 18;
    default:
      return 10; // Default to standard price
  }
}

// Implemented the applyAgeDiscount function
// It applies age-based discounts to the base price:
// - Children (under 12): 50% off
// - Seniors (65+): 30% off
// If the person doesn't qualify for a discount, return the original price
function applyAgeDiscount(basePrice, age) {
  if (age < 12) {
    return basePrice * 0.5; // 50% of original price
  } else if (age >= 65) {
    return basePrice * 0.7; // 70% of original price (30% off)
  } else {
    return basePrice; // No discount
  }
}

// Implemented the applyTimeDiscount function
// It applies time-based discounts:
// - Early bird (before 12 PM): $2 off
// - Late night (after 10 PM): $1 off
// hour parameter is in 24-hour format (0-23)
function applyTimeDiscount(price, hour) {
  if (hour < 12) {
    return price - 2; // Early bird discount
  } else if (hour >= 22) {
    return price - 1; // Late night discount
  } else {
    return price; // No time discount
  }
}

// Fixed the calculateFinalPrice function
// It uses the other functions to calculate the final price
// and ensures the price is never negative
function calculateFinalPrice(screeningType, age, hour) {
  // Calculate base price based on screening type
  const basePrice = calculateBasePrice(screeningType);
  
  // Apply age discount
  const priceAfterAgeDiscount = applyAgeDiscount(basePrice, age);
  
  // Apply time discount
  const finalPrice = applyTimeDiscount(priceAfterAgeDiscount, hour);
  
  // Make sure price is never negative
  return finalPrice > 0 ? finalPrice : 0;
}

// Test the functions
console.log("IMAX ticket for a 25-year-old at 8 PM: $" + calculateFinalPrice("imax", 25, 20));
console.log("Standard ticket for a 10-year-old at 3 PM: $" + calculateFinalPrice("standard", 10, 15));
console.log("3D ticket for a 70-year-old at 11 AM: $" + calculateFinalPrice("3d", 70, 11));
console.log("Premium ticket for a 15-year-old at 11 PM: $" + calculateFinalPrice("premium", 15, 23));`}
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-20">
              <h2 className="text-xl font-bold mb-4">Quick Reference</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-red-500">
                    Function Declaration
                  </h3>
                  <p className="text-sm text-gray-400">
                    Classic way to define a function. Hoisted.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`function name(params) {
  // function body
  return value;
}`}
                      language="javascript"
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-red-500">
                    Function Expression
                  </h3>
                  <p className="text-sm text-gray-400">
                    Functions as values. Not hoisted.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`const name = function(params) {
  // function body
  return value;
};`}
                      language="javascript"
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-red-500">Arrow Function</h3>
                  <p className="text-sm text-gray-400">
                    Concise syntax for functions. No own this.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`const name = (params) => {
  // function body
  return value;
};

// One param, simple return
const square = x => x * x;`}
                      language="javascript"
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-red-500">
                    Function Parameters
                  </h3>
                  <p className="text-sm text-gray-400">
                    Various ways to define parameters.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`// Default parameters
function f(x = 1, y = 2) {}

// Rest parameters
function sum(...numbers) {}

// Destructuring
function f({name, age}) {}`}
                      language="javascript"
                    />
                  </pre>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Common Mistakes</h3>
                  <ul className="text-sm text-gray-400 list-disc pl-4 space-y-1 mt-2">
                    <li>Forgetting to return a value</li>
                    <li>Using arrow functions where this binding matters</li>
                    <li>Not understanding closure scope</li>
                    <li>
                      Attempting to access function-scoped variables outside
                    </li>
                  </ul>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Related Concepts</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Link href="/learn/data-structures">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Data Structures
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
                    <Link href="/learn/scope">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Scope
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <div className="flex justify-between">
                  <Link href="/learn/data-structures">
                    <Button variant="link" className="text-red-600 p-0">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Data Structures
                    </Button>
                  </Link>
                  <Link href="/learn/loops">
                    <Button variant="link" className="text-red-600 p-0">
                      Loops
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <Link href="/exercises/functions/easy">
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
