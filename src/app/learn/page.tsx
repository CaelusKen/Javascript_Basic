import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ConceptCard from "@/components/concept-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SiteHeader from "@/components/site-header";

export default function LearnPage() {
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
    {
      title: "Functions",
      description: "Create reusable blocks of code",
      icon: "Code",
      color: "bg-red-600",
      path: "/learn/functions",
    },
    {
      title: "Loops",
      description: "Iterate through data with different loop types",
      icon: "GitBranch",
      color: "bg-orange-600",
      path: "/learn/loops",
    },
    {
      title: "DOM Manipulation",
      description: "Interact with HTML elements using JavaScript",
      icon: "Layers",
      color: "bg-indigo-600",
      path: "/learn/dom",
    },
    {
      title: "Events",
      description: "Handle user interactions with event listeners",
      icon: "Database",
      color: "bg-pink-600",
      path: "/learn/events",
    },
  ];

  const exercises = [
    {
      title: "Movie Rating Tracker",
      description: "Create variables to track movie ratings",
      level: "Easy",
      path: "/exercises/variables/easy",
    },
    {
      title: "Movie Data Types",
      description: "Work with different data types in a movie database",
      level: "Easy",
      path: "/exercises/data-types/easy",
    },
    {
      title: "Movie Rating Classifier",
      description: "Use conditions to classify movies by rating",
      level: "Easy",
      path: "/exercises/conditions/easy",
    },
    {
      title: "Movie Database Queries",
      description: "Implement search and filter operations on a movie database",
      level: "Medium",
      path: "/exercises/data-structures/medium",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link href="/">
            <Button
              variant="outline"
              className="mr-4 border-gray-700 bg-black/50 text-white hover:bg-black/70"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Movies
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">JavaScript Learning Center</h1>
        </div>

        <div className="relative h-[300px] w-full mb-12 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent">
            <img
              src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2000&auto=format&fit=crop"
              alt="JavaScript Learning"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Learn JavaScript Through Movies
            </h2>
            <p className="text-lg max-w-2xl">
              Explore JavaScript concepts through interactive examples and
              exercises based on movies. Perfect for visual learners and movie
              enthusiasts!
            </p>
            <div className="mt-6">
              <Link href="/exercises">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Start Practicing
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <Tabs defaultValue="concepts" className="mb-12">
          <TabsList className="bg-gray-900 border-gray-800">
            <TabsTrigger
              value="concepts"
              className="data-[state=active]:bg-red-600"
            >
              Concepts
            </TabsTrigger>
            <TabsTrigger
              value="exercises"
              className="data-[state=active]:bg-red-600"
            >
              Exercises
            </TabsTrigger>
            <TabsTrigger
              value="path"
              className="data-[state=active]:bg-red-600"
            >
              Learning Path
            </TabsTrigger>
          </TabsList>

          <TabsContent value="concepts" className="mt-6">
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
          </TabsContent>

          <TabsContent value="exercises" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exercises.map((exercise) => (
                <div
                  key={exercise.title}
                  className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 transition-all"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">
                        {exercise.title}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          exercise.level === "Easy"
                            ? "bg-green-600"
                            : exercise.level === "Medium"
                            ? "bg-yellow-600"
                            : "bg-red-600"
                        }`}
                      >
                        {exercise.level}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4">{exercise.description}</p>
                    <Link href={exercise.path}>
                      <Button
                        variant="outline"
                        className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                      >
                        Start Exercise
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
              <div className="col-span-1 md:col-span-2 mt-4 text-center">
                <Link href="/exercises">
                  <Button className="bg-red-600 hover:bg-red-700">
                    View All Exercises
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="path" className="mt-6">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">
                Recommended Learning Path
              </h3>

              <div className="space-y-8">
                <div className="relative pl-8 pb-8 border-l-2 border-gray-800">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                  <h4 className="text-xl font-semibold mb-2">
                    1. JavaScript Fundamentals
                  </h4>
                  <p className="text-gray-400 mb-4">
                    Start with the basics to build a solid foundation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/learn/variables">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                      >
                        Variables
                      </Button>
                    </Link>
                    <Link href="/learn/data-types">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                      >
                        Data Types
                      </Button>
                    </Link>
                    <Link href="/exercises/variables/easy">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                      >
                        Practice: Variables
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="relative pl-8 pb-8 border-l-2 border-gray-800">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-yellow-600"></div>
                  <h4 className="text-xl font-semibold mb-2">
                    2. Control Flow
                  </h4>
                  <p className="text-gray-400 mb-4">
                    Learn how to control the flow of your program.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/learn/conditions">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"
                      >
                        Conditions
                      </Button>
                    </Link>
                    <Link href="/learn/loops">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                      >
                        Loops
                      </Button>
                    </Link>
                    <Link href="/exercises/conditions/easy">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                      >
                        Practice: Conditions
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="relative pl-8 pb-8 border-l-2 border-gray-800">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-600"></div>
                  <h4 className="text-xl font-semibold mb-2">
                    3. Data Structures & Functions
                  </h4>
                  <p className="text-gray-400 mb-4">
                    Organize and manipulate your data effectively.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/learn/data-structures">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                      >
                        Data Structures
                      </Button>
                    </Link>
                    <Link href="/learn/functions">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                      >
                        Functions
                      </Button>
                    </Link>
                    <Link href="/exercises/data-structures/medium">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                      >
                        Practice: Data Structures
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                  <h4 className="text-xl font-semibold mb-2">
                    4. DOM & Events
                  </h4>
                  <p className="text-gray-400 mb-4">
                    Interact with web pages and handle user actions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/learn/dom">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
                      >
                        DOM Manipulation
                      </Button>
                    </Link>
                    <Link href="/learn/events">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white"
                      >
                        Events
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
