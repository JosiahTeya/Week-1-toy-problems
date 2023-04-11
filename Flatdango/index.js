// Constants
const filmsEndpoint = "http://localhost:3000/films";
const filmEndpoint = "http://localhost:3000/films/1";
const filmTitle = document.getElementById("film-title");
const filmPoster = document.getElementById("film-poster");
const filmRuntime = document.getElementById("film-runtime");
const filmShowtime = document.getElementById("film-showtime");
const filmAvailableTickets = document.getElementById("film-available-tickets");
const filmsList = document.getElementById("films");
const buyTicketButton = document.getElementById("buy-ticket-button");

// Functions
// Define a function to display a selected film's details
function displayFilmDetails(film) {
    // Set the film title
    document.getElementById("film-title").textContent = film.title;
    
    // Set the film poster image
    document.getElementById("film-poster").setAttribute("src", film.poster);
    
    // Set the film runtime
    document.getElementById("film-runtime").textContent = film.runtime;
    
    // Set the film showtime
    document.getElementById("film-showtime").textContent = film.showtime;
    
    // Set the available tickets for the film
    document.getElementById("film-available-tickets").textContent = film.availableTickets;
  }
  
  // Define a function to display a list of films
  function displayFilms(films) {
    // Get the films list element
    const filmsList = document.getElementById("films");
    
    // Clear the existing film items
    filmsList.innerHTML = "";
    
    // Add a list item for each film
    films.forEach((film) => {
      const filmItem = document.createElement("li");
      filmItem.classList.add("film", "item");
      
      const filmLink = document.createElement("a");
      filmLink.setAttribute("href", "#");
      filmLink.textContent = film.title;
      
      filmLink.addEventListener("click", (event) => {
        event.preventDefault();
        displayFilmDetails(film);
      });
      
      filmItem.appendChild(filmLink);
      filmsList.appendChild(filmItem);
    });
  }
  
  // Define an array of films to display
  const films = [
    {
      title: "Jurassic Park",
      poster: "https://www.movieposter.com/posters/archive/main/25/MPW-12609",
      runtime: 127,
      showtime: "8:00 PM",
      availableTickets: 10,
    },
    {
      title: "Star Wars",
      poster: "https://www.movieposter.com/posters/archive/main/1/A70-2852",
      runtime: 121,
      showtime: "9:00 PM",
      availableTickets: 8,
    },
    {
      title: "Back to the Future",
      poster: "https://www.movieposter.com/posters/archive/main/47/MPW-23925",
      runtime: 116,
      showtime: "10:00 PM",
      availableTickets: 5,
    },
  ];
  
  // Display the list of films
  displayFilms(films);
  