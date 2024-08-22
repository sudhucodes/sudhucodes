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

    // Change background to a linear gradient for the corresponding .a div
    const correspondingDivMap = {
      '#navigator': '.a1',
      '#navigator1': '.a2',
      '#navigator2': '.a3',
      '#navigator3': '.a4',
      '#navigator4': '.a5',
      '#navigator5': '.a6'
    };

    document.querySelector(correspondingDivMap[navigatorMap[page]]).style.backgroundImage = 'linear-gradient(to right, rgba(38, 255, 227, 0.25), rgba(38, 255, 227, 0))';
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
  window.open('certificates/htmlcertificate.html', '_blank'); // Open in a new window or tab
}

function startQuizjs() {
  window.open('certificates/comingsoon.html', '_blank'); // Open in a new window or tab
}

function startQuizreact() {
  window.open('certificates/comingsoon.html', '_blank'); // Open in a new window or tab
}

function startQuizfullstack() {
  window.open('certificates/comingsoon.html', '_blank'); // Open in a new window or tab
}

function logoclick() {
  window.location.reload();
}


window.onload = function() {
  selectButton('htmlCss');
  if (window.innerWidth > 768) {
    document.querySelector('.a1').style.backgroundImage = 'linear-gradient(to right, rgba(38, 255, 227, 0.25), rgba(38, 255, 227, 0))';
  }
  document.querySelector('#navigator').style.display = 'block';
};

window.addEventListener('load', function() {
  const loaderWrapper = document.getElementById('loader-wrapper');
  loaderWrapper.style.display = 'none'; // Hide the loader
});




// Get references to the search input, project containers, and cross icon
const searchInput = document.querySelector('.search-box input[type="text"]');
const projectContainers = document.querySelectorAll('.container');
const crossIcon = document.querySelector('.cross-icon');

// Add an event listener to the search input to detect changes
searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();

    if (query !== '') {
        crossIcon.style.visibility = 'visible';
        crossIcon.style.opacity = '1';
    } else {
        crossIcon.style.visibility = 'hidden';
        crossIcon.style.opacity = '0';
    }

    projectContainers.forEach(function (container) {
        const projectTitle = container.querySelector('.project-title p').textContent.toLowerCase();
        container.style.display = projectTitle.includes(query) ? 'flex' : 'none';
    });

    if (query === '') {
        projectContainers.forEach(function (container) {
            container.style.display = 'flex';
        });
    }
});

// Add an event listener to the cross icon to clear the search input
crossIcon.addEventListener('click', function () {
    searchInput.value = '';
    crossIcon.style.visibility = 'hidden';
    crossIcon.style.opacity = '0';
    projectContainers.forEach(function (container) {
        container.style.display = 'flex';
    });
});
