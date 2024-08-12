// Function to handle navigation
function navigateTo(page) {
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
}


  
  // Handle back/forward navigation
  window.onpopstate = function(event) {
    if (event.state && event.state.page) {
      navigateTo(event.state.page);
    } else {
      navigateTo('allprojects');
    }
  };
  
  // Initialize the correct page based on the current URL or show allprojects by default
  window.onload = function() {
    // If the path is empty or invalid, default to 'allprojects'
    const path = window.location.pathname.slice(1);
    if (path && document.getElementById(path)) {
      navigateTo(path);
    } else {
      navigateTo('allprojects');
    }
  };
  
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
  window.location.href = `certificate.html`; // Redirect to the respective quiz page
}
function startQuizjs() {
  window.location.href = `comingsoon.html`; // Redirect to the respective quiz page
}
function startQuizreact() {
  window.location.href = `comingsoon.html`; // Redirect to the respective quiz page
}
function startQuizfullstack() {
  window.location.href = `comingsoon.html`; // Redirect to the respective quiz page
}

window.onload = function() {
  selectButton('htmlCss');
  document.querySelector('#navigator').style.display = 'block';
};

function goback() {
  window.history.back();
}

window.addEventListener('load', function() {
  const loaderWrapper = document.getElementById('loader-wrapper');
  loaderWrapper.style.display = 'none'; // Hide the loader
});

