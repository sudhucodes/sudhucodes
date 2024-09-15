// Project List
const projects = [
  {
      name: "Responsive-sidebar-menu",
      image: "images/Responsive-sidebar-menu.png",
      codeUrl: "source_code/html_projects/Responsive-sidebar-menu.html",
      hasAssets: true,
      category: "htmlcss"
  },
  {
      name: "Landing-page1",
      image: "images/Landing-page1.png",
      codeUrl: "source_code/html_projects/Landing-page1.html",
      hasAssets: true,
      category: "htmlcss"
  },
  {
      name: "Login-page4",
      image: "images/Login-page4.png",
      codeUrl: "source_code/html_projects/Login-page4.html",
      hasAssets: true,
      category: "htmlcss"
  },
  {
      name: "Website-with-Login-Form",
      image: "images/Website-with-Login-Form.png",
      codeUrl: "source_code/html_projects/website-with-login-form.html",
      hasAssets: true,
      category: "htmlcss"
  },
  {
      name: "Login-Page3",
      image: "images/Login-Page3.png",
      codeUrl: "source_code/html_projects/login-page3.html",
      hasAssets: true,
      category: "htmlcss"
  },
  {
      name: "Netflix-Login-Page",
      image: "images/Netflix-Login-Page.png",
      codeUrl: "source_code/html_projects/netflix-login-page.html",
      hasAssets: true,
      category: "htmlcss"
  },
  {
      name: "Card-Design-1",
      image: "images/Card-Design-1.png",
      codeUrl: "source_code/html_projects/card-design-1.html",
      hasAssets: true,
      category: "htmlcss"
  },
  {
      name: "Glassmorphism-Login-Form",
      image: "images/Glassmorphism-Login-Form.jpg",
      codeUrl: "source_code/html_projects/Glass-Login-Form.html",
      hasAssets: true,
      category: "htmlcss"
  },
  {
      name: "Login-signup-combo",
      image: "images/Login-signup-combo.png",
      codeUrl: "source_code/html_projects/login-signup-combo.html",
      hasAssets: false,
      category: "htmlcss"
  },
  {
      name: "Login-Page",
      image: "images/Login-Page.png",
      codeUrl: "source_code/html_projects/login-page.html",
      hasAssets: true,
      category: "htmlcss"
  },
  {
      name: "E-commerce-Website",
      image: "images/E-commerce-Website.png",
      codeUrl: "source_code/html_projects/ecommerce-website.html",
      hasAssets: true,
      category: "htmlcss"
  },
  {
      name: "Contact-Us",
      image: "images/Contact-Us.png",
      codeUrl: "source_code/html_projects/contact-us-form.html",
      hasAssets: false,
      category: "htmlcss"
  },
  {
      name: "Multi-Step Form",
      image: "images/Multi-Step-Form.png",
      codeUrl: "source_code/html_projects/multi-step-form.html",
      hasAssets: true,
      category: "htmlcss"
  },

// ------------------JavaScript Projects----------------------
  {
      name: "Clock-JS",
      image: "images/clock-js.png",
      codeUrl: "source_code/js_projects/clock-js.html",
      hasAssets: false,
      category: "javascript"
  },
  {
      name: "Student-Grade-Calculator",
      image: "images/Student-grade-calculator.png",
      codeUrl: "source_code/js_projects/student-grade-calculator.html",
      hasAssets: false,
      category: "javascript"
  }
];

