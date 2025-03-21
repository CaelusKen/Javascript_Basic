/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Play, Check, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";
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
  const [isEditing, setIsEditing] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const codeDisplayRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Highlight the code when it changes or when not in editing mode
    if (!isEditing) {
      Prism.highlightAll();
    }
  }, [code, isEditing]);

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

  const toggleEditing = () => {
    setIsEditing(!isEditing);
    // Focus the textarea when switching to editing mode
    if (!isEditing && textareaRef.current) {
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 0);
    }
  };

  // Handle tab key in textarea
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;

      // Insert 2 spaces for tab
      const newCode = code.substring(0, start) + "  " + code.substring(end);
      setCode(newCode);

      // Move cursor after the inserted tab
      setTimeout(() => {
        if (e.currentTarget) {
          e.currentTarget.selectionStart = e.currentTarget.selectionEnd =
            start + 2;
        }
      }, 0);
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-950 rounded-lg overflow-hidden border border-gray-800">
        <div className="flex justify-between items-center px-4 py-2 bg-gray-900 border-b border-gray-800">
          <span className="text-sm font-mono text-gray-400">Exercise</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleEditing}
            className="h-8 px-2 text-gray-400 hover:text-white"
          >
            {isEditing ? "View" : "Edit"}
          </Button>
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-2">{instructions}</h3>

          {isEditing ? (
            <Textarea
              ref={textareaRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full h-64 bg-gray-950 text-white font-mono p-2 border border-gray-800 rounded focus:outline-none focus:border-blue-600"
              spellCheck="false"
            />
          ) : (
            <div className="relative w-full h-64 overflow-auto border border-gray-800 rounded">
              <pre className="p-2 h-full">
                <code ref={codeDisplayRef} className="language-javascript">
                  {code}
                </code>
              </pre>
              <div
                className="absolute top-2 right-2 p-1 bg-gray-800 rounded opacity-50 hover:opacity-100 cursor-pointer"
                onClick={toggleEditing}
                title="Click to edit"
              >
                <span className="text-xs text-gray-300">Click to edit</span>
              </div>
            </div>
          )}
        </div>
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
