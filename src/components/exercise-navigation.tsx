"use client";

import { useState } from "react";
import { Lightbulb, Code, AlertTriangle, Zap, Trophy } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ExerciseNavigation() {
  const [open, setOpen] = useState(false);

  const exercises = {
    variables: [
      {
        id: "variables-easy",
        title: "Movie Rating Tracker",
        description:
          "Create variables to track movie ratings and apply basic operations.",
        difficulty: "Easy",
        concept: "Variables",
        path: "/exercises/variables/easy",
      },
      {
        id: "variables-medium",
        title: "Movie Budget Calculator",
        description:
          "Use variables to calculate and track movie production budgets.",
        difficulty: "Medium",
        concept: "Variables",
        path: "/exercises/variables/medium",
      },
      {
        id: "variables-hard",
        title: "Movie Ticket Pricing System",
        description:
          "Implement a complex ticket pricing system with multiple variables.",
        difficulty: "Hard",
        concept: "Variables",
        path: "/exercises/variables/hard",
      },
      {
        id: "variables-extreme",
        title: "Movie Revenue Forecasting",
        description:
          "Create a sophisticated revenue prediction model with advanced variable usage.",
        difficulty: "Extreme",
        concept: "Variables",
        path: "/exercises/variables/extreme",
      },
    ],
    dataTypes: [
      {
        id: "data-types-easy",
        title: "Movie Data Types",
        description:
          "Identify and use different data types in a movie database.",
        difficulty: "Easy",
        concept: "Data Types",
        path: "/exercises/data-types/easy",
      },
      {
        id: "data-types-medium",
        title: "Type Conversion Challenge",
        description:
          "Convert between different data types in a movie rating system.",
        difficulty: "Medium",
        concept: "Data Types",
        path: "/exercises/data-types/medium",
      },
      {
        id: "data-types-hard",
        title: "Movie Data Validation",
        description: "Implement type checking and validation for movie data.",
        difficulty: "Hard",
        concept: "Data Types",
        path: "/exercises/data-types/hard",
      },
      {
        id: "data-types-extreme",
        title: "Custom Movie Type System",
        description:
          "Create a custom type system for a complex movie database.",
        difficulty: "Extreme",
        concept: "Data Types",
        path: "/exercises/data-types/extreme",
      },
    ],
    conditions: [
      {
        id: "conditions-easy",
        title: "Movie Rating Classifier",
        description:
          "Use conditions to classify movies based on their ratings.",
        difficulty: "Easy",
        concept: "Conditions",
        path: "/exercises/conditions/easy",
      },
      {
        id: "conditions-medium",
        title: "Movie Recommendation Engine",
        description: "Build a recommendation system using conditional logic.",
        difficulty: "Medium",
        concept: "Conditions",
        path: "/exercises/conditions/medium",
      },
      {
        id: "conditions-hard",
        title: "Movie Ticket Discount System",
        description:
          "Implement a complex discount system with nested conditions.",
        difficulty: "Hard",
        concept: "Conditions",
        path: "/exercises/conditions/hard",
      },
      {
        id: "conditions-extreme",
        title: "Movie Release Strategy",
        description:
          "Create an algorithm to determine optimal movie release strategies.",
        difficulty: "Extreme",
        concept: "Conditions",
        path: "/exercises/conditions/extreme",
      },
    ],
    dataStructures: [
      {
        id: "data-structures-easy",
        title: "Movie Collection Manager",
        description: "Use arrays to manage a collection of movies.",
        difficulty: "Easy",
        concept: "Data Structures",
        path: "/exercises/data-structures/easy",
      },
      {
        id: "data-structures-medium",
        title: "Movie Database Queries",
        description:
          "Implement search and filter operations on a movie database.",
        difficulty: "Medium",
        concept: "Data Structures",
        path: "/exercises/data-structures/medium",
      },
      {
        id: "data-structures-hard",
        title: "Movie Relationship Graph",
        description:
          "Create a graph structure to represent relationships between movies.",
        difficulty: "Hard",
        concept: "Data Structures",
        path: "/exercises/data-structures/hard",
      },
      {
        id: "data-structures-extreme",
        title: "Movie Recommendation Algorithm",
        description:
          "Implement a sophisticated recommendation algorithm using advanced data structures.",
        difficulty: "Extreme",
        concept: "Data Structures",
        path: "/exercises/data-structures/extreme",
      },
    ],
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return <Code className="h-4 w-4 text-green-500" />;
      case "Medium":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "Hard":
        return <Zap className="h-4 w-4 text-orange-500" />;
      case "Extreme":
        return <Trophy className="h-4 w-4 text-red-500" />;
      default:
        return <Code className="h-4 w-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-900/20 border-green-600 text-green-500";
      case "Medium":
        return "bg-yellow-900/20 border-yellow-600 text-yellow-500";
      case "Hard":
        return "bg-orange-900/20 border-orange-600 text-orange-500";
      case "Extreme":
        return "bg-red-900/20 border-red-600 text-red-500";
      default:
        return "bg-blue-900/20 border-blue-600 text-blue-500";
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
        >
          <Lightbulb className="mr-2 h-4 w-4" />
          Practice Exercises
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-gray-900 border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            JavaScript Practice Exercises
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Choose an exercise to practice your JavaScript skills with
            interactive coding challenges.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="variables" className="mt-4">
          <TabsList className="bg-gray-950 border-gray-800">
            <TabsTrigger
              value="variables"
              className="data-[state=active]:bg-blue-600"
            >
              Variables
            </TabsTrigger>
            <TabsTrigger
              value="dataTypes"
              className="data-[state=active]:bg-green-600"
            >
              Data Types
            </TabsTrigger>
            <TabsTrigger
              value="conditions"
              className="data-[state=active]:bg-yellow-600"
            >
              Conditions
            </TabsTrigger>
            <TabsTrigger
              value="dataStructures"
              className="data-[state=active]:bg-purple-600"
            >
              Data Structures
            </TabsTrigger>
          </TabsList>

          <TabsContent value="variables" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exercises.variables.map((exercise) => (
                <Link
                  key={exercise.id}
                  href={exercise.path}
                  onClick={() => setOpen(false)}
                  className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{exercise.title}</h3>
                    <div
                      className={`flex items-center ${getDifficultyColor(
                        exercise.difficulty
                      )} border px-2 py-0.5 rounded text-xs`}
                    >
                      {getDifficultyIcon(exercise.difficulty)}
                      <span className="ml-1">{exercise.difficulty}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">
                    {exercise.description}
                  </p>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dataTypes" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exercises.dataTypes.map((exercise) => (
                <Link
                  key={exercise.id}
                  href={exercise.path}
                  onClick={() => setOpen(false)}
                  className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{exercise.title}</h3>
                    <div
                      className={`flex items-center ${getDifficultyColor(
                        exercise.difficulty
                      )} border px-2 py-0.5 rounded text-xs`}
                    >
                      {getDifficultyIcon(exercise.difficulty)}
                      <span className="ml-1">{exercise.difficulty}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">
                    {exercise.description}
                  </p>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="conditions" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exercises.conditions.map((exercise) => (
                <Link
                  key={exercise.id}
                  href={exercise.path}
                  onClick={() => setOpen(false)}
                  className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{exercise.title}</h3>
                    <div
                      className={`flex items-center ${getDifficultyColor(
                        exercise.difficulty
                      )} border px-2 py-0.5 rounded text-xs`}
                    >
                      {getDifficultyIcon(exercise.difficulty)}
                      <span className="ml-1">{exercise.difficulty}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">
                    {exercise.description}
                  </p>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dataStructures" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exercises.dataStructures.map((exercise) => (
                <Link
                  key={exercise.id}
                  href={exercise.path}
                  onClick={() => setOpen(false)}
                  className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{exercise.title}</h3>
                    <div
                      className={`flex items-center ${getDifficultyColor(
                        exercise.difficulty
                      )} border px-2 py-0.5 rounded text-xs`}
                    >
                      {getDifficultyIcon(exercise.difficulty)}
                      <span className="ml-1">{exercise.difficulty}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">
                    {exercise.description}
                  </p>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-4 pt-4 border-t border-gray-800">
          <div className="flex justify-between">
            <Link href="/exercises" onClick={() => setOpen(false)}>
              <Button
                variant="outline"
                className="border-gray-700 hover:bg-gray-800"
              >
                View All Exercises
              </Button>
            </Link>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
