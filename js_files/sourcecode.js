const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('projectId');
const project = getProjectById(projectId);
const projectName = project.name;
const shortName = project.shortName;
const category = project.category;
const availableFilesArray = project.availableFiles;
const availableFiles = availableFilesArray.join(", ");



document.getElementById('projectDescription').textContent = projectName;
document.getElementById('project-img').src = `../images/thumbnails/${projectId}.png`;


let clickedButton = '';

document.getElementById('download').addEventListener('click', function () {
  clickedButton = 'download';
  const assetsFullSpan = document.getElementById('assetsFull');
  assetsFullSpan.textContent = 'Assets';
  document.querySelector('.source-code').style.display = 'none';
  document.querySelector('.project-details').style.display = 'flex';
});

document.getElementById('download-full-zip').addEventListener('click', function () {
  clickedButton = 'download-full-zip';
  const assetsFullSpan = document.getElementById('assetsFull');
  assetsFullSpan.textContent = 'Zip';
  document.querySelector('.source-code').style.display = 'none';
  document.querySelector('.project-details').style.display = 'flex';
});

document.getElementById('close-project-details').addEventListener('click', function () {
  document.querySelector('.project-details').style.display = 'none';
  const assetsFullSpan = document.getElementById('assetsFull');
  const userEmailInput = document.getElementById('userEmail');
  const emailRequiredMessage = document.getElementById('email-required');
  userEmailInput.value = '';
  assetsFullSpan.textContent = '';
  emailRequiredMessage.textContent = '';
  document.querySelector('.source-code').style.display = 'flex';
});


document.getElementById('downloadAssets').addEventListener('click', function () {
  const timerDisplay = document.getElementById('download-timer');
  const downloadCompleteMessage = document.getElementById('download-complete');
  const emailRequiredMessage = document.getElementById('email-required');
  const userEmailInput = document.getElementById('userEmail');
  let elapsedTime = 0;
  let timerInterval;

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

  const projectTitle = document.getElementById('projectDescription').textContent;
let zipFileName;
let zipFileShortName;
let assetsUrl;

if (clickedButton === 'download') {
    zipFileName = projectId + '-assets.zip';
    zipFileShortName = shortName + ' - Project Assets.zip';
    
    // Determine the assets URL based on the category
    if (category === 'htmlcss') {
        assetsUrl = '../Zip/assets_zip/' + zipFileName;
    } else if (category === 'react') {
        assetsUrl = '../Zip/assets_zip/' + zipFileName;
    } else if (category === 'javascript') {
        assetsUrl = '../Zip/assets_zip/' + zipFileName;
    } else if (category === 'tailwindCSS') {
        assetsUrl = '../Zip/assets_zip/' + zipFileName;
    } else {
        alert('Unknown category.');
        return;
    }
} else if (clickedButton === 'download-full-zip') {
    zipFileName = projectId + '-full.zip';
    zipFileShortName = shortName + ' - Complete Project Files.zip';
    
    // Determine the assets URL based on the category
    if (category === 'htmlcss') {
        assetsUrl = '../Zip/htmlcss/' + zipFileName;
    } else if (category === 'react') {
        assetsUrl = '../Zip/react/' + zipFileName;
    } else if (category === 'javascript') {
        assetsUrl = '../Zip/javascript/' + zipFileName;
    } else if (category === 'tailwindCSS') {
        assetsUrl = '../Zip/tailwindCSS/' + zipFileName;
    } else {
        alert('Unknown category.');
        return;
    }
} else {
    alert('Invalid download button clicked.');
    return;
}

console.log('Assets URL:', assetsUrl);


  fetch(assetsUrl, { method: 'HEAD' })
    .then(response => {
      if (response.ok) {

        elapsedTime = 0;
        timerDisplay.textContent = 'Time elapsed: 0m 0s';
        timerDisplay.style.display = 'block';
        downloadCompleteMessage.textContent = '';
        timerInterval = setInterval(updateTimer, 1000);

        const sheetUrl = 'https://script.google.com/macros/s/AKfycbynmC_8YIN1tCtroa76N04VTgwQAzASPy1Ikx_n4pBBBKSgTcnT1Gmuxss5moGgQu97/exec';
        const formData = new FormData();
        
        formData.append('projectName', projectTitle + (clickedButton === 'download' ? ' - assets' : ' - full zip'));
        formData.append('email', email);
        formData.append('timestamp', formatDate(new Date()));

        fetch(sheetUrl, {
          method: 'POST',
          body: formData
        }).then(response => response.text())
          .then(result => {
            console.log('Form submission success:', result);
            clearInterval(timerInterval);

            setTimeout(() => {
              timerDisplay.style.display = 'none';
            }, 3000);

            downloadCompleteMessage.textContent = 'Download complete';
            setTimeout(() => {
              downloadCompleteMessage.textContent = '';

              document.querySelector('.source-code').style.display = 'flex';
              document.querySelector('.project-details').style.display = 'none';
            }, 3000);

            userEmailInput.value = '';

            const a = document.createElement('a');
            a.href = assetsUrl; 
            a.download = zipFileShortName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          })
          .catch(error => {
            console.error('Form submission error:', error);
          });
      } else {
        alert('Assets not available.');
      }
    })
    .catch(error => {
      console.error('Error checking file availability:', error);
      alert('Error checking file availability.');
    });
});
function goback() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.close();
  }
}

