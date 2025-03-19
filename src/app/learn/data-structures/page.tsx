import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CodeExample from "@/components/code-example";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InteractiveExercise from "@/components/interactive-exercise";

export default function DataStructuresPage() {
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
          <h1 className="text-3xl font-bold">JavaScript Data Structures</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Common Data Structures
              </h2>
              <p className="mb-4">
                Data structures are specialized formats for organizing,
                processing, retrieving, and storing data. JavaScript provides
                several built-in data structures to work with collections of
                data.
              </p>

              <Tabs defaultValue="arrays" className="mb-6">
                <TabsList className="bg-gray-950 border-gray-800">
                  <TabsTrigger
                    value="arrays"
                    className="data-[state=active]:bg-purple-600"
                  >
                    Arrays
                  </TabsTrigger>
                  <TabsTrigger
                    value="objects"
                    className="data-[state=active]:bg-purple-600"
                  >
                    Objects
                  </TabsTrigger>
                  <TabsTrigger
                    value="maps-sets"
                    className="data-[state=active]:bg-purple-600"
                  >
                    Maps & Sets
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="arrays" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">Arrays</h3>
                  <p className="mb-4">
                    Arrays are ordered collections of values. They can store
                    multiple values of any type in a single variable.
                  </p>
                  <CodeExample
                    code={`// Creating arrays
const movies = ["The JavaScript Adventure", "Array of Darkness", "Promise Me Forever"];
const mixedArray = [1, "two", true, { name: "object" }, [1, 2, 3]];
const newArray = new Array(3); // Creates an array with 3 empty slots

// Accessing array elements (zero-based indexing)
console.log(movies[0]); // "The JavaScript Adventure"
console.log(movies[movies.length - 1]); // "Promise Me Forever" (last element)

// Modifying arrays
movies[1] = "The Variable Ultimatum"; // Change an element
movies.push("Recursion"); // Add to the end
movies.unshift("The DOM Chronicles"); // Add to the beginning
const removedLast = movies.pop(); // Remove from the end
const removedFirst = movies.shift(); // Remove from the beginning
movies.splice(1, 1, "Object of Desire"); // Remove 1 element at index 1 and insert a new one

// Array methods
const movieCount = movies.length; // Get the number of elements
const joinedMovies = movies.join(", "); // Join elements into a string
const includesMovie = movies.includes("Recursion"); // Check if an element exists
const movieIndex = movies.indexOf("The JavaScript Adventure"); // Find the index of an element

// Iterating through arrays
// Using for loop
for (let i = 0; i < movies.length; i++) {
  console.log(\`Movie \${i + 1}: \${movies[i]}\`);
}

// Using for...of loop
for (const movie of movies) {
  console.log(\`Movie: \${movie}\`);
}

// Using forEach method
movies.forEach((movie, index) => {
  console.log(\`Movie \${index + 1}: \${movie}\`);
});

// Array transformation methods
const movieTitles = movies.map(movie => movie.toUpperCase()); // Create a new array with transformed values
const longMovies = movies.filter(movie => movie.length > 15); // Create a new array with filtered values
const allLongTitles = movies.every(movie => movie.length > 10); // Check if all elements satisfy a condition
const hasShortTitle = movies.some(movie => movie.length < 12); // Check if any element satisfies a condition
const totalLength = movies.reduce((sum, movie) => sum + movie.length, 0); // Reduce array to a single value`}
                  />
                </TabsContent>

                <TabsContent value="objects" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">Objects</h3>
                  <p className="mb-4">
                    Objects are collections of key-value pairs. They allow you
                    to store related data and functionality together.
                  </p>
                  <CodeExample
                    code={`// Creating objects
const movie = {
  title: "The JavaScript Adventure",
  year: 2023,
  rating: 4.8,
  genres: ["Action", "Adventure"],
  director: "Code Master",
  isReleased: true,
  cast: ["Dev Developer", "Sara Script", "Tom TypeScript"],
  
  // Object method
  getInfo: function() {
    return \`\${this.title} (\${this.year}) - Rating: \${this.rating}/5\`;
  }
};

// Accessing object properties
console.log(movie.title); // "The JavaScript Adventure" (dot notation)
console.log(movie["rating"]); // 4.8 (bracket notation)
console.log(movie.getInfo()); // "The JavaScript Adventure (2023) - Rating: 4.8/5" (method call)

// Adding and modifying properties
movie.runtime = 120; // Add a new property
movie.rating = 4.9; // Modify an existing property
movie.getFullInfo = function() { // Add a new method
  return \`\${this.title} (\${this.year}) - \${this.runtime} min - Rating: \${this.rating}/5\`;
};

// Deleting properties
delete movie.isReleased;

// Checking if a property exists
console.log("director" in movie); // true
console.log(movie.hasOwnProperty("producer")); // false

// Object methods
const keys = Object.keys(movie); // Get all property keys as an array
const values = Object.values(movie); // Get all property values as an array
const entries = Object.entries(movie); // Get all [key, value] pairs as an array

// Iterating through objects
// Using for...in loop
for (const key in movie) {
  if (movie.hasOwnProperty(key) && typeof movie[key] !== "function") {
    console.log(\`\${key}: \${movie[key]}\`);
  }
}

// Using Object.entries with forEach
Object.entries(movie).forEach(([key, value]) => {
  if (typeof value !== "function") {
    console.log(\`\${key}: \${value}\`);
  }
});

// Copying objects
const movieCopy = Object.assign({}, movie); // Shallow copy
const movieCopy2 = { ...movie }; // Spread operator (shallow copy)
const deepCopy = JSON.parse(JSON.stringify(movie)); // Deep copy (loses methods and special objects)`}
                  />
                </TabsContent>

                <TabsContent value="maps-sets" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">Maps and Sets</h3>
                  <p className="mb-4">
                    Maps and Sets are newer data structures introduced in ES6.
                    Maps are collections of key-value pairs where keys can be of
                    any type, and Sets are collections of unique values.
                  </p>
                  <CodeExample
                    code={`// Map - key-value pairs with any type of key
// Creating a Map
const movieRatings = new Map();

// Adding entries
movieRatings.set("The JavaScript Adventure", 4.8);
movieRatings.set("Array of Darkness", 4.5);
movieRatings.set("Promise Me Forever", 4.2);

// Using objects as keys (not possible with regular objects)
const movie1 = { title: "The DOM Chronicles" };
const movie2 = { title: "Recursion" };
movieRatings.set(movie1, 4.0);
movieRatings.set(movie2, 4.7);

// Getting values
console.log(movieRatings.get("The JavaScript Adventure")); // 4.8
console.log(movieRatings.get(movie1)); // 4.0

// Checking if a key exists
console.log(movieRatings.has("Array of Darkness")); // true

// Deleting entries
movieRatings.delete("Promise Me Forever");

// Size of the Map
console.log(movieRatings.size); // 4

// Iterating through a Map
// Using forEach
movieRatings.forEach((rating, title) => {
  console.log(\`\${title}: \${rating}/5\`);
});

// Using for...of with destructuring
for (const [title, rating] of movieRatings) {
  console.log(\`\${title}: \${rating}/5\`);
}

// Set - collection of unique values
// Creating a Set
const genres = new Set(["Action", "Adventure", "Drama", "Action"]); // Duplicates are automatically removed

// Adding values
genres.add("Comedy");
genres.add("Horror");

// Checking if a value exists
console.log(genres.has("Drama")); // true

// Deleting values
genres.delete("Horror");

// Size of the Set
console.log(genres.size); // 4

// Iterating through a Set
// Using forEach
genres.forEach(genre => {
  console.log(genre);
});

// Using for...of
for (const genre of genres) {
  console.log(genre);
}

// Converting between Arrays and Sets
const genreArray = Array.from(genres); // Set to Array
const uniqueGenres = new Set(["Action", "Comedy", "Action", "Drama"]); // Array to Set (removes duplicates)`}
                  />
                </TabsContent>
              </Tabs>

              <h3 className="text-xl font-semibold mb-2">
                Advanced Array Methods
              </h3>
              <p className="mb-4">
                JavaScript arrays have powerful methods for data transformation
                and manipulation.
              </p>
              <CodeExample
                code={`// Sample movie data
const movies = [
  { title: "The JavaScript Adventure", year: 2023, rating: 4.8, genre: "Action" },
  { title: "Array of Darkness", year: 2022, rating: 4.5, genre: "Horror" },
  { title: "Promise Me Forever", year: 2023, rating: 4.2, genre: "Romance" },
  { title: "The DOM Chronicles", year: 2021, rating: 4.0, genre: "Fantasy" },
  { title: "Recursion", year: 2022, rating: 4.7, genre: "Sci-Fi" }
];

// map() - transform each element
const movieTitles = movies.map(movie => movie.title);
console.log(movieTitles);
// ["The JavaScript Adventure", "Array of Darkness", "Promise Me Forever", "The DOM Chronicles", "Recursion"]

// filter() - create a new array with elements that pass a test
const highRatedMovies = movies.filter(movie => movie.rating >= 4.5);
console.log(highRatedMovies.length); // 3

// find() - return the first element that passes a test
const sciFiMovie = movies.find(movie => movie.genre === "Sci-Fi");
console.log(sciFiMovie.title); // "Recursion"

// sort() - sort the elements of an array
// Note: sort() modifies the original array, so we create a copy first
const sortedByRating = [...movies].sort((a, b) => b.rating - a.rating);
console.log(sortedByRating[0].title); // "The JavaScript Adventure"

// reduce() - reduce the array to a single value
const averageRating = movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
console.log(averageRating); // ~4.44

// some() - check if at least one element passes a test
const hasRomance = movies.some(movie => movie.genre === "Romance");
console.log(hasRomance); // true

// every() - check if all elements pass a test
const allRecent = movies.every(movie => movie.year >= 2020);
console.log(allRecent); // true

// Chaining methods
const recentHighRatedTitles = movies
  .filter(movie => movie.year >= 2022 && movie.rating >= 4.5)
  .map(movie => movie.title);
console.log(recentHighRatedTitles); // ["The JavaScript Adventure", "Array of Darkness", "Recursion"]`}
              />
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Data Structures in Action: Movie Database
              </h2>
              <p className="mb-4">
                Let&apos;s see how different data structures can be used to
                build a movie database:
              </p>

              <CodeExample
                code={`// Movie Database using various data structures
// Movie data stored in an array of objects
const movieDatabase = [
  {
    id: 1,
    title: "The JavaScript Adventure",
    year: 2023,
    rating: 4.8,
    genre: "Action/Adventure",
    director: "Code Master",
    cast: ["Dev Developer", "Sara Script", "Tom TypeScript"],
    tags: ["javascript", "adventure", "coding"]
  },
  {
    id: 2,
    title: "Array of Darkness",
    year: 2022,
    rating: 4.5,
    genre: "Horror",
    director: "Loop Walker",
    cast: ["Array Arnie", "Object Olivia", "Boolean Bob"],
    tags: ["arrays", "horror", "loops"]
  },
  {
    id: 3,
    title: "Promise Me Forever",
    year: 2023,
    rating: 4.2,
    genre: "Romance",
    director: "Async Annie",
    cast: ["Promise Paul", "Await Amy", "Callback Carl"],
    tags: ["promises", "async", "romance"]
  }
];

// Using a Map for quick ID-based lookups
const moviesById = new Map();
movieDatabase.forEach(movie => {
  moviesById.set(movie.id, movie);
});

// Using a Map for director filmographies
const directorFilmographies = new Map();
movieDatabase.forEach(movie => {
  if (!directorFilmographies.has(movie.director)) {
    directorFilmographies.set(movie.director, []);
  }
  directorFilmographies.get(movie.director).push(movie);
});

// Using a Set for unique genres
const uniqueGenres = new Set();
movieDatabase.forEach(movie => {
  // Split genres like "Action/Adventure" into separate genres
  movie.genre.split("/").forEach(genre => {
    uniqueGenres.add(genre.trim());
  });
});

// Using an object for tag-based search index
const tagIndex = {};
movieDatabase.forEach(movie => {
  movie.tags.forEach(tag => {
    if (!tagIndex[tag]) {
      tagIndex[tag] = [];
    }
    tagIndex[tag].push(movie.id);
  });
});

// Database operations
// 1. Get a movie by ID
function getMovieById(id) {
  return moviesById.get(id);
}

// 2. Get all movies by a director
function getMoviesByDirector(director) {
  return directorFilmographies.get(director) || [];
}

// 3. Get all movies with a specific tag
function getMoviesByTag(tag) {
  const movieIds = tagIndex[tag] || [];
  return movieIds.map(id => getMovieById(id));
}

// 4. Search movies by title (case-insensitive)
function searchMoviesByTitle(query) {
  const lowerQuery = query.toLowerCase();
  return movieDatabase.filter(movie => 
    movie.title.toLowerCase().includes(lowerQuery)
  );
}

// 5. Get movies sorted by rating
function getMoviesSortedByRating(ascending = false) {
  return [...movieDatabase].sort((a, b) => 
    ascending ? a.rating - b.rating : b.rating - a.rating
  );
}

// 6. Get all unique genres
function getAllGenres() {
  return Array.from(uniqueGenres);
}

// Example usage
console.log(getMovieById(2).title); // "Array of Darkness"
console.log(getMoviesByDirector("Code Master").length); // 1
console.log(getMoviesByTag("promises").length); // 1
console.log(searchMoviesByTitle("array").length); // 1
console.log(getMoviesSortedByRating()[0].title); // "The JavaScript Adventure"
console.log(getAllGenres()); // ["Action", "Adventure", "Horror", "Romance"]`}
              />
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Interactive Exercise</h2>
              <p className="mb-4">
                Try the exercise below to test your understanding of JavaScript
                data structures:
              </p>

              <InteractiveExercise
                instructions="Fix the code below to implement a movie collection manager using appropriate data structures."
                initialCode={`// Movie Collection Manager
// This code should allow adding, removing, and searching for movies

// TODO: Fix the movie collection data structure
let movieCollection = {};

// TODO: Fix the addMovie function
function addMovie(id, title, director, year, rating) {
  movieCollection[id] = title;
}

// TODO: Fix the removeMovie function
function removeMovie(id) {
  delete movieCollection[id];
}

// TODO: Fix the getMovieById function
function getMovieById(id) {
  return movieCollection[id];
}

// TODO: Fix the searchMovies function to search by title or director
function searchMovies(query) {
  // Should return an array of movies that match the query
  return [];
}

// TODO: Fix the getHighRatedMovies function
function getHighRatedMovies(minRating) {
  // Should return an array of movies with rating >= minRating
  return [];
}

// TODO: Fix the getMoviesByYear function
function getMoviesByYear(year) {
  // Should return an array of movies from a specific year
  return [];
}

// Test the functions
addMovie(1, "The JavaScript Adventure", "Code Master", 2023, 4.8);
addMovie(2, "Array of Darkness", "Loop Walker", 2022, 4.5);
addMovie(3, "Promise Me Forever", "Async Annie", 2023, 4.2);

console.log(getMovieById(1)); // Should return the full movie object
console.log(searchMovies("Array")); // Should find "Array of Darkness"
console.log(getHighRatedMovies(4.5)); // Should return movies rated 4.5+
console.log(getMoviesByYear(2023)); // Should return movies from 2023`}
                solution={`// Movie Collection Manager
// This code should allow adding, removing, and searching for movies

// Fixed movie collection data structure - using an array of objects
let movieCollection = [];

// Fixed addMovie function
function addMovie(id, title, director, year, rating) {
  movieCollection.push({
    id: id,
    title: title,
    director: director,
    year: year,
    rating: rating
  });
}

// Fixed removeMovie function
function removeMovie(id) {
  const index = movieCollection.findIndex(movie => movie.id === id);
  if (index !== -1) {
    movieCollection.splice(index, 1);
    return true;
  }
  return false;
}

// Fixed getMovieById function
function getMovieById(id) {
  return movieCollection.find(movie => movie.id === id);
}

// Fixed searchMovies function to search by title or director
function searchMovies(query) {
  // Case-insensitive search
  const lowerQuery = query.toLowerCase();
  return movieCollection.filter(movie => 
    movie.title.toLowerCase().includes(lowerQuery) || 
    movie.director.toLowerCase().includes(lowerQuery)
  );
}

// Fixed getHighRatedMovies function
function getHighRatedMovies(minRating) {
  return movieCollection.filter(movie => movie.rating >= minRating);
}

// Fixed getMoviesByYear function
function getMoviesByYear(year) {
  return movieCollection.filter(movie => movie.year === year);
}

// Test the functions
addMovie(1, "The JavaScript Adventure", "Code Master", 2023, 4.8);
addMovie(2, "Array of Darkness", "Loop Walker", 2022, 4.5);
addMovie(3, "Promise Me Forever", "Async Annie", 2023, 4.2);

console.log(getMovieById(1)); // Should return the full movie object
console.log(searchMovies("Array")); // Should find "Array of Darkness"
console.log(getHighRatedMovies(4.5)); // Should return movies rated 4.5+
console.log(getMoviesByYear(2023)); // Should return movies from 2023`}
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-20">
              <h2 className="text-xl font-bold mb-4">Quick Reference</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-purple-500">Arrays</h3>
                  <p className="text-sm text-gray-400">
                    Ordered collections of values.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`// Creation
const arr = [1, 2, 3];

// Methods
arr.push(4);     // Add to end
arr.pop();       // Remove from end
arr.unshift(0);  // Add to start
arr.shift();     // Remove from start
arr.splice(1, 1, 'new'); // Replace`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-purple-500">Objects</h3>
                  <p className="text-sm text-gray-400">
                    Collections of key-value pairs.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`// Creation
const obj = { key: 'value' };

// Access
obj.key;         // Dot notation
obj['key'];      // Bracket notation

// Methods
Object.keys(obj);    // Get keys
Object.values(obj);  // Get values
Object.entries(obj); // Get pairs`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-purple-500">Maps & Sets</h3>
                  <p className="text-sm text-gray-400">
                    ES6 collections with special features.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`// Map
const map = new Map();
map.set(key, value);  // Add entry
map.get(key);         // Get value
map.has(key);         // Check key
map.delete(key);      // Remove entry

// Set
const set = new Set();
set.add(value);       // Add value
set.has(value);       // Check value
set.delete(value);    // Remove value`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-purple-500">
                    Array Methods
                  </h3>
                  <p className="text-sm text-gray-400">
                    Powerful methods for data manipulation.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`arr.map(fn)      // Transform
arr.filter(fn)   // Filter
arr.find(fn)     // Find first
arr.reduce(fn)   // Reduce to value
arr.sort(fn)     // Sort
arr.some(fn)     // Any match?
arr.every(fn)    // All match?`}</code>
                  </pre>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Common Operations</h3>
                  <ul className="text-sm text-gray-400 list-disc pl-4 space-y-1 mt-2">
                    <li>Iterating with for...of, for...in, forEach</li>
                    <li>Copying with spread operator, Object.assign</li>
                    <li>Destructuring arrays and objects</li>
                    <li>Converting between data structures</li>
                  </ul>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Related Concepts</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Link href="/learn/conditions">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Conditions
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
                    <Link href="/learn/functions">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Functions
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <div className="flex justify-between">
                  <Link href="/learn/conditions">
                    <Button variant="link" className="text-red-600 p-0">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Conditions
                    </Button>
                  </Link>
                  <Link href="/learn/functions">
                    <Button variant="link" className="text-red-600 p-0">
                      Functions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <Link href="/exercises/data-structures/medium">
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
