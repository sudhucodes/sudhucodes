document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links ul li a, .assetsContainer .code-buy-now-btn');
    const sections = document.querySelectorAll('.content-section');

    const showSection = id => {
        sections.forEach(section => section.classList.toggle('active-section', section.id === id));
    };

    const setActiveLink = targetSection => {
        navLinks.forEach(link => link.parentElement.classList.toggle('active', link.getAttribute('href').substring(1) === targetSection));
    };

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetSection = link.getAttribute('href').substring(1);
            showSection(targetSection);
            setActiveLink(targetSection);
            history.pushState(null, '', `#${targetSection}`);
        });
    });

    window.addEventListener('popstate', () => {
        const currentHash = window.location.hash.substring(1);
        if (currentHash) {
            showSection(currentHash);
            setActiveLink(currentHash);
        }
    });

    // Load initial section based on URL hash
    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
        showSection(initialHash);
        setActiveLink(initialHash);
    }

    // Project Button Handling
    const buttons = document.querySelectorAll('.project-laung button');
    const projects = document.querySelectorAll('.project-mini-page');

    const showProjects = id => {
        projects.forEach(project => project.classList.toggle('active', project.id === `${id}Projects`));
    };

    // Show the HTML & CSS projects by default
    showProjects('htmlCss');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('selected'));

            button.classList.add('selected');

            showProjects(button.id);
        });
    });

    // Handling code-buy-now-btn clicks
    const codeBuyNowBtns = document.querySelectorAll('.assetsContainer .code-buy-now-btn');

    codeBuyNowBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Add active class to the third list item in the navigation
            const thirdNavItem = document.querySelector('.nav-links ul li:nth-child(5)');
            if (thirdNavItem) {
                thirdNavItem.classList.add('active');
            }
        });
    });
});

const toggleButton = document.getElementById('toggle-button');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', function() {
  navLinks.classList.toggle('active');
  toggleButton.classList.toggle('active');
});
function closeNav() {
    navLinks.classList.add('active');
    toggleButton.classList.add('active');
}

document.addEventListener('click', function(event) {
    const codeBuyBtn = event.target.closest('.assetsContainer .code-buy-now-btn');
    if (codeBuyBtn) {
        const container = codeBuyBtn.closest('.assetsContainer');
        const projectTitle = container.querySelector('.project-title p').textContent;
        const projectImageSrc = container.querySelector('img').getAttribute('src');

        document.getElementById('projectImage').setAttribute('src', projectImageSrc);
        document.getElementById('projectDescription').textContent = projectTitle;

        let timerInterval;
        const timerDisplay = document.getElementById('download-timer');
        const downloadCompleteMessage = document.getElementById('download-complete');
        const emailRequiredMessage = document.getElementById('email-required');
        const userEmailInput = document.getElementById('userEmail');
        let elapsedTime = 0;

        function updateTimer() {
            elapsedTime++;
            const minutes = Math.floor(elapsedTime / 60);
            const seconds = elapsedTime % 60;
            timerDisplay.textContent = `Time elapsed: ${minutes}m ${seconds}s`;
        }

        function formatDate(date) {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
        }

        document.getElementById('downloadAssets').onclick = function() {
            const email = userEmailInput.value;

            if (!email) {
                emailRequiredMessage.textContent = 'Please enter your email to download the assets.';
                return;
            } else if (!email.includes('@gmail.com')) {
                emailRequiredMessage.textContent = 'Please enter a valid Gmail address.';
                return;
            } else {
                emailRequiredMessage.textContent = '';
            }

            elapsedTime = 0;
            timerDisplay.textContent = 'Time elapsed: 0m 0s';
            timerDisplay.style.display = 'block';
            downloadCompleteMessage.textContent = '';

            timerInterval = setInterval(updateTimer, 1000);

            console.log('Project Title:', projectTitle);
            console.log('Email:', email);

            const sheetUrl = 'https://script.google.com/macros/s/AKfycbynmC_8YIN1tCtroa76N04VTgwQAzASPy1Ikx_n4pBBBKSgTcnT1Gmuxss5moGgQu97/exec';
            const formData = new FormData();

            formData.append('projectName', projectTitle + ' - assets');
            formData.append('email', email);
            formData.append('timestamp', formatDate(new Date()));

            fetch(sheetUrl, {
                method: 'POST',
                body: formData
            }).then(response => response.text())
                .then(result => {
                    console.log('Form submission success:', result);

                    clearInterval(timerInterval);
                    timerDisplay.style.display = 'none';
                    downloadCompleteMessage.textContent = 'Download complete';

                    userEmailInput.value = '';

                    const zipFileName = projectTitle + '-assets.zip';
                    const a = document.createElement('a');
                    a.href = 'Zip/project_assets_zip/' + zipFileName;
                    a.download = zipFileName;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);

                    setTimeout(() => {
                        downloadCompleteMessage.textContent = '';
                    }, 3000);
                })
                .catch(error => {
                    console.error('Form submission error:', error);
                });
        };
    }
});