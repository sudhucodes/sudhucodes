// Version of the website
const currentVersion = '1.8.4';

const updates = [
  { text: "Implemented new sourcecode themes", icon: "images/icons/correct.png" },
  { text: "Using prism.js for color theme in source code", icon: "images/icons/correct.png" },
  // { text: "Enabled dynamic fetching of all assets (images, text files, etc.) via project-specific IDs", icon: "images/icons/correct.png" },
  { text: "Improved source code fetching methods", icon: "images/icons/correct.png" },
];


function renderPopupUpdates() {
  const popupContainer = document.querySelector('.popup-container ul');
  const versionHeading = document.querySelector('.popup-container h2');

  versionHeading.textContent = `Update ${currentVersion}`;
  popupContainer.innerHTML = '';

  updates.forEach(update => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <img src="${update.icon}" alt="Tick Icon" loading="lazy">
      <p>${update.text}</p>
    `;
    popupContainer.appendChild(listItem);
  });
}

const seenVersion = localStorage.getItem('siteVersion');

if (seenVersion !== currentVersion) {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('whatsNewPopup').style.display = 'block';
    document.body.classList.add('no-scroll');
    renderPopupUpdates();

    document.getElementById('closePopup').addEventListener('click', function() {
        localStorage.setItem('siteVersion', currentVersion);
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('whatsNewPopup').style.display = 'none';
        document.body.classList.remove('no-scroll');
    });
}
