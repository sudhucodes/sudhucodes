let navigationHistory = [];

// Button selection and section display logic
const buttons = document.querySelectorAll('.project-buttons button');
const sections = {
  fullStack: document.querySelector('.full-stack'),
  react: document.querySelector('.react'),
  htmlCss: document.querySelector('.html-css'),
  javaScript: document.querySelector('.javascript')
};

function selectButton(buttonId) {
  buttons.forEach(button => {
    button.classList.remove('selected');
  });
  document.getElementById(buttonId).classList.add('selected');

  Object.keys(sections).forEach(section => {
    sections[section].style.display = 'none';
    sections[section].classList.remove('fade-up');
  });

  // Display the selected section with fade-up animation
  const selectedSection = sections[buttonId];
  selectedSection.style.display = 'block';
  setTimeout(() => {
    selectedSection.classList.add('fade-up');
  }, 10);
}

// Function to handle navigation
function navigateTo(page, addToHistory = true) {
  const pages = document.querySelectorAll('.page');
  const navigators = document.querySelectorAll('#navigator, #navigator1, #navigator2, #navigator3, #navigator4, #navigator5');
  const aDivs = document.querySelectorAll('.a1, .a2, .a3, .a4, .a5, .a6');

  // Hide all pages, navigators, and reset background of all .a divs
  pages.forEach(p => {
    p.classList.remove('active');
    p.style.opacity = 0;
  });

  navigators.forEach(nav => nav.style.display = 'none');

  aDivs.forEach(div => div.style.backgroundImage = '');

  // Show the active page and corresponding navigator
  const activePage = document.getElementById(page);
  activePage.classList.add('active');
  
  // Ensure the element is visible before starting the opacity transition
  setTimeout(() => {
    activePage.style.opacity = 1;
  }, 10);

  // Show the corresponding navigator and change background for the corresponding .a div
  const navigatorMap = {
    'allprojects': { nav: '#navigator', div: '.a1' },
    'getcertificate': { nav: '#navigator1', div: '.a2' },
    'cources': { nav: '#navigator2', div: '.a3' },
    'sourcecode': { nav: '#navigator3', div: '.a4' },
    'projectassets': { nav: '#navigator4', div: '.a5' },
    'stockimages': { nav: '#navigator5', div: '.a6' }
  };

  const navigatorInfo = navigatorMap[page];
  if (navigatorInfo) {
    document.querySelector(navigatorInfo.nav).style.display = 'block';
    if (window.innerWidth > 768) {
      document.querySelector(navigatorInfo.div).style.backgroundImage = 'linear-gradient(to right, rgba(38, 255, 227, 0.25), rgba(38, 255, 227, 0))';
    }
  }

  // Update the URL hash and navigation history
  if (addToHistory) {
    history.pushState({ page: page }, null, `#${page}`);
    navigationHistory.push(page);
  }
}

// Handle back/forward navigation using the browser's back button
window.addEventListener('popstate', function(event) {
  if (event.state && event.state.page) {
    navigateTo(event.state.page, false);
  } else {
    navigateTo('allprojects', false);
  }
});

// Initialize the correct page based on the current URL hash or show allprojects by default
window.onload = function() {
  // Clear URL hash to reset state
  history.replaceState(null, null, window.location.pathname);
  
  navigateTo('allprojects');

  selectButton('htmlCss');
  document.querySelector('#navigator').style.display = 'block';

  // Hide the loader after the page is loaded
  // const loaderWrapper = document.getElementById('loader-wrapper');
  // if (loaderWrapper) loaderWrapper.style.display = 'none';
};

// Handle link clicks
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const page = this.getAttribute('data-page');
    navigateTo(page);
    
    if (window.innerWidth <= 768) {
      closeNav();
    }

    if (toggleButton) {
      toggleButton.classList.add('active');
      navLinks.classList.add('active');
    }
    
  });
});

// Toggle Navbar
const toggleButton = document.getElementById('toggle-button');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', function() {
  navLinks.classList.toggle('active');
  toggleButton.classList.toggle('active');
});

function closeNav() {
  navLinks.classList.remove('active');
  toggleButton.classList.remove('active');
}



function startQuizhtml() {
  window.open('certificates/htmlcertificate.html', '_blank');
}

function startQuizjs() {
  window.open('certificates/comingsoon.html', '_blank');
}

function startQuizreact() {
  window.open('certificates/comingsoon.html', '_blank');
}

function startQuizfullstack() {
  window.open('certificates/comingsoon.html', '_blank');
}

function logoclick() {
  window.location.reload();
}

// Search functionality
document.querySelectorAll('.search-box').forEach(searchBox => {
  const searchInput = searchBox.querySelector('input[type="text"]');
  const projectContainers = document.querySelectorAll('.container');
  const crossIcon = searchBox.querySelector('.cross-icon');

  searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();

    crossIcon.style.visibility = query ? 'visible' : 'hidden';
    crossIcon.style.opacity = query ? '1' : '0';

    projectContainers.forEach(function (container) {
      const projectTitle = container.querySelector('.project-title p').textContent.toLowerCase();
      container.style.display = projectTitle.includes(query) ? 'flex' : 'none';
    });

    if (!query) {
      projectContainers.forEach(container => container.style.display = 'flex');
    }
  });

  crossIcon.addEventListener('click', function () {
    searchInput.value = '';
    crossIcon.style.visibility = 'hidden';
    crossIcon.style.opacity = '0';
    projectContainers.forEach(container => container.style.display = 'flex');
  });
});


document.querySelectorAll('img').forEach(img => {
  img.setAttribute('loading', 'lazy');
});


// Function to count and display elements
function updateCount(selector, targetId, elementType = '*') {
  const containers = document.querySelectorAll(selector);
  let totalCount = 0;
  
  containers.forEach(container => {
    totalCount += container.querySelectorAll(elementType).length;
  });

  document.getElementById(targetId).innerText = totalCount;
}

// Update counts for each section
updateCount('.login-page', 'all-project-count', 'a'); // Sum of <a> tags inside all .login-page containers
updateCount('.quiz-list', 'all-quiz-count', '.quiz-item'); // Count .quiz-item divs inside .quiz-list
updateCount('.sourcecode-container', 'all-sourcecode-count', '.container'); // Count .container divs inside .main-container
updateCount('.all-cource-container', 'all-cource-count', '.cource-container'); // Count .cource-container divs inside .all-cource-container
updateCount('.assets-container', 'all-projectassets-count', '.container'); // Count .container divs inside .assets-container
updateCount('.stock-main', 'all-stockimages-count', '.stock-image-div'); // Count .stock-image-div elements inside .stock-main






// Set the current version of the website
const currentVersion = '7.9';

// Check if the current version is stored in localStorage
const seenVersion = localStorage.getItem('siteVersion');

if (seenVersion !== currentVersion) {
    // Show the overlay and "What's New" popup
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('whatsNewPopup').style.display = 'block';

    // Store the current version in localStorage after closing the popup
    document.getElementById('closePopup').addEventListener('click', function() {
        localStorage.setItem('siteVersion', currentVersion);
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('whatsNewPopup').style.display = 'none';
    });
}