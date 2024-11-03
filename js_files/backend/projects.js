// Project List
const projects = [
  {"name": "Responsive Customer Review and Highlight Testimonial Card - TailwindCSS", "shortName": "Testimonial Card - TailwindCSS", "projectId": "TAILWINDCSS-TC-T-20241103-66CAO", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Dynamic Navbar with Gradient Offer and Navigation Links - HTML&CSS", "shortName": "Dynamic Navbar - HTML&CSS", "projectId": "HTMLCSS-DN-H-20241103-W6WFQ", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "htmlcss", "availableFiles": ["html", "css"]},
  {"name": "Professional Card Design Highlighting Beginner Plans TailwindCSS", "shortName": "Card Design - TailwindCSS", "projectId": "TAILWINDCSS-CD-T-20241013-KR0ML", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Engaging Responsive Feature Presentation and Highlight Card - TailwindCSS", "shortName": "Feature Presentation and Highlight Card - TailwindCSS", "projectId": "TAILWINDCSS-FPAHC-T-20241013-REWOI", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Dark Mode Signup Form Design using TailwindCSS", "shortName": "Signup Form Design - TailwindCSS", "projectId": "TAILWINDCSS-SFD-T-20241012-W3OPO", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Gradient-Themed Profile Card with Social Media Links - TailwindCSS", "shortName": "Profile Card - TailwindCSS", "projectId": "TAILWINDCSS-PC-T-20241011-4C45Y", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Step-by-Step Instagram Profile Completion Cards - TailwindCSS Design", "shortName": "Profile Completion Cards - TailwindCSS", "projectId": "TAILWINDCSS-PCC-T-20241010-M4PUF", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Modern OTP Verification Page with Resend Option - TailwindCSS", "shortName": "OTP Verification Page - TailwindCSS", "projectId": "TAILWINDCSS-OVP-T-20241009-J7UZX", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Login page with Email Authentication and Social Media Sign-In", "shortName": "Login page - HTML&CSS", "projectId": "HTMLCSS-LP-H-20241009-CHN3V", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "htmlcss", "availableFiles": ["html", "css"]},
  {"name": "Portfolio Website with Smooth Scrolling Navbar and Hero Section - TailwindCSS", "shortName": "Portfolio Website - TailwindCSS", "projectId": "TAILWINDCSS-PW-T-20241008-CR02Z", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Professional Contact Us Section with Social Links and Clean UI TailwindCSS", "shortName": "Contact Us Section - TailwindCSS", "projectId": "TAILWINDCSS-CUS-T-20241007-OGEBD", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Responsive Footer Design with TailwindCSS for a Developer Website", "shortName": "Footer Design - TailwindCSS", "projectId": "TAILWINDCSS-FD-T-20241006-1YGAR", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Simple Sign-Up Form with Clean Design with TailwindCSS", "shortName": "Sign-Up Form - TailwindCSS", "projectId": "TAILWINDCSS-SF-T-20241006-QW5C9", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Interactive Sign-In Form with Smooth Label Animation and TailwindCSS", "shortName": "Sign-In Form - TailwindCSS", "projectId": "TAILWINDCSS-SF-T-20241006-6I05Y", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Interactive Profile Card with Smooth Hover Transitions Using TailwindCSS", "shortName": "Profile Card Transitions - TailwindCSS", "projectId": "TAILWINDCSS-PCT-T-20241005-1PRUR", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Modern and User-Friendly Password Reset UI Built with TailwindCSS", "shortName": "Password Reset UI - TailwindCSS", "projectId": "TAILWINDCSS-PRU-T-20241005-HMJUC", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Elegant Social Media Icon Design with Fluid Animations in TailwindCSS", "shortName": "Social Media Icon Design - TailwindCSS", "projectId": "TAILWINDCSS-SMID-T-20241004-63RPF", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Stylish OTP Verification with Gradient Hover Effects Using TailwindCSS", "shortName": "OTP Verification Design - TailwindCSS", "projectId": "TAILWINDCSS-OVD-T-20241004-WHB3V", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Sleek and Dynamic Login Design Crafted with TailwindCSS", "shortName": "Login Page Design - TailwindCSS", "projectId": "TAILWINDCSS-LPD-T-20241004-4JWYL", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Smartest Mind Reader Project using JAVASCRIPT", "shortName": "Mind Reader - JavaScript", "projectId": "JAVASCRIPT-MR-J-20241004-6DKOE", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "javascript", "availableFiles": ["html", "css"]},
  {"name": "An Engaging and Interactive Weather Information Card Design Using Tailwind CSS", "shortName": "Weather Information Card - TailwindCSS", "projectId": "TAILWINDCSS-WIC-T-20241003-JRFON", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Interactive User List Component with Profiles Tailwind CSS", "shortName": "User List - TailwindCSS", "projectId": "TAILWINDCSS-UL-T-20241003-CXMJG", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Dynamic FAQ Interface - Smooth Toggle Animations for Web Development Queries", "shortName": "FAQ Interface - TailwindCSS", "projectId": "TAILWINDCSS-FI-T-20241003-X354Q", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Premium Subscription Pricing Card with Tailwind CSS and Feature List", "shortName": "Pricing Card - TailwindCSS", "projectId": "TAILWINDCSS-PC-T-20241003-PD8WO", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "A Professional and User-Friendly Review Section Design Using TailwindCSS", "shortName": "Review section - TailwindCSS", "projectId": "TAILWINDCSS-RS-T-20241002-FCKLI", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Hostinger Domain Plan Pricing Table Clone - Using TailwindCSS", "shortName": "Pricing Table - TailwindCSS", "projectId": "TAILWINDCSS-PT-T-20241002-KV8UN", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Advanced Payment Form with TailwindCSS & Smooth User Interface", "shortName": "TailwindCSS Payment Interface Form", "projectId": "TAILWINDCSS-TPIF-20241001-RUWO5", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Web Developer Profile Card with TailwindCSS & Responsive Design", "shortName": "Developer Card - TailwindCSS", "projectId": "TAILWINDCSS-DC-T-20241001-H0YNH", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Premium Signup Page with TailwindCSS & Gradient Background", "shortName": "Signup Page - TailwindCSS", "projectId": "TAILWINDCSS-SP-T-20241001-2EVB6", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Premium Login Page with TailwindCSS & Gradient Background", "shortName": "Login Page - TailwindCSS", "projectId": "TAILWINDCSS-LP-T-20241001-C6UL0", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Student Grade Calculator Using HTML, CSS & JavaScript", "shortName": "Grade Calculator - HTML/CSS/JS", "projectId": "JAVASCRIPT-GC-H-20240930-QOFT3", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "javascript", "availableFiles": ["html", "css"]},
  {"name": "Dark-Themed Clock Built with HTML, CSS & JavaScript", "shortName": "Clock - HTML/CSS/JS", "projectId": "JAVASCRIPT-C-H-20240930-P4ZFU", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "javascript", "availableFiles": ["html", "css"]},
  {"name": "Modern Login Form with Glassmorphism Effect & Background Image (TailwindCSS)", "shortName": "Login Form - TailwindCSS", "projectId": "TAILWINDCSS-LF-T-20240930-3V1XT", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "tailwindCSS", "availableFiles": ["html"]},
  {"name": "Stylish Registration Form Design with Responsive Layout (HTML & CSS)", "shortName": "Registration Form - HTML/CSS", "projectId": "HTMLCSS-RF-H-20240930-RH0C7", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "htmlcss", "availableFiles": ["html", "css"]},
  {"name": "Realistic Visa Credit Card Design (HTML & CSS)", "shortName": "Visa Card Design - HTML/CSS", "projectId": "HTMLCSS-VCD-H-20240930-OV9SZ", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "htmlcss", "availableFiles": ["html", "css"]},
  {"name": "Dark-Themed Login Page with Social Media Authentication (HTML & CSS)", "shortName": "Dark Login Page - HTML/CSS", "projectId": "HTMLCSS-DLP-H-20240930-LNKR8", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "htmlcss", "availableFiles": ["html", "css"]},
  {"name": "Login & Signup Page Combo with Smooth Transition (HTML, CSS & JavaScript)", "shortName": "Login & Signup - HTML/CSS/JS", "projectId": "HTMLCSS-L&S-H-20240930-NW31T", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "htmlcss", "availableFiles": ["html", "css"]},
  {"name": "Calculator UI Design with Modern Aesthetics (HTML & CSS)", "shortName": "Calculator UI - HTML/CSS", "projectId": "HTMLCSS-CU-H-20240930-L8367", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "htmlcss", "availableFiles": ["html", "css"]},
  {"name": "YouTube Clone Project with Modern UI and Functionality (HTML, CSS & JavaScript)", "shortName": "YouTube Clone - HTML/CSS/JS", "projectId": "HTMLCSS-YC-H-20240930-ZRJCL", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "htmlcss", "availableFiles": ["html", "css"]},
  {"name": "Interactive Social Media Icons with Hover Animation (HTML & CSS)", "shortName": "Social Media Links - HTML/CSS", "projectId": "HTMLCSS-SML-H-20240930-5RGN6", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "htmlcss", "availableFiles": ["html", "css"]},
  {"name": "Responsive Sidebar Menu with Smooth Animations (HTML & CSS)", "shortName": "Responsive Sidebar - HTML/CSS", "projectId": "HTMLCSS-RS-H-20240930-VDE2V", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "htmlcss", "availableFiles": ["html", "css"]},
  {"name": "Modern Landing Page with Stylish Hero Section and Navbar (HTML & CSS)", "shortName": "Modern Landing Page - HTML/CSS", "projectId": "HTMLCSS-MLP-H-20240930-UUTKM", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "htmlcss", "availableFiles": ["html", "css"]},
  {"name": "Dark-Themed Professional Login Page Clone Inspired by Creatica (HTML & CSS)", "shortName": "Creatica Dark Login - HTML/CSS", "projectId": "HTMLCSS-CDL-H-20240930-D5L7N", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "htmlcss", "availableFiles": ["html", "css"]},
  {"name": "Responsive Hero Section with Popup Login Form Integration (HTML, CSS & JavaScript)", "shortName": "Hero Section & Login - HTML/CSS/JS", "projectId": "HTMLCSS-HS&L-H-20240930-6F8K4", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "htmlcss", "availableFiles": ["html", "css"]},
  {"name": "Light-Themed Login Page with User Profile Display (HTML & CSS)", "shortName": "Login Page with Profile - HTML/CSS", "projectId": "HTMLCSS-LPWP-H-20240930-C79MM", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "htmlcss", "availableFiles": ["html", "css"]},
  {"name": "Netflix Login Page Clone with HTML & CSS", "shortName": "Netflix Login Clone - HTML/CSS", "projectId": "HTMLCSS-NLC-H-20240930-V5SRI", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "htmlcss", "availableFiles": ["html", "css"]},
  {"name": "Interactive Card Design with Hover Effect (HTML & CSS)", "shortName": "Hover Effect Card - HTML/CSS", "projectId": "HTMLCSS-HEC-H-20240929-U0973", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "htmlcss", "availableFiles": ["html", "css"]},
  {"name": "Stylish Login Form with Glassmorphism and Blur Effect (HTML & CSS)", "shortName": "Login page Glassmorphism - HTML/CSS", "projectId": "HTMLCSS-LPG-H-20240929-6NY0Q", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "htmlcss", "availableFiles": ["html", "css"]},
  {"name": "Dynamic Login & Signup Page with Slide Animation (HTML & CSS)", "shortName": "Login & Signup - HTML/CSS", "projectId": "HTMLCSS-L&S-H-20240929-1KRU1", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "htmlcss", "availableFiles": ["html", "css"]},
  {"name": "Sleek Modern Login Page with Social Media Authentication", "shortName": "Modern login page - HTML/CSS", "projectId": "HTMLCSS-MLP-H-20240929-Q49CZ", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "htmlcss", "availableFiles": ["html", "css"]},
  {"name": "E-commerce Red Store: A Comprehensive HTML & CSS Website", "shortName": "E-commerce Red Store - HTML/CSS", "projectId": "HTMLCSS-ERS-H-20240929-OYIA8", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "htmlcss", "availableFiles": ["html", "css"], "creatorName": "GreatStack"},
  {"name": "Contact Us Form with HTML and CSS - Responsive Design", "shortName": "Contact Us - HTML/CSS", "projectId": "HTMLCSS-CU-H-20240929-5C599", "codeUrl": "codes/sourcecode.html", "hasAssets": false, "category": "htmlcss", "availableFiles": ["html", "css"], "creatorName": "GreatStack"},
  {"name": "Responsive Multi-Step Signup Form with HTML, CSS, and JavaScript", "shortName": "Multi-Step Signup - HTML/CSS", "projectId": "HTMLCSS-MSF-20240929-7K8XM", "codeUrl": "codes/sourcecode.html", "hasAssets": true, "category": "htmlcss", "availableFiles": ["html", "css"], "creatorName": "GreatStack"}
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
  const tailwindCSSContainer = document.getElementById('tailwindCSSProjectsRender');

  const categories = {
    htmlcss: { container: htmlcssContainer, count: 0 },
    react: { container: reactContainer, count: 0 },
    javascript: { container: javascriptContainer, count: 0 },
    tailwindCSS: { container: tailwindCSSContainer, count: 0 },
  };

  projects.forEach(project => {
    const projectImage = `images/thumbnails/${project.projectId}.png`;
    const creatorName = project.creatorName ? project.creatorName : 'SudhuCodes';

   
    if (categories[project.category]) {
      categories[project.category].container.innerHTML += `
        <a class="project-link" target="_blank" href="${project.codeUrl}" data-category="${project.category}" data-projectId="${project.projectId}" data-shortName="${project.shortName}" data-projectName="${project.name}" data-availableFiles="${project.availableFiles}">
          <img src="${projectImage}" height="150px" alt="${project.shortName}" loading="lazy">
          <div class="creator-name">Made by ${creatorName}</div>
        </a>
      `;
      categories[project.category].count++;
    }

    
    sourceCode.innerHTML += `
      <a class="project-link" target="_blank" href="${project.codeUrl}" data-category="${project.category}" data-projectId="${project.projectId}" data-shortName="${project.shortName}" data-projectName="${project.name}" data-availableFiles="${project.availableFiles}">
        <div class="sourceCodeContainer">
          <div class="project-image">
            <img src="${projectImage}" alt="${project.shortName}" loading="lazy">
          </div>
          <div class="project-title">
            <p>${project.name}</p>
          </div>
          <div class="code-buy-now-btn">
            <p>Get Code</p>
          </div>
        </div>
      </a>
    `;

    
    if (project.hasAssets) {
      projectAssets.innerHTML += `
        <div class="assetsContainer" data-projectId="${project.projectId}" data-shortName="${project.shortName}" data-projectName="${project.name}">
          <div class="project-image">
            <img src="${projectImage}" alt="${project.shortName}" loading="lazy">
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
      const shortName = this.getAttribute('data-shortName');
      const projectName = this.getAttribute('data-projectName');
      const availableFiles = this.getAttribute('data-availableFiles');
      const projectId = this.getAttribute('data-projectId');
      const projectImg = this.querySelector('img').src;

      localStorage.setItem('clickedProjectCategory', category);
      localStorage.setItem('shortName', shortName);
      localStorage.setItem('projectId', projectId);
      localStorage.setItem('projectName', projectName);
      localStorage.setItem('projectImg', projectImg);
      localStorage.setItem('availableFiles', availableFiles);

      if (this.target === "_blank") {
        window.open(this.href, '_blank');
      } else {
        window.location.href = this.href;
      }
    });
  });
}

const projectDisplay = document.getElementById("projectDisplay");
let currentProjectIndex = 0;

function showProject() {
    const currentProject = projects[currentProjectIndex];
    const existingText = projectDisplay.innerText;

    if (existingText) {
        projectDisplay.classList.add("fade-out");
        setTimeout(() => {
            projectDisplay.innerText = currentProject.name;
            projectDisplay.classList.remove("fade-out");
            projectDisplay.classList.add("fade-in");
        }, 500);
    } else {
        projectDisplay.innerText = currentProject.name;
        projectDisplay.classList.add("fade-in");
    }
    currentProjectIndex = (currentProjectIndex < 3) ? currentProjectIndex + 1 : 0;
    setTimeout(() => {
        projectDisplay.classList.remove("fade-in");
        showProject();
    }, 3000);
}

showProject();
renderProjects();