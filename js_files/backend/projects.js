// Project List
const projects = [
  { name: "Responsive-sidebar-menu", image: "images/Responsive-sidebar-menu.png", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Landing-page1", image: "images/Landing-page1.png", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Login-page4", image: "images/Login-page4.png", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Website-with-Login-Form", image: "images/Website-with-Login-Form.png", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Login-Page3-Project", image: "images/Login-Page3.png", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Netflix-Login-Page", image: "images/Netflix-Login-Page.png", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Card-Design-1", image: "images/Card-Design-1.png", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Glass-Login-Form-Project", image: "images/Glassmorphism-Login-Form.jpg", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Login-signup-combo", image: "images/Login-signup-combo.png", codeUrl: "codes/sourcecode.html", hasAssets: false, category: "htmlcss" },
  { name: "Modern-Login-Page-Project", image: "images/Login-Page.png", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "E-commerce-Website", image: "images/E-commerce-Website.png", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Contact-Us", image: "images/Contact-Us.png", codeUrl: "codes/sourcecode.html", hasAssets: false, category: "htmlcss" },
  { name: "Multi-Step-Form", image: "images/Multi-Step-Form.png", codeUrl: "codes/sourcecode.html", hasAssets: true, category: "htmlcss" },
  { name: "Clock-JS-Project", image: "images/clock-js.png", codeUrl: "codes/sourcecode.html", hasAssets: false, category: "javascript" },
  { name: "Student-Grade-Calculator", image: "images/Student-grade-calculator.png", codeUrl: "codes/sourcecode.html", hasAssets: false, category: "javascript" }
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

  let htmlCssCount = 0, reactCount = 0, javascriptCount = 0, fullstackCount = 0;
  let sourceCodeCount = 0, assetsCount = 0, totalCount = 0;
  let hasHtmlCssProjects = false, hasReactProjects = false, hasJavaScriptProjects = false, hasFullStackProjects = false;

  projects.forEach(project => {
    if (project.category === 'htmlcss') {
      htmlcssContainer.innerHTML += `
        <a class="project-link" target="_blank" href="${project.codeUrl}" data-category="htmlcss">
          <img src="${project.image}" height="150px" alt="${project.name}" loading="lazy">
        </a>
      `;
      htmlCssCount++;
      hasHtmlCssProjects = true;
    }

    if (project.category === 'react') {
      reactContainer.innerHTML += `
        <a class="project-link" target="_blank" href="${project.codeUrl}" data-category="react">
          <img src="${project.image}" height="150px" alt="${project.name}" loading="lazy">
        </a>
      `;
      reactCount++;
      hasReactProjects = true;
    }

    if (project.category === 'javascript') {
      javascriptContainer.innerHTML += `
        <a class="project-link" target="_blank" href="${project.codeUrl}" data-category="javascript">
          <img src="${project.image}" height="150px" alt="${project.name}" loading="lazy">
        </a>
      `;
      javascriptCount++;
      hasJavaScriptProjects = true;
    }

    if (project.category === 'fullstack') {
      fullstackContainer.innerHTML += `
        <a class="project-link" target="_blank" href="${project.codeUrl}" data-category="fullstack">
          <img src="${project.image}" height="150px" alt="${project.name}" loading="lazy">
        </a>
      `;
      fullstackCount++;
      hasFullStackProjects = true;
    }

    sourceCode.innerHTML += `
      <a class="project-link" target="_blank" href="${project.codeUrl}" data-category="${project.category}">
        <div class="sourceCodeContainer">
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
      </a>
    `;
    sourceCodeCount++;

    if (project.hasAssets) {
      projectAssets.innerHTML += `
        <div class="assetsContainer">
          <div class="project-image">
            <img src="${project.image}" alt="${project.name}" loading="lazy">
          </div>
          <div class="project-title">
            <p>${project.name}</p>
          </div>
          <a href="#project-details" class="code-buy-now-btn">
            <p>Download Assets</p>
          </a>
        </div>
      `;
      assetsCount++;
    }
  });

  totalCount = htmlCssCount + reactCount + javascriptCount + fullstackCount;

  document.getElementById('all-project-count').textContent = totalCount;
  document.getElementById('all-sourcecode-count').textContent = sourceCodeCount;
  document.getElementById('all-projectassets-count').textContent = assetsCount;

  if (!hasHtmlCssProjects) htmlcssContainer.innerHTML = '';
  if (!hasReactProjects) reactContainer.innerHTML = '';
  if (!hasJavaScriptProjects) javascriptContainer.innerHTML = '';
  if (!hasFullStackProjects) fullstackContainer.innerHTML = '';

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
