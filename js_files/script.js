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

    showProjects('tailwindCSS');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('selected'));

            button.classList.add('selected');

            showProjects(button.id);
        });
    });

    const codeBuyNowBtns = document.querySelectorAll('.assetsContainer .code-buy-now-btn');

    codeBuyNowBtns.forEach(btn => {
        btn.addEventListener('click', () => {
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

document.addEventListener('DOMContentLoaded', () => {
    const showBtn = document.getElementById('socialMediaLinkBtn');
    const closeBtn = document.getElementById('socialMediaLinkCloseBtn');
    const linksContainer = document.querySelector('.links-container');
    const overlay2 = document.getElementById('overlay2');

    showBtn.addEventListener('click', () => {
        linksContainer.classList.add('active');
        linksContainer.style.display = 'grid';
        overlay2.classList.add('active');
        document.body.classList.add('no-scroll');
    });

    closeBtn.addEventListener('click', () => {
        linksContainer.classList.remove('active');
        overlay2.classList.remove('active');

        setTimeout(() => {
            document.body.classList.remove('no-scroll');
            linksContainer.style.display = 'none';
        }, 300);
    });
    
    overlay2.addEventListener('click', () => {
        linksContainer.classList.remove('active');
        overlay2.classList.remove('active');

        setTimeout(() => {
            document.body.classList.remove('no-scroll');
            linksContainer.style.display = 'none';
        }, 300);
    });

    linksContainer.style.display = 'none';
});

  

document.addEventListener('click', function(event) {
    const codeBuyBtn = event.target.closest('.assetsContainer .code-buy-now-btn');
    if (codeBuyBtn) {
        const container = codeBuyBtn.closest('.assetsContainer');
        const projectName = container.getAttribute('data-projectName');
        const projectImageSrc = container.querySelector('img').getAttribute('src');
        const projectId = container.getAttribute('data-projectId');
        const shortName = container.getAttribute('data-shortName');

        document.getElementById('projectImage').setAttribute('src', projectImageSrc);
        document.getElementById('projectDescription').textContent = projectName;

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

            const sheetUrl = 'https://script.google.com/macros/s/AKfycbynmC_8YIN1tCtroa76N04VTgwQAzASPy1Ikx_n4pBBBKSgTcnT1Gmuxss5moGgQu97/exec';
            const formData = new FormData();

            formData.append('projectName', projectName + ' - assets');
            formData.append('email', email);
            formData.append('timestamp', formatDate(new Date()));

            fetch(sheetUrl, {
                method: 'POST',
                body: formData
            }).then(response => response.text())
                .then(result => {
                    clearInterval(timerInterval);
                    timerDisplay.style.display = 'none';

                    const zipFileName = projectId + '-assets.zip';
                    const zipFileShortName = shortName + ' - Project Assets.zip';
                    const a = document.createElement('a');
                    a.href = 'Zip/assets_zip/' + zipFileName;

                    fetch(a.href, { method: 'HEAD' })
                        .then(res => {
                            if (res.ok) {
                                downloadCompleteMessage.textContent = 'Download complete';
                                a.download = zipFileShortName;
                                document.body.appendChild(a);
                                a.click();
                                document.body.removeChild(a);
                            } else {
                                downloadCompleteMessage.textContent = 'Assets not found';
                            }
                        })
                        .catch(() => {
                            downloadCompleteMessage.textContent = 'Assets not found';
                        });

                    userEmailInput.value = '';
                    setTimeout(() => {
                        downloadCompleteMessage.textContent = '';
                    }, 3000);
                })
                .catch(error => {
                    clearInterval(timerInterval);
                    timerDisplay.style.display = 'none';
                    downloadCompleteMessage.textContent = 'Error submitting form';
                    console.error('Form submission error:', error);
                });
        };
    }
});
