const apiUrl = 'https://bible-api.com/';
const verseRefInput = document.querySelector('#verseRefInput');
const fetchVerseBtn = document.querySelector('#fetchVerseBtn');
const verseContainer = document.querySelector('#verseContainer');

async function fetchVerse() {
    // Get the current value of the input field
    const verseRef = verseRefInput.value;
    
    // Construct the API URL
    const urlWithVerseRef = apiUrl + verseRef;
    
    // Fetch the data from the API
    const response = await fetch(urlWithVerseRef);
    const data = await response.json();

        // Update the UI with the verse text and reference
        verseContainer.innerHTML = `
          <p class="lead">${data.text}</p>
          <p class="text-end"><em>${data.reference}</em></p>
        `;
      
      }
  
  // Add an event listener to the button that fetches the verse
  fetchVerseBtn.addEventListener('click', fetchVerse);