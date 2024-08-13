let navigationHistory = [];

// Function to handle navigation
function navigateTo(page, addToHistory = true) {
  const pages = document.querySelectorAll('.page');
  const navigators = document.querySelectorAll('#navigator, #navigator1, #navigator2, #navigator3, #navigator4, #navigator5');

  // Hide all pages and navigators
  pages.forEach(p => {
    p.classList.remove('active');
    p.style.opacity = 0;
  });

  navigators.forEach(nav => nav.style.display = 'none');

  // Show the active page and corresponding navigator
  const activePage = document.getElementById(page);
  activePage.classList.add('active');
  
  // Ensure the element is visible before starting the opacity transition
  setTimeout(() => {
    activePage.style.opacity = 1;
  }, 10);

  // Show the corresponding navigator based on the active page
  const navigatorMap = {
    'allprojects': '#navigator',
    'getcertificate': '#navigator1',
    'cources': '#navigator2',
    'sourcecode': '#navigator3',
    'projectassets': '#navigator4',
    'stockimages': '#navigator5'
  };

  if (navigatorMap[page]) {
    document.querySelector(navigatorMap[page]).style.display = 'block';
  }

  // Update the URL hash to reflect the current page
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
  const hash = window.location.hash.substring(1); // Get the hash from the URL
  if (hash && document.getElementById(hash)) {
    navigateTo(hash);
  } else {
    navigateTo('allprojects');
  }

  // Set initial button and navigator display
  selectButton('htmlCss');
  document.querySelector('#navigator').style.display = 'block';

  // Hide the loader
  const loaderWrapper = document.getElementById('loader-wrapper');
  loaderWrapper.style.display = 'none'; 
};

// Handle link clicks
document.querySelectorAll('.nav-links a, .login-page a').forEach(link => {
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
const buttons = document.querySelectorAll('.project-buttons1 button');
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
    sections[section].classList.remove('fade-up'); // Remove animation class if present
  });

  // Display the selected section with fade-up animation
  const selectedSection = sections[buttonId];
  selectedSection.style.display = 'block';
  setTimeout(() => {
    selectedSection.classList.add('fade-up');
  }, 10); // Add slight delay to trigger animation
}

function startQuizhtml() {
  window.open('certificate.html', '_blank'); // Open in a new window or tab
}

function startQuizjs() {
  window.open('comingsoon.html', '_blank'); // Open in a new window or tab
}

function startQuizreact() {
  window.open('comingsoon.html', '_blank'); // Open in a new window or tab
}

function startQuizfullstack() {
  window.open('comingsoon.html', '_blank'); // Open in a new window or tab
}

window.onload = function() {
  selectButton('htmlCss');
  document.querySelector('#navigator').style.display = 'block';
};

window.addEventListener('load', function() {
  const loaderWrapper = document.getElementById('loader-wrapper');
  loaderWrapper.style.display = 'none'; // Hide the loader
});
