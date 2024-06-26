// Function to fetch Marvel Comics characters asynchronously

async function fetchMarvelCharacters() {
    const publicKey = '20e7e726e2ba036817fc00152501ab22'; // Replace with your actual public API key
    const baseURL = 'https://gateway.marvel.com/v1/public/characters';
    
    try {
        // Fetch characters data from Marvel API
        const response = await fetch(`${baseURL}?apikey=${publicKey}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json(); // Parse JSON response
        return data.data.results; // Return array of characters
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error; // Propagate the error further
    }
}

// Function to update UI with fetched characters
function updateUIWithCharacters(characters) {
    const characterListElement = document.getElementById('character-list'); // Assuming there's an element with id 'character-list' in your HTML
    
    // Clear previous content
    characterListElement.innerHTML = '';
    
    // Iterate through characters and create DOM elements
    characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.classList.add('character-item');
        
        const nameElement = document.createElement('h2');
        nameElement.textContent = character.name;
        
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = character.description || 'No description available.';
        
        const thumbnailElement = document.createElement('img');
        thumbnailElement.src = `${character.thumbnail.path}/portrait_small.${character.thumbnail.extension}`;
        thumbnailElement.alt = character.name;
        
        characterElement.appendChild(nameElement);
        characterElement.appendChild(descriptionElement);
        characterElement.appendChild(thumbnailElement);
        
        characterListElement.appendChild(characterElement);
    });
}

// Fetch characters and update UI
fetchMarvelCharacters()
    .then(characters => {
        console.log('Fetched characters:', characters);
        updateUIWithCharacters(characters);
    })
    .catch(error => {
        console.error('Error in fetchMarvelCharacters:', error);
        // Optional: Handle errors in UI if needed
    });
