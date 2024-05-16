// Define the API key
const API_KEY = "live_UShNr4vS3QnUCOtwgU992ZN37F9ZvV9PIA3OgIsfXbP1OxoVZsrNmW8xf9LXih82";

// Function to fetch data from the Cat API
// This function is exported so it can be used in other parts of the application
export async function fetchcatdata() {
    try {
        // Use the fetch API to make a GET request to the Cat API
        // The API key is included in the query string
        const response = await fetch(`https://api.thecatapi.com/v1/breeds/?api_key=${API_KEY}`);
        
        // Parse the JSON response
        const data = await response.json();
        
        // Log the data to the console
        //console.log(data);
        return data;
    } catch (err) {
        // If an error occurs, log the error to the console
        console.error(err);
    }
}