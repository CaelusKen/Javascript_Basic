/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface SyntaxHighlighterProps {
  code: string;
  language?: string;
}

export default function SyntaxHighlighter({
  code,
  language = "javascript",
}: SyntaxHighlighterProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Add CSS classes to different parts of the code
  const colorizeCode = () => {
    // This is a simple colorization that doesn't use regex
    // It just adds some basic color to make the code more readable
    return code
      .split("\n")
      .map((line, i) => {
        // Add some basic color to keywords
        const coloredLine = line
          .replace(
            /\b(const|let|var|function|return|if|else|for|while)\b/g,
            '<span style="color: #c678dd;">$1</span>'
          )
          .replace(
            /\b(true|false|null|undefined)\b/g,
            '<span style="color: #d19a66;">$1</span>'
          )
          .replace(
            /\b(\d+(\.\d+)?)\b/g,
            '<span style="color: #d19a66;">$1</span>'
          )
          .replace(
            /(["'`])(.*?)\1/g,
            '<span style="color: #98c379;">$1$2$1</span>'
          )
          .replace(/\/\/(.*)/g, '<span style="color: #7f848e;">//$1</span>');

        return `<span>${coloredLine}</span>`;
      })
      .join("\n");
  };

  return (
    <Card className="bg-gray-950 border-gray-800 overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-900 border-b border-gray-800">
        <span className="text-sm font-mono text-gray-400">
          {language.charAt(0).toUpperCase() + language.slice(1)}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="h-8 px-2 text-gray-400 hover:text-white"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono">
        <code dangerouslySetInnerHTML={{ __html: colorizeCode() }} />
      </pre>
    </Card>
  );
}
