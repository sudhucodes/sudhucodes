// Project List
const projects = [
  { name: "Calculator-UI-design", codeUrl: "codes/sourcecode.html", hasAssets: false, category: "htmlcss" },
  { name: "YouTube-clone-full-Responsive", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Social-media-links-button", codeUrl: "codes/sourcecode.html", hasAssets: false, category: "htmlcss" },
  { name: "Responsive-sidebar-menu", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Landing-page1", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Login-page4", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Website-with-Login-Form", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Login-Page3-Project", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Netflix-Login-Page", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Card-Design-1", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Glass-Login-Form-Project", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Login-signup-combo", codeUrl: "codes/sourcecode.html", hasAssets: false, category: "htmlcss" },
  { name: "Modern-Login-Page-Project", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "E-commerce-Website", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Contact-Us", codeUrl: "codes/sourcecode.html", hasAssets: false, category: "htmlcss" },
  { name: "Multi-Step-Form", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Clock-JS-Project", codeUrl: "codes/sourcecode.html", hasAssets: false, category: "javascript" },
  { name: "Student-Grade-Calculator", codeUrl: "codes/sourcecode.html", hasAssets: false, category: "javascript" }
];
function initializeSearchFunctionality(containerId, containerSelector) {
  const searchBox = document.querySelector(`#${containerId} .search-box`);
  if (!searchBox) return;

  const searchInput = searchBox.querySelector('input[type="text"]');
  const crossIcon = searchBox.querySelector('.cross-icon');
  const projectContainers = document.querySelectorAll(`#${containerId} ${containerSelector}`);

  searchInput.addEventListener('input', () => {
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

  crossIcon.addEventListener('click', () => {
    searchInput.value = '';
    crossIcon.style.visibility = 'hidden';
    crossIcon.style.opacity = '0';
    projectContainers.forEach(container => container.style.display = 'flex');
  });
}

function renderProjects() {
  const htmlcssContainer = document.getElementById('htmlCssProjectsRender');
  const sourceCode = document.getElementById('source-code');
  const projectAssets = document.getElementById('project-assets');
  const reactContainer = document.getElementById('reactJsProjectsRender');
  const javascriptContainer = document.getElementById('javaScriptProjectsRender');
  const fullstackContainer = document.getElementById('fullStackProjectsRender');

  const categories = {
    htmlcss: { container: htmlcssContainer, count: 0 },
    react: { container: reactContainer, count: 0 },
    javascript: { container: javascriptContainer, count: 0 },
    fullstack: { container: fullstackContainer, count: 0 },
  };

  projects.forEach(project => {
    const projectImage = `images/${project.name}.png`;

   
    if (categories[project.category]) {
      categories[project.category].container.innerHTML += `
        <a class="project-link" target="_blank" href="${project.codeUrl}" data-category="${project.category}">
          <img src="${projectImage}" height="150px" alt="${project.name}" loading="lazy">
        </a>
      `;
      categories[project.category].count++;
    }

    
    sourceCode.innerHTML += `
      <a class="project-link" target="_blank" href="${project.codeUrl}" data-category="${project.category}">
        <div class="sourceCodeContainer">
          <div class="project-image">
            <img src="${projectImage}" alt="${project.name}" loading="lazy">
          </div>
          <div class="project-title">
            <p>${project.name}</p>
          </div>
          <div onclick="window.open('${project.codeUrl}', '_blank')" class="code-buy-now-btn">
            <p>Get Code</p>
          </div>
        </div>
      </a>
    `;

    
    if (project.hasAssets) {
      projectAssets.innerHTML += `
        <div class="assetsContainer">
          <div class="project-image">
            <img src="${projectImage}" alt="${project.name}" loading="lazy">
          </div>
          <div class="project-title">
            <p>${project.name}</p>
          </div>
          <a href="#project-details" class="code-buy-now-btn">
            <p>Download Assets</p>
          </a>
        </div>
      `;
    }
  });

  
  const totalCounts = Object.values(categories).reduce((acc, cat) => acc + cat.count, 0);
  document.getElementById('all-project-count').textContent = totalCounts;
  document.getElementById('all-sourcecode-count').textContent = projects.length; // Total source codes
  document.getElementById('all-projectassets-count').textContent = projects.filter(p => p.hasAssets).length; // Count of assets

  initializeProjectLinkClick();
  initializeSearchFunctionality('source-code', '.sourceCodeContainer');
  initializeSearchFunctionality('project-assets', '.assetsContainer');
}

function initializeProjectLinkClick() {
  const projectLinks = document.querySelectorAll('.project-link');

  projectLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const category = this.getAttribute('data-category');
      const projectImg = this.querySelector('img').src;
      const projectName = this.querySelector('img').alt;

      localStorage.setItem('clickedProjectCategory', category);
      localStorage.setItem('projectName', projectName);
      localStorage.setItem('projectImg', projectImg);

      if (this.target === "_blank") {
        window.open(this.href, '_blank');
      } else {
        window.location.href = this.href;
      }
    });
  });
}

renderProjects();
