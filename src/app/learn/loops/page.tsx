import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CodeExample from "@/components/code-example";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InteractiveExercise from "@/components/interactive-exercise";
import SyntaxHighlighter from "@/components/syntax-highlighter";

export default function LoopsPage() {
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
          <h1 className="text-3xl font-bold">JavaScript Loops</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Understanding Loops</h2>
              <p className="mb-4">
                Loops are control structures that allow you to execute a block
                of code repeatedly. They are essential for processing arrays,
                creating animations, handling events, and much more.
              </p>

              <Tabs defaultValue="for" className="mb-6">
                <TabsList className="bg-gray-950 border-gray-800">
                  <TabsTrigger
                    value="for"
                    className="data-[state=active]:bg-orange-600"
                  >
                    for
                  </TabsTrigger>
                  <TabsTrigger
                    value="while"
                    className="data-[state=active]:bg-orange-600"
                  >
                    while/do-while
                  </TabsTrigger>
                  <TabsTrigger
                    value="for-of"
                    className="data-[state=active]:bg-orange-600"
                  >
                    for...of/in
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="for" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">for Loop</h3>
                  <p className="mb-4">
                    The for loop is the most common type of loop in JavaScript.
                    It consists of three expressions: initialization, condition,
                    and increment/decrement.
                  </p>
                  <CodeExample
                    code={`// Basic for loop
for (let i = 0; i < 5; i++) {
  console.log(\`Iteration #\${i + 1}\`);
}
// Outputs: Iteration #1, Iteration #2, ... Iteration #5

// Looping through an array
const movies = ["The JavaScript Adventure", "Array of Darkness", "Promise Me Forever"];

for (let i = 0; i < movies.length; i++) {
  console.log(\`Movie #\${i + 1}: \${movies[i]}\`);
}
// Movie #1: The JavaScript Adventure
// Movie #2: Array of Darkness
// Movie #3: Promise Me Forever

// Looping backward
for (let i = movies.length - 1; i >= 0; i--) {
  console.log(\`Movie #\${i + 1}: \${movies[i]}\`);
}
// Movie #3: Promise Me Forever
// Movie #2: Array of Darkness
// Movie #1: The JavaScript Adventure

// Skipping iterations with continue
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip iteration when i is 2
  }
  console.log(\`Iteration #\${i}\`);
}
// Outputs: Iteration #0, Iteration #1, Iteration #3, Iteration #4

// Breaking out of a loop
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Exit the loop when i is 3
  }
  console.log(\`Iteration #\${i}\`);
}
// Outputs: Iteration #0, Iteration #1, Iteration #2

// Nested loops
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(\`i: \${i}, j: \${j}\`);
  }
}
// i: 0, j: 0
// i: 0, j: 1
// i: 1, j: 0
// i: 1, j: 1
// i: 2, j: 0
// i: 2, j: 1`}
                  />
                </TabsContent>

                <TabsContent value="while" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    while and do-while Loops
                  </h3>
                  <p className="mb-4">
                    The while loop executes a block of code as long as a
                    specified condition is true. The do-while loop is similar
                    but guarantees at least one execution of the code block.
                  </p>
                  <CodeExample
                    code={`// Basic while loop
let count = 0;
while (count < 5) {
  console.log(\`Count: \${count}\`);
  count++;
}
// Count: 0
// Count: 1
// Count: 2
// Count: 3
// Count: 4

// while loop with break
let i = 0;
while (true) { // Infinite loop
  console.log(\`Iteration #\${i}\`);
  i++;
  if (i >= 3) {
    break; // Exit the loop
  }
}
// Iteration #0
// Iteration #1
// Iteration #2

// do-while loop (always executes at least once)
let num = 10;
do {
  console.log(\`Number: \${num}\`);
  num--;
} while (num > 5);
// Number: 10
// Number: 9
// Number: 8
// Number: 7
// Number: 6

// Example: Finding a movie in an array
const movies = ["The JavaScript Adventure", "Array of Darkness", "Promise Me Forever"];
const targetTitle = "Array of Darkness";

let movieIndex = 0;
let foundMovie = false;

while (movieIndex < movies.length) {
  if (movies[movieIndex] === targetTitle) {
    foundMovie = true;
    break;
  }
  movieIndex++;
}

if (foundMovie) {
  console.log(\`Found "\${targetTitle}" at index \${movieIndex}\`);
} else {
  console.log(\`"\${targetTitle}" not found\`);
}
// Found "Array of Darkness" at index 1

// Example: Processing an event queue
const eventQueue = ["start", "pause", "resume", "stop"];

while (eventQueue.length > 0) {
  const event = eventQueue.shift(); // Remove first element
  console.log(\`Processing event: \${event}\`);
}
// Processing event: start
// Processing event: pause
// Processing event: resume
// Processing event: stop`}
                  />
                </TabsContent>

                <TabsContent value="for-of" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    for...of and for...in Loops
                  </h3>
                  <p className="mb-4">
                    The for...of loop iterates over the values of iterable
                    objects (arrays, strings, etc.). The for...in loop iterates
                    over the enumerable properties of an object.
                  </p>
                  <CodeExample
                    code={`// for...of loop with array
const movies = ["The JavaScript Adventure", "Array of Darkness", "Promise Me Forever"];

for (const movie of movies) {
  console.log(\`Movie: \${movie}\`);
}
// Movie: The JavaScript Adventure
// Movie: Array of Darkness
// Movie: Promise Me Forever

// for...of with destructuring
const movieObjects = [
  { title: "The JavaScript Adventure", year: 2023 },
  { title: "Array of Darkness", year: 2022 },
  { title: "Promise Me Forever", year: 2023 }
];

for (const { title, year } of movieObjects) {
  console.log(\`\${title} (\${year})\`);
}
// The JavaScript Adventure (2023)
// Array of Darkness (2022)
// Promise Me Forever (2023)

// for...of with strings (iterates characters)
const title = "Code";
for (const char of title) {
  console.log(char);
}
// C
// o
// d
// e

// for...of with Map
const movieRatings = new Map([
  ["The JavaScript Adventure", 4.8],
  ["Array of Darkness", 4.5],
  ["Promise Me Forever", 4.2]
]);

for (const [title, rating] of movieRatings) {
  console.log(\`\${title}: \${rating}/5\`);
}
// The JavaScript Adventure: 4.8/5
// Array of Darkness: 4.5/5
// Promise Me Forever: 4.2/5

// for...in loop (iterates over properties)
const movie = {
  title: "The JavaScript Adventure",
  year: 2023,
  genre: "Action",
  rating: 4.8
};

for (const key in movie) {
  console.log(\`\${key}: \${movie[key]}\`);
}
// title: The JavaScript Adventure
// year: 2023
// genre: Action
// rating: 4.8

// Be careful: for...in also iterates over inherited properties
const baseMovie = { studio: "Code Studios" };
const sequel = Object.create(baseMovie);
sequel.title = "JavaScript Adventure 2";
sequel.year = 2024;

for (const key in sequel) {
  // Check if it's an own property
  if (sequel.hasOwnProperty(key)) {
    console.log(\`\${key}: \${sequel[key]}\`);
  }
}
// title: JavaScript Adventure 2
// year: 2024`}
                  />
                </TabsContent>
              </Tabs>

              <h3 className="text-xl font-semibold mb-2">
                Array Iteration Methods
              </h3>
              <p className="mb-4">
                JavaScript provides several built-in methods for array iteration
                that are often more elegant and functional than traditional
                loops.
              </p>
              <CodeExample
                code={`// Sample movie data
const movies = [
  { title: "The JavaScript Adventure", genre: "Action", rating: 4.8 },
  { title: "Array of Darkness", genre: "Horror", rating: 4.5 },
  { title: "Promise Me Forever", genre: "Romance", rating: 4.2 },
  { title: "The DOM Chronicles", genre: "Fantasy", rating: 4.0 },
  { title: "Recursion", genre: "Sci-Fi", rating: 4.7 }
];

// forEach - executes a function for each element
movies.forEach((movie, index) => {
  console.log(\`\${index + 1}. \${movie.title} - \${movie.rating}/5\`);
});
// 1. The JavaScript Adventure - 4.8/5
// 2. Array of Darkness - 4.5/5
// ...and so on

// map - creates a new array with the results of calling a function
const movieTitles = movies.map(movie => movie.title);
console.log(movieTitles);
// ["The JavaScript Adventure", "Array of Darkness", "Promise Me Forever", "The DOM Chronicles", "Recursion"]

// filter - creates a new array with elements that pass a test
const highRatedMovies = movies.filter(movie => movie.rating >= 4.5);
console.log(highRatedMovies.length); // 3

// find - returns the first element that passes a test
const sciFiMovie = movies.find(movie => movie.genre === "Sci-Fi");
console.log(sciFiMovie.title); // "Recursion"

// findIndex - returns the index of the first element that passes a test
const horrorIndex = movies.findIndex(movie => movie.genre === "Horror");
console.log(horrorIndex); // 1

// some - checks if at least one element passes a test
const hasRomance = movies.some(movie => movie.genre === "Romance");
console.log(hasRomance); // true

// every - checks if all elements pass a test
const allHighRated = movies.every(movie => movie.rating >= 4.0);
console.log(allHighRated); // true

// reduce - reduces the array to a single value
const totalRating = movies.reduce((sum, movie) => sum + movie.rating, 0);
const averageRating = totalRating / movies.length;
console.log(averageRating); // ~4.44`}
              />
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Loops in Action: Movie Example
              </h2>
              <p className="mb-4">
                Let&apos;s see how loops are used in a movie data processing
                scenario:
              </p>

              <CodeExample
                code={`// Movie Data Processing System
// Demonstrating various loop applications with movie data

// Sample movie dataset
const movieData = [
  { id: 1, title: "The JavaScript Adventure", genre: "Action", rating: 4.8, views: 1500000, releaseYear: 2023 },
  { id: 2, title: "Array of Darkness", genre: "Horror", rating: 4.5, views: 1200000, releaseYear: 2022 },
  { id: 3, title: "Promise Me Forever", genre: "Romance", rating: 4.2, views: 900000, releaseYear: 2023 },
  { id: 4, title: "The DOM Chronicles", genre: "Fantasy", rating: 4.0, views: 800000, releaseYear: 2021 },
  { id: 5, title: "Recursion", genre: "Sci-Fi", rating: 4.7, views: 1100000, releaseYear: 2022 }
];

// 1. Generate movie catalog using for loop
console.log("MOVIE CATALOG:");
for (let i = 0; i < movieData.length; i++) {
  const movie = movieData[i];
  console.log(\`\${i + 1}. \${movie.title} (\${movie.releaseYear}) - \${movie.genre} - Rating: \${movie.rating}/5\`);
}

// 2. Calculate total views using for...of loop
let totalViews = 0;
for (const movie of movieData) {
  totalViews += movie.views;
}
console.log(\`\\nTotal Movie Views: \${totalViews.toLocaleString()}\`);

// 3. Create genre index using for...of and objects
const genreIndex = {};
for (const movie of movieData) {
  if (!genreIndex[movie.genre]) {
    genreIndex[movie.genre] = [];
  }
  genreIndex[movie.genre].push(movie.title);
}

console.log("\\nMOVIES BY GENRE:");
for (const genre in genreIndex) {
  console.log(\`\${genre}:\`);
  for (let i = 0; i < genreIndex[genre].length; i++) {
    console.log(\`  - \${genreIndex[genre][i]}\`);
  }
}

// 4. Finding popular movies using while loop
console.log("\\nPOPULAR MOVIES (>1M views):");
let movieIndex = 0;
while (movieIndex < movieData.length) {
  const movie = movieData[movieIndex];
  if (movie.views >= 1000000) {
    console.log(\`- \${movie.title} (\${movie.views.toLocaleString()} views)\`);
  }
  movieIndex++;
}

// 5. Calculating statistics using array methods (functional approach)
const stats = {
  averageRating: movieData.reduce((sum, movie) => sum + movie.rating, 0) / movieData.length,
  totalMovies: movieData.length,
  newestMovie: movieData.reduce((newest, movie) => 
    movie.releaseYear > newest.releaseYear ? movie : newest, movieData[0]),
  genreCount: Object.keys(genreIndex).length
};

console.log("\\nMOVIE STATISTICS:");
console.log(\`Average Rating: \${stats.averageRating.toFixed(2)}/5\`);
console.log(\`Total Movies: \${stats.totalMovies}\`);
console.log(\`Newest Movie: \${stats.newestMovie.title} (\${stats.newestMovie.releaseYear})\`);
console.log(\`Number of Genres: \${stats.genreCount}\`);

// 6. Building HTML for a movie list (demo)
let htmlOutput = '<ul class="movie-list">';
for (const movie of movieData) {
  htmlOutput += \`
    <li class="movie-item">
      <h3>\${movie.title}</h3>
      <div class="movie-details">
        <span class="year">\${movie.releaseYear}</span>
        <span class="genre">\${movie.genre}</span>
        <span class="rating">\${movie.rating}/5</span>
      </div>
    </li>
  \`;
}
htmlOutput += '</ul>';

console.log("\\nGENERATED HTML STRUCTURE:");
console.log(htmlOutput);`}
              />
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Interactive Exercise</h2>
              <p className="mb-4">
                Try the exercise below to test your understanding of JavaScript
                loops:
              </p>

              <InteractiveExercise
                instructions="Fix the code below to implement a movie searching and filtering system using loops."
                initialCode={`// Movie Searching and Filtering System
// Find and filter movies based on various criteria

const movies = [
  { id: 1, title: "The JavaScript Adventure", genre: "Action", rating: 4.8, year: 2023 },
  { id: 2, title: "Array of Darkness", genre: "Horror", rating: 4.5, year: 2022 },
  { id: 3, title: "Promise Me Forever", genre: "Romance", rating: 4.2, year: 2023 },
  { id: 4, title: "The DOM Chronicles", genre: "Fantasy", rating: 4.0, year: 2021 },
  { id: 5, title: "Recursion", genre: "Sci-Fi", rating: 4.7, year: 2022 },
  { id: 6, title: "The Variable Ultimatum", genre: "Thriller", rating: 3.9, year: 2023 },
  { id: 7, title: "Object of Desire", genre: "Drama", rating: 4.3, year: 2021 },
  { id: 8, title: "The Conditional", genre: "Mystery", rating: 4.1, year: 2022 }
];

// TODO: Implement searchMoviesByTitle function
// It should search for movies whose titles contain the query (case-insensitive)
// Return an array of matching movies
function searchMoviesByTitle(query) {
  // Your code here
}

// TODO: Implement filterMovies function
// It should filter movies based on the provided criteria object
// Criteria can include: minRating, genre, year
// Return an array of movies that match ALL the criteria
function filterMovies(criteria) {
  // Your code here
}

// TODO: Implement getGenres function
// It should return an array of all unique genres in the movie database
function getGenres() {
  // Your code here
}

// TODO: Implement getMoviesByYear function
// It should return an object where the keys are years and values are arrays of movies from that year
function getMoviesByYear() {
  // Your code here
}

// Test the functions
console.log("Search results for 'adventure':");
console.log(searchMoviesByTitle("adventure"));

console.log("\\nFiltered movies (Rating >= 4.5, Year: 2023):");
console.log(filterMovies({ minRating: 4.5, year: 2023 }));

console.log("\\nAll genres:");
console.log(getGenres());

console.log("\\nMovies by year:");
const moviesByYear = getMoviesByYear();
for (const year in moviesByYear) {
  console.log(\`\${year}: \${moviesByYear[year].map(m => m.title).join(", ")}\`);
}`}
                solution={`// Movie Searching and Filtering System
// Find and filter movies based on various criteria

const movies = [
  { id: 1, title: "The JavaScript Adventure", genre: "Action", rating: 4.8, year: 2023 },
  { id: 2, title: "Array of Darkness", genre: "Horror", rating: 4.5, year: 2022 },
  { id: 3, title: "Promise Me Forever", genre: "Romance", rating: 4.2, year: 2023 },
  { id: 4, title: "The DOM Chronicles", genre: "Fantasy", rating: 4.0, year: 2021 },
  { id: 5, title: "Recursion", genre: "Sci-Fi", rating: 4.7, year: 2022 },
  { id: 6, title: "The Variable Ultimatum", genre: "Thriller", rating: 3.9, year: 2023 },
  { id: 7, title: "Object of Desire", genre: "Drama", rating: 4.3, year: 2021 },
  { id: 8, title: "The Conditional", genre: "Mystery", rating: 4.1, year: 2022 }
];

// Implemented searchMoviesByTitle function
function searchMoviesByTitle(query) {
  const results = [];
  const lowerQuery = query.toLowerCase();
  
  for (const movie of movies) {
    if (movie.title.toLowerCase().includes(lowerQuery)) {
      results.push(movie);
    }
  }
  
  return results;
}

// Implemented filterMovies function
function filterMovies(criteria) {
  return movies.filter(movie => {
    // Check all criteria
    if (criteria.minRating && movie.rating < criteria.minRating) {
      return false;
    }
    
    if (criteria.genre && movie.genre !== criteria.genre) {
      return false;
    }
    
    if (criteria.year && movie.year !== criteria.year) {
      return false;
    }
    
    // If all criteria pass or are not specified
    return true;
  });
}

// Implemented getGenres function
function getGenres() {
  const genres = [];
  
  for (const movie of movies) {
    if (!genres.includes(movie.genre)) {
      genres.push(movie.genre);
    }
  }
  
  return genres;
}

// Implemented getMoviesByYear function
function getMoviesByYear() {
  const moviesByYear = {};
  
  for (const movie of movies) {
    const year = movie.year;
    
    if (!moviesByYear[year]) {
      moviesByYear[year] = [];
    }
    
    moviesByYear[year].push(movie);
  }
  
  return moviesByYear;
}

// Test the functions
console.log("Search results for 'adventure':");
console.log(searchMoviesByTitle("adventure"));

console.log("\\nFiltered movies (Rating >= 4.5, Year: 2023):");
console.log(filterMovies({ minRating: 4.5, year: 2023 }));

console.log("\\nAll genres:");
console.log(getGenres());

console.log("\\nMovies by year:");
const moviesByYear = getMoviesByYear();
for (const year in moviesByYear) {
  console.log(\`\${year}: \${moviesByYear[year].map(m => m.title).join(", ")}\`);
}`}
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-20">
              <h2 className="text-xl font-bold mb-4">Quick Reference</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-orange-500">for Loop</h3>
                  <p className="text-sm text-gray-400">
                    Classic loop with initialization, condition, and update.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`for (let i = 0; i < 10; i++) {
  // code to repeat
}`}
                      language="javascript"
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-orange-500">while Loop</h3>
                  <p className="text-sm text-gray-400">
                    Repeats as long as condition is true.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`while (condition) {
  // code to repeat
}`}
                      language="javascript"
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-orange-500">
                    do-while Loop
                  </h3>
                  <p className="text-sm text-gray-400">
                    Executes at least once, then repeats while condition is
                    true.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`do {
  // code to repeat
} while (condition);`}
                      language="javascript"
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-orange-500">
                    for...of / for...in
                  </h3>
                  <p className="text-sm text-gray-400">
                    Iterate over values or properties.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`// For arrays, strings, etc.
for (const item of iterable) { }

// For object properties
for (const key in object) { }`}
                      language="javascript"
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-orange-500">
                    Loop Control
                  </h3>
                  <p className="text-sm text-gray-400">
                    Statements to control loop execution.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`break;    // Exit the loop
continue; // Skip to next iteration`}
                      language="javascript"
                    />
                  </pre>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Array Methods</h3>
                  <ul className="text-sm text-gray-400 list-disc pl-4 space-y-1 mt-2">
                    <li>forEach() - executes for each element</li>
                    <li>map() - creates new array with results</li>
                    <li>filter() - creates array with matching elements</li>
                    <li>reduce() - accumulates values into one</li>
                    <li>find() - returns first matching element</li>
                  </ul>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Common Mistakes</h3>
                  <ul className="text-sm text-gray-400 list-disc pl-4 space-y-1 mt-2">
                    <li>Infinite loops (forgetting to update counter)</li>
                    <li>Off-by-one errors (wrong condition)</li>
                    <li>Using for-in with arrays (use for-of instead)</li>
                    <li>Modifying arrays while iterating</li>
                  </ul>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Related Concepts</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Link href="/learn/functions">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Functions
                      </Button>
                    </Link>
                    <Link href="/learn/data-structures">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Data Structures
                      </Button>
                    </Link>
                    <Link href="/learn/conditions">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Conditions
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <div className="flex justify-between">
                  <Link href="/learn/functions">
                    <Button variant="link" className="text-red-600 p-0">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Functions
                    </Button>
                  </Link>
                  <Link href="/learn/dom">
                    <Button variant="link" className="text-red-600 p-0">
                      DOM Manipulation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <Link href="/exercises/loops/easy">
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
