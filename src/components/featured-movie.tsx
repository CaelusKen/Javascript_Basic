/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { Play, Info, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { movies } from "@/lib/data";
import Link from "next/link";
import { useMyList } from "@/hooks/use-my-list";

export default function FeaturedMovie() {
  const [featuredMovie, setFeaturedMovie] = useState(movies[0]);
  const { myList, addToMyList, removeFromMyList, isInMyList } = useMyList();

  useEffect(() => {
    // Get a random movie with rating >= 4 for the featured spot
    const highRatedMovies = movies.filter((movie) => movie.rating >= 4);
    const randomIndex = Math.floor(Math.random() * highRatedMovies.length);
    setFeaturedMovie(highRatedMovies[randomIndex]);
  }, []);

  const handleMyListToggle = () => {
    if (isInMyList(featuredMovie.id)) {
      removeFromMyList(featuredMovie.id);
    } else {
      addToMyList(featuredMovie);
    }
  };

  return (
    <div className="relative h-[500px] md:h-[600px] w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
        <img
          src={
            featuredMovie.backdrop || `/placeholder.svg?height=600&width=1200`
          }
          alt={featuredMovie.title}
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {featuredMovie.title}
        </h2>
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-yellow-500">★ {featuredMovie.rating}/5</span>
          <span className="text-gray-400">|</span>
          <span>{featuredMovie.year}</span>
          <span className="text-gray-400">|</span>
          <span>{featuredMovie.genre}</span>
        </div>
        <p className="text-lg mb-6 line-clamp-3">{featuredMovie.description}</p>
        <div className="flex flex-wrap space-x-4">
          <Link href={`/movie/${featuredMovie.id}`}>
            <Button className="bg-red-600 hover:bg-red-700 text-white mb-2">
              <Play className="mr-2 h-4 w-4" />
              Watch Now
            </Button>
          </Link>
          <Link href={`/movie/${featuredMovie.id}`}>
            <Button
              variant="outline"
              className="border-gray-400 text-white hover:bg-white/10 mb-2"
            >
              <Info className="mr-2 h-4 w-4" />
              More Info
            </Button>
          </Link>
          <Button
            variant="outline"
            className="border-gray-400 text-white hover:bg-white/10 mb-2"
            onClick={handleMyListToggle}
          >
            {isInMyList(featuredMovie.id) ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                In My List
              </>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" />
                Add to My List
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
