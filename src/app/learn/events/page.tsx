"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CodeExample from "@/components/code-example";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InteractiveExercise from "@/components/interactive-exercise";
import SyntaxHighlighter from "@/components/syntax-highlighter";

export default function EventsPage() {
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
          <h1 className="text-3xl font-bold">JavaScript Events</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Understanding Events</h2>
              <p className="mb-4">
                Events are actions or occurrences that happen in the browser,
                such as a user clicking a button, pressing a key, or a page
                finishing loading. JavaScript can detect these events and
                execute code in response.
              </p>

              <Tabs defaultValue="basics" className="mb-6">
                <TabsList className="bg-gray-950 border-gray-800">
                  <TabsTrigger
                    value="basics"
                    className="data-[state=active]:bg-pink-600"
                  >
                    Event Basics
                  </TabsTrigger>
                  <TabsTrigger
                    value="types"
                    className="data-[state=active]:bg-pink-600"
                  >
                    Event Types
                  </TabsTrigger>
                  <TabsTrigger
                    value="advanced"
                    className="data-[state=active]:bg-pink-600"
                  >
                    Advanced Topics
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="basics" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Event Handlers & Listeners
                  </h3>
                  <p className="mb-4">
                    There are multiple ways to handle events in JavaScript.
                    Event handlers and listeners allow you to execute code when
                    specific events occur.
                  </p>
                  <CodeExample
                    code={`// 1. Using HTML attribute (not recommended, mixes HTML and JS)
<button onclick="alert('Clicked!')">Click me</button>

// 2. Using DOM element property
const button = document.querySelector('#myButton');
button.onclick = function() {
  console.log('Button clicked!');
};

// The problem with the above: you can only attach one handler
// If you assign another, it overwrites the first one:
button.onclick = function() {
  console.log('This overwrites the previous handler');
};

// 3. Using addEventListener (recommended)
button.addEventListener('click', function() {
  console.log('First click handler');
});

// You can add multiple listeners
button.addEventListener('click', function() {
  console.log('Second click handler - both will run!');
});

// Using a named function as handler
function handleClick(event) {
  console.log('Button clicked!');
  console.log('Event type:', event.type);
  console.log('Target element:', event.target);
}

button.addEventListener('click', handleClick);

// Removing event listeners
button.removeEventListener('click', handleClick);
// Note: For removeEventListener to work, you need the same function reference

// One-time event listener that automatically removes itself
button.addEventListener('click', function onceHandler() {
  console.log('This handler runs only once!');
  button.removeEventListener('click', onceHandler);
});

// Alternative approach for one-time events using options
button.addEventListener('click', function() {
  console.log('This also runs only once!');
}, { once: true });`}
                  />
                </TabsContent>

                <TabsContent value="types" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Common Event Types
                  </h3>
                  <p className="mb-4">
                    JavaScript can respond to a wide variety of events, from
                    mouse and keyboard interactions to form submissions and
                    window resizing.
                  </p>
                  <CodeExample
                    code={`// Mouse Events
const element = document.getElementById('myElement');

// Click events
element.addEventListener('click', () => console.log('Element clicked!'));
element.addEventListener('dblclick', () => console.log('Element double-clicked!'));

// Mouse movement
element.addEventListener('mouseenter', () => console.log('Mouse entered element'));
element.addEventListener('mouseleave', () => console.log('Mouse left element'));
element.addEventListener('mousemove', (e) => console.log('Mouse position:', e.clientX, e.clientY));

// Mouse buttons
element.addEventListener('mousedown', (e) => console.log('Mouse button down:', e.button));
element.addEventListener('mouseup', () => console.log('Mouse button released'));

// Keyboard Events
const inputField = document.getElementById('myInput');

// Key events
inputField.addEventListener('keydown', (e) => console.log('Key pressed down:', e.key));
inputField.addEventListener('keyup', (e) => console.log('Key released:', e.key));
inputField.addEventListener('keypress', (e) => console.log('Key pressed (character):', e.key));

// Special keys and preventing default behavior
inputField.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    console.log('Enter key pressed!');
    e.preventDefault(); // Prevent form submission
  }
  
  if (e.ctrlKey && e.key === 's') {
    console.log('Ctrl+S pressed!');
    e.preventDefault(); // Prevent browser save dialog
  }
});

// Form Events
const form = document.getElementById('myForm');

// Form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission
  console.log('Form submitted!');
  
  // Get form data
  const formData = new FormData(form);
  for (const [key, value] of formData.entries()) {
    console.log(\`\${key}: \${value}\`);
  }
});

// Input events
const emailInput = document.getElementById('email');
emailInput.addEventListener('input', function() {
  console.log('Input changed:', emailInput.value);
});

emailInput.addEventListener('focus', () => console.log('Input received focus'));
emailInput.addEventListener('blur', () => console.log('Input lost focus'));
emailInput.addEventListener('change', () => console.log('Input value changed and lost focus'));

// Document/Window Events
// Page load events
window.addEventListener('DOMContentLoaded', () => console.log('DOM fully loaded'));
window.addEventListener('load', () => console.log('Page fully loaded (including images)'));

// Window resize
window.addEventListener('resize', function() {
  console.log('Window resized:', window.innerWidth, window.innerHeight);
});

// Scroll events
window.addEventListener('scroll', function() {
  console.log('Scrolled:', window.scrollX, window.scrollY);
});

// Custom Events
// Creating a custom event
const customEvent = new CustomEvent('movieSelected', {
  detail: { 
    movieId: 123, 
    title: 'The JavaScript Adventure' 
  }
});

// Dispatching the custom event
document.dispatchEvent(customEvent);

// Listening for the custom event
document.addEventListener('movieSelected', function(e) {
  console.log('Movie selected:', e.detail.title);
});`}
                  />
                </TabsContent>

                <TabsContent value="advanced" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Event Propagation & Delegation
                  </h3>
                  <p className="mb-4">
                    Understanding how events propagate through the DOM and how
                    to use event delegation can make your code more efficient
                    and powerful.
                  </p>
                  <CodeExample
                    code={`// Event Propagation: Bubbling and Capturing
// When an event occurs on an element, it first runs the handlers on it, then on its parent, 
// and all the way up (bubbling phase). This is the default behavior.

// DOM structure for example:
/*
<div id="outer">
  <div id="inner">
    <button id="button">Click Me</button>
  </div>
</div>
*/

const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const button = document.getElementById('button');

// Event bubbling (default)
button.addEventListener('click', () => console.log('Button clicked!'));
inner.addEventListener('click', () => console.log('Inner div clicked!'));
outer.addEventListener('click', () => console.log('Outer div clicked!'));

// When button is clicked, output will be in this order:
// 1. "Button clicked!"
// 2. "Inner div clicked!"
// 3. "Outer div clicked!"

// Stopping propagation
button.addEventListener('click', function(e) {
  console.log('Button clicked!');
  e.stopPropagation(); // Prevents the event from bubbling up
});
// Now when button is clicked, only "Button clicked!" will show

// Event capturing (rarely used)
// The event handlers are triggered from the outermost element to the target
outer.addEventListener('click', () => console.log('Outer div - capture!'), true);
inner.addEventListener('click', () => console.log('Inner div - capture!'), true);
button.addEventListener('click', () => console.log('Button - capture!'), true);

// When button is clicked with capturing enabled, output will be:
// 1. "Outer div - capture!"
// 2. "Inner div - capture!"
// 3. "Button - capture!"
// Then the bubbling phase occurs unless stopPropagation() is called

// Event Delegation
// Instead of attaching event listeners to multiple child elements,
// attach one listener to a parent element and use event.target

// Example HTML:
/*
<ul id="movie-list">
  <li data-id="1">The JavaScript Adventure</li>
  <li data-id="2">Array of Darkness</li>
  <li data-id="3">Promise Me Forever</li>
</ul>
*/

const movieList = document.getElementById('movie-list');

// Inefficient way (attaching to each <li>)
// document.querySelectorAll('#movie-list li').forEach(item => {
//   item.addEventListener('click', function() {
//     console.log('Movie clicked:', this.textContent);
//   });
// });

// Better way: Event delegation
movieList.addEventListener('click', function(e) {
  // Check if clicked element is an <li>
  if (e.target.tagName === 'LI') {
    const movieId = e.target.dataset.id;
    console.log('Movie clicked:', e.target.textContent);
    console.log('Movie ID:', movieId);
    
    // Do something with the movie
    loadMovieDetails(movieId);
  }
});

function loadMovieDetails(id) {
  console.log(\`Loading details for movie ID: \${id}\`);
}

// Benefits of event delegation:
// 1. Less memory usage (one handler instead of many)
// 2. No need to add/remove listeners for dynamic elements
// 3. Fewer DOM operations

// Event Object Properties and Methods
document.addEventListener('click', function(event) {
  // Event properties
  console.log('Event type:', event.type);
  console.log('Target element:', event.target);
  console.log('Current target:', event.currentTarget);
  console.log('Mouse coordinates:', event.clientX, event.clientY);
  console.log('Timestamp:', event.timeStamp);
  
  // For keyboard events
  // console.log('Key:', event.key);
  // console.log('Key code:', event.keyCode); // Deprecated
  // console.log('Modifier keys:', event.ctrlKey, event.shiftKey, event.altKey);
  
  // Event methods
  event.preventDefault(); // Prevents default action
  event.stopPropagation(); // Stops bubbling/capturing
  // event.stopImmediatePropagation(); // Stops other handlers on same element too
});`}
                  />
                </TabsContent>
              </Tabs>

              <h3 className="text-xl font-semibold mb-2">
                Event Handling Best Practices
              </h3>
              <p className="mb-4">
                Following these best practices will help you write cleaner, more
                efficient event handling code.
              </p>
              <CodeExample
                code={`// 1. Use modern event listeners
// Bad
document.getElementById('button').onclick = function() { /* ... */ };

// Good
document.getElementById('button').addEventListener('click', handleClick);

// 2. Separate logic from event listeners
// Bad
document.getElementById('save-button').addEventListener('click', function() {
  // 50 lines of data processing logic here...
});

// Good
function processSaveData() {
  // Data processing logic in separate function
}

document.getElementById('save-button').addEventListener('click', processSaveData);

// 3. Use event delegation for large collections
// Bad (adds hundreds of listeners)
document.querySelectorAll('.movie-card').forEach(card => {
  card.addEventListener('click', handleMovieClick);
});

// Good (one listener on the parent)
document.getElementById('movie-container').addEventListener('click', function(e) {
  if (e.target.closest('.movie-card')) {
    handleMovieClick(e);
  }
});

// 4. Clean up event listeners when no longer needed
function initializeMoviePlayer() {
  const playButton = document.getElementById('play');
  const pauseButton = document.getElementById('pause');
  
  function handlePlay() { /* ... */ }
  function handlePause() { /* ... */ }
  
  playButton.addEventListener('click', handlePlay);
  pauseButton.addEventListener('click', handlePause);
  
  // Return cleanup function
  return function cleanup() {
    playButton.removeEventListener('click', handlePlay);
    pauseButton.removeEventListener('click', handlePause);
  };
}

const cleanupPlayer = initializeMoviePlayer();

// Later when component is destroyed:
cleanupPlayer();

// 5. Debounce or throttle high-frequency events
// Without debounce, this could fire hundreds of times during resizing
window.addEventListener('resize', function() {
  recalculateLayout(); // Expensive operation
});

// With debounce (only runs once after resizing stops)
window.addEventListener('resize', debounce(function() {
  recalculateLayout();
}, 250));

// Debounce implementation
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

// Throttle implementation (runs at most once per specified time)
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const context = this;
    const args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// 6. Be cautious with inline functions in event listeners
// Potentially problematic if rendered in a loop/list
movies.forEach(movie => {
  const element = document.createElement('div');
  
  // New function created on each iteration
  element.addEventListener('click', () => {
    console.log('Movie clicked:', movie.title);
  });
  
  container.appendChild(element);
});

// Better: Use data attributes and delegation
movies.forEach(movie => {
  const element = document.createElement('div');
  element.className = 'movie';
  element.dataset.id = movie.id;
  container.appendChild(element);
});

container.addEventListener('click', function(e) {
  const movieElement = e.target.closest('.movie');
  if (movieElement) {
    const movieId = movieElement.dataset.id;
    // Find movie from ID and handle click
    handleMovieClick(movies.find(m => m.id == movieId));
  }
});`}
              />
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                Events in Action: Movie Example
              </h2>
              <p className="mb-4">
                Let&apos;s implement a basic movie player with event handling:
              </p>

              <CodeExample
                code={`// Movie Player Application with Event Handling
// This example shows how to implement a simple video player with controls

// DOM References
const player = document.getElementById('movie-player');
const video = document.getElementById('video');
const playButton = document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');
const stopButton = document.getElementById('stop-btn');
const muteButton = document.getElementById('mute-btn');
const volumeSlider = document.getElementById('volume-slider');
const progressBar = document.getElementById('progress-bar');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');
const fullscreenButton = document.getElementById('fullscreen-btn');
const playbackSpeedSelect = document.getElementById('playback-speed');
const skipForwardButton = document.getElementById('skip-forward');
const skipBackwardButton = document.getElementById('skip-backward');

// Play/Pause functionality
playButton.addEventListener('click', function() {
  video.play();
  updatePlayPauseState();
});

pauseButton.addEventListener('click', function() {
  video.pause();
  updatePlayPauseState();
});

// Play/pause with spacebar
document.addEventListener('keydown', function(e) {
  // Only if the player is in focus
  if (player.contains(document.activeElement) && e.key === ' ') {
    e.preventDefault(); // Prevent page scrolling
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    updatePlayPauseState();
  }
});

// Update UI to reflect play/pause state
function updatePlayPauseState() {
  if (video.paused) {
    playButton.style.display = 'inline-block';
    pauseButton.style.display = 'none';
  } else {
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
  }
}

// Stop functionality
stopButton.addEventListener('click', function() {
  video.pause();
  video.currentTime = 0;
  updatePlayPauseState();
});

// Mute functionality
muteButton.addEventListener('click', function() {
  video.muted = !video.muted;
  updateMuteState();
});

// Update UI to reflect mute state
function updateMuteState() {
  if (video.muted) {
    muteButton.textContent = '🔇 Unmute';
    volumeSlider.value = 0;
  } else {
    muteButton.textContent = '🔊 Mute';
    volumeSlider.value = video.volume;
  }
}

// Volume control
volumeSlider.addEventListener('input', function() {
  video.volume = volumeSlider.value;
  if (video.volume === 0) {
    video.muted = true;
  } else {
    video.muted = false;
  }
  updateMuteState();
});

// Progress bar
video.addEventListener('timeupdate', function() {
  // Update progress bar
  const progressPercentage = (video.currentTime / video.duration) * 100;
  progressBar.value = progressPercentage;
  
  // Update time display
  currentTimeDisplay.textContent = formatTime(video.currentTime);
});

// Seek functionality
progressBar.addEventListener('input', function() {
  const seekTime = (progressBar.value / 100) * video.duration;
  video.currentTime = seekTime;
});

// Format time in MM:SS format
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return \`\${minutes.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')}\`;
}

// When video metadata is loaded, update duration
video.addEventListener('loadedmetadata', function() {
  durationDisplay.textContent = formatTime(video.duration);
  progressBar.value = 0;
});

// Fullscreen functionality
fullscreenButton.addEventListener('click', function() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    player.requestFullscreen();
  }
});

// Update fullscreen button text
document.addEventListener('fullscreenchange', function() {
  if (document.fullscreenElement) {
    fullscreenButton.textContent = '↙️ Exit Fullscreen';
  } else {
    fullscreenButton.textContent = '↗️ Fullscreen';
  }
});

// Playback speed
playbackSpeedSelect.addEventListener('change', function() {
  video.playbackRate = parseFloat(playbackSpeedSelect.value);
});

// Skip forward/backward
skipForwardButton.addEventListener('click', function() {
  video.currentTime = Math.min(video.currentTime + 10, video.duration);
});

skipBackwardButton.addEventListener('click', function() {
  video.currentTime = Math.max(video.currentTime - 10, 0);
});

// Handle keyboard shortcuts
document.addEventListener('keydown', function(e) {
  // Only if the player is in focus
  if (player.contains(document.activeElement)) {
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        video.currentTime = Math.min(video.currentTime + 5, video.duration);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        video.currentTime = Math.max(video.currentTime - 5, 0);
        break;
      case 'ArrowUp':
        e.preventDefault();
        video.volume = Math.min(video.volume + 0.1, 1);
        volumeSlider.value = video.volume;
        video.muted = false;
        updateMuteState();
        break;
      case 'ArrowDown':
        e.preventDefault();
        video.volume = Math.max(video.volume - 0.1, 0);
        volumeSlider.value = video.volume;
        if (video.volume === 0) {
          video.muted = true;
        }
        updateMuteState();
        break;
      case 'm':
        e.preventDefault();
        video.muted = !video.muted;
        updateMuteState();
        break;
      case 'f':
        e.preventDefault();
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          player.requestFullscreen();
        }
        break;
    }
  }
});

// Handle video end
video.addEventListener('ended', function() {
  video.currentTime = 0;
  video.pause();
  updatePlayPauseState();
});

// Initialize player state
function initializePlayer() {
  video.volume = 1;
  volumeSlider.value = 1;
  updatePlayPauseState();
  updateMuteState();
  
  // Add poster image until video plays
  if (video.getAttribute('poster') === null) {
    video.setAttribute('poster', 'movie-poster.jpg');
  }
}

// Call init function when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePlayer);

// Example of custom events
// Define a custom event for movie milestones
function setupMilestoneEvents() {
  let quarterReached = false;
  let halfwayReached = false;
  let threeQuartersReached = false;
  
  video.addEventListener('timeupdate', function() {
    const percentage = (video.currentTime / video.duration) * 100;
    
    if (percentage >= 25 && !quarterReached) {
      quarterReached = true;
      // Create and dispatch custom event
      const event = new CustomEvent('milestone', { 
        detail: { milestone: '25%', time: video.currentTime }
      });
      video.dispatchEvent(event);
    }
    
    if (percentage >= 50 && !halfwayReached) {
      halfwayReached = true;
      const event = new CustomEvent('milestone', { 
        detail: { milestone: '50%', time: video.currentTime }
      });
      video.dispatchEvent(event);
    }
    
    if (percentage >= 75 && !threeQuartersReached) {
      threeQuartersReached = true;
      const event = new CustomEvent('milestone', { 
        detail: { milestone: '75%', time: video.currentTime }
      });
      video.dispatchEvent(event);
    }
  });
  
  // Reset milestones when video is seeked
  video.addEventListener('seeked', function() {
    const percentage = (video.currentTime / video.duration) * 100;
    quarterReached = percentage >= 25;
    halfwayReached = percentage >= 50;
    threeQuartersReached = percentage >= 75;
  });
}

// Listen for milestone events
video.addEventListener('milestone', function(e) {
  console.log(\`Milestone reached: \${e.detail.milestone} at \${formatTime(e.detail.time)}\`);
  // Could use for analytics, showing related content, etc.
});

setupMilestoneEvents();`}
              />
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Interactive Exercise</h2>
              <p className="mb-4">
                Try the exercise below to test your understanding of JavaScript
                events:
              </p>

              <InteractiveExercise
                instructions="Fix the code below to implement a movie watchlist with proper event handling."
                initialCode={`// Movie Watchlist Application
// Allow users to add movies to a watchlist, mark as watched, and delete

// Sample movie data
const availableMovies = [
  { id: 1, title: "The JavaScript Adventure", genre: "Action" },
  { id: 2, title: "Array of Darkness", genre: "Horror" },
  { id: 3, title: "Promise Me Forever", genre: "Romance" },
  { id: 4, title: "The DOM Chronicles", genre: "Fantasy" }
];

let watchlist = [];

// TODO: Implement the addToWatchlist function
// It should add the selected movie to the watchlist and update the UI
function addToWatchlist(movieId) {
  // Your code here
}

// TODO: Implement the markAsWatched function
// It should toggle the 'watched' status of a movie in the watchlist
function markAsWatched(movieId) {
  // Your code here
}

// TODO: Implement the removeFromWatchlist function
// It should remove a movie from the watchlist
function removeFromWatchlist(movieId) {
  // Your code here
}

// TODO: Implement event delegation on the movie container
// Handle clicks on 'Add to Watchlist' buttons
document.getElementById('available-movies').addEventListener('click', function(e) {
  // Your code here
});

// TODO: Implement event delegation on the watchlist container
// Handle clicks on 'Mark as Watched' and 'Remove' buttons
document.getElementById('watchlist').addEventListener('click', function(e) {
  // Your code here
});

// Render the available movies
function renderAvailableMovies() {
  const container = document.getElementById('available-movies');
  availableMovies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.className = 'movie-item';
    movieElement.innerHTML = \`
      <span>\${movie.title} (\${movie.genre})</span>
      <button class="add-button" data-id="\${movie.id}">Add to Watchlist</button>
    \`;
    container.appendChild(movieElement);
  });
}

// Render the watchlist
function renderWatchlist() {
  const container = document.getElementById('watchlist');
  container.innerHTML = '';
  
  if (watchlist.length === 0) {
    container.innerHTML = '<p>Your watchlist is empty.</p>';
    return;
  }
  
  watchlist.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.className = 'watchlist-item';
    if (movie.watched) {
      movieElement.classList.add('watched');
    }
    
    movieElement.innerHTML = \`
      <span>\${movie.title}</span>
      <button class="watched-button" data-id="\${movie.id}">\${movie.watched ? 'Watched' : 'Mark as Watched'}</button>
      <button class="remove-button" data-id="\${movie.id}">Remove</button>
    \`;
    
    container.appendChild(movieElement);
  });
}

// Initialize the application
function init() {
  renderAvailableMovies();
  renderWatchlist();
}

// Call init when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// HTML structure (for reference):
/*
<div id="movie-app">
  <div class="section">
    <h2>Available Movies</h2>
    <div id="available-movies"></div>
  </div>
  
  <div class="section">
    <h2>My Watchlist</h2>
    <div id="watchlist"></div>
  </div>
</div>
*/`}
                solution={`// Movie Watchlist Application
// Allow users to add movies to a watchlist, mark as watched, and delete

// Sample movie data
const availableMovies = [
  { id: 1, title: "The JavaScript Adventure", genre: "Action" },
  { id: 2, title: "Array of Darkness", genre: "Horror" },
  { id: 3, title: "Promise Me Forever", genre: "Romance" },
  { id: 4, title: "The DOM Chronicles", genre: "Fantasy" }
];

let watchlist = [];

// Implemented the addToWatchlist function
function addToWatchlist(movieId) {
  // Find the movie in available movies
  const movieToAdd = availableMovies.find(movie => movie.id === movieId);
  
  // Check if movie exists and is not already in watchlist
  if (movieToAdd && !watchlist.some(movie => movie.id === movieId)) {
    // Add to watchlist with watched property
    watchlist.push({
      ...movieToAdd,
      watched: false
    });
    
    // Update the UI
    renderWatchlist();
    
    // Show confirmation
    alert(\`"\${movieToAd
    });
    
    // Update the UI
    renderWatchlist();
    
    // Show confirmation
    alert(\`"\${movieToAdd.title}" added to watchlist!\`);
  }
}

// Implemented the markAsWatched function
function markAsWatched(movieId) {
  // Find the movie in watchlist
  const movieIndex = watchlist.findIndex(movie => movie.id === movieId);
  
  if (movieIndex !== -1) {
    // Toggle watched status
    watchlist[movieIndex].watched = !watchlist[movieIndex].watched;
    
    // Update the UI
    renderWatchlist();
  }
}

// Implemented the removeFromWatchlist function
function removeFromWatchlist(movieId) {
  // Find the movie in watchlist
  const movieIndex = watchlist.findIndex(movie => movie.id === movieId);
  
  if (movieIndex !== -1) {
    const movieTitle = watchlist[movieIndex].title;
    
    // Remove from watchlist
    watchlist.splice(movieIndex, 1);
    
    // Update the UI
    renderWatchlist();
    
    // Show confirmation
    alert(\`"\${movieTitle}" removed from watchlist!\`);
  }
}

// Implemented event delegation on the movie container
document.getElementById('available-movies').addEventListener('click', function(e) {
  // Check if clicked element is an "Add to Watchlist" button
  if (e.target.classList.contains('add-button')) {
    // Get the movie ID from the data attribute
    const movieId = parseInt(e.target.dataset.id);
    
    // Add the movie to watchlist
    addToWatchlist(movieId);
  }
});

// Implemented event delegation on the watchlist container
document.getElementById('watchlist').addEventListener('click', function(e) {
  // Get the movie ID from the data attribute
  const movieId = parseInt(e.target.dataset.id);
  
  // Check which button was clicked
  if (e.target.classList.contains('watched-button')) {
    // Mark as watched/unwatched
    markAsWatched(movieId);
  } else if (e.target.classList.contains('remove-button')) {
    // Remove from watchlist
    removeFromWatchlist(movieId);
  }
});

// Render the available movies
function renderAvailableMovies() {
  const container = document.getElementById('available-movies');
  availableMovies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.className = 'movie-item';
    movieElement.innerHTML = \`
      <span>\${movie.title} (\${movie.genre})</span>
      <button class="add-button" data-id="\${movie.id}">Add to Watchlist</button>
    \`;
    container.appendChild(movieElement);
  });
}

// Render the watchlist
function renderWatchlist() {
  const container = document.getElementById('watchlist');
  container.innerHTML = '';
  
  if (watchlist.length === 0) {
    container.innerHTML = '<p>Your watchlist is empty.</p>';
    return;
  }
  
  watchlist.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.className = 'watchlist-item';
    if (movie.watched) {
      movieElement.classList.add('watched');
    }
    
    movieElement.innerHTML = \`
      <span>\${movie.title}</span>
      <button class="watched-button" data-id="\${movie.id}">\${movie.watched ? 'Watched' : 'Mark as Watched'}</button>
      <button class="remove-button" data-id="\${ ? 'Watched' : 'Mark as Watched'}</button>
      <button class="remove-button" data-id="\${movie.id}">Remove</button>
    \`;
    
    container.appendChild(movieElement);
  });
}

// Initialize the application
function init() {
  renderAvailableMovies();
  renderWatchlist();
}

// Call init when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// HTML structure (for reference):
/*
<div id="movie-app">
  <div class="section">
    <h2>Available Movies</h2>
    <div id="available-movies"></div>
  </div>
  
  <div class="section">
    <h2>My Watchlist</h2>
    <div id="watchlist"></div>
  </div>
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
                  <h3 className="font-semibold text-pink-500">
                    Event Listeners
                  </h3>
                  <p className="text-sm text-gray-400">
                    Adding and removing event listeners.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`// Add event listener
element.addEventListener(
  'event', handler, options
);

// Remove event listener
element.removeEventListener(
  'event', handler
);

// One-time event
element.addEventListener('click', 
  handler, { once: true });`}
                      language="javascript"
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-pink-500">Common Events</h3>
                  <p className="text-sm text-gray-400">
                    Frequently used event types.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`// Mouse events
'click', 'dblclick'
'mouseenter', 'mouseleave'
'mousedown', 'mouseup'
'mousemove'

// Keyboard events
'keydown', 'keyup', 'keypress'

// Form events
'submit', 'input', 'change'
'focus', 'blur'

// Document/Window
'load', 'DOMContentLoaded'
'resize', 'scroll'`}
                      language="javascript"
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-pink-500">Event Object</h3>
                  <p className="text-sm text-gray-400">
                    Properties and methods of the event object.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`// Properties
event.target  // Element that triggered
event.currentTarget  // Element with listener
event.type  // Type of event
event.key   // Key pressed
event.clientX, event.clientY  // Coordinates

// Methods
event.preventDefault()  // Prevent default
event.stopPropagation()  // Stop bubbling`}
                      language="javascript"
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-pink-500">
                    Event Delegation
                  </h3>
                  <p className="text-sm text-gray-400">
                    Efficient handling for multiple elements.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`// Parent with single listener
parent.addEventListener('click', (e) => {
  // Check if target is of interest
  if (e.target.matches('.button')) {
    // Handle the event
  }
});`}
                      language="javascript"
                    />
                  </pre>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Common Patterns</h3>
                  <ul className="text-sm text-gray-400 list-disc pl-4 space-y-1 mt-2">
                    <li>Debounce for frequent events</li>
                    <li>Custom events for component communication</li>
                    <li>Event delegation for dynamic elements</li>
                    <li>Cleanup listeners to prevent memory leaks</li>
                  </ul>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Related Concepts</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
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
                    <Link href="/learn/data-structures">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Data Structures
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <div className="flex justify-between">
                  <Link href="/learn/dom">
                    <Button variant="link" className="text-red-600 p-0">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      DOM Manipulation
                    </Button>
                  </Link>
                  <Link href="/learn">
                    <Button variant="link" className="text-red-600 p-0">
                      All Topics
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <Link href="/exercises/events/easy">
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
