/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CodeExample from "@/components/code-example";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InteractiveExercise from "@/components/interactive-exercise";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";
import SyntaxHighlighter from "@/components/syntax-highlighter";

export default function DOMPage() {
  // Sample movie data
  const movies = [
    {
      id: 1,
      title: "The JavaScript Adventure",
      genre: "Action",
      rating: 4.8,
      year: 2023,
      poster: "js-adventure.jpg",
    },
    {
      id: 2,
      title: "Array of Darkness",
      genre: "Horror",
      rating: 4.5,
      year: 2022,
      poster: "array-darkness.jpg",
    },
    {
      id: 3,
      title: "Promise Me Forever",
      genre: "Romance",
      rating: 4.2,
      year: 2023,
      poster: "promise-forever.jpg",
    },
    {
      id: 4,
      title: "The DOM Chronicles",
      genre: "Fantasy",
      rating: 4.0,
      year: 2021,
      poster: "dom-chronicles.jpg",
    },
  ];
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
          <h1 className="text-3xl font-bold">JavaScript DOM Manipulation</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Understanding the DOM</h2>
              <p className="mb-4">
                The Document Object Model (DOM) is a programming interface for
                web documents. It represents the page as a tree of objects that
                JavaScript can manipulate to change the document structure,
                style, and content.
              </p>

              <Tabs defaultValue="selecting" className="mb-6">
                <TabsList className="bg-gray-950 border-gray-800">
                  <TabsTrigger
                    value="selecting"
                    className="data-[state=active]:bg-indigo-600"
                  >
                    Selecting Elements
                  </TabsTrigger>
                  <TabsTrigger
                    value="manipulating"
                    className="data-[state=active]:bg-indigo-600"
                  >
                    Manipulating Elements
                  </TabsTrigger>
                  <TabsTrigger
                    value="creating"
                    className="data-[state=active]:bg-indigo-600"
                  >
                    Creating Elements
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="selecting" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Selecting DOM Elements
                  </h3>
                  <p className="mb-4">
                    JavaScript provides several methods to select elements from
                    the DOM. These methods allow you to target specific elements
                    based on their ID, class, tag name, or other attributes.
                  </p>
                  <CodeExample
                    code={`// Select by ID
const movieTitle = document.getElementById('movie-title');
console.log(movieTitle.textContent); // Gets the text content of the element

// Select by class name (returns a collection)
const movieItems = document.getElementsByClassName('movie-item');
console.log(movieItems.length); // Number of elements with the class 'movie-item'

// Select by tag name (returns a collection)
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs.length); // Number of paragraph elements

// Modern selector methods

// querySelector - returns the first matching element
const firstButton = document.querySelector('button');
const movieDetails = document.querySelector('.movie-details');
const submitBtn = document.querySelector('#submit-btn');
const customSelector = document.querySelector('div.movie-card > h3');

// querySelectorAll - returns all matching elements as a NodeList
const allButtons = document.querySelectorAll('button');
const actionMovies = document.querySelectorAll('.movie-item.action');

// Accessing elements within a collection
for (let i = 0; i < movieItems.length; i++) {
  console.log(movieItems[i].textContent);
}

// Using forEach with querySelectorAll results
document.querySelectorAll('.movie-rating').forEach(element => {
  console.log(element.textContent);
});

// Finding elements based on relationships
const movieList = document.getElementById('movie-list');
const firstMovie = movieList.firstElementChild; // First child element
const lastMovie = movieList.lastElementChild; // Last child element
const allMovies = movieList.children; // All child elements

// Getting the parent element
const movieCard = document.querySelector('.movie-card');
const cardContainer = movieCard.parentElement;

// Getting siblings
const nextMovie = movieCard.nextElementSibling;
const previousMovie = movieCard.previousElementSibling;`}
                  />
                </TabsContent>

                <TabsContent value="manipulating" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Manipulating DOM Elements
                  </h3>
                  <p className="mb-4">
                    Once you&apos;ve selected elements, you can manipulate their
                    content, attributes, styles, and more. These manipulations
                    allow you to dynamically update your web page based on user
                    actions or other events.
                  </p>
                  <CodeExample
                    code={`// Changing text content
const movieTitle = document.getElementById('movie-title');
movieTitle.textContent = 'The JavaScript Adventure'; // Sets plain text

// Using innerHTML (be careful with security implications)
const movieDescription = document.querySelector('.movie-description');
movieDescription.innerHTML = 'A <strong>thrilling</strong> journey through JavaScript.';

// Changing attributes
const moviePoster = document.getElementById('movie-poster');
moviePoster.src = 'javascript-adventure.jpg';
moviePoster.alt = 'The JavaScript Adventure Poster';

// Check if an attribute exists
if (moviePoster.hasAttribute('data-rating')) {
  console.log('Rating found:', moviePoster.getAttribute('data-rating'));
}

// Add/remove attributes
moviePoster.setAttribute('data-genre', 'Action');
moviePoster.removeAttribute('data-old-id');

// Working with classes
const movieCard = document.querySelector('.movie-card');

// Add a class
movieCard.classList.add('featured');

// Remove a class
movieCard.classList.remove('hidden');

// Toggle a class (add if missing, remove if present)
movieCard.classList.toggle('expanded');

// Check if element has a class
if (movieCard.classList.contains('new-release')) {
  console.log('This is a new release!');
}

// Replace one class with another
movieCard.classList.replace('standard', 'premium');

// Working with styles directly
const ratingElement = document.querySelector('.rating');
ratingElement.style.color = '#FFD700'; // Gold color
ratingElement.style.fontSize = '24px';
ratingElement.style.fontWeight = 'bold';

// Setting multiple styles at once
Object.assign(ratingElement.style, {
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: 'rgba(0, 0, 0, 0.1)'
});

// Getting computed style (actual applied style)
const computedStyle = window.getComputedStyle(ratingElement);
console.log('Applied color:', computedStyle.color);

// Changing element visibility
const spoilerAlert = document.querySelector('.spoiler');
spoilerAlert.style.display = 'none'; // Hide element
// Later:
spoilerAlert.style.display = 'block'; // Show element

// Element positioning information
const rect = movieCard.getBoundingClientRect();
console.log('Element position:', rect.top, rect.left);
console.log('Element size:', rect.width, rect.height);`}
                  />
                </TabsContent>

                <TabsContent value="creating" className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Creating and Modifying DOM Elements
                  </h3>
                  <p className="mb-4">
                    JavaScript allows you to create new DOM elements, modify
                    them, and insert them into the document. This is useful for
                    dynamically creating content based on data or user
                    interactions.
                  </p>
                  <CodeExample
                    code={`// Creating a new element
const newMovie = document.createElement('div');
newMovie.className = 'movie-item';
newMovie.id = 'movie-10';

// Setting content and attributes
newMovie.textContent = 'The DOM Chronicles II';
newMovie.setAttribute('data-genre', 'Fantasy');

// Creating and appending a child element
const ratingElement = document.createElement('span');
ratingElement.className = 'rating';
ratingElement.textContent = '4.5';
newMovie.appendChild(ratingElement);

// Creating complex structures
function createMovieCard(movie) {
  const card = document.createElement('div');
  card.className = 'movie-card';
  
  const title = document.createElement('h3');
  title.textContent = movie.title;
  
  const details = document.createElement('div');
  details.className = 'movie-details';
  
  const year = document.createElement('span');
  year.className = 'year';
  year.textContent = movie.year;
  
  const rating = document.createElement('span');
  rating.className = 'rating';
  rating.textContent = \`\${movie.rating}/5\`;
  
  // Build the structure
  details.appendChild(year);
  details.appendChild(rating);
  card.appendChild(title);
  card.appendChild(details);
  
  return card;
}

// Using the function to create an element
const newCard = createMovieCard({
  title: 'Array of Darkness',
  year: 2022,
  rating: 4.5
});

// Using innerHTML (simpler but less efficient for complex operations)
const movieContainer = document.querySelector('.movie-container');
movieContainer.innerHTML += \`
  <div class="movie-card">
    <h3>Promise Me Forever</h3>
    <div class="movie-details">
      <span class="year">2023</span>
      <span class="rating">4.2/5</span>
    </div>
  </div>
\`;

// Using DocumentFragment for batch operations (more efficient)
const moviesData = [
  { title: 'Recursion', year: 2022, rating: 4.7 },
  { title: 'The Variable Ultimatum', year: 2023, rating: 3.9 }
];

const fragment = document.createDocumentFragment();

moviesData.forEach(movie => {
  const card = createMovieCard(movie);
  fragment.appendChild(card);
});

// Add all cards to the DOM in one operation
movieContainer.appendChild(fragment);

// Inserting elements at specific positions
const referenceMovie = document.querySelector('#movie-5');

// Insert before a reference element
movieContainer.insertBefore(newMovie, referenceMovie);

// Modern insertion methods
referenceMovie.before(newCard); // Insert before
referenceMovie.after(newCard); // Insert after
referenceMovie.prepend(newCard); // Insert as first child
referenceMovie.append(newCard); // Insert as last child

// Replacing elements
const oldMovie = document.querySelector('#movie-3');
oldMovie.replaceWith(newMovie);

// Removing elements
const outdatedMovie = document.querySelector('#movie-2');
outdatedMovie.remove();

// Cloning elements
const movieTemplate = document.querySelector('#movie-template');
const clonedMovie = movieTemplate.cloneNode(true); // true = deep clone (with children)
clonedMovie.id = 'movie-new';
movieContainer.appendChild(clonedMovie);`}
                  />
                </TabsContent>
              </Tabs>

              <h3 className="text-xl font-semibold mb-2">Traversing the DOM</h3>
              <p className="mb-4">
                The DOM is a tree structure, and JavaScript provides various
                properties and methods to navigate through this tree, allowing
                you to access related elements.
              </p>
              <CodeExample
                code={`// DOM tree traversal example
const movieList = document.getElementById('movie-list');

// Navigating to child elements
const firstMovie = movieList.firstElementChild;
const lastMovie = movieList.lastElementChild;
const allMovies = movieList.children; // HTMLCollection of all child elements
const thirdMovie = movieList.children[2]; // Access specific child by index

// Navigating to parent elements
const movieCard = document.querySelector('.movie-card');
const parentElement = movieCard.parentElement; // Immediate parent
const grandparent = movieCard.parentElement.parentElement; // Parent of parent
const rootElement = document.documentElement; // The <html> element

// Navigating to sibling elements
const prevSibling = movieCard.previousElementSibling; // Previous sibling element
const nextSibling = movieCard.nextElementSibling; // Next sibling element

// Finding all ancestors
function getAllAncestors(element) {
  const ancestors = [];
  let current = element.parentElement;
  
  while (current) {
    ancestors.push(current);
    current = current.parentElement;
  }
  
  return ancestors;
}

// Finding all descendants
function getAllDescendants(element) {
  const descendants = [];
  
  function traverse(node) {
    const children = node.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      descendants.push(child);
      traverse(child);
    }
  }
  
  traverse(element);
  return descendants;
}

// Example usage of traversal functions
const movieSection = document.querySelector('.movie-section');
console.log('All ancestors:', getAllAncestors(movieCard));
console.log('All descendants:', getAllDescendants(movieSection));

// Closest ancestor matching a selector
const closestSection = movieCard.closest('section');
console.log('Closest section:', closestSection);

// querySelector within a specific element
const subtitle = movieCard.querySelector('.subtitle');
const buttons = movieCard.querySelectorAll('button');`}
              />
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">
                DOM Manipulation in Action: Movie Example
              </h2>
              <p className="mb-4">
                Let&apos;s see how DOM manipulation can be used to create a
                dynamic movie list:
              </p>

              <CodeExample
                code={`// Movie List Application using DOM Manipulation

// Sample movie data
const movies = [
  { id: 1, title: "The JavaScript Adventure", genre: "Action", rating: 4.8, year: 2023, poster: "js-adventure.jpg" },
  { id: 2, title: "Array of Darkness", genre: "Horror", rating: 4.5, year: 2022, poster: "array-darkness.jpg" },
  { id: 3, title: "Promise Me Forever", genre: "Romance", rating: 4.2, year: 2023, poster: "promise-forever.jpg" },
  { id: 4, title: "The DOM Chronicles", genre: "Fantasy", rating: 4.0, year: 2021, poster: "dom-chronicles.jpg" }
];

// DOM References
const movieContainer = document.getElementById('movie-container');
const filterForm = document.getElementById('filter-form');
const genreSelect = document.getElementById('genre-filter');
const yearInput = document.getElementById('year-filter');
const sortSelect = document.getElementById('sort-by');
const searchInput = document.getElementById('search-input');

// Create movie card function
function createMovieCard(movie) {
  // Create the main card element
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.dataset.id = movie.id;
  
  // Create poster image
  const poster = document.createElement('img');
  poster.src = \`images/\${movie.poster}\`;
  poster.alt = \`\${movie.title} Poster\`;
  poster.className = 'movie-poster';
  
  // Create movie info section
  const info = document.createElement('div');
  info.className = 'movie-info';
  
  // Create and add title
  const title = document.createElement('h3');
  title.textContent = movie.title;
  title.className = 'movie-title';
  
  // Create details container
  const details = document.createElement('div');
  details.className = 'movie-details';
  
  // Add genre
  const genre = document.createElement('span');
  genre.textContent = movie.genre;
  genre.className = 'movie-genre';
  
  // Add year
  const year = document.createElement('span');
  year.textContent = movie.year;
  year.className = 'movie-year';
  
  // Add rating with star
  const rating = document.createElement('div');
  rating.className = 'movie-rating';
  rating.innerHTML = \`<span class="star">★</span> \${movie.rating}/5\`;
  
  // Add "Add to Favorites" button
  const favButton = document.createElement('button');
  favButton.textContent = '♥ Add to Favorites';
  favButton.className = 'fav-button';
  favButton.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent card click
    favButton.classList.toggle('active');
    if (favButton.classList.contains('active')) {
      favButton.textContent = '♥ Remove from Favorites';
      showToast(\`\${movie.title} added to favorites!\`);
    } else {
      favButton.textContent = '♥ Add to Favorites';
      showToast(\`\${movie.title} removed from favorites!\`);
    }
  });
  
  // Assemble the elements
  details.appendChild(genre);
  details.appendChild(year);
  details.appendChild(rating);
  
  info.appendChild(title);
  info.appendChild(details);
  info.appendChild(favButton);
  
  card.appendChild(poster);
  card.appendChild(info);
  
  // Add click event to the card
  card.addEventListener('click', function() {
    showMovieDetails(movie);
  });
  
  return card;
}

// Function to display all movies
function displayMovies(movieArray) {
  // Clear existing content
  movieContainer.innerHTML = '';
  
  if (movieArray.length === 0) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.textContent = 'No movies found matching your criteria.';
    movieContainer.appendChild(noResults);
    return;
  }
  
  // Create a document fragment for better performance
  const fragment = document.createDocumentFragment();
  
  // Create and add each movie card
  movieArray.forEach(movie => {
    const card = createMovieCard(movie);
    fragment.appendChild(card);
  });
  
  // Add all cards to the DOM at once
  movieContainer.appendChild(fragment);
}

// Function to filter and sort movies based on user criteria
function filterAndSortMovies() {
  // Get filter values
  const genreFilter = genreSelect.value;
  const yearFilter = yearInput.value ? parseInt(yearInput.value) : null;
  const sortBy = sortSelect.value;
  const searchTerm = searchInput.value.toLowerCase();
  
  // Filter movies
  let filteredMovies = movies.filter(movie => {
    // Check genre filter
    if (genreFilter && genreFilter !== 'all' && movie.genre !== genreFilter) {
      return false;
    }
    
    // Check year filter
    if (yearFilter && movie.year !== yearFilter) {
      return false;
    }
    
    // Check search term
    if (searchTerm && !movie.title.toLowerCase().includes(searchTerm)) {
      return false;
    }
    
    return true;
  });
  
  // Sort movies
  if (sortBy) {
    filteredMovies.sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'rating-desc') {
        return b.rating - a.rating;
      } else if (sortBy === 'year-desc') {
        return b.year - a.year;
      }
      return 0;
    });
  }
  
  // Update the display
  displayMovies(filteredMovies);
}

// Function to populate filter options
function populateFilters() {
  // Gather unique genres
  const genres = [];
  movies.forEach(movie => {
    if (!genres.includes(movie.genre)) {
      genres.push(movie.genre);
    }
  });
  
  // Add genre options
  genres.forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    genreSelect.appendChild(option);
  });
}

// Function to show movie details
function showMovieDetails(movie) {
  // Create modal container
  const modal = document.createElement('div');
  modal.className = 'movie-modal';
  
  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  
  // Create close button
  const closeButton = document.createElement('button');
  closeButton.textContent = '×';
  closeButton.className = 'modal-close';
  closeButton.addEventListener('click', function() {
    document.body.removeChild(modal);
  });
  
  // Create movie details HTML
  const detailsHTML = \`
    <div class="modal-poster">
      <img src="images/\${movie.poster}" alt="\${movie.title}">
    </div>
    <div class="modal-info">
      <h2>\${movie.title}</h2>
      <p class="modal-meta">\${movie.year} | \${movie.genre} | ★ \${movie.rating}/5</p>
      <p class="modal-description">
        A thrilling journey through the world of \${movie.genre.toLowerCase()}, 
        featuring amazing performances and exciting plot twists.
      </p>
      <button class="modal-button">Watch Now</button>
    </div>
  \`;
  
  // Set content and build modal
  modalContent.innerHTML = detailsHTML;
  modalContent.prepend(closeButton);
  modal.appendChild(modalContent);
  
  // Add to DOM
  document.body.appendChild(modal);
  
  // Add click outside to close
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });
}

// Function to show toast message
function showToast(message) {
  // Create toast element
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  
  // Add to DOM
  document.body.appendChild(toast);
  
  // Force reflow to trigger animation
  toast.offsetHeight;
  
  // Show toast
  toast.classList.add('visible');
  
  // Hide and remove after 3 seconds
  setTimeout(() => {
    toast.classList.remove('visible');
    
    // Remove from DOM after animation completes
    toast.addEventListener('transitionend', function() {
      if (toast.parentNode) {
        document.body.removeChild(toast);
      }
    });
  }, 3000);
}

// Set up event listeners
filterForm.addEventListener('submit', function(e) {
  e.preventDefault();
  filterAndSortMovies();
});

genreSelect.addEventListener('change', filterAndSortMovies);
sortSelect.addEventListener('change', filterAndSortMovies);
searchInput.addEventListener('input', filterAndSortMovies);

// Initialize the app
populateFilters();
displayMovies(movies);`}
              />
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Interactive Exercise</h2>
              <p className="mb-4">
                Try the exercise below to test your understanding of DOM
                manipulation:
              </p>

              <InteractiveExercise
                instructions="Fix the code below to implement a simple movie list with filtering and sorting."
                initialCode={`// Movie List with DOM Manipulation Exercise

// Sample movie data
const movies = [
  { id: 1, title: "The JavaScript Adventure", genre: "Action", rating: 4.8 },
  { id: 2, title: "Array of Darkness", genre: "Horror", rating: 4.5 },
  { id: 3, title: "Promise Me Forever", genre: "Romance", rating: 4.2 },
  { id: 4, title: "The DOM Chronicles", genre: "Fantasy", rating: 4.0 }
];

// TODO: Implement the createMovieElement function
// It should create a div with class 'movie-item' containing:
// 1. An h3 with the movie title
// 2. A p with the genre
// 3. A span with class 'rating' showing the rating with a star symbol (★)
function createMovieElement(movie) {
  // Your code here
}

// TODO: Implement the renderMovieList function
// It should clear the container and render all movies
function renderMovieList(movieArray) {
  const container = document.getElementById('movie-list');
  // Your code here
}

// TODO: Implement the filterByGenre function
// It should filter the movies by the selected genre
function filterByGenre() {
  const genreSelect = document.getElementById('genre-filter');
  // Your code here
}

// TODO: Implement the sortMovies function
// It should sort movies based on the selected option (title or rating)
function sortMovies() {
  const sortSelect = document.getElementById('sort-by');
  // Your code here
}

// Test the functions by calling them
renderMovieList(movies);

// Add event listeners to the form controls
document.getElementById('genre-filter').addEventListener('change', filterByGenre);
document.getElementById('sort-by').addEventListener('change', sortMovies);

// HTML structure (for reference):
/*
<div id="movie-controls">
  <select id="genre-filter">
    <option value="all">All Genres</option>
    <option value="Action">Action</option>
    <option value="Horror">Horror</option>
    <option value="Romance">Romance</option>
    <option value="Fantasy">Fantasy</option>
  </select>
  
  <select id="sort-by">
    <option value="title">Sort by Title</option>
    <option value="rating">Sort by Rating</option>
  </select>
</div>

<div id="movie-list"></div>
*/`}
                solution={`// Movie List with DOM Manipulation Exercise

// Sample movie data
const movies = [
  { id: 1, title: "The JavaScript Adventure", genre: "Action", rating: 4.8 },
  { id: 2, title: "Array of Darkness", genre: "Horror", rating: 4.5 },
  { id: 3, title: "Promise Me Forever", genre: "Romance", rating: 4.2 },
  { id: 4, title: "The DOM Chronicles", genre: "Fantasy", rating: 4.0 }
];

// Implemented the createMovieElement function
function createMovieElement(movie) {
  // Create the main container
  const movieElement = document.createElement('div');
  movieElement.className = 'movie-item';
  movieElement.dataset.id = movie.id;
  
  // Create and add the title
  const title = document.createElement('h3');
  title.textContent = movie.title;
  
  // Create and add the genre
  const genre = document.createElement('p');
  genre.textContent = movie.genre;
  
  // Create and add the rating
  const rating = document.createElement('span');
  rating.className = 'rating';
  rating.textContent = \`\u2605 \${movie.rating}\`;
  
  // Add all elements to the container
  movieElement.appendChild(title);
  movieElement.appendChild(genre);
  movieElement.appendChild(rating);
  
  return movieElement;
}

// Implemented the renderMovieList function
function renderMovieList(movieArray) {
  const container = document.getElementById('movie-list');
  
  // Clear existing content
  container.innerHTML = '';
  
  // Create a document fragment for better performance
  const fragment = document.createDocumentFragment();
  
  // Add each movie to the fragment
  movieArray.forEach(movie => {
    const movieElement = createMovieElement(movie);
    fragment.appendChild(movieElement);
  });
  
  // Add all movies to the container at once
  container.appendChild(fragment);
}

// Implemented the filterByGenre function
function filterByGenre() {
  const genreSelect = document.getElementById('genre-filter');
  const selectedGenre = genreSelect.value;
  
  // Filter the movies
  let filteredMovies;
  if (selectedGenre === 'all') {
    filteredMovies = movies;
  } else {
    filteredMovies = movies.filter(movie => movie.genre === selectedGenre);
  }
  
  // Re-render the list with filtered movies
  renderMovieList(filteredMovies);
  
  // Keep the sort order if it was set
  const sortSelect = document.getElementById('sort-by');
  if (sortSelect.value !== 'title') {
    sortMovies();
  }
}

// Implemented the sortMovies function
function sortMovies() {
  const sortSelect = document.getElementById('sort-by');
  const sortBy = sortSelect.value;
  
  // Get the current displayed movies
  const container = document.getElementById('movie-list');
  const currentMovieIds = Array.from(container.children).map(
    elem => parseInt(elem.dataset.id)
  );
  
  // Get the movies to sort
  const moviesToSort = movies.filter(movie => 
    currentMovieIds.includes(movie.id)
  );
  
  // Sort the movies
  if (sortBy === 'title') {
    moviesToSort.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === 'rating') {
    moviesToSort.sort((a, b) => b.rating - a.rating);
  }
  
  // Re-render the list with sorted movies
  renderMovieList(moviesToSort);
}

// Test the functions by calling them
renderMovieList(movies);

// Add event listeners to the form controls
document.getElementById('genre-filter').addEventListener('change', filterByGenre);
document.getElementById('sort-by').addEventListener('change', sortMovies);

// HTML structure (for reference):
/*
<div id="movie-controls">
  <select id="genre-filter">
    <option value="all">All Genres</option>
    <option value="Action">Action</option>
    <option value="Horror">Horror</option>
    <option value="Romance">Romance</option>
    <option value="Fantasy">Fantasy</option>
  </select>
  
  <select id="sort-by">
    <option value="title">Sort by Title</option>
    <option value="rating">Sort by Rating</option>
  </select>
</div>

<div id="movie-list"></div>
*/`}
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-20">
              <h2 className="text-xl font-bold mb-4">Quick Reference</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-indigo-500">
                    Selecting Elements
                  </h3>
                  <p className="text-sm text-gray-400">
                    Methods to find DOM elements.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`// By ID
getElementById('id')

// By CSS selector (first)
querySelector('.class')

// By CSS selector (all)
querySelectorAll('div p')

// Other methods
getElementsByClassName('class')
getElementsByTagName('div')`}
                      language="javascript"
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-indigo-500">
                    Manipulating Content
                  </h3>
                  <p className="text-sm text-gray-400">
                    Changing element content.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`// Text content
element.textContent = 'New text'

// HTML content (careful!)
element.innerHTML = '<span>HTML</span>'

// Value (for inputs)
input.value = 'New value'`}
                      language="javascript"
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-indigo-500">
                    Element Properties
                  </h3>
                  <p className="text-sm text-gray-400">
                    Working with element attributes.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`// Get/set attribute
el.getAttribute('data-id')
el.setAttribute('data-id', '123')

// Classes
el.classList.add('active')
el.classList.remove('hidden')
el.classList.toggle('expanded')
el.classList.contains('selected')

// Styles
el.style.color = 'red'
el.style.fontSize = '16px'`}
                      language="javascript"
                    />
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-indigo-500">
                    Creating Elements
                  </h3>
                  <p className="text-sm text-gray-400">
                    Adding new elements to DOM.
                  </p>
                  <pre className="bg-gray-950 p-2 rounded text-xs mt-1">
                    <SyntaxHighlighter
                      code={`// Create element
const div = document.createElement('div')

// Add to DOM
parent.appendChild(div)
parent.prepend(div)

// Insert at position
parent.insertBefore(new, reference)
reference.before(new)
reference.after(new)

// Remove
element.remove()`}
                      language="javascript"
                    />
                  </pre>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">DOM Traversal</h3>
                  <ul className="text-sm text-gray-400 list-disc pl-4 space-y-1 mt-2">
                    <li>parentElement - parent element</li>
                    <li>children - child elements</li>
                    <li>nextElementSibling - next element</li>
                    <li>previousElementSibling - previous</li>
                    <li>firstElementChild - first child</li>
                    <li>lastElementChild - last child</li>
                  </ul>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Common Mistakes</h3>
                  <ul className="text-sm text-gray-400 list-disc pl-4 space-y-1 mt-2">
                    <li>Forgetting to wait for DOM to load</li>
                    <li>Not checking if elements exist</li>
                    <li>Inefficient DOM manipulations</li>
                    <li>Security risks with innerHTML</li>
                  </ul>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="font-semibold">Related Concepts</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Link href="/learn/loops">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Loops
                      </Button>
                    </Link>
                    <Link href="/learn/events">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs border-gray-700 hover:border-blue-600"
                      >
                        Events
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
                  <Link href="/learn/loops">
                    <Button variant="link" className="text-red-600 p-0">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Loops
                    </Button>
                  </Link>
                  <Link href="/learn/events">
                    <Button variant="link" className="text-red-600 p-0">
                      Events
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <Link href="/exercises/dom/easy">
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
