import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExerciseCard from "@/components/exercise-card";

export default function ExercisesPage() {
  // Exercise data organized by concept
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

  // All exercises flattened into a single array
  const allExercises = [
    ...exercises.variables,
    ...exercises.dataTypes,
    ...exercises.conditions,
    ...exercises.dataStructures,
  ];

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
          <h1 className="text-3xl font-bold">Interactive Exercises</h1>
        </div>

        <div className="relative h-[200px] w-full mb-12 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent">
            <img
              src="/placeholder.svg?height=200&width=1200"
              alt="JavaScript Exercises"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Test Your JavaScript Skills
            </h2>
            <p className="text-lg max-w-2xl">
              Challenge yourself with our interactive exercises at different
              difficulty levels. Apply what you&apos;ve learned about JavaScript
              in real movie-themed scenarios.
            </p>
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="bg-gray-900 border-gray-800">
            <TabsTrigger value="all" className="data-[state=active]:bg-red-600">
              All Exercises
            </TabsTrigger>
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

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allExercises.map((exercise) => (
                <ExerciseCard
                  key={exercise.id}
                  title={exercise.title}
                  description={exercise.description}
                  difficulty={
                    exercise.difficulty as
                      | "Easy"
                      | "Medium"
                      | "Hard"
                      | "Extreme"
                  }
                  concept={exercise.concept}
                  path={exercise.path}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="variables" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exercises.variables.map((exercise) => (
                <ExerciseCard
                  key={exercise.id}
                  title={exercise.title}
                  description={exercise.description}
                  difficulty={
                    exercise.difficulty as
                      | "Easy"
                      | "Medium"
                      | "Hard"
                      | "Extreme"
                  }
                  concept={exercise.concept}
                  path={exercise.path}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dataTypes" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exercises.dataTypes.map((exercise) => (
                <ExerciseCard
                  key={exercise.id}
                  title={exercise.title}
                  description={exercise.description}
                  difficulty={
                    exercise.difficulty as
                      | "Easy"
                      | "Medium"
                      | "Hard"
                      | "Extreme"
                  }
                  concept={exercise.concept}
                  path={exercise.path}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="conditions" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exercises.conditions.map((exercise) => (
                <ExerciseCard
                  key={exercise.id}
                  title={exercise.title}
                  description={exercise.description}
                  difficulty={
                    exercise.difficulty as
                      | "Easy"
                      | "Medium"
                      | "Hard"
                      | "Extreme"
                  }
                  concept={exercise.concept}
                  path={exercise.path}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dataStructures" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exercises.dataStructures.map((exercise) => (
                <ExerciseCard
                  key={exercise.id}
                  title={exercise.title}
                  description={exercise.description}
                  difficulty={
                    exercise.difficulty as
                      | "Easy"
                      | "Medium"
                      | "Hard"
                      | "Extreme"
                  }
                  concept={exercise.concept}
                  path={exercise.path}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Difficulty Levels Explained
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-lg bg-green-900/20 border border-green-600">
              <h3 className="font-bold text-green-500 mb-2">Easy</h3>
              <p className="text-sm">
                Basic application of concepts. Perfect for beginners to practice
                what they&apos;ve just learned.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-yellow-900/20 border border-yellow-600">
              <h3 className="font-bold text-yellow-500 mb-2">Medium</h3>
              <p className="text-sm">
                Requires deeper understanding and observation. Tests your
                ability to apply concepts in slightly more complex scenarios.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-orange-900/20 border border-orange-600">
              <h3 className="font-bold text-orange-500 mb-2">Hard</h3>
              <p className="text-sm">
                Focuses on real-life complex problems. Challenges you to think
                critically and combine multiple concepts.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-red-900/20 border border-red-600">
              <h3 className="font-bold text-red-500 mb-2">Extreme</h3>
              <p className="text-sm">
                Advanced challenges requiring research and creative
                problem-solving. Tests the limits of your JavaScript knowledge.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h2 className="text-2xl font-bold mb-4">
            How to Use These Exercises
          </h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Start with Easy:</strong> Begin with easy exercises for
              each concept to build confidence.
            </li>
            <li>
              <strong>Progressive Challenge:</strong> Work your way up through
              the difficulty levels as you become more comfortable.
            </li>
            <li>
              <strong>Use Hints:</strong> If you get stuck, use the provided
              hints before checking the solution.
            </li>
            <li>
              <strong>Experiment:</strong> Try different approaches to solve the
              same problem.
            </li>
            <li>
              <strong>Review:</strong> After completing an exercise, review the
              solution and understand why it works.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
