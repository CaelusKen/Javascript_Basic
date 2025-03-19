"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { movies } from "@/lib/data";
import CodeExample from "@/components/code-example";

export default function MovieFilterExercise() {
  const [minRating, setMinRating] = useState(3);
  const [filteredMovies, setFilteredMovies] = useState(
    movies.filter((movie) => movie.rating >= 3)
  );

  const handleRatingChange = (value: number[]) => {
    const newMinRating = value[0];
    setMinRating(newMinRating);

    // Filter movies based on the rating
    const filtered = movies.filter((movie) => movie.rating >= newMinRating);
    setFilteredMovies(filtered);
  };

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
          <h1 className="text-3xl font-bold">Movie Filter Exercise</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Exercise: Filter Movies by Rating
              </h2>
              <p className="mb-6">
                In this exercise, we&apos;ll use JavaScript conditions to filter
                movies based on their rating. Move the slider to set a minimum
                rating and see how the movie list updates.
              </p>

              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span>Minimum Rating:</span>
                  <span className="text-yellow-500 font-bold">
                    {minRating.toFixed(1)} ★
                  </span>
                </div>
                <Slider
                  defaultValue={[3]}
                  max={5}
                  min={1}
                  step={0.1}
                  onValueChange={handleRatingChange}
                  className="mb-6"
                />

                <div className="p-4 bg-gray-950 rounded-lg">
                  <p className="mb-2">
                    Movies with rating ≥ {minRating.toFixed(1)}:
                  </p>
                  <p className="text-yellow-500 font-bold">
                    {filteredMovies.length} movies found
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {filteredMovies.map((movie) => (
                  <div
                    key={movie.id}
                    className="bg-gray-950 rounded-lg overflow-hidden border border-gray-800"
                  >
                    <div className="p-3">
                      <h3 className="font-semibold text-sm truncate">
                        {movie.title}
                      </h3>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-400">
                          {movie.year}
                        </span>
                        <span className="text-xs text-yellow-500">
                          ★ {movie.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">The Code Behind It</h2>
              <p className="mb-4">
                Here&apos;s the JavaScript code that powers this filter
                functionality:
              </p>

              <CodeExample
                code={`// Our movie data (simplified version)
const movies = [
  { id: 1, title: "The JavaScript Adventure", year: 2023, rating: 4.8 },
  { id: 2, title: "Array of Darkness", year: 2022, rating: 4.5 },
  { id: 3, title: "Promise Me Forever", year: 2023, rating: 4.2 },
  // ... more movies
];

// The filter function
function filterMoviesByRating(minRating) {
  // Using the array filter method with a condition
  const filteredMovies = movies.filter(movie => {
    // This is our condition: rating must be >= minRating
    return movie.rating >= minRating;
  });
  
  return filteredMovies;
}

// Example usage
const minRating = 4.0;
const highRatedMovies = filterMoviesByRating(minRating);
console.log(\`Found \${highRatedMovies.length} movies with rating ≥ \${minRating}\`);

// We can also use arrow function shorthand
const topMovies = movies.filter(movie => movie.rating >= 4.5);
console.log(\`Top movies: \${topMovies.map(m => m.title).join(', ')}\`);`}
              />

              <h3 className="text-xl font-semibold mt-6 mb-2">
                Key Concepts Used
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Conditions:</strong> Using the comparison operator{" "}
                  <code className="bg-gray-950 px-1 rounded">&gt;=</code> to
                  check if a movie&apos;s rating meets our criteria
                </li>
                <li>
                  <strong>Array methods:</strong> Using{" "}
                  <code className="bg-gray-950 px-1 rounded">filter()</code> to
                  create a new array with only the elements that pass our
                  condition
                </li>
                <li>
                  <strong>Arrow functions:</strong> Using the shorthand syntax{" "}
                  <code className="bg-gray-950 px-1 rounded">
                    movie =&gt; movie.rating &gt;= minRating
                  </code>{" "}
                  for our filter callback
                </li>
                <li>
                  <strong>Template literals:</strong> Using backticks and{" "}
                  <code className="bg-gray-950 px-1 rounded">${"{}"}</code> for
                  string interpolation
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Challenge: Extend the Filter
              </h2>
              <p className="mb-4">
                Try to extend this filter functionality with these challenges:
              </p>

              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Multiple Filters:</strong> Add a year filter to show
                  only movies from a specific year range
                  <pre className="bg-gray-950 p-2 rounded text-sm mt-1">
                    <code>{`// Hint:
const filteredByYearAndRating = movies.filter(movie => 
  movie.rating >= minRating && 
  movie.year >= minYear && 
  movie.year <= maxYear
);`}</code>
                  </pre>
                </li>
                <li>
                  <strong>Genre Filter:</strong> Add a dropdown to filter movies
                  by genre
                  <pre className="bg-gray-950 p-2 rounded text-sm mt-1">
                    <code>{`// Hint:
const filteredByGenre = movies.filter(movie => 
  selectedGenre === "All" || movie.genre === selectedGenre
);`}</code>
                  </pre>
                </li>
                <li>
                  <strong>Combined Filters:</strong> Create a function that
                  combines all filters and returns the filtered movies
                  <pre className="bg-gray-950 p-2 rounded text-sm mt-1">
                    <code>{`// Hint:
function applyAllFilters(movies, filters) {
  return movies.filter(movie => {
    let passesFilter = true;
    
    if (filters.minRating) {
      passesFilter = passesFilter && movie.rating >= filters.minRating;
    }
    
    if (filters.genre && filters.genre !== "All") {
      passesFilter = passesFilter && movie.genre === filters.genre;
    }
    
    // Add more filter conditions as needed
    
    return passesFilter;
  });
}`}</code>
                  </pre>
                </li>
              </ol>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-20">
              <h2 className="text-xl font-bold mb-4">JavaScript Concepts</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-yellow-500">Conditions</h3>
                  <p className="text-sm text-gray-400">
                    Conditions allow us to make decisions in our code based on
                    certain criteria.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`if (movie.rating >= 4.5) {
  console.log("Top rated!");
}`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-green-500">
                    Array Methods
                  </h3>
                  <p className="text-sm text-gray-400">
                    Methods like filter() create new arrays based on conditions.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`movies.filter(m => m.rating > 4)`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-500">
                    Comparison Operators
                  </h3>
                  <p className="text-sm text-gray-400">
                    Operators like &gt;, &lt;, &gt;=, &lt;=, ===, and !==
                    compare values.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <code>{`x > y   // greater than
x >= y  // greater than or equal
x === y // strictly equal`}</code>
                  </pre>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Related Exercises</h3>
                  <div className="flex flex-col space-y-2 mt-2">
                    <Link href="/exercises/movie-search">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start border-gray-700 hover:border-red-600"
                      >
                        Movie Search
                      </Button>
                    </Link>
                    <Link href="/exercises/movie-sorter">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start border-gray-700 hover:border-red-600"
                      >
                        Movie Sorter
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <Link href="/learn/conditions">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Learn More About Conditions
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