function initializeSearchFunctionality(containerId, containerSelector) {
  const searchBox = document.querySelector(`#${containerId} .search-box`);
  if (!searchBox) return;

  const searchInput = searchBox.querySelector('input[type="text"]');
  const crossIcon = searchBox.querySelector('.cross-icon');
  const projectContainers = document.querySelectorAll(`#${containerId} ${containerSelector}`); // Adjust selector as needed

  searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();

    crossIcon.style.visibility = query ? 'visible' : 'hidden';
    crossIcon.style.opacity = query ? '1' : '0';

    projectContainers.forEach(container => {
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
}
  // Function to render the projects
  function renderProjects() {
    const htmlcssContainer = document.getElementById('htmlcssproject');
    const sourceCodeContainer = document.getElementById('sourceCodeContainer');
    const assetsContainer = document.getElementById('assetsContainer');
  
    // Category-specific containers
    const reactContainer = document.getElementById('reactproject');
    const javascriptContainer = document.getElementById('javascriptproject');
    const fullstackContainer = document.getElementById('fullstackproject');
    
    // Counters
    let htmlCssCount = 0;
    let reactCount = 0;
    let javascriptCount = 0;
    let fullstackCount = 0;
    let sourceCodeCount = 0;
    let assetsCount = 0;
    let totalCount = 0;
  
    // Flags to check if a category has projects
    let hasHtmlCssProjects = false;
    let hasReactProjects = false;
    let hasJavaScriptProjects = false;
    let hasFullStackProjects = false;
  
    projects.forEach(project => {
      // Render HTML/CSS projects
      if (project.category === 'htmlcss') {
        htmlcssContainer.innerHTML += `
          <a target="_blank" href="${project.codeUrl}">
            <img src="${project.image}" height="150px" alt="${project.name}" loading="lazy">
          </a>
        `;
        htmlCssCount++; // Increment HTML/CSS project count
        hasHtmlCssProjects = true; // Mark that html/css category has projects
      }
      
      // Render React projects
      if (project.category === 'react') {
        reactContainer.innerHTML += `
          <a target="_blank" href="${project.codeUrl}">
            <img src="${project.image}" height="150px" alt="${project.name}" loading="lazy">
          </a>
        `;
        reactCount++; // Increment React project count
        hasReactProjects = true; // Mark that react category has projects
      }
      
      // Render JavaScript projects
      if (project.category === 'javascript') {
        javascriptContainer.innerHTML += `
          <a target="_blank" href="${project.codeUrl}">
            <img src="${project.image}" height="150px" alt="${project.name}" loading="lazy">
          </a>
        `;
        javascriptCount++; // Increment JavaScript project count
        hasJavaScriptProjects = true; // Mark that javascript category has projects
      }
      
      // Render Fullstack projects
      if (project.category === 'fullstack') {
        fullstackContainer.innerHTML += `
          <a target="_blank" href="${project.codeUrl}">
            <img src="${project.image}" height="150px" alt="${project.name}" loading="lazy">
          </a>
        `;
        fullstackCount++; // Increment Fullstack project count
        hasFullStackProjects = true; // Mark that fullstack category has projects
      }
      
      // Render source code projects
      sourceCodeContainer.innerHTML += `
        <div class="container">
          <div class="project-image">
            <img src="${project.image}" alt="${project.name}" loading="lazy">
          </div>
          <div class="project-title">
            <p>${project.name}</p>
          </div>
          <div onclick="window.open('${project.codeUrl}', '_blank')" class="code-buy-now-btn">
            <p>Get Code</p>
          </div>
        </div>
      `;
      sourceCodeCount++; // Increment source code count
  
      // Render assets (if the project has assets)
      if (project.hasAssets) {
        assetsContainer.innerHTML += `
          <div class="container">
            <div class="project-image">
              <img src="${project.image}" alt="${project.name}" loading="lazy">
            </div>
            <div class="project-title">
              <p>${project.name}</p>
            </div>
            <div data-page="projectdetails" class="code-buy-now-btn">
              <p>Download Assets</p>
            </div>
          </div>
        `;
        assetsCount++; // Increment assets count
      }
    });
    
    // Calculate total project count
    totalCount = htmlCssCount + reactCount + javascriptCount + fullstackCount;
  
    // Update counters
    document.getElementById('all-project-count').textContent = totalCount;
    document.getElementById('all-sourcecode-count').textContent = sourceCodeCount;
    document.getElementById('all-projectassets-count').textContent = assetsCount;
  
    // Hide category containers if no projects
    if (!hasHtmlCssProjects) htmlcssContainer.innerHTML = ''; // Hide HTML/CSS section if no projects
    if (!hasReactProjects) reactContainer.innerHTML = ''; // Hide React section
    if (!hasJavaScriptProjects) javascriptContainer.innerHTML = ''; // Hide JavaScript section
    if (!hasFullStackProjects) fullstackContainer.innerHTML = ''; // Hide Fullstack section
    
    initializeSearchFunctionality('sourceCodeContainer', '.container');
    initializeSearchFunctionality('assetsContainer', '.container');
  }
  
  // Call the function to render the projects
  renderProjects();
  