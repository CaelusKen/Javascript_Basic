"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import MovieList from "@/components/movie-list";
import { Button } from "@/components/ui/button";
import { movies } from "@/lib/data";
import FeaturedMovie from "@/components/featured-movie";
import ConceptCard from "@/components/concept-card";
import SiteHeader from "@/components/site-header";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setShowSearchResults(false);
      return;
    }

    const results = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredMovies(results);
    setShowSearchResults(true);
  }, [searchQuery]);

  const concepts = [
    {
      title: "Variables",
      description: "Learn about let, const, and var declarations",
      icon: "Code",
      color: "bg-blue-600",
      path: "/learn/variables",
    },
    {
      title: "Data Types",
      description: "Explore strings, numbers, booleans, and more",
      icon: "Database",
      color: "bg-green-600",
      path: "/learn/data-types",
    },
    {
      title: "Conditions",
      description: "Master if statements, ternary operators, and switch",
      icon: "GitBranch",
      color: "bg-yellow-600",
      path: "/learn/conditions",
    },
    {
      title: "Data Structures",
      description: "Work with arrays, objects, maps, and sets",
      icon: "Layers",
      color: "bg-purple-600",
      path: "/learn/data-structures",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white dark:bg-black dark:text-white">
      {/* Header */}
      <SiteHeader onSearch={setSearchQuery} searchQuery={searchQuery} />

      {showSearchResults ? (
        <main className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">
            Search Results for &quot;{searchQuery}&quot;
          </h2>
          {filteredMovies.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredMovies.map((movie) => (
                <Link
                  href={`/movie/${movie.id}`}
                  key={movie.id}
                  className="transition-transform duration-300 hover:scale-105"
                >
                  <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-600">
                    <div className="relative aspect-[2/3]">
                      <img
                        src={
                          movie.poster ||
                          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
                        }
                        alt={movie.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold truncate">{movie.title}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-gray-400">
                          {movie.year}
                        </span>
                        <span className="text-sm text-yellow-500">
                          ★ {movie.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl mb-2">No movies found</h3>
              <p className="text-gray-400">Try a different search term</p>
            </div>
          )}
        </main>
      ) : (
        <>
          {/* Hero Section */}
          <FeaturedMovie />

          {/* Main Content */}
          <main className="container mx-auto px-4 py-8">
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Popular Movies</h2>
                <Link href="/category/popular">
                  <Button variant="link" className="text-red-600">
                    View All
                  </Button>
                </Link>
              </div>
              <MovieList category="popular" />
            </section>

            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">JavaScript Concepts</h2>
                <Link href="/learn">
                  <Button variant="link" className="text-red-600">
                    View All
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {concepts.map((concept) => (
                  <ConceptCard
                    key={concept.title}
                    title={concept.title}
                    description={concept.description}
                    icon={concept.icon}
                    color={concept.color}
                    path={concept.path}
                  />
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Recently Added</h2>
                <Link href="/category/recent">
                  <Button variant="link" className="text-red-600">
                    View All
                  </Button>
                </Link>
              </div>
              <MovieList category="recent" />
            </section>
          </main>
        </>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-red-600 font-bold text-2xl">JSFLIX</h2>
              <p className="text-gray-400 mt-2">
                Learn JavaScript through interactive movie examples
              </p>
            </div>
            <div className="flex flex-wrap justify-center space-x-4 space-y-2 md:space-y-0">
              <Link href="/learn/variables">
                <Button
                  variant="link"
                  className="text-gray-400 hover:text-white"
                >
                  Variables
                </Button>
              </Link>
              <Link href="/learn/data-types">
                <Button
                  variant="link"
                  className="text-gray-400 hover:text-white"
                >
                  Data Types
                </Button>
              </Link>
              <Link href="/learn/conditions">
                <Button
                  variant="link"
                  className="text-gray-400 hover:text-white"
                >
                  Conditions
                </Button>
              </Link>
              <Link href="/learn/data-structures">
                <Button
                  variant="link"
                  className="text-gray-400 hover:text-white"
                >
                  Data Structures
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© {new Date().getFullYear()} JSFLIX - Educational Project</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
