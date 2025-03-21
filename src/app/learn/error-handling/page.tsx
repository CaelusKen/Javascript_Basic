import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CodeExample from "@/components/code-example";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InteractiveExercise from "@/components/interactive-exercise";

export default function ErrorHandlingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link href="/learn">
            <Button
              variant="outline"
              className="mr-4 border-gray-700 bg-black/50 text-white hover:bg-black/70"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Learning Center
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">JavaScript Error Handling</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Understanding Error Handling
              </h2>
              <p className="mb-4">
                Error handling is a critical part of writing robust JavaScript
                applications. It allows you to gracefully handle unexpected
                situations, provide meaningful feedback to users, and prevent
                application crashes.
              </p>

              <Tabs defaultValue="try-catch" className="mb-6">
                <TabsList className="bg-gray-950 border-gray-800">
                  <TabsTrigger
                    value="try-catch"
                    className="data-[state=active]:bg-red-600"
                  >
                    Try/Catch
                  </TabsTrigger>
                  <TabsTrigger
                    value="error-types"
                    className="data-[state=active]:bg-red-600"
                  >
                    Error Types
                  </TabsTrigger>
                  <TabsTrigger
                    value="custom-errors"
                    className="data-[state=active]:bg-red-600"
                  >
                    Custom Errors
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="try-catch" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Try/Catch/Finally
                  </h3>
                  <p className="mb-4">
                    The try/catch statement allows you to test a block of code
                    for errors and handle them gracefully.
                  </p>
                  <CodeExample
                    code={`// Basic try/catch
try {
  // Code that might throw an error
  const movie = getMovieById(123);
  displayMovie(movie);
} catch (error) {
  // Code to handle the error
  console.error("An error occurred:", error.message);
  showErrorMessage("Sorry, we couldn't load the movie.");
}

// Try/catch/finally
try {
  const response = await fetch('https://api.movies.com/movie/123');
  const movie = await response.json();
  displayMovie(movie);
} catch (error) {
  console.error("Failed to fetch movie:", error);
  showErrorMessage("Failed to load movie data.");
} finally {
  // This code always runs, regardless of whether an error occurred
  hideLoadingSpinner();
}

// Catching specific error types
try {
  const result = riskyOperation();
} catch (error) {
  if (error instanceof TypeError) {
    console.error("Type error:", error.message);
  } else if (error instanceof ReferenceError) {
    console.error("Reference error:", error.message);
  } else {
    console.error("Unknown error:", error);
  }
}

// Nested try/catch blocks
try {
  try {
    riskyOperation();
  } catch (innerError) {
    // Handle specific errors from riskyOperation
    console.warn("Inner operation failed:", innerError.message);
    // You can rethrow or throw a new error
    throw new Error("Operation failed due to inner error");
  }
} catch (outerError) {
  // Handle errors from the inner catch block
  console.error("Outer error handler:", outerError.message);
}

// Try/catch with async/await
async function fetchMovieData() {
  try {
    const response = await fetch('https://api.movies.com/movie/123');
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    // You can rethrow, return a default value, or handle the error
    return { title: "Unknown Movie", error: error.message };
  }
}`}
                  />
                </TabsContent>

                <TabsContent value="error-types" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Built-in Error Types
                  </h3>
                  <p className="mb-4">
                    JavaScript has several built-in error types that provide
                    information about specific kinds of errors.
                  </p>
                  <CodeExample
                    code={`// Error
// Base object for all errors
const genericError = new Error("Something went wrong");
console.log(genericError.message); // "Something went wrong"
console.log(genericError.name); // "Error"
console.log(genericError.stack); // Stack trace

// SyntaxError
// Occurs when there's a syntax error in the code
try {
  eval("if (true) { console.log('Missing closing brace'");
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Contains information about the syntax error
}

// ReferenceError
// Occurs when referencing a variable that doesn't exist
try {
  console.log(undefinedVariable);
} catch (error) {
  console.log(error.name); // "ReferenceError"
  console.log(error.message); // "undefinedVariable is not defined"
}

// TypeError
// Occurs when a value is not of the expected type
try {
  const movie = null;
  console.log(movie.title); // Trying to access a property of null
} catch (error) {
  console.log(error.name); // "TypeError"
  console.log(error.message); // "Cannot read properties of null (reading 'title')"
}

// RangeError
// Occurs when a value is not in the expected range
try {
  const arr = new Array(-1); // Negative array length
} catch (error) {
  console.log(error.name); // "RangeError"
  console.log(error.message); // "Invalid array length"
}

// URIError
// Occurs when using global URI handling functions incorrectly
try {
  decodeURIComponent('%'); // Invalid URI
} catch (error) {
  console.log(error.name); // "URIError"
  console.log(error.message); // "URI malformed"
}

// EvalError
// Historically used for errors with the eval() function
// Rarely used in modern JavaScript

// AggregateError
// Represents multiple errors wrapped in a single error
try {
  Promise.any([
    Promise.reject(new Error("API request failed")),
    Promise.reject(new Error("Network error")),
    Promise.reject(new Error("Timeout"))
  ]);
} catch (error) {
  console.log(error.name); // "AggregateError"
  console.log(error.errors); // Array of the rejected promises' errors
}

// Checking error types
function handleError(error) {
  if (error instanceof TypeError) {
    // Handle type errors
  } else if (error instanceof ReferenceError) {
    // Handle reference errors
  } else if (error instanceof RangeError) {
    // Handle range errors
  } else {
    // Handle other errors
  }
}`}
                  />
                </TabsContent>

                <TabsContent value="custom-errors" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Custom Error Types
                  </h3>
                  <p className="mb-4">
                    You can create custom error types by extending the built-in
                    Error class. This allows you to create more specific error
                    types for your application.
                  </p>
                  <CodeExample
                    code={`// Creating a custom error class
class MovieError extends Error {
  constructor(message) {
    super(message);
    this.name = "MovieError";
  }
}

// Using the custom error
try {
  throw new MovieError("Movie not found in database");
} catch (error) {
  console.log(error.name); // "MovieError"
  console.log(error.message); // "Movie not found in database"
}

// More specific custom error with additional properties
class APIError extends Error {
  constructor(message, statusCode, endpoint) {
    super(message);
    this.name = "APIError";
    this.statusCode = statusCode;
    this.endpoint = endpoint;
    this.timestamp = new Date();
  }
  
  getErrorInfo() {
    return {
      message: this.message,
      statusCode: this.statusCode,
      endpoint: this.endpoint,
      timestamp: this.timestamp
    };
  }
}

// Using the more specific error
try {
  throw new APIError("Failed to fetch movie data", 404, "/api/movies/123");
} catch (error) {
  if (error instanceof APIError) {
    console.log(error.getErrorInfo());
    // Handle API error specifically
    if (error.statusCode === 404) {
      showNotFoundMessage();
    } else if (error.statusCode === 401) {
      redirectToLogin();
    }
  } else {
    // Handle other errors
    console.error("Unknown error:", error);
  }
}

// Hierarchy of custom errors
class MovieServiceError extends Error {
  constructor(message) {
    super(message);
    this.name = "MovieServiceError";
  }
}

class MovieNotFoundError extends MovieServiceError {
  constructor(movieId) {
    super(\`Movie with ID \${movieId} not found\`);
    this.name = "MovieNotFoundError";
    this.movieId = movieId;
  }
}

class MovieStreamError extends MovieServiceError {
  constructor(movieId, streamError) {
    super(\`Error streaming movie \${movieId}: \${streamError.message}\`);
    this.name = "MovieStreamError";
    this.movieId = movieId;
    this.originalError = streamError;
  }
}

// Using the error hierarchy
function getMovie(id) {
  if (!movieExists(id)) {
    throw new MovieNotFoundError(id);
  }
  
  try {
    return streamMovie(id);
  } catch (error) {
    throw new MovieStreamError(id, error);
  }
}

// Handling the error hierarchy
try {
  const movie = getMovie(123);
  playMovie(movie);
} catch (error) {
  if (error instanceof MovieNotFoundError) {
    showMovieNotFoundUI(error.movieId);
  } else if (error instanceof MovieStreamError) {
    showStreamErrorUI(error.movieId, error.message);
    logError(error.originalError);
  } else if (error instanceof MovieServiceError) {
    showGenericMovieErrorUI(error.message);
  } else {
    showUnexpectedErrorUI();
    logError(error);
  }
}`}
                  />
                </TabsContent>
              </Tabs>

              <h3 className="text-xl font-semibold mb-2">
                Error Handling Strategies
              </h3>
              <p className="mb-4">
                Different situations call for different error handling
                strategies. Here are some common approaches:
              </p>
              <CodeExample
                code={`// 1. Fail fast - throw errors as soon as they're detected
function validateMovieData(movie) {
  if (!movie) {
    throw new Error("Movie data is required");
  }
  
  if (!movie.title) {
    throw new Error("Movie title is required");
  }
  
  if (typeof movie.year !== 'number' || movie.year < 1900) {
    throw new Error("Invalid movie year");
  }
  
  // If we get here, the data is valid
  return true;
}

// 2. Return error objects instead of throwing
function findMovie(id) {
  if (!id) {
    return { error: "Movie ID is required" };
  }
  
  const movie = database.getMovie(id);
  
  if (!movie) {
    return { error: "Movie not found" };
  }
  
  return { data: movie };
}

// Using the error object return pattern
const result = findMovie(123);
if (result.error) {
  console.error(result.error);
} else {
  displayMovie(result.data);
}

// 3. Error handling middleware (common in Express.js)
app.get('/movies/:id', (req, res, next) => {
  try {
    const movie = getMovieById(req.params.id);
    res.json(movie);
  } catch (error) {
    // Pass the error to the error handling middleware
    next(error);
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('API Error:', error);
  
  if (error instanceof MovieNotFoundError) {
    return res.status(404).json({ error: error.message });
  }
  
  // Default error response
  res.status(500).json({ error: 'Internal server error' });
});

// 4. Async error handling with higher-order functions
// This wraps an async route handler to catch errors automatically
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Using the async handler
app.get('/movies/:id', asyncHandler(async (req, res) => {
  const movie = await getMovieById(req.params.id);
  res.json(movie);
  // No try/catch needed here - errors are caught by asyncHandler
}));

// 5. Global error handling for unhandled exceptions
// Note: This should be used as a last resort
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Log the error, notify developers, etc.
  // Then gracefully shut down the application
  process.exit(1);
});

// For unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Promise Rejection:', reason);
  // Log the error, notify developers, etc.
});

// 6. Retry pattern for transient errors
async function fetchWithRetry(url, options = {}, retries = 3, delay = 1000) {
  try {
    return await fetch(url, options);
  } catch (error) {
    if (retries <= 0) {
      throw error;
    }
    
    console.warn(\`Fetch failed, retrying... (\${retries} attempts left)\`);
    await new Promise(resolve => setTimeout(resolve, delay));
    return fetchWithRetry(url, options, retries - 1, delay * 2);
  }
}`}
              />
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Error Handling in Action: Movie Application Example
              </h2>
              <p className="mb-4">
                Let&apos;s see how error handling is used in a movie streaming
                application:
              </p>

              <CodeExample
                code={`// Movie Streaming Application with Robust Error Handling

// Custom error types
class MovieServiceError extends Error {
  constructor(message) {
    super(message);
    this.name = "MovieServiceError";
  }
}

class MovieNotFoundError extends MovieServiceError {
  constructor(movieId) {
    super(\`Movie with ID \${movieId} not found\`);
    this.name = "MovieNotFoundError";
    this.movieId = movieId;
  }
}

class APIError extends MovieServiceError {
  constructor(message, statusCode, endpoint) {
    super(message);
    this.name = "APIError";
    this.statusCode = statusCode;
    this.endpoint = endpoint;
  }
}

class StreamError extends MovieServiceError {
  constructor(message, movieId, technicalDetails) {
    super(message);
    this.name = "StreamError";
    this.movieId = movieId;
    this.technicalDetails = technicalDetails;
  }
}

class PaymentRequiredError extends MovieServiceError {
  constructor(movieId, subscriptionInfo) {
    super("Payment required to watch this movie");
    this.name = "PaymentRequiredError";
    this.movieId = movieId;
    this.subscriptionInfo = subscriptionInfo;
  }
}

// Movie API service with error handling
class MovieAPI {
  // Fetch movie details with error handling
  static async getMovie(movieId) {
    try {
      const response = await fetch(\`https://api.movieservice.com/movies/\${movieId}\`);
      
      // Handle HTTP error status codes
      if (!response.ok) {
        if (response.status === 404) {
          throw new MovieNotFoundError(movieId);
        } else if (response.status === 402) {
          const subscriptionInfo = await response.json();
          throw new PaymentRequiredError(movieId, subscriptionInfo);
        } else {
          throw new APIError(
            \`Failed to fetch movie \${movieId}\`, 
            response.status, 
            \`/movies/\${movieId}\`
          );
        }
      }
      
      // Parse JSON response
      try {
        const data = await response.json();
        return data;
      } catch (error) {
        throw new APIError(
          "Invalid JSON response", 
          response.status, 
          \`/movies/\${movieId}\`
        );
      }
    } catch (error) {
      // Rethrow custom errors
      if (error instanceof MovieServiceError) {
        throw error;
      }
      
      // Convert network errors to custom errors
      if (error.name === "TypeError" && error.message.includes("fetch")) {
        throw new APIError(
          "Network error - please check your connection", 
          0, 
          \`/movies/\${movieId}\`
        );
      }
      
      // Fallback for unexpected errors
      throw new MovieServiceError(\`Error fetching movie \${movieId}: \${error.message}\`);
    }
  }
  
  // Start movie stream with error handling
  static async startStream(movieId, quality = "auto") {
    try {
      // Validate input
      if (!movieId) {
        throw new Error("Movie ID is required");
      }
      
      const validQualities = ["low", "medium", "high", "auto"];
      if (!validQualities.includes(quality)) {
        throw new Error(\`Invalid quality setting. Must be one of: \${validQualities.join(", ")}\`);
      }
      
      // Make API request
      const response = await fetch(
        \`https://api.movieservice.com/stream/\${movieId}?quality=\${quality}\`,
        { method: "POST" }
      );
      
      // Handle HTTP errors
      if (!response.ok) {
        if (response.status === 404) {
          throw new MovieNotFoundError(movieId);
        } else if (response.status === 402) {
          const subscriptionInfo = await response.json();
          throw new PaymentRequiredError(movieId, subscriptionInfo);
        } else if (response.status === 429) {
          throw new APIError(
            "Too many requests - please try again later", 
            429, 
            \`/stream/\${movieId}\`
          );
        } else {
          throw new APIError(
            \`Failed to start stream for movie \${movieId}\`, 
            response.status, 
            \`/stream/\${movieId}\`
          );
        }
      }
      
      // Parse stream data
      const streamData = await response.json();
      return streamData;
    } catch (error) {
      // Rethrow custom errors
      if (error instanceof MovieServiceError) {
        throw error;
      }
      
      // Convert network errors
      if (error.name === "TypeError" && error.message.includes("fetch")) {
        throw new APIError(
          "Network error - please check your connection", 
          0, 
          \`/stream/\${movieId}\`
        );
      }
      
      // Fallback for unexpected errors
      throw new StreamError(
        \`Error starting stream for movie \${movieId}\`, 
        movieId, 
        { originalError: error.message }
      );
    }
  }
}

// Video Player with error handling
class VideoPlayer {
  constructor(videoElement, movieId) {
    this.videoElement = videoElement;
    this.movieId = movieId;
    this.errorHandlers = {
      network: [],
      playback: [],
      subscription: [],
      notFound: [],
      generic: []
    };
  }
  
  // Register error handlers
  onError(type, handler) {
    if (this.errorHandlers[type]) {
      this.errorHandlers[type].push(handler);
    }
    return this; // For method chaining
  }
  
  // Trigger error handlers
  triggerError(type, error) {
    if (this.errorHandlers[type]) {
      this.errorHandlers[type].forEach(handler => handler(error));
    }
    // Always trigger generic handlers
    if (type !== 'generic') {
      this.errorHandlers.generic.forEach(handler => handler(error));
    }
  }
  
  // Load and play movie
  async loadAndPlay() {
    try {
      // Show loading state
      this.showLoadingState();
      
      // Fetch movie data
      const movie = await MovieAPI.getMovie(this.movieId);
      
      // Start the stream
      const streamData = await MovieAPI.startStream(this.movieId);
      
      // Set up video source
      this.videoElement.src = streamData.streamUrl;
      
      // Set up error handling for video element
      this.setupVideoErrorHandling();
      
      // Attempt to play the video
      try {
        await this.videoElement.play();
      } catch (playError) {
        // Handle autoplay restrictions
        if (playError.name === "NotAllowedError") {
          this.showPlayButton();
        } else {
          throw playError;
        }
      }
      
      // Hide loading state
      this.hideLoadingState();
      
      return { movie, streamData };
    } catch (error) {
      this.hideLoadingState();
      
      // Handle different error types
      if (error instanceof MovieNotFoundError) {
        this.triggerError('notFound', error);
        this.showErrorMessage("Movie not found. It may have been removed from our library.");
      } else if (error instanceof PaymentRequiredError) {
        this.triggerError('subscription', error);
        this.showSubscriptionRequired(error.subscriptionInfo);
      } else if (error instanceof APIError) {
        this.triggerError('network', error);
        if (error.statusCode === 429) {
          this.showErrorMessage("Too many requests. Please try again in a few minutes.");
        } else {
          this.showErrorMessage("Network error. Please check your connection and try again.");
        }
      } else if (error instanceof StreamError) {
        this.triggerError('playback', error);
        this.showErrorMessage("Error playing video. Please try again later.");
        // Log detailed error for debugging
        console.error("Stream error details:", error.technicalDetails);
      } else {
        this.triggerError('generic', error);
        this.showErrorMessage("An unexpected error occurred. Please try again later.");
        console.error("Unexpected error:", error);
      }
      
      throw error; // Rethrow for caller
    }
  }
  
  // Set up error handling for the video element
  setupVideoErrorHandling() {
    this.videoElement.addEventListener('error', (e) => {
      const videoError = this.videoElement.error;
      let errorMessage = "Video playback error";
      
      // Handle specific media error codes
      switch (videoError.code) {
        case MediaError.MEDIA_ERR_ABORTED:
          errorMessage = "Playback aborted by the user";
          break;
        case MediaError.MEDIA_ERR_NETWORK:
          errorMessage = "Network error occurred during playback";
          this.triggerError('network', new Error(errorMessage));
          break;
        case MediaError.MEDIA_ERR_DECODE:
          errorMessage = "Error decoding the video";
          break;
        case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
          errorMessage = "Video format not supported";
          break;
      }
      
      const streamError = new StreamError(
        errorMessage,
        this.movieId,
        { mediaErrorCode: videoError.code, mediaErrorMessage: videoError.message }
      );
      
      this.triggerError('playback', streamError);
      this.showErrorMessage(errorMessage);
    });
  }
  
  // UI helper methods (simplified)
  showLoadingState() {
    console.log('Showing loading state...');
  }
  
  hideLoadingState() {
    console.log('Hiding loading state...');
  }
  
  showErrorMessage(message) {
    console.error('Error:', message);
    // Implementation would show an error message to the user
  }
  
  showPlayButton() {
    console.log('Showing play button (autoplay blocked)...');
  }
  
  showSubscriptionRequired(info) {
    console.log('Showing subscription required:', info);
  }
}

// Usage example
async function initializeMoviePage(movieId) {
  const videoElement = document.getElementById('video-player');
  const player = new VideoPlayer(videoElement, movieId);
  
  // Set up error handlers
  player
    .onError('network', (error) => {
      // Track network errors
      analytics.trackError('network_error', { movieId, message: error.message });
    })
    .onError('notFound', () => {
      // Show recommendations when movie not found
      loadRecommendedMovies();
    })
    .onError('subscription', (error) => {
      // Show subscription dialog
      showSubscriptionDialog(error.subscriptionInfo);
    })
    .onError('generic', (error) => {
      // Log all errors to monitoring service
      errorMonitoring.captureException(error);
    });
  
  try {
    // Attempt to load and play the movie
    await player.loadAndPlay();
    console.log("Movie playing successfully");
  } catch (error) {
    // Error already handled by player, but we can add page-level handling here
    console.log("Player error handled, continuing with page experience");
    
    // We might still want to do something at the page level
    if (error instanceof MovieNotFoundError) {
      // Update URL to remove the invalid movie ID
      window.history.replaceState({}, '', '/browse');
    }
  }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get movie ID from URL or other source
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get('id') || '123'; // Default to movie 123 if no ID provided
  
  initializeMoviePage(movieId);
});

// Error logging utility
const errorMonitoring = {
  captureException(error) {
    // In a real app, this would send the error to a service like Sentry
    console.error('Error captured for monitoring:', error);
    
    // Collect additional context
    const errorContext = {
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      errorType: error.name,
      errorMessage: error.message
    };
    
    // Log error with context
    console.error('Error context:', errorContext);
    
    // In production, send to monitoring service
    // monitoringService.logError(error, errorContext);
  }
};

// Analytics utility
const analytics = {
  trackError(errorType, metadata) {
    // In a real app, this would send analytics data
    console.log('Analytics: Error tracked', errorType, metadata);
  }
};`}
              />
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Interactive Exercise</h2>
              <p className="mb-4">
                Try the exercise below to test your understanding of error
                handling:
              </p>

              <InteractiveExercise
                instructions="Fix the code below to implement proper error handling for a movie rating system."
                initialCode={`// Movie Rating System
// This code allows users to rate movies and stores the ratings

// Simulated database of movies and ratings
const movieDatabase = {
  movies: [
    { id: 1, title: "The JavaScript Adventure", ratings: [4, 5, 4, 5] },
    { id: 2, title: "Array of Darkness", ratings: [5, 4, 3, 5, 4] },
    { id: 3, title: "Promise Me Forever", ratings: [3, 4, 3] }
  ],
  
  // Get a movie by ID
  getMovie(id) {
    return this.movies.find(movie => movie.id === id);
  },
  
  // Add a rating to a movie
  addRating(movieId, rating) {
    const movie = this.getMovie(movieId);
    movie.ratings.push(rating);
    return this.calculateAverageRating(movie);
  },
  
  // Calculate the average rating for a movie
  calculateAverageRating(movie) {
    const sum = movie.ratings.reduce((total, rating) => total + rating, 0);
    return sum / movie.ratings.length;
  }
};

// TODO: Fix the addMovieRating function to handle errors properly
function addMovieRating(movieId, rating) {
  // Convert inputs to numbers
  movieId = Number(movieId);
  rating = Number(rating);
  
  // Add the rating to the movie
  const averageRating = movieDatabase.addRating(movieId, rating);
  
  return {
    success: true,
    averageRating: averageRating
  };
}

// TODO: Fix the displayMovieRating function to handle errors properly
function displayMovieRating(movieId) {
  const movie = movieDatabase.getMovie(Number(movieId));
  
  const titleElement = document.getElementById('movie-title');
  titleElement.textContent = movie.title;
  
  const ratingsElement = document.getElementById('movie-ratings');
  ratingsElement.textContent = \`Ratings: \${movie.ratings.join(', ')}\`;
  
  const averageElement = document.getElementById('average-rating');
  const averageRating = movieDatabase.calculateAverageRating(movie);
  averageElement.textContent = \`Average Rating: \${averageRating.toFixed(1)}\`;
}

// TODO: Fix the handleRatingSubmit function to handle errors properly
function handleRatingSubmit() {
  const movieIdInput = document.getElementById('movie-id');
  const ratingInput = document.getElementById('rating');
  
  const movieId = movieIdInput.value;
  const rating = ratingInput.value;
  
  const result = addMovieRating(movieId, rating);
  
  if (result.success) {
    displayMovieRating(movieId);
    showMessage(\`Rating added! New average: \${result.averageRating.toFixed(1)}\`);
  }
}

// Helper function to show messages
function showMessage(message, isError = false) {
  const messageElement = document.getElementById('message');
  messageElement.textContent = message;
  messageElement.className = isError ? 'error-message' : 'success-message';
}

// Set up event listeners
document.getElementById('rating-form').addEventListener('submit', function(e) {
  e.preventDefault();
  handleRatingSubmit();
});

// HTML structure (for reference):
/*
<div id="movie-rating-system">
  <div id="movie-info">
    <h2 id="movie-title">Select a movie</h2>
    <p id="movie-ratings"></p>
    <p id="average-rating"></p>
  </div>
  
  <form id="rating-form">
    <div>
      <label for="movie-id">Movie ID:</label>
      <input id="movie-id" type="number" min="1" required>
    </div>
    <div>
      <label for="rating">Your Rating (1-5):</label>
      <input id="rating" type="number" min="1" max="5" required>
    </div>
    <button type="submit">Submit Rating</button>
  </form>
  
  <div id="message"></div>
</div>
*/`}
                solution={`// Movie Rating System
// This code allows users to rate movies and stores the ratings

// Custom error classes
class MovieError extends Error {
  constructor(message) {
    super(message);
    this.name = "MovieError";
  }
}

class MovieNotFoundError extends MovieError {
  constructor(movieId) {
    super(\`Movie with ID \${movieId} not found\`);
    this.movieId = movieId;
  }
}

class InvalidRatingError extends MovieError {
  constructor(rating) {
    super(\`Invalid rating: \${rating}. Rating must be a number between 1 and 5\`);
    this.rating = rating;
  }
}

// Simulated database of movies and ratings
const movieDatabase = {
  movies: [
    { id: 1, title: "The JavaScript Adventure", ratings: [4, 5, 4, 5] },
    { id: 2, title: "Array of Darkness", ratings: [5, 4, 3, 5, 4] },
    { id: 3, title: "Promise Me Forever", ratings: [3, 4, 3] }
  ],
  
  // Get a movie by ID
  getMovie(id) {
    const movie = this.movies.find(movie => movie.id === id);
    if (!movie) {
      throw new MovieNotFoundError(id);
    }
    return movie;
  },
  
  // Add a rating to a movie
  addRating(movieId, rating) {
    // Validate rating
    if (typeof rating !== 'number' || rating < 1 || rating > 5 || !Number.isInteger(rating)) {
      throw new InvalidRatingError(rating);
    }
    
    const movie = this.getMovie(movieId);
    movie.ratings.push(rating);
    return this.calculateAverageRating(movie);
  },
  
  // Calculate the average rating for a movie
  calculateAverageRating(movie) {
    if (!movie || !movie.ratings || movie.ratings.length === 0) {
      throw new MovieError("Cannot calculate average: movie has no ratings");
    }
    
    const sum = movie.ratings.reduce((total, rating) => total + rating, 0);
    return sum / movie.ratings.length;
  }
};

// Fixed addMovieRating function with proper error handling
function addMovieRating(movieId, rating) {
  try {
    // Validate inputs
    if (!movieId) {
      throw new Error("Movie ID is required");
    }
    
    // Convert inputs to numbers
    const movieIdNum = Number(movieId);
    const ratingNum = Number(rating);
    
    // Check if conversions were successful
    if (isNaN(movieIdNum)) {
      throw new Error("Movie ID must be a number");
    }
    
    if (isNaN(ratingNum)) {
      throw new InvalidRatingError(rating);
    }
    
    // Add the rating to the movie
    const averageRating = movieDatabase.addRating(movieIdNum, ratingNum);
    
    return {
      success: true,
      averageRating: averageRating
    };
  } catch (error) {
    console.error("Error adding rating:", error);
    
    return {
      success: false,
      error: error.message
    };
  }
}

// Fixed displayMovieRating function with proper error handling
function displayMovieRating(movieId) {
  try {
    if (!movieId) {
      throw new Error("Movie ID is required");
    }
    
    const movieIdNum = Number(movieId);
    if (isNaN(movieIdNum)) {
      throw new Error("Movie ID must be a number");
    }
    
    const movie = movieDatabase.getMovie(movieIdNum);
    
    const titleElement = document.getElementById('movie-title');
    titleElement.textContent = movie.title;
    
    const ratingsElement = document.getElementById('movie-ratings');
    ratingsElement.textContent = \`Ratings: \${movie.ratings.join(', ')}\`;
    
    const averageElement = document.getElementById('average-rating');
    const averageRating = movieDatabase.calculateAverageRating(movie);
    averageElement.textContent = \`Average Rating: \${averageRating.toFixed(1)}\`;
    
    return true;
  } catch (error) {
    console.error("Error displaying movie rating:", error);
    
    // Clear movie info
    document.getElementById('movie-title').textContent = "Movie not found";
    document.getElementById('movie-ratings').textContent = "";
    document.getElementById('average-rating').textContent = "";
    
    // Show error message
    showMessage(error.message, true);
    
    return false;
  }
}

// Fixed handleRatingSubmit function with proper error handling
function handleRatingSubmit() {
  try {
    const movieIdInput = document.getElementById('movie-id');
    const ratingInput = document.getElementById('rating');
    
    const movieId = movieIdInput.value.trim();
    const rating = ratingInput.value.trim();
    
    // Validate inputs
    if (!movieId) {
      throw new Error("Please enter a movie ID");
    }
    
    if (!rating) {
      throw new Error("Please enter a rating");
    }
    
    const result = addMovieRating(movieId, rating);
    
    if (result.success) {
      displayMovieRating(movieId);
      showMessage(\`Rating added! New average: \${result.averageRating.toFixed(1)}\`);
      
      // Reset rating input
      ratingInput.value = "";
    } else {
      showMessage(result.error, true);
    }
  } catch (error) {
    console.error("Error in form submission:", error);
    showMessage(error.message, true);
  }
}

// Helper function to show messages
function showMessage(message, isError = false) {
  const messageElement = document.getElementById('message');
  messageElement.textContent = message;
  messageElement.className = isError ? 'error-message' : 'success-message';
}

// Set up event listeners
document.getElementById('rating-form').addEventListener('submit', function(e) {
  e.preventDefault();
  handleRatingSubmit();
});

// HTML structure (for reference):
/*
<div id="movie-rating-system">
  <div id="movie-info">
    <h2 id="movie-title">Select a movie</h2>
    <p id="movie-ratings"></p>
    <p id="average-rating"></p>
  </div>
  
  <form id="rating-form">
    <div>
      <label for="movie-id">Movie ID:</label>
      <input id="movie-id" type="number" min="1" required>
    </div>
    <div>
      <label for="rating">Your Rating (1-5):</label>
      <input id="rating" type="number" min="1" max="5" required>
    </div>
    <button type="submit">Submit Rating</button>
  </form>
  
  <div id="message"></div>
</div>
*/`}
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-20">
              <h2 className="text-xl font-bold mb-4">Quick Reference</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-red-500">Try/Catch</h3>
                  <p className="text-sm text-gray-400">
                    Basic error handling structure.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <CodeExample
                      code={`try {
  // Code that might throw an error
  riskyOperation();
} catch (error) {
  // Handle the error
  console.error(error);
} finally {
  // Always runs
  cleanup();
}`}
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-red-500">Error Types</h3>
                  <p className="text-sm text-gray-400">
                    Built-in JavaScript error classes.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <CodeExample
                      code={`Error           // Base error type
SyntaxError     // Syntax issues
ReferenceError  // Undefined variables
TypeError       // Type mismatches
RangeError      // Out of range values
URIError        // Invalid URI
EvalError       // Eval() errors
AggregateError  // Multiple errors`}
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-red-500">Custom Errors</h3>
                  <p className="text-sm text-gray-400">
                    Creating application-specific errors.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <CodeExample
                      code={`class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyError";
  }
}

throw new MyError("Custom error");`}
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-red-500">
                    Async Error Handling
                  </h3>
                  <p className="text-sm text-gray-400">
                    Handling errors in asynchronous code.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <CodeExample
                      code={`// With promises
fetch(url)
  .then(response => response.json())
  .catch(error => console.error(error));

// With async/await
async function getData() {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}`}
                    />
                  </pre>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Best Practices</h3>
                  <ul className="text-sm text-gray-400 list-disc pl-4 space-y-1 mt-2">
                    <li>Be specific with error types</li>
                    <li>Provide meaningful error messages</li>
                    <li>Handle errors at the appropriate level</li>
                    <li>Log errors for debugging</li>
                    <li>Don&apos;t swallow errors without handling</li>
                  </ul>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Related Concepts</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Link href="/learn/async">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Async JavaScript
                      </Button>
                    </Link>
                    <Link href="/learn/functions">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Functions
                      </Button>
                    </Link>
                    <Link href="/learn/debugging">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Debugging
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <div className="flex justify-between">
                  <Link href="/learn/async">
                    <Button variant="link" className="text-red-600 p-0">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Async JavaScript
                    </Button>
                  </Link>
                  <Link href="/learn/modules">
                    <Button variant="link" className="text-red-600 p-0">
                      Modules
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <Link href="/exercises/error-handling/easy">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Practice with Exercises
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
