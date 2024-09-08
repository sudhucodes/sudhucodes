// Track which button was clicked
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
  assetsFullSpan.textContent = '';
  document.querySelector('.source-code').style.display = 'flex';
});


// When the 'downloadAssets' button is clicked
document.getElementById('downloadAssets').addEventListener('click', function () {
  const timerDisplay = document.getElementById('download-timer');
  const downloadCompleteMessage = document.getElementById('download-complete');
  const emailRequiredMessage = document.getElementById('email-required');
  const userEmailInput = document.getElementById('userEmail');
  let elapsedTime = 0;
  let timerInterval;

  // Function to update the timer display
  function updateTimer() {
    elapsedTime++;
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    timerDisplay.textContent = `Time elapsed: ${minutes}m ${seconds}s`;
  }

  // Function to format date and time
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

  // Validate email and handle download
  const email = userEmailInput.value;
  
  if (!email) {
    // Show message in the #email-required paragraph
    emailRequiredMessage.textContent = 'Please enter your email to download the assets.';
    return;
  } else if (!email.includes('@gmail.com')) {
    // Show message in the #email-required paragraph for invalid email
    emailRequiredMessage.textContent = 'Please enter a valid Gmail address.';
    return;
  } else {
    // Clear the message if email is provided and valid
    emailRequiredMessage.textContent = '';
  }

  // Determine the zip file URL based on which button was clicked
  const projectTitle = document.getElementById('projectDescription').textContent;
  let zipFileName;
  let assetsUrl;

  if (clickedButton === 'download') {
    zipFileName = projectTitle + '-assets.zip'; // Assets zip
    assetsUrl = '../../Zip/project_assets_zip/' + zipFileName;
  } else if (clickedButton === 'download-full-zip') {
    zipFileName = projectTitle + '-full.zip'; // Full zip
    assetsUrl = '../../Zip/html_projects_zip/' + zipFileName;
  } else {
    alert('Invalid download button clicked.');
    return;
  }

  // Perform an HTTP HEAD request to check if the file exists
  fetch(assetsUrl, { method: 'HEAD' })
    .then(response => {
      if (response.ok) {
        // The file exists, proceed with the download process

        // Start the timer
        elapsedTime = 0;
        timerDisplay.textContent = 'Time elapsed: 0m 0s';
        timerDisplay.style.display = 'block';
        downloadCompleteMessage.textContent = '';
        timerInterval = setInterval(updateTimer, 1000); // Update every second

        // Record to Google Sheets (placeholder URL)
        const sheetUrl = 'https://script.google.com/macros/s/AKfycbynmC_8YIN1tCtroa76N04VTgwQAzASPy1Ikx_n4pBBBKSgTcnT1Gmuxss5moGgQu97/exec'; // Replace with your Google Sheet URL
        const formData = new FormData();
        
        formData.append('projectName', projectTitle + (clickedButton === 'download' ? ' - assets' : ' - full zip')); // Append '- assets' or '- full zip'
        formData.append('email', email);
        formData.append('timestamp', formatDate(new Date())); // Use formatted date and time

        fetch(sheetUrl, {
          method: 'POST',
          body: formData
        }).then(response => response.text())
          .then(result => {
            console.log('Form submission success:', result);
            // Stop the timer
            clearInterval(timerInterval);

            // Hide the timer display after 2 seconds
            setTimeout(() => {
              timerDisplay.style.display = 'none';
            }, 3000);

            // Show the download complete message for 3 seconds
            downloadCompleteMessage.textContent = 'Download complete';
            setTimeout(() => {
              // Clear the download complete message
              downloadCompleteMessage.textContent = '';

              // Revert the div visibility back to its original state
              document.querySelector('.source-code').style.display = 'flex';
              document.querySelector('.project-details').style.display = 'none';
            }, 3000);

            // Clear the input field
            userEmailInput.value = '';

            // Trigger the file download
            const a = document.createElement('a');
            a.href = assetsUrl; 
            a.download = zipFileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          })
          .catch(error => {
            console.error('Form submission error:', error);
          });
      } else {
        // The file does not exist, show an alert
        alert('Assets not available.');
      }
    })
    .catch(error => {
      console.error('Error checking file availability:', error);
      alert('Error checking file availability.');
    });
});



  document.addEventListener('DOMContentLoaded', () => {
  const projectName = document.getElementById('projectDescription').textContent;

  fetch(`html_txt_files/${projectName.toLowerCase()}-html.txt`)
    .then(response => response.text())
    .then(data => {
      document.getElementById('htmlcode').textContent = data;
    })
    .catch(error => console.error('Error loading the file:', error));

  fetch(`html_txt_files/${projectName.toLowerCase()}-css.txt`)
    .then(response => response.text())
    .then(data => {
      document.getElementById('csscode').textContent = data;
    })
    .catch(error => console.error('Error loading the file:', error));
});

function goback() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.close();
  }
}

function opendemo() {
    const projectName = document.getElementById('projectDescription').textContent;
  window.open(`../../live_dmo/html_projects/${projectName}/index.html`, '_blank'); // Open in a new window or tab
}

function copyhtmlcode() {
    var textArea = document.getElementById("htmlcode");
    
    // Select the text to show it visually
    textArea.select();
    textArea.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text using Clipboard API
    navigator.clipboard.writeText(textArea.value).then(function() {
      var copyButton = document.querySelector('.html-btn-copy');
      copyButton.classList.add('copied');
    }).catch(function(error) {
      console.error('Failed to copy text: ', error);
    });
  }
  
  function copycsscode() {
    var textArea = document.getElementById("csscode");
  
    // Select the text to show it visually
    textArea.select();
    textArea.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text using Clipboard API
    navigator.clipboard.writeText(textArea.value).then(function() {
      var copyButton = document.querySelector('.css-btn-copy');
      copyButton.classList.add('copied');
    }).catch(function(error) {
      console.error('Failed to copy text: ', error);
    });
  }
  