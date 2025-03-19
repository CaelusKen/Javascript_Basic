import { Code, AlertTriangle, Zap, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ExerciseCardProps {
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Extreme";
  concept: string;
  path: string;
}

export default function ExerciseCard({
  title,
  description,
  difficulty,
  concept,
  path,
}: ExerciseCardProps) {
  // Determine difficulty color and icon
  const getDifficultyDetails = () => {
    switch (difficulty) {
      case "Easy":
        return {
          color: "bg-green-600",
          textColor: "text-green-500",
          borderColor: "border-green-600",
          bgColor: "bg-green-900/20",
          icon: <Code className="h-4 w-4" />,
        };
      case "Medium":
        return {
          color: "bg-yellow-600",
          textColor: "text-yellow-500",
          borderColor: "border-yellow-600",
          bgColor: "bg-yellow-900/20",
          icon: <AlertTriangle className="h-4 w-4" />,
        };
      case "Hard":
        return {
          color: "bg-orange-600",
          textColor: "text-orange-500",
          borderColor: "border-orange-600",
          bgColor: "bg-orange-900/20",
          icon: <Zap className="h-4 w-4" />,
        };
      case "Extreme":
        return {
          color: "bg-red-600",
          textColor: "text-red-500",
          borderColor: "border-red-600",
          bgColor: "bg-red-900/20",
          icon: <Trophy className="h-4 w-4" />,
        };
      default:
        return {
          color: "bg-blue-600",
          textColor: "text-blue-500",
          borderColor: "border-blue-600",
          bgColor: "bg-blue-900/20",
          icon: <Code className="h-4 w-4" />,
        };
    }
  };

  // Get concept color
  const getConceptColor = () => {
    switch (concept) {
      case "Variables":
        return "bg-blue-600";
      case "Data Types":
        return "bg-green-600";
      case "Conditions":
        return "bg-yellow-600";
      case "Data Structures":
        return "bg-purple-600";
      default:
        return "bg-gray-600";
    }
  };

  const difficultyDetails = getDifficultyDetails();
  const conceptColor = getConceptColor();

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 transition-all">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className={`${conceptColor} px-2 py-1 rounded text-xs`}>
            {concept}
          </div>
          <div
            className={`flex items-center ${difficultyDetails.bgColor} ${difficultyDetails.borderColor} border px-2 py-1 rounded`}
          >
            {difficultyDetails.icon}
            <span className={`ml-1 text-xs ${difficultyDetails.textColor}`}>
              {difficulty}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>

        <Link href={path}>
          <Button
            variant="outline"
            className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
          >
            Start Exercise
          </Button>
        </Link>
      </div>
    </div>
  );
}
