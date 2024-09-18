// Version of the website
const currentVersion = '1.2.1';

// Define the updates as an array of objects
const updates = [
  { text: "Now all QR code is active", icon: "images/correct.png" },
  { text: "Project Assets download", icon: "images/correct.png" },
  { text: "Added Full-Stack Quiz", icon: "images/correct.png" },
  { text: "Added React JS Quiz", icon: "images/correct.png" },
  { text: "Added icon in download button", icon: "images/correct.png" }
];

// Function to render the popup content dynamically
function renderPopupUpdates() {
  const popupContainer = document.querySelector('.popup-container ul');
  const versionHeading = document.querySelector('.popup-container h2');

  // Set the version dynamically
  versionHeading.textContent = `Update ${currentVersion}`;

  // Clear the container before adding updates
  popupContainer.innerHTML = '';

  // Loop through the updates and append each one to the popup
  updates.forEach(update => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <img src="${update.icon}" alt="Tick Icon" loading="lazy">
      <p>${update.text}</p>
    `;
    popupContainer.appendChild(listItem);
  });
}

// Check if the current version is stored in localStorage
const seenVersion = localStorage.getItem('siteVersion');

if (seenVersion !== currentVersion) {
    // Display the overlay and popup
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('whatsNewPopup').style.display = 'block';

    // Add a class to body to disable scrolling
    document.body.classList.add('no-scroll');

    // Render the updates dynamically
    renderPopupUpdates();

    // Add event listener to close the popup and store the version in localStorage
    document.getElementById('closePopup').addEventListener('click', function() {
        localStorage.setItem('siteVersion', currentVersion);
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('whatsNewPopup').style.display = 'none';

        // Remove the class from body to re-enable scrolling
        document.body.classList.remove('no-scroll');
    });
}
