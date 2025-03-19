import { Code, Database, GitBranch, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ConceptCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  path: string;
}

export default function ConceptCard({
  title,
  description,
  icon,
  color,
  path,
}: ConceptCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "Code":
        return <Code className="h-6 w-6" />;
      case "Database":
        return <Database className="h-6 w-6" />;
      case "GitBranch":
        return <GitBranch className="h-6 w-6" />;
      case "Layers":
        return <Layers className="h-6 w-6" />;
      default:
        return <Code className="h-6 w-6" />;
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 transition-all">
      <div className="p-6">
        <div
          className={`${color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
        >
          {getIcon()}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <Link href={path}>
          <Button
            variant="outline"
            className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
          >
            Explore
          </Button>
        </Link>
      </div>
    </div>
  );
}
