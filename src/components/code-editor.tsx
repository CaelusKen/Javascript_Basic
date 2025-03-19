"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Play, Copy, Check, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";

interface CodeEditorProps {
  initialCode: string;
  onCheck?: (code: string) => void;
}

export default function CodeEditor({ initialCode, onCheck }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  const runCode = () => {
    setIsRunning(true);
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

      // Scroll to output
      if (outputRef.current) {
        outputRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      if (error instanceof Error) {
        setOutput(`Error: ${error.message}`);
      } else {
        setOutput("An unknown error occurred");
      }
    } finally {
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput("");
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const checkSolution = () => {
    if (onCheck) {
      onCheck(code);
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
          <span className="text-sm font-mono text-gray-400">JavaScript</span>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={copyCode}
              className="h-8 px-2 text-gray-400 hover:text-white"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={resetCode}
              className="h-8 px-2 text-gray-400 hover:text-white"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full h-64 bg-gray-950 text-white font-mono p-4 focus:outline-none resize-none"
          spellCheck="false"
          style={{
            color: "rgb(209, 213, 219)", // text-gray-300
            caretColor: "white",
          }}
        />
      </div>

      <div className="flex space-x-4">
        <Button
          onClick={runCode}
          className="bg-green-600 hover:bg-green-700 text-white"
          disabled={isRunning}
        >
          <Play className="mr-2 h-4 w-4" />
          Run Code
        </Button>

        {onCheck && (
          <Button
            onClick={checkSolution}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Check className="mr-2 h-4 w-4" />
            Check Solution
          </Button>
        )}
      </div>

      {output && (
        <div ref={outputRef} className="mt-4">
          <h3 className="font-semibold mb-2">Output:</h3>
          <div className="bg-gray-950 p-4 rounded-lg font-mono whitespace-pre-wrap border border-gray-800">
            {output}
          </div>
        </div>
      )}
    </div>
  );
}
