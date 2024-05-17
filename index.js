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
    cats.slice(0, 9).forEach(cat => {
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

        // Event Listener for each card that display cat details on popup.
        card.addEventListener("click", () => {
            displayCatDetails(cat);
        });

        // Create the favorite icon
        const favoriteIcon = document.createElement("i");
        favoriteIcon.className = "fas fa-heart";
        favoriteIcon.style.color = "red";
        favoriteIcon.style.position = "absolute";
        favoriteIcon.style.top = "10px";
        favoriteIcon.style.right = "20px";
        favoriteIcon.style.cursor = "pointer";


        // Add an event listener to the favorite icon
        favoriteIcon.addEventListener("click", function (event) {
            // Prevent the default action
            event.preventDefault();
            event.stopPropagation();

            console.log("Favorite icon clicked!");
            alert("I will proudly handle favourites later if you are able to implement me ...lol");

        });

        // Append the favorite button to the card body
        card.querySelector(".card-body").appendChild(favoriteIcon);
        // Appending the card to the second row element on the page
        document.querySelectorAll(".row")[1].appendChild(card);


    });
}

// Getting the searchButton and searchInput elements
const searchButton = document.getElementById("searchButton");
const searchField = document.getElementById("searchInput");

// Adding a click event listener to the searchButton
searchButton.addEventListener("click", (event) => {
    // Preventing the default
    event.preventDefault();
    // Getting the search term from the searchField and converting it to lower case
    const searchTerm = searchField.value.toLowerCase();
    // Filtering allData to only include cats whose name includes the search term
    const filteredData = allData.filter(cat => cat.name.toLowerCase().includes(searchTerm));
    console.log("filteredData", filteredData);
    // Displaying the filtered cats
    displayCats(filteredData);
});

// Get the button element with the id "resetButton"
const resetButton = document.getElementById("resetButton");

// Add a click event listener to the resetButton
resetButton.addEventListener("click", (event) => {
    // Prevent the default action of the button
    event.preventDefault();

    // Get the input element
    document.getElementById("searchInput").value = "";

    // Call the displayCats function to reset dom to default display
    displayCats(allData);
});

// Function to display cat details in the modal
function displayCatDetails(cat) {
    // Select the modal body
    let modalBody = document.querySelector('.modal-body');

    // cat details formated using template literal
    let catDetails = `
    <div style="overflow: auto;">
    <div style="float: right;">
        <img src="${cat.image.url}" class="img-fluid mb-3" alt="${cat.name}" width="200" height="120">
    </div>
    <div>
        <p>Name: ${cat.name}</p> 
        <p>Description: ${cat.description}</p>
        <p>Temperament: ${cat.temperament}</p>
        <p>Origin: ${cat.origin}</p>
        <p>Life Span: ${cat.life_span} years</p>
        <p>Weight : ${cat.weight.imperial} pounds</p>
    </div>
</div>
    `;

    // Update the modal body content
    modalBody.innerHTML = catDetails;
    // Update the modal body content
    modalBody.innerHTML = catDetails;

    // Select the modal
    let modal = document.getElementById('exampleModal');

    // Create a new instance of the Bootstrap Modal class
    let bootstrapModal = new bootstrap.Modal(modal);

    // Show the modal
    bootstrapModal.show();
}
