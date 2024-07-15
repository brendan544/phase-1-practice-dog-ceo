console.log('%c HI', 'color: firebrick')
function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  
    fetch(imgUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Assuming data.message is an array of image URLs
        const images = data.message;
  
        // Select the container where images will be added
        const imageContainer = document.getElementById('image-container');
  
        // Clear existing images if needed
        imageContainer.innerHTML = '';
  
        // Loop through each image URL and create img element
        images.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          img.alt = 'Dog Image'; // Provide an alt attribute for accessibility
  
          // Append the image to the container
          imageContainer.appendChild(img);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Call fetchImages when the page loads
  window.onload = fetchImages;
  function fetchDogBreeds() {
    const breedsUrl = "https://dog.ceo/api/breeds/list/all";
  
    function fetchDogBreeds() {
        const breedsUrl = "https://dog.ceo/api/breeds/list/all";
      
        fetch(breedsUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            // Assuming data.message is an object where keys are breed names
            const breeds = Object.keys(data.message);
      
            // Select the <ul> element where breeds will be added
            const breedList = document.getElementById('breed-list');
      
            // Clear existing list items if needed
            breedList.innerHTML = '';
      
            // Loop through each breed and create <li> element
            breeds.forEach(breed => {
              const li = document.createElement('li');
              li.textContent = breed;
      
              // Add click event listener to change font color
              li.addEventListener('click', () => {
                li.style.color = 'red'; // Change font color to red on click
              });
      
              // Append the <li> element to the <ul>
              breedList.appendChild(li);
            });
      
            // Add event listener to the dropdown
            const dropdown = document.getElementById('breed-filter');
            dropdown.addEventListener('change', () => {
              const selectedLetter = dropdown.value.toLowerCase(); // Get selected letter
              filterBreedsByLetter(selectedLetter);
            });
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }
      
      // Function to filter breeds by starting letter
      function filterBreedsByLetter(letter) {
        const breedList = document.getElementById('breed-list');
        const breeds = breedList.getElementsByTagName('li');
      
        for (let i = 0; i < breeds.length; i++) {
          const breedName = breeds[i].textContent.toLowerCase();
          if (breedName.startsWith(letter)) {
            breeds[i].style.display = 'block'; // Show breed if it starts with selected letter
          } else {
            breeds[i].style.display = 'none'; // Hide breed if it doesn't start with selected letter
          }
        }
      }
      
      // Call fetchDogBreeds when the page loads
      window.onload = fetchDogBreeds