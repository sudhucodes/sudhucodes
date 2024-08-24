let navigationHistory = [];

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
  const hash = window.location.hash.substring(1);
  if (hash && document.getElementById(hash)) {
    navigateTo(hash);
  } else {
    navigateTo('allprojects');
  }

  selectButton('htmlCss');
  document.querySelector('#navigator').style.display = 'block';
};

// Function to hide the loader
function hideLoader() {
  const loaderWrapper = document.getElementById('loader-wrapper');
  loaderWrapper.style.display = 'none';
}

// Wait until the #allprojects div content is fully loaded
window.addEventListener('load', function () {
  // Check if #allprojects is loaded
  const allProjectsDiv = document.getElementById('allprojects');

  // If #allprojects div has content, hide the loader
  if (allProjectsDiv) {
    hideLoader();
  }
});

// Handle link clicks
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const page = this.getAttribute('data-page');
    navigateTo(page);
    
    if (window.innerWidth <= 768) {
      closeNav();
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
const searchInput = document.querySelector('.search-box input[type="text"]');
const projectContainers = document.querySelectorAll('.container');
const crossIcon = document.querySelector('.cross-icon');

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
