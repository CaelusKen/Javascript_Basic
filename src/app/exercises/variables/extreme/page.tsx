/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { ArrowLeft, Lightbulb, Check, X, Trophy } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeEditor from "@/components/code-editor";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import CodeExample from "@/components/code-example";

export default function VariablesExtremeExercise() {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const initialCode = `// Exercise: Movie Revenue Forecasting
// Create a sophisticated revenue prediction model with advanced variable usage

// MOVIE PRODUCTION DATA
// TODO: Create constants for the movie details
// - MOVIE_TITLE: "The JavaScript Adventure"
// - PRODUCTION_BUDGET: 100,000,000
// - MARKETING_BUDGET: 50,000,000
// - RUNTIME_MINUTES: 120
// - RELEASE_YEAR: 2023
// - GENRE: "Action/Adventure"
// - FRANCHISE: true (is this part of a franchise?)
// - RATING: "PG-13"

// MARKET FACTORS
// TODO: Create constants for market factors
// - AVERAGE_TICKET_PRICE: 12.50
// - INTERNATIONAL_MARKET_MULTIPLIER: 1.5 (international revenue is typically 1.5x domestic)
// - STREAMING_RIGHTS_PERCENTAGE: 0.2 (streaming rights typically worth 20% of production budget)
// - HOME_VIDEO_PERCENTAGE: 0.15 (home video sales typically worth 15% of total box office)

// PERFORMANCE FACTORS
// TODO: Create variables for performance factors (these could change in different scenarios)
// - criticsScore: 85 (out of 100)
// - audienceScore: 90 (out of 100)
// - openingWeekendRevenue: 75,000,000
// - openingWeekendTheaters: 4,200
// - secondWeekendDropPercentage: 0.55 (55% drop from first to second weekend)
// - competitionLevel: "medium" (low, medium, high)

// REVENUE FORECASTING MODEL
// TODO: Implement the revenue forecasting model

// 1. Calculate the per-theater average for opening weekend
// (openingWeekendRevenue / openingWeekendTheaters)

// 2. Calculate the estimated second weekend revenue
// (openingWeekendRevenue * (1 - secondWeekendDropPercentage))

// 3. Calculate the domestic multiplier based on various factors
// - Base multiplier: 2.8
// - Adjust for critics score: +0.6 if > 80, +0.3 if > 70, -0.2 if < 50
// - Adjust for audience score: +0.4 if > 85, +0.2 if > 75, -0.3 if < 60
// - Adjust for competition: +0.3 for low, 0 for medium, -0.3 for high
// - Adjust for genre: +0.2 for family/animation, -0.1 for horror, +0.1 for action/adventure
// - Adjust for runtime: -0.2 if > 160 minutes, +0.1 if between 90-120 minutes
// - Adjust for franchise: +0.2 if part of a franchise
// - Adjust for release year: +0.1 if released in 2023 (current year)

// 4. Calculate the estimated domestic total
// (openingWeekendRevenue * domesticMultiplier)

// 5. Calculate the estimated international total
// (estimatedDomesticTotal * INTERNATIONAL_MARKET_MULTIPLIER)

// 6. Calculate the estimated worldwide box office
// (estimatedDomesticTotal + estimatedInternationalTotal)

// 7. Calculate the estimated streaming rights value
// (PRODUCTION_BUDGET * STREAMING_RIGHTS_PERCENTAGE)

// 8. Calculate the estimated home video revenue
// (estimatedWorldwideBoxOffice * HOME_VIDEO_PERCENTAGE)

// 9. Calculate the total estimated revenue
// (estimatedWorldwideBoxOffice + estimatedStreamingRightsValue + estimatedHomeVideoRevenue)

// 10. Calculate the estimated profit
// (totalEstimatedRevenue - PRODUCTION_BUDGET - MARKETING_BUDGET)

// 11. Calculate the return on investment (ROI)
// ((estimatedProfit / (PRODUCTION_BUDGET + MARKETING_BUDGET)) * 100)

// 12. Determine if the movie is likely to be profitable
// (estimatedProfit > 0)

// 13. Determine the success level based on ROI
// - "Blockbuster" if ROI > 100%
// - "Hit" if ROI > 50%
// - "Profitable" if ROI > 20%
// - "Break Even" if ROI between -10% and 20%
// - "Disappointment" if ROI between -25% and -10%
// - "Flop" if ROI < -25%

// TODO: Create a function to generate a detailed revenue forecast report
function generateRevenueForecastReport() {
  // Your code here
}

// Display the basic forecast results
console.log("MOVIE REVENUE FORECAST");
console.log("----------------------");
console.log("Movie: " + MOVIE_TITLE + " (" + RELEASE_YEAR + ")");
console.log("Budget: $" + (PRODUCTION_BUDGET + MARKETING_BUDGET).toLocaleString());
console.log("Opening Weekend: $" + openingWeekendRevenue.toLocaleString());
console.log("----------------------");
console.log("FORECAST RESULTS:");
console.log("Domestic Total: $" + estimatedDomesticTotal.toLocaleString());
console.log("International Total: $" + estimatedInternationalTotal.toLocaleString());
console.log("Worldwide Box Office: $" + estimatedWorldwideBoxOffice.toLocaleString());
console.log("Additional Revenue: $" + (estimatedStreamingRightsValue + estimatedHomeVideoRevenue).toLocaleString());
console.log("Total Revenue: $" + totalEstimatedRevenue.toLocaleString());
console.log("Estimated Profit: $" + estimatedProfit.toLocaleString());
console.log("ROI: " + estimatedROI.toFixed(1) + "%");
console.log("Success Level: " + successLevel);
console.log("----------------------");

// Generate and display the detailed report
const detailedReport = generateRevenueForecastReport();
console.log(detailedReport);

// TODO: Create a function to run a sensitivity analysis with different scenarios
// This function should take parameters for different critic scores, audience scores,
// opening weekend revenues, and competition levels, and return an array of forecasts
function runSensitivityAnalysis(scenarios) {
  // Your code here
}

// Example usage of the sensitivity analysis function
const scenarios = [
  { name: "Best Case", criticsScore: 95, audienceScore: 95, openingWeekend: 90000000, competition: "low" },
  { name: "Base Case", criticsScore: 85, audienceScore: 90, openingWeekend: 75000000, competition: "medium" },
  { name: "Worst Case", criticsScore: 65, audienceScore: 75, openingWeekend: 50000000, competition: "high" }
];

// Run the sensitivity analysis
const sensitivityResults = runSensitivityAnalysis(scenarios);
console.log("SENSITIVITY ANALYSIS:");
console.log(sensitivityResults);`;

  const solutionCode = `// Exercise: Movie Revenue Forecasting
// Create a sophisticated revenue prediction model with advanced variable usage

// MOVIE PRODUCTION DATA
// Create constants for the movie details
const MOVIE_TITLE = "The JavaScript Adventure";
const PRODUCTION_BUDGET = 100000000;
const MARKETING_BUDGET = 50000000;
const RUNTIME_MINUTES = 120;
const RELEASE_YEAR = 2023;
const GENRE = "Action/Adventure";
const FRANCHISE = true;
const RATING = "PG-13";

// MARKET FACTORS
// Create constants for market factors
const AVERAGE_TICKET_PRICE = 12.50;
const INTERNATIONAL_MARKET_MULTIPLIER = 1.5;
const STREAMING_RIGHTS_PERCENTAGE = 0.2;
const HOME_VIDEO_PERCENTAGE = 0.15;

// PERFORMANCE FACTORS
// Create variables for performance factors
let criticsScore = 85;
let audienceScore = 90;
let openingWeekendRevenue = 75000000;
let openingWeekendTheaters = 4200;
let secondWeekendDropPercentage = 0.55;
let competitionLevel = "medium";

// REVENUE FORECASTING MODEL
// 1. Calculate the per-theater average for opening weekend
const perTheaterAverage = openingWeekendRevenue / openingWeekendTheaters;

// 2. Calculate the estimated second weekend revenue
const secondWeekendRevenue = openingWeekendRevenue * (1 - secondWeekendDropPercentage);

// 3. Calculate the domestic multiplier based on various factors
let domesticMultiplier = 2.8; // Base multiplier

// Adjust for critics score
if (criticsScore > 80) {
  domesticMultiplier += 0.6;
} else if (criticsScore > 70) {
  domesticMultiplier += 0.3;
} else if (criticsScore < 50) {
  domesticMultiplier -= 0.2;
}

// Adjust for audience score
if (audienceScore > 85) {
  domesticMultiplier += 0.4;
} else if (audienceScore > 75) {
  domesticMultiplier += 0.2;
} else if (audienceScore < 60) {
  domesticMultiplier -= 0.3;
}

// Adjust for competition
if (competitionLevel === "low") {
  domesticMultiplier += 0.3;
} else if (competitionLevel === "high") {
  domesticMultiplier -= 0.3;
}

// Adjust for genre
if (GENRE.includes("Family") || GENRE.includes("Animation")) {
  domesticMultiplier += 0.2;
} else if (GENRE.includes("Horror")) {
  domesticMultiplier -= 0.1;
} else if (GENRE.includes("Action") || GENRE.includes("Adventure")) {
  domesticMultiplier += 0.1;
}

// Adjust for runtime
if (RUNTIME_MINUTES > 160) {
  domesticMultiplier -= 0.2;
} else if (RUNTIME_MINUTES >= 90 && RUNTIME_MINUTES <= 120) {
  domesticMultiplier += 0.1;
}

// Adjust for franchise
if (FRANCHISE) {
  domesticMultiplier += 0.2;
}

// Adjust for release year
if (RELEASE_YEAR === 2023) {
  domesticMultiplier += 0.1;
}

// 4. Calculate the estimated domestic total
const estimatedDomesticTotal = openingWeekendRevenue * domesticMultiplier;

// 5. Calculate the estimated international total
const estimatedInternationalTotal = estimatedDomesticTotal * INTERNATIONAL_MARKET_MULTIPLIER;

// 6. Calculate the estimated worldwide box office
const estimatedWorldwideBoxOffice = estimatedDomesticTotal + estimatedInternationalTotal;

// 7. Calculate the estimated streaming rights value
const estimatedStreamingRightsValue = PRODUCTION_BUDGET * STREAMING_RIGHTS_PERCENTAGE;

// 8. Calculate the estimated home video revenue
const estimatedHomeVideoRevenue = estimatedWorldwideBoxOffice * HOME_VIDEO_PERCENTAGE;

// 9. Calculate the total estimated revenue
const totalEstimatedRevenue = estimatedWorldwideBoxOffice + estimatedStreamingRightsValue + estimatedHomeVideoRevenue;

// 10. Calculate the estimated profit
const estimatedProfit = totalEstimatedRevenue - PRODUCTION_BUDGET - MARKETING_BUDGET;

// 11. Calculate the return on investment (ROI)
const estimatedROI = (estimatedProfit / (PRODUCTION_BUDGET + MARKETING_BUDGET)) * 100;

// 12. Determine if the movie is likely to be profitable
const isLikelyProfitable = estimatedProfit > 0;

// 13. Determine the success level based on ROI
let successLevel;
if (estimatedROI > 100) {
  successLevel = "Blockbuster";
} else if (estimatedROI > 50) {
  successLevel = "Hit";
} else if (estimatedROI > 20) {
  successLevel = "Profitable";
} else if (estimatedROI >= -10) {
  successLevel = "Break Even";
} else if (estimatedROI >= -25) {
  successLevel = "Disappointment";
} else {
  successLevel = "Flop";
}

// Create a function to generate a detailed revenue forecast report
function generateRevenueForecastReport() {
  const totalBudget = PRODUCTION_BUDGET + MARKETING_BUDGET;
  const productionPercentage = (PRODUCTION_BUDGET / totalBudget) * 100;
  const marketingPercentage = (MARKETING_BUDGET / totalBudget) * 100;
  
  let report = "DETAILED REVENUE FORECAST REPORT\\n";
  report += "===============================\\n\\n";
  
  // Movie Information
  report += "MOVIE INFORMATION:\\n";
  report += "-----------------\\n";
  report += "Title: " + MOVIE_TITLE + "\\n";
  report += "Release Year: " + RELEASE_YEAR + "\\n";
  report += "Genre: " + GENRE + "\\n";
  report += "Runtime: " + RUNTIME_MINUTES + " minutes\\n";
  report += "Rating: " + RATING + "\\n";
  report += "Franchise: " + (FRANCHISE ? "Yes" : "No") + "\\n\\n";
  
  // Budget Breakdown
  report += "BUDGET BREAKDOWN:\\n";
  report += "----------------\\n";
  report += "Production Budget: $" + PRODUCTION_BUDGET.toLocaleString() + " (" + productionPercentage.toFixed(1) + "%)\\n";
  report += "Marketing Budget: $" + MARKETING_BUDGET.toLocaleString() + " (" + marketingPercentage.toFixed(1) + "%)\\n";
  report += "Total Budget: $" + totalBudget.toLocaleString() + "\\n\\n";
  
  // Performance Metrics
  report += "PERFORMANCE METRICS:\\n";
  report += "-------------------\\n";
  report += "Critics Score: " + criticsScore + "/100\\n";
  report += "Audience Score: " + audienceScore + "/100\\n";
  report += "Opening Weekend: $" + openingWeekendRevenue.toLocaleString() + "\\n";
  report += "Theaters: " + openingWeekendTheaters.toLocaleString() + "\\n";
  report += "Per-Theater Average: $" + perTheaterAverage.toLocaleString(undefined, { maximumFractionDigits: 2 }) + "\\n";
  report += "Second Weekend Drop: " + (secondWeekendDropPercentage * 100).toFixed(1) + "%\\n";
  report += "Second Weekend Revenue: $" + secondWeekendRevenue.toLocaleString() + "\\n";
  report += "Competition Level: " + competitionLevel.charAt(0).toUpperCase() + competitionLevel.slice(1) + "\\n\\n";
  
  // Revenue Forecast
  report += "REVENUE FORECAST:\\n";
  report += "----------------\\n";
  report += "Domestic Multiplier: " + domesticMultiplier.toFixed(2) + "x\\n";
  report += "Estimated Domestic Total: $" + estimatedDomesticTotal.toLocaleString() + "\\n";
  report += "Estimated International Total: $" + estimatedInternationalTotal.toLocaleString() + "\\n";
  report += "Estimated Worldwide Box Office: $" + estimatedWorldwideBoxOffice.toLocaleString() + "\\n\\n";
  
  // Additional Revenue Streams
  report += "ADDITIONAL REVENUE STREAMS:\\n";
  report += "--------------------------\\n";
  report += "Streaming Rights: $" + estimatedStreamingRightsValue.toLocaleString() + "\\n";
  report += "Home Video: $" + estimatedHomeVideoRevenue.toLocaleString() + "\\n";
  report += "Total Additional Revenue: $" + (estimatedStreamingRightsValue + estimatedHomeVideoRevenue).toLocaleString() + "\\n\\n";
  
  // Financial Summary
  report += "FINANCIAL SUMMARY:\\n";
  report += "-----------------\\n";
  report += "Total Estimated Revenue: $" + totalEstimatedRevenue.toLocaleString() + "\\n";
  report += "Estimated Profit: $" + estimatedProfit.toLocaleString() + "\\n";
  report += "Return on Investment: " + estimatedROI.toFixed(1) + "%\\n";
  report += "Success Level: " + successLevel + "\\n";
  report += "Profitable: " + (isLikelyProfitable ? "Yes" : "No") + "\\n\\n";
  
  // Break-even Analysis
  const breakEvenRevenue = totalBudget / (1 - 0.5); // Assuming 50% of box office goes to theaters/distributors
  report += "BREAK-EVEN ANALYSIS:\\n";
  report += "-------------------\\n";
  report += "Break-even Box Office: $" + breakEvenRevenue.toLocaleString() + "\\n";
  report += "Estimated Tickets Needed: " + Math.ceil(breakEvenRevenue / AVERAGE_TICKET_PRICE).toLocaleString() + "\\n\\n";
  
  report += "===============================\\n";
  report += "Report generated: " + new Date().toLocaleString();
  
  return report;
}

// Display the basic forecast results
console.log("MOVIE REVENUE FORECAST");
console.log("----------------------");
console.log("Movie: " + MOVIE_TITLE + " (" + RELEASE_YEAR + ")");
console.log("Budget: $" + (PRODUCTION_BUDGET + MARKETING_BUDGET).toLocaleString());
console.log("Opening Weekend: $" + openingWeekendRevenue.toLocaleString());
console.log("----------------------");
console.log("FORECAST RESULTS:");
console.log("Domestic Total: $" + estimatedDomesticTotal.toLocaleString());
console.log("International Total: $" + estimatedInternationalTotal.toLocaleString());
console.log("Worldwide Box Office: $" + estimatedWorldwideBoxOffice.toLocaleString());
console.log("Additional Revenue: $" + (estimatedStreamingRightsValue + estimatedHomeVideoRevenue).toLocaleString());
console.log("Total Revenue: $" + totalEstimatedRevenue.toLocaleString());
console.log("Estimated Profit: $" + estimatedProfit.toLocaleString());
console.log("ROI: " + estimatedROI.toFixed(1) + "%");
console.log("Success Level: " + successLevel);
console.log("----------------------");

// Generate and display the detailed report
const detailedReport = generateRevenueForecastReport();
console.log(detailedReport);

// Create a function to run a sensitivity analysis with different scenarios
function runSensitivityAnalysis(scenarios) {
  const results = [];
  
  // Store original values
  const originalCriticsScore = criticsScore;
  const originalAudienceScore = audienceScore;
  const originalOpeningWeekend = openingWeekendRevenue;
  const originalCompetition = competitionLevel;
  
  // Process each scenario
  for (const scenario of scenarios) {
    // Update variables with scenario values
    criticsScore = scenario.criticsScore;
    audienceScore = scenario.audienceScore;
    openingWeekendRevenue = scenario.openingWeekend;
    competitionLevel = scenario.competition;
    
    // Recalculate the domestic multiplier
    let scenarioMultiplier = 2.8; // Base multiplier
    
    // Adjust for critics score
    if (criticsScore > 80) {
      scenarioMultiplier += 0.6;
    } else if (criticsScore > 70) {
      scenarioMultiplier += 0.3;
    } else if (criticsScore < 50) {
      scenarioMultiplier -= 0.2;
    }
    
    // Adjust for audience score
    if (audienceScore > 85) {
      scenarioMultiplier += 0.4;
    } else if (audienceScore > 75) {
      scenarioMultiplier += 0.2;
    } else if (audienceScore < 60) {
      scenarioMultiplier -= 0.3;
    }
    
    // Adjust for competition
    if (competitionLevel === "low") {
      scenarioMultiplier += 0.3;
    } else if (competitionLevel === "high") {
      scenarioMultiplier -= 0.3;
    }
    
    // Other adjustments remain the same as they're based on constants
    if (GENRE.includes("Family") || GENRE.includes("Animation")) {
      scenarioMultiplier += 0.2;
    } else if (GENRE.includes("Horror")) {
      scenarioMultiplier -= 0.1;
    } else if (GENRE.includes("Action") || GENRE.includes("Adventure")) {
      scenarioMultiplier += 0.1;
    }
    
    if (RUNTIME_MINUTES > 160) {
      scenarioMultiplier -= 0.2;
    } else if (RUNTIME_MINUTES >= 90 && RUNTIME_MINUTES <= 120) {
      scenarioMultiplier += 0.1;
    }
    
    if (FRANCHISE) {
      scenarioMultiplier += 0.2;
    }
    
    if (RELEASE_YEAR === 2023) {
      scenarioMultiplier += 0.1;
    }
    
    // Calculate revenue and profit for this scenario
    const scenarioDomesticTotal = openingWeekendRevenue * scenarioMultiplier;
    const scenarioInternationalTotal = scenarioDomesticTotal * INTERNATIONAL_MARKET_MULTIPLIER;
    const scenarioWorldwideBoxOffice = scenarioDomesticTotal + scenarioInternationalTotal;
    const scenarioStreamingRights = PRODUCTION_BUDGET * STREAMING_RIGHTS_PERCENTAGE;
    const scenarioHomeVideo = scenarioWorldwideBoxOffice * HOME_VIDEO_PERCENTAGE;
    const scenarioTotalRevenue = scenarioWorldwideBoxOffice + scenarioStreamingRights + scenarioHomeVideo;
    const scenarioProfit = scenarioTotalRevenue - PRODUCTION_BUDGET - MARKETING_BUDGET;
    const scenarioROI = (scenarioProfit / (PRODUCTION_BUDGET + MARKETING_BUDGET)) * 100;
    
    // Determine success level
    let scenarioSuccessLevel;
    if (scenarioROI > 100) {
      scenarioSuccessLevel = "Blockbuster";
    } else if (scenarioROI > 50) {
      scenarioSuccessLevel = "Hit";
    } else if (scenarioROI > 20) {
      scenarioSuccessLevel = "Profitable";
    } else if (scenarioROI >= -10) {
      scenarioSuccessLevel = "Break Even";
    } else if (scenarioROI >= -25) {
      scenarioSuccessLevel = "Disappointment";
    } else {
      scenarioSuccessLevel = "Flop";
    }
    
    // Add results to the array
    results.push({
      name: scenario.name,
      criticsScore: scenario.criticsScore,
      audienceScore: scenario.audienceScore,
      openingWeekend: scenario.openingWeekend,
      competition: scenario.competition,
      domesticMultiplier: scenarioMultiplier,
      domesticTotal: scenarioDomesticTotal,
      worldwideTotal: scenarioWorldwideBoxOffice,
      totalRevenue: scenarioTotalRevenue,
      profit: scenarioProfit,
      roi: scenarioROI,
      successLevel: scenarioSuccessLevel
    });
  }
  
  // Restore original values
  criticsScore = originalCriticsScore;
  audienceScore = originalAudienceScore;
  openingWeekendRevenue = originalOpeningWeekend;
  competitionLevel = originalCompetition;
  
  return results;
}

// Example usage of the sensitivity analysis function
const scenarios = [
  { name: "Best Case", criticsScore: 95, audienceScore: 95, openingWeekend: 90000000, competition: "low" },
  { name: "Base Case", criticsScore: 85, audienceScore: 90, openingWeekend: 75000000, competition: "medium" },
  { name: "Worst Case", criticsScore: 65, audienceScore: 75, openingWeekend: 50000000, competition: "high" }
];

// Run the sensitivity analysis
const sensitivityResults = runSensitivityAnalysis(scenarios);
console.log("SENSITIVITY ANALYSIS:");
console.log(sensitivityResults);
`;

  const validateCode = (code: string) => {
    try {
      new Function(code);
      return { success: true, message: "Code is valid" };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  };

  const handleSubmit = async (userCode: string) => {
    // First, validate if the code can be parsed
    const parseResult = validateCode(userCode);
    if (!parseResult.success) {
      setResult(parseResult);
      return;
    }

    // Then check if the required variables are defined
    try {
      // Create a function that will evaluate the code and check for required variables
      const checkCode = new Function(`
      ${userCode}
      
      // Check if required variables are defined
      const requiredVars = [
        'MOVIE_TITLE', 'PRODUCTION_BUDGET', 'MARKETING_BUDGET', 'RUNTIME_MINUTES',
        'RELEASE_YEAR', 'GENRE', 'FRANCHISE', 'RATING', 'AVERAGE_TICKET_PRICE',
        'INTERNATIONAL_MARKET_MULTIPLIER', 'STREAMING_RIGHTS_PERCENTAGE', 'HOME_VIDEO_PERCENTAGE',
        'criticsScore', 'audienceScore', 'openingWeekendRevenue', 'openingWeekendTheaters',
        'secondWeekendDropPercentage', 'competitionLevel', 'estimatedDomesticTotal',
        'estimatedInternationalTotal', 'estimatedWorldwideBoxOffice', 'estimatedStreamingRightsValue',
        'estimatedHomeVideoRevenue', 'totalEstimatedRevenue', 'estimatedProfit', 'estimatedROI',
        'successLevel'
      ];
      
      const missing = [];
      for (const varName of requiredVars) {
        if (typeof eval(varName) === 'undefined') {
          missing.push(varName);
        }
      }
      
      if (missing.length > 0) {
        throw new Error('Missing required variables: ' + missing.join(', '));
      }
      
      // Check if functions are defined
      if (typeof generateRevenueForecastReport !== 'function') {
        throw new Error('The generateRevenueForecastReport function is not defined or not a function');
      }
      
      if (typeof runSensitivityAnalysis !== 'function') {
        throw new Error('The runSensitivityAnalysis function is not defined or not a function');
      }
      
      return true;
    `);

      checkCode();
      setResult({
        success: true,
        message:
          "Great job! Your code implements all the required variables and functions correctly.",
      });
    } catch (error) {
      setResult({ success: false, message: error as string });
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-zinc-100 py-2 px-4">
        <Link href="/exercises/variables">
          <Button variant="ghost">
            <ArrowLeft className="mr-2" /> Back to Variables Exercises
          </Button>
        </Link>
      </nav>
      <div className="flex flex-grow p-4 space-x-4">
        <div className="w-1/2">
          <Tabs defaultValue="exercise" className="w-full">
            <TabsList>
              <TabsTrigger value="exercise">Exercise</TabsTrigger>
              <TabsTrigger value="hint">Hint</TabsTrigger>
              <TabsTrigger value="solution">Solution</TabsTrigger>
            </TabsList>
            <TabsContent value="exercise">
              <CodeEditor initialCode={initialCode} onCheck={handleSubmit} />
            </TabsContent>
            <TabsContent value="hint">
              <Alert>
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>Hint</AlertTitle>
                <AlertDescription>
                  Focus on correctly declaring and assigning values to the
                  constants and variables as described in the comments. Pay
                  close attention to the data types and ensure that the
                  calculations are performed in the correct order.
                </AlertDescription>
              </Alert>
            </TabsContent>
            <TabsContent value="solution">
              <CodeExample code={solutionCode} />
            </TabsContent>
          </Tabs>
        </div>
        <div className="w-1/2">
          {result && (
            <Alert variant={result.success ? "default" : "destructive"}>
              {result.success ? (
                <Check className="h-4 w-4" />
              ) : (
                <X className="h-4 w-4" />
              )}
              <AlertTitle>{result.success ? "Success!" : "Error"}</AlertTitle>
              <AlertDescription>{result.message}</AlertDescription>
            </Alert>
          )}
          <div className="mt-4">
            <p>
              This exercise is designed to test your understanding of variables
              and constants in JavaScript. You will be working with a movie
              revenue forecasting model, where you need to declare constants for
              movie details and market factors, and variables for performance
              factors.
            </p>
            <p className="mt-2">Your task is to complete the code by:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Declaring the necessary constants and variables.</li>
              <li>Implementing the revenue forecasting model.</li>
              <li>
                Creating a function to generate a detailed revenue forecast
                report.
              </li>
              <li>
                Creating a function to run a sensitivity analysis with different
                scenarios.
              </li>
            </ul>
            <p className="mt-2">
              Use the &quot;Hint&quot; tab for guidance and the
              &quot;Solution&quot; tab to see a possible solution.
            </p>
            <div className="flex items-center space-x-2 mt-4">
              <Trophy className="h-5 w-5 text-yellow-500" />
              <p className="font-semibold">Extreme Challenge</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
