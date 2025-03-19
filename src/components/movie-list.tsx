"use client";

import type React from "react";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Info, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { movies } from "@/lib/data";
import Link from "next/link";
import { useMyList } from "@/hooks/use-my-list";

interface MovieListProps {
  category: "popular" | "recent" | "all" | "my-list";
  customMovies?: typeof movies;
}

export default function MovieList({ category, customMovies }: MovieListProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { myList, addToMyList, removeFromMyList, isInMyList } = useMyList();

  // Filter movies based on category
  let filteredMovies = customMovies || [];

  if (!customMovies) {
    if (category === "popular") {
      filteredMovies = movies.filter((movie) => movie.rating >= 4);
    } else if (category === "recent") {
      filteredMovies = [...movies].sort((a, b) => b.year - a.year).slice(0, 8);
    } else if (category === "all") {
      filteredMovies = movies;
    } else if (category === "my-list") {
      filteredMovies = myList;
    }
  }

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById(`movie-container-${category}`);
    if (container) {
      const scrollAmount = 320; // Approximate width of a movie card + gap
      const newPosition =
        direction === "left"
          ? Math.max(scrollPosition - scrollAmount, 0)
          : scrollPosition + scrollAmount;

      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });

      setScrollPosition(newPosition);
    }
  };

  const handleMyListToggle = (
    movie: (typeof movies)[0],
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (isInMyList(movie.id)) {
      removeFromMyList(movie.id);
    } else {
      addToMyList(movie);
    }
  };

  if (filteredMovies.length === 0) {
    return (
      <div className="bg-gray-900/50 rounded-lg p-8 text-center">
        <h3 className="text-xl mb-2">No movies found</h3>
        <p className="text-gray-400 mb-4">
          {category === "my-list"
            ? "Your list is empty. Add some movies to get started!"
            : "No movies available in this category."}
        </p>
        {category === "my-list" && (
          <Link href="/">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Browse Movies
            </Button>
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className="relative group">
      <div
        id={`movie-container-${category}`}
        className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {filteredMovies.map((movie) => (
          <Link
            href={`/movie/${movie.id}`}
            key={movie.id}
            className="flex-none w-[250px] transition-transform duration-300 hover:scale-105"
          >
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-600">
              <div className="relative aspect-[2/3]">
                <img
                  src={movie.poster || `/placeholder.svg?height=375&width=250`}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-red-600 text-white bg-black/50 hover:bg-red-600"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                    >
                      <Info className="mr-2 h-4 w-4" />
                      Details
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-400 text-white bg-black/50 hover:bg-white/20"
                      onClick={(e) => handleMyListToggle(movie, e)}
                    >
                      {isInMyList(movie.id) ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold truncate">{movie.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-400">{movie.year}</span>
                  <span className="text-sm text-yellow-500">
                    ★ {movie.rating}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation buttons */}
      {filteredMovies.length > 4 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-black/50 border-gray-700 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll("left")}
            disabled={scrollPosition === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-black/50 border-gray-700 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}
    </div>
  );
}
