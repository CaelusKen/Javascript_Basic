"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Trash2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MovieList from "@/components/movie-list";
import { useMyList } from "@/hooks/use-my-list";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function MyListPage() {
  const { myList, clearMyList } = useMyList();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Link href="/">
              <Button
                variant="outline"
                className="mr-4 border-gray-700 bg-black/50 text-white hover:bg-black/70"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">My List</h1>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                disabled={myList.length === 0}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Clear List
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-gray-900 border-gray-800">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-white">
                  Clear My List?
                </AlertDialogTitle>
                <AlertDialogDescription className="text-gray-400">
                  This will remove all movies from your list. This action cannot
                  be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-gray-800 text-white hover:bg-gray-700">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  className="bg-red-600 text-white hover:bg-red-700"
                  onClick={clearMyList}
                >
                  Clear
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <div className="mb-8">
          <p className="text-gray-400 mb-6">
            {myList.length > 0
              ? `You have ${myList.length} movie${
                  myList.length === 1 ? "" : "s"
                } in your list.`
              : "Your list is empty. Add some movies to get started!"}
          </p>

          {myList.length > 0 ? (
            <MovieList category="my-list" />
          ) : (
            <div className="text-center py-12">
              <Link href="/">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Browse Movies
                </Button>
              </Link>
            </div>
          )}
        </div>

        <div className="mt-12 p-6 bg-gray-900 rounded-lg border border-gray-800">
          <h2 className="text-xl font-bold mb-4">
            JavaScript Learning with My List
          </h2>
          <p className="mb-4">
            Your movie list is a perfect example of a JavaScript array data
            structure. Here&apos;s what you can learn:
          </p>
          <div className="bg-gray-950 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm font-mono">
              <code>{`// Your movie list as a JavaScript array
const myList = ${JSON.stringify(myList, null, 2)};

// Array operations you can perform:
// 1. Get the number of movies
console.log(myList.length); // ${myList.length}

// 2. Access a specific movie by index
${
  myList.length > 0
    ? `console.log(myList[0]); // First movie: ${JSON.stringify(
        myList[0]?.title
      )}`
    : "// Your list is empty"
}

// 3. Add a new movie
myList.push({ id: 999, title: "New JavaScript Movie" });

// 4. Remove a movie
const filteredList = myList.filter(movie => movie.id !== ${
                myList.length > 0 ? myList[0]?.id : 999
              });

// 5. Map through movies to get just the titles
const titles = myList.map(movie => movie.title);
`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
