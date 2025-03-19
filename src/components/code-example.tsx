"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CodeExampleProps {
  code: string;
}

export default function CodeExample({ code }: CodeExampleProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="bg-gray-950 border-gray-800 overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-900 border-b border-gray-800">
        <span className="text-sm font-mono text-gray-400">JavaScript</span>
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
      <pre className="p-4 overflow-x-auto text-sm font-mono text-white">
        {code}
      </pre>
    </Card>
  );
}