function opendemo() {

  let folderPath;
  if (category === 'htmlcss') {
      folderPath = 'htmlcss';
  } else if (category === 'javascript') {
      folderPath = 'javascript';
  } else if (category === 'react') {
      folderPath = 'react';
  } else if (category === 'tailwindCSS') {
      folderPath = 'tailwindCSS';
  } else {
      console.error('Unknown category.');
      return;
  }

  window.open(`../demo/${folderPath}/${projectId}/index.html`, '_blank');
}

const filePaths = {
    htmlcss: 'htmlcss_txt_files/',
    javascript: 'javascript_txt_files/',
    react: 'react_txt_files/',
    tailwindCSS: 'tailwindCSS_txt_files/'
};

const filePath = filePaths[category] || console.error('Unknown category.');
const fileOrder = ['html', 'css', 'js'];

function renderProjectCodeBlocks(projectId, availableFiles) {
    const container = document.getElementById('code-blocks-container');
    container.innerHTML = '';

    const sortedFiles = availableFiles.split(',')
        .map(file => file.trim())
        .filter(fileType => fileOrder.includes(fileType))
        .sort((a, b) => fileOrder.indexOf(a) - fileOrder.indexOf(b));

    sortedFiles.forEach(fileType => {
        const fileName = `${projectId}-${fileType}.txt`;
        const fileURL = `${filePath}${fileName}`;

        fetch(fileURL)
            .then(response => response.text())
            .then(codeContent => {
                createCodeBlock(container, fileType, codeContent);
            })
            .catch(error => console.error('Error fetching file:', error));
    });
}

function createCodeBlock(container, fileType, codeContent) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('code-wrapper');

    const preElem = document.createElement('pre');
    const codeElem = document.createElement('code');
    codeElem.classList.add(`language-${fileType}`);
    codeElem.textContent = codeContent;
    preElem.appendChild(codeElem);
    wrapper.appendChild(preElem);
    
    Prism.highlightElement(codeElem);

    const copyBtn = createCopyButton(codeElem.textContent);
    wrapper.appendChild(copyBtn);
    
    container.appendChild(wrapper);
}

function createCopyButton(code) {
    const copyBtn = document.createElement('button');
    copyBtn.classList.add('copy-btn');
    copyBtn.textContent = ' Copy ';
    
    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-copy');
    copyBtn.appendChild(icon);
    
    copyBtn.onclick = () => copyCodeToClipboard(code, copyBtn, icon);
    return copyBtn;
}

function copyCodeToClipboard(code, button, icon) {
    navigator.clipboard.writeText(code).then(() => {
        button.firstChild.textContent = 'Copied';
        icon.style.display = 'none';
        button.disabled = true;

        setTimeout(() => {
            button.firstChild.textContent = ' Copy ';
            icon.style.display = 'inline';
            button.disabled = false;
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy code:', err);
    });
}

renderProjectCodeBlocks(projectId, availableFiles);