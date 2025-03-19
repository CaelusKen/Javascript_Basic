export interface Movie {
    id: number
    title: string
    year: number
    rating: number
    genre: string
    director: string
    cast: string[]
    description: string
    runtime: number
    language: string
    poster?: string
    backdrop?: string
    jsConceptsShown?: string[]
}

export const movies: Movie[] = [
    {
        id: 1,
        title: "The JavaScript Adventure",
        year: 2023,
        rating: 4.8,
        genre: "Action/Adventure",
        director: "Code Master",
        cast: ["Dev Developer", "Sara Script", "Tom TypeScript"],
        description:
            "A thrilling journey through the world of JavaScript, where a young developer must master variables and functions to save the digital world.",
        runtime: 120,
        language: "English",
        jsConceptsShown: ["Variables", "Functions", "Objects"],
        poster: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Array of Darkness",
        year: 2022,
        rating: 4.5,
        genre: "Horror",
        director: "Loop Walker",
        cast: ["Array Arnie", "Object Olivia", "Boolean Bob"],
        description:
            "A group of programmers find themselves trapped in an endless loop, where only their knowledge of arrays and data structures can help them escape.",
        runtime: 105,
        language: "English",
        jsConceptsShown: ["Arrays", "Loops", "Conditions"],
        poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Promise Me Forever",
        year: 2023,
        rating: 4.2,
        genre: "Romance",
        director: "Async Annie",
        cast: ["Promise Paul", "Await Amy", "Callback Carl"],
        description:
            "A love story between two developers who must navigate the complexities of asynchronous programming to find their way back to each other.",
        runtime: 118,
        language: "English",
        jsConceptsShown: ["Promises", "Async/Await", "Callbacks"],
        poster: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "The DOM Chronicles",
        year: 2021,
        rating: 4.0,
        genre: "Fantasy",
        director: "Document Object",
        cast: ["Element Emma", "Node Nick", "Event Eric"],
        description:
            "In a world where the DOM is alive, a young developer must learn to manipulate elements and handle events to restore balance.",
        runtime: 135,
        language: "English",
        jsConceptsShown: ["DOM Manipulation", "Event Handling", "Selectors"],
        poster: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: 5,
        title: "Recursion",
        year: 2022,
        rating: 4.7,
        genre: "Sci-Fi",
        director: "Recursion",
        cast: ["Function Fred", "Stack Stella", "Memory Mike"],
        description:
            "A mind-bending tale of a function that keeps calling itself, creating layers of reality that the protagonist must navigate to find the base case.",
        runtime: 150,
        language: "English",
        jsConceptsShown: ["Recursion", "Call Stack", "Memory Management"],
        poster: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: 6,
        title: "The Variable Ultimatum",
        year: 2023,
        rating: 3.9,
        genre: "Thriller",
        director: "Scope Master",
        cast: ["Let Larry", "Const Connie", "Var Victor"],
        description:
            "A tense thriller about variable declarations and scope, where choosing the wrong variable type could lead to unexpected consequences.",
        runtime: 110,
        language: "English",
        jsConceptsShown: ["Variables", "Scope", "Hoisting"],
        poster: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: 7,
        title: "Object of Desire",
        year: 2021,
        rating: 4.3,
        genre: "Drama",
        director: "Property Chain",
        cast: ["Key Kevin", "Value Valerie", "Method Mary"],
        description:
            "A dramatic exploration of JavaScript objects, where properties and methods intertwine in a complex web of relationships.",
        runtime: 125,
        language: "English",
        jsConceptsShown: ["Objects", "Properties", "Methods"],
        poster: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: 8,
        title: "The Conditional",
        year: 2022,
        rating: 4.1,
        genre: "Mystery",
        director: "If Else",
        cast: ["Boolean Barry", "Ternary Tina", "Switch Sam"],
        description:
            "A mystery where the truth depends on conditions, and the detective must use logical operators to solve the case.",
        runtime: 115,
        language: "English",
        jsConceptsShown: ["Conditionals", "Logical Operators", "Switch Statements"],
        poster: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: 9,
        title: "Loop Eternal",
        year: 2023,
        rating: 4.6,
        genre: "Adventure",
        director: "Iteration Master",
        cast: ["For Felix", "While Wendy", "Do Derek"],
        description:
            "An adventure through different types of loops, where the heroes must find the right iteration technique to complete their quest.",
        runtime: 130,
        language: "English",
        jsConceptsShown: ["Loops", "Iteration", "Break/Continue"],
        poster: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1000&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: 10,
        title: "The Function Expression",
        year: 2021,
        rating: 4.4,
        genre: "Drama",
        director: "Arrow Function",
        cast: ["Declaration Dave", "Expression Eve", "Arrow Aaron"],
        description:
            "A dramatic tale of different function types and their unique characteristics, set in a world where how you define a function matters.",
        runtime: 122,
        language: "English",
        jsConceptsShown: ["Functions", "Function Expressions", "Arrow Functions"],
        poster: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1000&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2000&auto=format&fit=crop",
    },
]

