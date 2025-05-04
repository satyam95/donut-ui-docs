"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

type CodeSnippetProps = {
  code: string;
};

const CodeSnippet = ({ code }: CodeSnippetProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative w-full overflow-x-auto bg-slate-100 font-mono text-sm p-4 rounded-lg">
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        aria-label="Copy code"
      >
        {copied ? (
          <Check size={18} className="text-green-500" />
        ) : (
          <Copy size={18} />
        )}
      </button>

      <div className="overflow-x-auto">
        <pre className="whitespace-pre-wrap overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
