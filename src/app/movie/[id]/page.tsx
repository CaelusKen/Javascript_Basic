import { ArrowLeft, Clock, Star, Tag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { movies } from "@/lib/data";
import CodeExample from "@/components/code-example";
import SiteHeader from "@/components/site-header";

interface MoviePageProps {
  params: { id: string };
  searchParams?: Record<string, string | string[] | undefined>; // Optional for query parameters
}

export default function MoviePage({ params }: MoviePageProps) {
  const movieId = Number.parseInt(params.id, 10);
  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Movie Not Found</h1>
          <p className="mb-6">
            The movie you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/">
            <Button className="bg-red-600 hover:bg-red-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Determine related exercises based on movie title or concepts
  const getRelatedExercises = () => {
    if (movie.title.includes("JavaScript")) {
      return [
        { title: "Variables Basics", path: "/exercises/variables/easy" },
        { title: "Data Types in Action", path: "/exercises/data-types/easy" },
      ];
    } else if (movie.title.includes("Array")) {
      return [
        { title: "Data Structures", path: "/exercises/data-structures/medium" },
        { title: "Array Operations", path: "/exercises/data-structures/easy" },
      ];
    } else if (movie.title.includes("Promise")) {
      return [
        { title: "Async Programming", path: "/exercises/functions/medium" },
        { title: "Promises in Action", path: "/exercises/functions/hard" },
      ];
    } else if (movie.title.includes("Conditional")) {
      return [
        { title: "Conditional Logic", path: "/exercises/conditions/easy" },
        { title: "Advanced Conditions", path: "/exercises/conditions/medium" },
      ];
    } else {
      return [
        {
          title: "Movie Rating Classifier",
          path: "/exercises/conditions/easy",
        },
        {
          title: "Movie Database Queries",
          path: "/exercises/data-structures/medium",
        },
      ];
    }
  };

  const relatedExercises = getRelatedExercises();

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* Movie Hero */}
      <div className="relative h-[500px] w-full">
        <div className="absolute inset-0">
          <img
            src={
              movie.backdrop ||
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop"
            }
            alt={movie.title}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="absolute top-20 left-4 z-10">
          <Link href="/">
            <Button
              variant="outline"
              className="border-gray-700 bg-black/50 text-white hover:bg-black/70"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="flex items-center">
              <Star className="mr-1 h-4 w-4 text-yellow-500" />
              {movie.rating}/5
            </span>
            <span className="flex items-center">
              <Clock className="mr-1 h-4 w-4 text-gray-400" />
              {movie.runtime} min
            </span>
            <span className="flex items-center">
              <Tag className="mr-1 h-4 w-4 text-gray-400" />
              {movie.genre}
            </span>
            <span>{movie.year}</span>
          </div>
          <p className="text-lg">{movie.description}</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Movie Details */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-900 border-gray-800">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Movie Details</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-gray-400 text-sm">Director</h3>
                    <p>{movie.director}</p>
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-sm">Cast</h3>
                    <p>{movie.cast.join(", ")}</p>
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-sm">Language</h3>
                    <p>{movie.language}</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-6">
              <Card className="bg-gray-900 border-gray-800">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">Related Exercises</h2>
                  <div className="space-y-3">
                    {relatedExercises.map((exercise, index) => (
                      <Link key={index} href={exercise.path}>
                        <Button
                          variant="outline"
                          className="w-full justify-start border-red-600 text-white hover:bg-red-600"
                        >
                          {exercise.title}
                        </Button>
                      </Link>
                    ))}
                    <Link href="/exercises">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-gray-400 hover:text-white"
                      >
                        View All Exercises
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* JavaScript Learning Section */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900 border-gray-800 mb-8">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  JavaScript Concepts in this Movie
                </h2>
                <p className="mb-6">
                  Let&apos;s explore JavaScript concepts using data from &quot;
                  {movie.title}&quot;. Below are examples of variables, data
                  types, conditions, and data structures.
                </p>

                <div className="space-y-8">
                  {/* Variables Example */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-red-600">
                      Variables
                    </h3>
                    <p className="mb-4">
                      Variables are containers for storing data values.
                      Let&apos;s create variables for this movie:
                    </p>
                    <CodeExample
                      code={`// Variable declaration and assignment
const movieTitle = "${movie.title}";
let movieRating = ${movie.rating};
var releaseYear = ${movie.year};

// We can change the value of variables declared with let
movieRating = ${movie.rating + 0.1};

// But we cannot change constants
// movieTitle = "New Title"; // This would cause an error

console.log(movieTitle); // "${movie.title}"
console.log(movieRating); // ${movie.rating + 0.1}
console.log(releaseYear); // ${movie.year}`}
                    />
                  </div>

                  {/* Data Types Example */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-red-600">
                      Data Types
                    </h3>
                    <p className="mb-4">
                      JavaScript has different data types like strings, numbers,
                      booleans, arrays, and objects:
                    </p>
                    <CodeExample
                      code={`// String
const title = "${movie.title}";
console.log(typeof title); // "string"

// Number
const rating = ${movie.rating};
console.log(typeof rating); // "number"

// Boolean
const isPopular = ${movie.rating > 4};
console.log(typeof isPopular); // "boolean"

// Array
const cast = ${JSON.stringify(movie.cast)};
console.log(Array.isArray(cast)); // true

// Object
const movieDetails = {
  title: "${movie.title}",
  year: ${movie.year},
  rating: ${movie.rating},
  director: "${movie.director}"
};
console.log(typeof movieDetails); // "object"`}
                    />
                  </div>

                  {/* Conditions Example */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-red-600">
                      Conditions
                    </h3>
                    <p className="mb-4">
                      Conditions allow us to make decisions in our code based on
                      certain criteria:
                    </p>
                    <CodeExample
                      code={`// If-else statement
const rating = ${movie.rating};

if (rating >= 4.5) {
  console.log("This is an excellent movie!");
} else if (rating >= 4) {
  console.log("This is a very good movie!");
} else if (rating >= 3) {
  console.log("This is a good movie.");
} else {
  console.log("You might want to watch something else.");
}

// Ternary operator
const recommendation = rating >= 4 
  ? "Highly recommended!" 
  : "Watch at your discretion.";
console.log(recommendation);

// Switch statement
const genre = "${movie.genre}";
switch (genre) {
  case "Action":
    console.log("Expect exciting sequences!");
    break;
  case "Drama":
    console.log("Expect emotional moments!");
    break;
  case "Comedy":
    console.log("Expect to laugh!");
    break;
  default:
    console.log("Enjoy the movie!");
}`}
                    />
                  </div>

                  {/* Data Structures Example */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-red-600">
                      Data Structures
                    </h3>
                    <p className="mb-4">
                      Data structures help us organize and store data
                      efficiently:
                    </p>
                    <CodeExample
                      code={`// Array - ordered collection
const cast = ${JSON.stringify(movie.cast)};

// Accessing array elements
console.log(cast[0]); // "${movie.cast[0] || "First cast member"}"

// Array methods
console.log(cast.length); // ${movie.cast.length}
console.log(cast.join(", ")); // "${movie.cast.join(", ")}"

// Object - key-value pairs
const movie = {
  id: ${movie.id},
  title: "${movie.title}",
  year: ${movie.year},
  rating: ${movie.rating},
  genre: "${movie.genre}",
  director: "${movie.director}",
  cast: ${JSON.stringify(movie.cast)}
};

// Accessing object properties
console.log(movie.title); // "${movie.title}"
console.log(movie["year"]); // ${movie.year}

// Object methods
console.log(Object.keys(movie)); // ["id", "title", "year", "rating", "genre", "director", "cast"]
console.log(Object.values(movie)[1]); // "${movie.title}"

// Map - key-value pairs with any type of key
const movieRatings = new Map();
movieRatings.set("${movie.title}", ${movie.rating});
movieRatings.set("Another Movie", 3.5);

console.log(movieRatings.get("${movie.title}")); // ${movie.rating}
console.log(movieRatings.has("${movie.title}")); // true`}
                    />
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex justify-center">
              <Link href="/exercises">
                <Button className="bg-red-600 hover:bg-red-700">
                  Try Interactive Exercises
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export function generateStaticParams() {
  return movies.map((movie) => ({
    id: movie.id.toString(),
  }));
}
