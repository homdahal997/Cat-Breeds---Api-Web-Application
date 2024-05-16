// Importing the fetchcatdata function from apifunctions.js
import { fetchcatdata } from "./apifunctions.js";

// Initializing an empty array to store the fetched data
let allData = [];

// Fetching the cat data
fetchcatdata().then(data => {
    // Storing the fetched data in allData
    allData = data;
    console.log(allData);
    // Displaying the fetched cats
    displayCats(allData);
}).catch(error => {
    // Logging any errors that occur during fetching
    console.error("Error:", error);
});

// Function to display cats
function displayCats(cats) {
    // Getting the catList element
    const catList = document.getElementById("catList");
    // Clearing the catList
    catList.innerHTML = "";
    // Looping over the first 9 cats- intended to display only nine cats on front page.
    cats.slice(0,9).forEach(cat => {
        // Creating a new div for each cat
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-3");
        // Setting the innerHTML of the div to a card containing the cat's image and name
        card.innerHTML = `
            <div class="card" style="width: 25rem; position: relative;">
                <img src="${cat.image.url}" class="card-img-top w-100" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${cat.name}</h5>
                </div>
            </div>
        `;
        // Appending the card to the second row element on the page
        document.querySelectorAll(".row")[1].appendChild(card);
    });
}

// Getting the searchButton and searchInput elements
const searchButton = document.getElementById("searchButton");
const searchField = document.getElementById("searchInput");

// Adding a click event listener to the searchButton
searchButton.addEventListener("click", (event) => {
    // Preventing the default form submission behavior
    event.preventDefault();
    // Getting the search term from the searchField and converting it to lower case
    const searchTerm = searchField.value.toLowerCase();
    // Filtering allData to only include cats whose name includes the search term
    const filteredData = allData.filter(cat => cat.name.toLowerCase().includes(searchTerm));
    console.log("filteredData", filteredData);
    // Displaying the filtered cats
    displayCats(filteredData);
});