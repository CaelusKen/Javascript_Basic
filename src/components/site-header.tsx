"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ThemeToggle from "@/components/theme-toggle";
import ExerciseNavigation from "@/components/exercise-navigation";

interface SiteHeaderProps {
  onSearch?: (query: string) => void;
  searchQuery?: string;
}

export default function SiteHeader({
  onSearch,
  searchQuery = "",
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-black/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <h1 className="text-red-600 font-bold text-2xl md:text-3xl">
            JSFLIX
          </h1>
        </Link>

        <div className="relative w-full max-w-xs md:max-w-md mx-4">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search movies..."
            className="pl-8 bg-gray-900 border-gray-700 text-white focus:ring-red-600 focus:border-red-600"
            value={searchQuery}
            onChange={(e) => onSearch && onSearch(e.target.value)}
          />
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <ExerciseNavigation />
          <Link href="/learn">
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              Learn JS
            </Button>
          </Link>
          <Link href="/my-list">
            <Button variant="ghost" className="text-white hover:text-red-600">
              My List
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
