"use client";

import type React from "react";

import { useState, useEffect, createContext, useContext } from "react";
import type { movies } from "@/lib/data";

type Movie = (typeof movies)[0];

interface MyListContextType {
  myList: Movie[];
  addToMyList: (movie: Movie) => void;
  removeFromMyList: (id: number) => void;
  isInMyList: (id: number) => boolean;
  clearMyList: () => void;
}

const MyListContext = createContext<MyListContextType | undefined>(undefined);

export function MyListProvider({ children }: { children: React.ReactNode }) {
  const [myList, setMyList] = useState<Movie[]>([]);

  // Load saved list from localStorage on initial render
  useEffect(() => {
    const savedList = localStorage.getItem("myList");
    if (savedList) {
      try {
        setMyList(JSON.parse(savedList));
      } catch (error) {
        console.error("Failed to parse saved list:", error);
        localStorage.removeItem("myList");
      }
    }
  }, []);

  // Save list to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList]);

  const addToMyList = (movie: Movie) => {
    if (!isInMyList(movie.id)) {
      setMyList((prevList) => [...prevList, movie]);
    }
  };

  const removeFromMyList = (id: number) => {
    setMyList((prevList) => prevList.filter((movie) => movie.id !== id));
  };

  const isInMyList = (id: number) => {
    return myList.some((movie) => movie.id === id);
  };

  const clearMyList = () => {
    setMyList([]);
  };

  return (
    <MyListContext.Provider
      value={{ myList, addToMyList, removeFromMyList, isInMyList, clearMyList }}
    >
      {children}
    </MyListContext.Provider>
  );
}

export function useMyList() {
  const context = useContext(MyListContext);
  if (context === undefined) {
    throw new Error("useMyList must be used within a MyListProvider");
  }
  return context;
}
