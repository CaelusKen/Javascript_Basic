/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Play, Check, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";

interface InteractiveExerciseProps {
  instructions: string;
  initialCode: string;
  solution: string;
}

export default function InteractiveExercise({
  instructions,
  initialCode,
  solution,
}: InteractiveExerciseProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const runCode = () => {
    setOutput("");

    try {
      // Create a function to capture console.log output
      const originalConsoleLog = console.log;
      const logs: string[] = [];

      console.log = (...args) => {
        logs.push(
          args
            .map((arg) =>
              typeof arg === "object" ? JSON.stringify(arg) : String(arg)
            )
            .join(" ")
        );
        originalConsoleLog(...args);
      };

      // Execute the code
      // eslint-disable-next-line no-new-func
      new Function(code)();

      // Restore original console.log
      console.log = originalConsoleLog;

      // Display the output
      setOutput(logs.join("\n"));

      // Check if the solution is correct (simplified check)
      // In a real app, you'd want a more sophisticated check
      const cleanCode = code.replace(/\s+/g, " ").trim();
      const cleanSolution = solution.replace(/\s+/g, " ").trim();

      // Check if the user's code contains key elements from the solution
      const keyElements = [
        "let rating",
        "const MIN_RATING",
        "const MAX_RATING",
      ];

      const hasAllKeyElements = keyElements.every((element) =>
        cleanCode.includes(element)
      );

      setIsCorrect(hasAllKeyElements);
    } catch (error) {
      if (error instanceof Error) {
        setOutput(`Error: ${error.message}`);
      } else {
        setOutput("An unknown error occurred");
      }
      setIsCorrect(false);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput("");
    setIsCorrect(false);
    setShowSolution(false);
  };

  const toggleSolution = () => {
    setShowSolution(!showSolution);
    if (!showSolution) {
      setCode(solution);
    } else {
      setCode(initialCode);
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-950 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">{instructions}</h3>
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-64 bg-gray-950 text-white font-mono p-2 border border-gray-800 rounded focus:outline-none focus:border-blue-600"
        />
      </div>

      <div className="flex space-x-4">
        <Button
          onClick={runCode}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <Play className="mr-2 h-4 w-4" />
          Run Code
        </Button>

        <Button
          onClick={resetCode}
          variant="outline"
          className="border-gray-700 text-white hover:bg-gray-800"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Reset
        </Button>

        <Button
          onClick={toggleSolution}
          variant="outline"
          className="border-gray-700 text-white hover:bg-gray-800"
        >
          {showSolution ? "Hide Solution" : "Show Solution"}
        </Button>
      </div>

      {output && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Output:</h3>
          <div className="bg-gray-950 p-4 rounded-lg font-mono whitespace-pre-wrap">
            {output}
          </div>

          {isCorrect && (
            <div className="mt-4 p-3 bg-green-900/30 border border-green-600 rounded-lg flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>Great job! Your solution is correct.</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
