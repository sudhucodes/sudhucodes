// Version of the website
const currentVersion = '1.6.2';

const updates = [
  { text: "Removed Full-Stack category", icon: "images/correct.png" },
  { text: "Added tailwindCSS category", icon: "images/correct.png" },
  // { text: "Added SudhuCodes star section", icon: "images/correct.png" },
  // { text: "Complete redesign of the website", icon: "images/correct.png" },
  // { text: "Introduced hash functionality in URLs", icon: "images/correct.png" },
  { text: "Added first tailwindCSS project", icon: "images/correct.png" },
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
