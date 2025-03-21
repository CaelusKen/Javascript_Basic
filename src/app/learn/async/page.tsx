import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CodeExample from "@/components/code-example";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InteractiveExercise from "@/components/interactive-exercise";

export default function AsyncJavaScriptPage() {
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
          <h1 className="text-3xl font-bold">Asynchronous JavaScript</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Understanding Asynchronous JavaScript
              </h2>
              <p className="mb-4">
                Asynchronous JavaScript allows you to perform operations without
                blocking the main thread. This is crucial for tasks like
                fetching data from servers, handling user interactions, and
                creating smooth animations.
              </p>

              <Tabs defaultValue="callbacks" className="mb-6">
                <TabsList className="bg-gray-950 border-gray-800">
                  <TabsTrigger
                    value="callbacks"
                    className="data-[state=active]:bg-blue-600"
                  >
                    Callbacks
                  </TabsTrigger>
                  <TabsTrigger
                    value="promises"
                    className="data-[state=active]:bg-blue-600"
                  >
                    Promises
                  </TabsTrigger>
                  <TabsTrigger
                    value="async-await"
                    className="data-[state=active]:bg-blue-600"
                  >
                    Async/Await
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="callbacks" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Callback Functions
                  </h3>
                  <p className="mb-4">
                    Callbacks are functions passed as arguments to other
                    functions, which are then executed after the completion of
                    an asynchronous operation.
                  </p>
                  <CodeExample
                    code={`// Basic callback example
function fetchMovieData(movieId, callback) {
  console.log("Fetching movie data for ID:", movieId);
  
  // Simulate network delay with setTimeout
  setTimeout(() => {
    // This data would normally come from a server
    const movieData = {
      id: movieId,
      title: "The JavaScript Adventure",
      year: 2023,
      rating: 4.8
    };
    
    // Execute the callback with the data
    callback(movieData);
  }, 2000); // 2 second delay
}

// Using the callback function
console.log("Starting to fetch movie data...");

fetchMovieData(123, function(movie) {
  console.log("Movie data received:");
  console.log(movie.title);
  console.log(movie.year);
  console.log(movie.rating);
});

console.log("This will execute before the movie data is received!");

// Callback hell example (nested callbacks)
function getMovieDetails(movieId, callback) {
  fetchMovieData(movieId, (movie) => {
    console.log("Got basic movie data");
    
    fetchMovieReviews(movieId, (reviews) => {
      console.log("Got movie reviews");
      
      fetchSimilarMovies(movie.genre, (similarMovies) => {
        console.log("Got similar movies");
        
        // Now we have all the data, but the code is deeply nested
        callback({
          movie: movie,
          reviews: reviews,
          similarMovies: similarMovies
        });
      });
    });
  });
}

// This nested structure is hard to read and maintain
// This is often called "callback hell" or the "pyramid of doom"
// Promises and async/await help solve this problem`}
                  />
                </TabsContent>

                <TabsContent value="promises" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">Promises</h3>
                  <p className="mb-4">
                    Promises provide a cleaner way to handle asynchronous
                    operations. A Promise represents a value that might be
                    available now, later, or never.
                  </p>
                  <CodeExample
                    code={`// Creating a Promise
function fetchMovieData(movieId) {
  return new Promise((resolve, reject) => {
    console.log("Fetching movie data for ID:", movieId);
    
    // Simulate network delay
    setTimeout(() => {
      // Simulate successful data fetch (80% of the time)
      if (Math.random() > 0.2) {
        const movieData = {
          id: movieId,
          title: "The JavaScript Adventure",
          year: 2023,
          rating: 4.8
        };
        resolve(movieData); // Success case
      } else {
        reject(new Error("Failed to fetch movie data")); // Error case
      }
    }, 2000);
  });
}

// Using the Promise
console.log("Starting to fetch movie data...");

fetchMovieData(123)
  .then(movie => {
    console.log("Movie data received:");
    console.log(movie.title);
    return movie; // Return for chaining
  })
  .then(movie => {
    console.log("Fetching reviews for:", movie.title);
    return fetchMovieReviews(movie.id); // Return another promise
  })
  .then(reviews => {
    console.log("Reviews received:", reviews.length);
  })
  .catch(error => {
    console.error("An error occurred:", error.message);
  })
  .finally(() => {
    console.log("Fetch operation completed (success or failure)");
  });

console.log("This will execute before the movie data is received!");

// Promise methods

// Promise.all - waits for all promises to resolve
const promises = [
  fetchMovieData(123),
  fetchMovieReviews(123),
  fetchSimilarMovies("Action")
];

Promise.all(promises)
  .then(([movie, reviews, similarMovies]) => {
    console.log("All data fetched successfully");
    // Now we can use movie, reviews, and similarMovies
  })
  .catch(error => {
    console.error("At least one request failed:", error);
  });

// Promise.race - resolves/rejects as soon as one promise resolves/rejects
Promise.race([
  fetchMovieData(123),
  new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 3000))
])
  .then(result => console.log("Got result before timeout:", result))
  .catch(error => console.error("Error or timeout occurred:", error.message));

// Promise.allSettled - waits for all promises to settle (resolve or reject)
Promise.allSettled(promises)
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log('Success:', result.value);
      } else {
        console.log('Error:', result.reason);
      }
    });
  });

// Promise.any - resolves as soon as one promise resolves (ignores rejections)
Promise.any(promises)
  .then(firstResult => console.log("First successful result:", firstResult))
  .catch(error => console.error("All promises failed:", error));`}
                  />
                </TabsContent>

                <TabsContent value="async-await" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">Async/Await</h3>
                  <p className="mb-4">
                    Async/await is syntactic sugar built on top of Promises,
                    making asynchronous code look and behave more like
                    synchronous code.
                  </p>
                  <CodeExample
                    code={`// Async function declaration
async function getMovieDetails(movieId) {
  try {
    console.log("Fetching movie data...");
    
    // Await pauses execution until the promise resolves
    const movie = await fetchMovieData(movieId);
    console.log("Movie data received:", movie.title);
    
    // These will run in sequence, not in parallel
    const reviews = await fetchMovieReviews(movieId);
    console.log("Reviews received:", reviews.length);
    
    const similarMovies = await fetchSimilarMovies(movie.genre);
    console.log("Similar movies received:", similarMovies.length);
    
    // Return the combined data
    return {
      movie,
      reviews,
      similarMovies
    };
  } catch (error) {
    console.error("Error fetching movie details:", error.message);
    throw error; // Re-throw the error for the caller to handle
  }
}

// Using an async function
async function displayMoviePage(movieId) {
  try {
    const loadingMessage = document.getElementById('loading');
    loadingMessage.textContent = 'Loading movie details...';
    
    const details = await getMovieDetails(movieId);
    
    // Update the UI with the movie details
    document.getElementById('movie-title').textContent = details.movie.title;
    document.getElementById('movie-year').textContent = details.movie.year;
    document.getElementById('movie-rating').textContent = details.movie.rating;
    
    // Hide loading message
    loadingMessage.style.display = 'none';
  } catch (error) {
    document.getElementById('loading').textContent = 'Error loading movie details';
    console.error(error);
  }
}

// Call the async function
displayMoviePage(123);

// Running promises in parallel with async/await
async function getMovieDetailsParallel(movieId) {
  try {
    // Start all fetches in parallel
    const moviePromise = fetchMovieData(movieId);
    const reviewsPromise = fetchMovieReviews(movieId);
    
    // Wait for the movie data first
    const movie = await moviePromise;
    
    // Start fetching similar movies based on the genre
    const similarMoviesPromise = fetchSimilarMovies(movie.genre);
    
    // Now wait for both remaining promises
    const [reviews, similarMovies] = await Promise.all([
      reviewsPromise,
      similarMoviesPromise
    ]);
    
    return { movie, reviews, similarMovies };
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// Async arrow function
const getMovieById = async (id) => {
  const movie = await fetchMovieData(id);
  return movie;
};

// Async IIFE (Immediately Invoked Function Expression)
(async () => {
  try {
    const movie = await getMovieById(123);
    console.log(movie);
  } catch (error) {
    console.error(error);
  }
})();`}
                  />
                </TabsContent>
              </Tabs>

              <h3 className="text-xl font-semibold mb-2">The Event Loop</h3>
              <p className="mb-4">
                Understanding the JavaScript Event Loop is crucial for working
                with asynchronous code. It explains how JavaScript can be
                non-blocking despite being single-threaded.
              </p>
              <CodeExample
                code={`// The Event Loop demonstration
console.log("1. This runs first");

setTimeout(() => {
  console.log("4. This runs fourth (after at least 0ms)");
}, 0);

Promise.resolve()
  .then(() => console.log("3. This runs third (microtask)"));

console.log("2. This runs second");

/*
Output order:
1. This runs first
2. This runs second
3. This runs third (microtask)
4. This runs fourth (after at least 0ms)
*/

// Explanation:
// 1. Synchronous code runs first (the console.log statements)
// 2. Microtasks (Promises) run after all synchronous code
// 3. Macrotasks (setTimeout, setInterval) run after microtasks

// More complex example
console.log("Script start");

setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

new Promise((resolve) => {
  console.log("Promise executor");
  resolve("Promise 1 resolved");
})
  .then(value => {
    console.log(value);
    return "Promise 2 resolved";
  })
  .then(value => {
    console.log(value);
  });

setTimeout(() => {
  console.log("setTimeout 2");
}, 0);

console.log("Script end");

/*
Output:
Script start
Promise executor
Script end
Promise 1 resolved
Promise 2 resolved
setTimeout 1
setTimeout 2
*/`}
              />
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Asynchronous JavaScript in Action: Movie Streaming Example
              </h2>
              <p className="mb-4">
                Let&apos;s see how asynchronous JavaScript is used in a movie
                streaming application:
              </p>

              <CodeExample
                code={`// Movie Streaming Application
// This example demonstrates how asynchronous JavaScript is used in a streaming service

// API service for movie data
class MovieAPI {
  // Fetch movie details
  static async getMovie(movieId) {
    try {
      console.log(\`Fetching movie \${movieId}...\`);
      
      // Simulate API call
      const response = await fetch(\`https://api.movieservice.com/movies/\${movieId}\`);
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      // Simulate parsing JSON response
      // In a real app, you would use: const data = await response.json();
      const data = {
        id: movieId,
        title: "The JavaScript Adventure",
        description: "A thrilling journey through the world of JavaScript",
        duration: 120,
        streamUrl: "https://stream.movieservice.com/movies/123",
        thumbnailUrl: "https://images.movieservice.com/123.jpg"
      };
      
      return data;
    } catch (error) {
      console.error("Error fetching movie:", error);
      throw error;
    }
  }
  
  // Fetch movie recommendations
  static async getRecommendations(movieId) {
    try {
      console.log(\`Fetching recommendations for movie \${movieId}...\`);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Simulate recommendations data
      return [
        { id: 456, title: "Array of Darkness", thumbnailUrl: "https://images.movieservice.com/456.jpg" },
        { id: 789, title: "Promise Me Forever", thumbnailUrl: "https://images.movieservice.com/789.jpg" },
        { id: 101, title: "The DOM Chronicles", thumbnailUrl: "https://images.movieservice.com/101.jpg" }
      ];
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      throw error;
    }
  }
  
  // Record watch progress
  static async updateWatchProgress(movieId, progress) {
    try {
      console.log(\`Updating watch progress: \${movieId}, \${progress}%\`);
      
      // Simulate API call
      const response = await fetch(\`https://api.movieservice.com/movies/\${movieId}/progress\`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ progress })
      });
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      return { success: true };
    } catch (error) {
      console.error("Error updating watch progress:", error);
      // Don't throw here - we don't want to interrupt the user's viewing experience
      return { success: false, error: error.message };
    }
  }
}

// Video Player class
class VideoPlayer {
  constructor(videoElement, movieId) {
    this.videoElement = videoElement;
    this.movieId = movieId;
    this.isPlaying = false;
    this.progressUpdateInterval = null;
    
    // Set up event listeners
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    // Play/pause events
    this.videoElement.addEventListener('play', () => {
      this.isPlaying = true;
      this.startProgressTracking();
    });
    
    this.videoElement.addEventListener('pause', () => {
      this.isPlaying = false;
      this.stopProgressTracking();
    });
    
    // Progress tracking
    this.videoElement.addEventListener('timeupdate', () => {
      const progress = (this.videoElement.currentTime / this.videoElement.duration) * 100;
      this.updateProgressBar(progress);
    });
    
    // Error handling
    this.videoElement.addEventListener('error', (e) => {
      console.error('Video playback error:', e);
      this.showErrorMessage('An error occurred during playback. Please try again later.');
    });
  }
  
  async loadMovie() {
    try {
      // Show loading state
      this.showLoadingState();
      
      // Fetch movie data
      const movie = await MovieAPI.getMovie(this.movieId);
      
      // Set up video source
      this.videoElement.src = movie.streamUrl;
      
      // Preload video
      this.videoElement.load();
      
      // Update UI with movie details
      this.updateMovieInfo(movie);
      
      // Hide loading state
      this.hideLoadingState();
      
      // Fetch recommendations in the background
      this.fetchRecommendations();
      
      return movie;
    } catch (error) {
      this.hideLoadingState();
      this.showErrorMessage('Failed to load movie. Please try again later.');
      throw error;
    }
  }
  
  startProgressTracking() {
    // Clear any existing interval
    this.stopProgressTracking();
    
    // Update progress on server every 10 seconds
    this.progressUpdateInterval = setInterval(async () => {
      if (this.isPlaying) {
        const progress = (this.videoElement.currentTime / this.videoElement.duration) * 100;
        await MovieAPI.updateWatchProgress(this.movieId, Math.round(progress));
      }
    }, 10000);
  }
  
  stopProgressTracking() {
    if (this.progressUpdateInterval) {
      clearInterval(this.progressUpdateInterval);
      this.progressUpdateInterval = null;
    }
  }
  
  updateProgressBar(progress) {
    // Update progress bar UI
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
      progressBar.style.width = \`\${progress}%\`;
    }
  }
  
  async fetchRecommendations() {
    try {
      const recommendations = await MovieAPI.getRecommendations(this.movieId);
      this.displayRecommendations(recommendations);
    } catch (error) {
      console.error('Failed to load recommendations:', error);
      // Don't show an error to the user - recommendations are not critical
    }
  }
  
  // UI helper methods
  showLoadingState() {
    console.log('Showing loading state...');
    // Implementation would update the UI
  }
  
  hideLoadingState() {
    console.log('Hiding loading state...');
    // Implementation would update the UI
  }
  
  updateMovieInfo(movie) {
    console.log('Updating movie info:', movie.title);
    // Implementation would update the UI
  }
  
  displayRecommendations(recommendations) {
    console.log('Displaying recommendations:', recommendations.length);
    // Implementation would update the UI
  }
  
  showErrorMessage(message) {
    console.error('Error:', message);
    // Implementation would show an error message to the user
  }
}

// Usage example
async function initializeMoviePage(movieId) {
  try {
    // Get DOM elements
    const videoElement = document.getElementById('video-player');
    const playButton = document.getElementById('play-button');
    
    // Create video player
    const player = new VideoPlayer(videoElement, movieId);
    
    // Load movie data and prepare the player
    const movie = await player.loadMovie();
    console.log(\`Movie "\${movie.title}" loaded successfully\`);
    
    // Set up play button
    playButton.addEventListener('click', () => {
      if (player.isPlaying) {
        videoElement.pause();
        playButton.textContent = 'Play';
      } else {
        // Using the play() Promise
        videoElement.play()
          .then(() => {
            playButton.textContent = 'Pause';
          })
          .catch(error => {
            console.error('Playback failed:', error);
            player.showErrorMessage('Playback failed. Please try again.');
          });
      }
    });
    
  } catch (error) {
    console.error('Failed to initialize movie page:', error);
    // Show a user-friendly error message
    document.getElementById('error-container').textContent = 
      'Sorry, we encountered an error loading this movie. Please try again later.';
  }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get movie ID from URL or other source
  const movieId = 123; // In a real app, this would come from the URL
  initializeMoviePage(movieId);
});`}
              />
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Interactive Exercise</h2>
              <p className="mb-4">
                Try the exercise below to test your understanding of
                asynchronous JavaScript:
              </p>

              <InteractiveExercise
                instructions="Fix the code below to implement a movie search feature using async/await."
                initialCode={`// Movie Search Application
// This code should allow users to search for movies and display the results

// Simulated movie database
const movieDatabase = [
  { id: 1, title: "The JavaScript Adventure", genre: "Action", rating: 4.8 },
  { id: 2, title: "Array of Darkness", genre: "Horror", rating: 4.5 },
  { id: 3, title: "Promise Me Forever", genre: "Romance", rating: 4.2 },
  { id: 4, title: "The DOM Chronicles", genre: "Fantasy", rating: 4.0 },
  { id: 5, title: "Recursion", genre: "Sci-Fi", rating: 4.7 },
  { id: 6, title: "The Variable Ultimatum", genre: "Thriller", rating: 3.9 },
  { id: 7, title: "Object of Desire", genre: "Drama", rating: 4.3 },
  { id: 8, title: "The Conditional", genre: "Mystery", rating: 4.1 }
];

// TODO: Fix the searchMovies function
// It should return a promise that resolves with the search results after a delay
function searchMovies(query) {
  // Simulate API delay
  setTimeout(() => {
    // Filter movies based on the query
    const results = movieDatabase.filter(movie => 
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    
    return results;
  }, 1000);
}

// TODO: Fix the displayResults function
// It should update the UI with the search results
function displayResults(results) {
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = '';
  
  if (results.length === 0) {
    resultsContainer.innerHTML = '<p>No movies found</p>';
    return;
  }
  
  results.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.className = 'movie-item';
    movieElement.innerHTML = \`
      <h3>\${movie.title}</h3>
      <p>\${movie.genre} | Rating: \${movie.rating}/5</p>
    \`;
    resultsContainer.appendChild(movieElement);
  });
}

// TODO: Fix the handleSearch function
// It should be an async function that uses await to get search results
function handleSearch() {
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value.trim();
  
  if (query === '') {
    return;
  }
  
  // Show loading state
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = '<p>Searching...</p>';
  
  // Search for movies
  const results = searchMovies(query);
  
  // Display results
  displayResults(results);
}

// Set up the search button
document.getElementById('search-button').addEventListener('click', handleSearch);

// Set up search on Enter key
document.getElementById('search-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    handleSearch();
  }
});

// HTML structure (for reference):
/*
<div id="movie-search">
  <div class="search-container">
    <input id="search-input" type="text" placeholder="Search for movies...">
    <button id="search-button">Search</button>
  </div>
  <div id="results-container"></div>
</div>
*/`}
                solution={`// Movie Search Application
// This code should allow users to search for movies and display the results

// Simulated movie database
const movieDatabase = [
  { id: 1, title: "The JavaScript Adventure", genre: "Action", rating: 4.8 },
  { id: 2, title: "Array of Darkness", genre: "Horror", rating: 4.5 },
  { id: 3, title: "Promise Me Forever", genre: "Romance", rating: 4.2 },
  { id: 4, title: "The DOM Chronicles", genre: "Fantasy", rating: 4.0 },
  { id: 5, title: "Recursion", genre: "Sci-Fi", rating: 4.7 },
  { id: 6, title: "The Variable Ultimatum", genre: "Thriller", rating: 3.9 },
  { id: 7, title: "Object of Desire", genre: "Drama", rating: 4.3 },
  { id: 8, title: "The Conditional", genre: "Mystery", rating: 4.1 }
];

// Fixed searchMovies function
// It now returns a promise that resolves with the search results after a delay
function searchMovies(query) {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      // Filter movies based on the query
      const results = movieDatabase.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      
      resolve(results);
    }, 1000);
  });
}

// Fixed displayResults function
function displayResults(results) {
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = '';
  
  if (results.length === 0) {
    resultsContainer.innerHTML = '<p>No movies found</p>';
    return;
  }
  
  results.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.className = 'movie-item';
    movieElement.innerHTML = \`
      <h3>\${movie.title}</h3>
      <p>\${movie.genre} | Rating: \${movie.rating}/5</p>
    \`;
    resultsContainer.appendChild(movieElement);
  });
}

// Fixed handleSearch function
// Now it's an async function that uses await to get search results
async function handleSearch() {
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value.trim();
  
  if (query === '') {
    return;
  }
  
  // Show loading state
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = '<p>Searching...</p>';
  
  try {
    // Search for movies using await
    const results = await searchMovies(query);
    
    // Display results
    displayResults(results);
  } catch (error) {
    console.error('Search error:', error);
    resultsContainer.innerHTML = '<p>An error occurred while searching. Please try again.</p>';
  }
}

// Set up the search button
document.getElementById('search-button').addEventListener('click', handleSearch);

// Set up search on Enter key
document.getElementById('search-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    handleSearch();
  }
});

// HTML structure (for reference):
/*
<div id="movie-search">
  <div class="search-container">
    <input id="search-input" type="text" placeholder="Search for movies...">
    <button id="search-button">Search</button>
  </div>
  <div id="results-container"></div>
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
                  <h3 className="font-semibold text-blue-500">Callbacks</h3>
                  <p className="text-sm text-gray-400">
                    Functions passed as arguments to be executed later.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <CodeExample
                      code={`function fetchData(callback) {
  setTimeout(() => {
    callback('Data');
  }, 1000);
}`}
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-500">Promises</h3>
                  <p className="text-sm text-gray-400">
                    Objects representing eventual completion of operations.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <CodeExample
                      code={`function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data');
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err));`}
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-500">Async/Await</h3>
                  <p className="text-sm text-gray-400">
                    Syntactic sugar for working with Promises.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <CodeExample
                      code={`async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}`}
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-500">
                    Promise Methods
                  </h3>
                  <p className="text-sm text-gray-400">
                    Utility methods for working with multiple promises.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <CodeExample
                      code={`// Wait for all promises
Promise.all([p1, p2, p3])

// First promise to resolve
Promise.race([p1, p2, p3])

// Results of all promises
Promise.allSettled([p1, p2, p3])

// First successful promise
Promise.any([p1, p2, p3])`}
                    />
                  </pre>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Common Patterns</h3>
                  <ul className="text-sm text-gray-400 list-disc pl-4 space-y-1 mt-2">
                    <li>Error handling with try/catch</li>
                    <li>Parallel vs sequential execution</li>
                    <li>Debouncing user input</li>
                    <li>Cancelling requests</li>
                    <li>Retrying failed requests</li>
                  </ul>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Related Concepts</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Link href="/learn/events">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Events
                      </Button>
                    </Link>
                    <Link href="/learn/dom">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        DOM Manipulation
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
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <div className="flex justify-between">
                  <Link href="/learn/events">
                    <Button variant="link" className="text-red-600 p-0">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Events
                    </Button>
                  </Link>
                  <Link href="/learn/error-handling">
                    <Button variant="link" className="text-red-600 p-0">
                      Error Handling
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <Link href="/exercises/async/easy">
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
