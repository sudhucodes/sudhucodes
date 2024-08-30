const questionsByLevel = {
    1: [
        { question: "What is the correct HTML tag for the largest heading?", options: ["&lt;h1&gt;", "&lt;h6&gt;", "&lt;heading&gt;", "&lt;head&gt;"], correct: 0 },
        { question: "Which HTML element is used to specify a footer?", options: ["&lt;footer&gt;", "&lt;bottom&gt;", "&lt;end&gt;", "&lt;foot&gt;"], correct: 0 },
        { question: "Which attribute specifies the destination of a link?", options: ["dest", "href", "link", "path"], correct: 1 },
        { question: "Which attribute is used for image alt text?", options: ["title", "alt", "src", "desc"], correct: 1 },
        { question: "What is the correct HTML tag for an inline frame?", options: ["&lt;iframe&gt;", "&lt;frame&gt;", "&lt;embed&gt;", "&lt;object&gt;"], correct: 0 },
        { question: "Which attribute defines inline styles?", options: ["class", "style", "id", "inline"], correct: 1 },
        { question: "Which HTML5 tag is used for navigation?", options: ["&lt;nav&gt;", "&lt;menu&gt;", "&lt;links&gt;", "&lt;navigation&gt;"], correct: 0 },
        { question: "Which tag is used for audio files?", options: ["&lt;audio&gt;", "&lt;sound&gt;", "&lt;music&gt;", "&lt;voice&gt;"], correct: 0 },
        { question: "Which is not a self-closing tag?", options: ["&lt;img&gt;", "&lt;br&gt;", "&lt;p&gt;", "&lt;hr&gt;"], correct: 2 },
        { question: "Which attribute opens a link in a new tab?", options: ["target", "new", "rel", "link"], correct: 0 },
        { question: "Which element is not semantic?", options: ["&lt;article&gt;", "&lt;section&gt;", "&lt;div&gt;", "&lt;header&gt;"], correct: 2 },
        { question: "Which attribute makes an input required?", options: ["required", "validate", "mandatory", "compulsory"], correct: 0 },
        { question: "Which tag creates a drop-down list?", options: ["&lt;select&gt;", "&lt;list&gt;", "&lt;dropdown&gt;", "&lt;menu&gt;"], correct: 0 },
        { question: "Which attribute merges table cells horizontally?", options: ["colspan", "rowspan", "merge", "colmerge"], correct: 0 },
        { question: "Which tag defines the main content?", options: ["&lt;main&gt;", "&lt;body&gt;", "&lt;content&gt;", "&lt;primary&gt;"], correct: 0 }
    ],
    2: [
        { question: "Which HTML element is used to embed SVG graphics?", options: ["&lt;svg&gt;", "&lt;embed&gt;", "&lt;object&gt;", "&lt;graphic&gt;"], correct: 0 },
        { question: "Which attribute is used to define a video source in HTML5?", options: ["src", "source", "video-src", "media"], correct: 1 },
        { question: "Which HTML tag is used to create a form control that lets users enter text?", options: ["&lt;input&gt;", "&lt;textarea&gt;", "&lt;textfield&gt;", "&lt;textbox&gt;"], correct: 1 },
        { question: "Which HTML5 attribute can be used to specify that an input field is a number?", options: ["type='number'", "number='true'", "data-type='number'", "inputtype='number'"], correct: 0 },
        { question: "What is the default value of the 'position' property in CSS?", options: ["static", "relative", "absolute", "fixed"], correct: 0 },
        { question: "Which CSS property is used to change the font of an element?", options: ["font-family", "font-style", "font-weight", "text-font"], correct: 0 },
        { question: "Which CSS selector is used to target the first child element of its parent?", options: [":first-child", ":nth-child(1)", ":child(1)", ":first-of-type"], correct: 0 },
        { question: "Which CSS property is used to change the text color of an element?", options: ["color", "text-color", "font-color", "background-color"], correct: 0 },
        { question: "Which attribute is used to specify the maximum length of an input field in HTML5?", options: ["maxlength", "length", "max", "limit"], correct: 0 },
        { question: "What is the purpose of the 'data-' attribute in HTML?", options: ["To store custom data", "To define styles", "To create forms", "To embed scripts"], correct: 0 },
        { question: "Which CSS property controls the spacing between lines of text?", options: ["line-height", "text-spacing", "letter-spacing", "word-spacing"], correct: 0 },
        { question: "Which HTML tag is used to define an unordered list?", options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;list&gt;", "&lt;dl&gt;"], correct: 0 },
        { question: "Which CSS pseudo-class is used to select elements when the user mouses over them?", options: [":hover", ":focus", ":active", ":visited"], correct: 0 },
        { question: "Which HTML tag defines a section in a document?", options: ["&lt;section&gt;", "&lt;div&gt;", "&lt;article&gt;", "&lt;group&gt;"], correct: 0 },
        { question: "Which property is used to set the width of an element's border in CSS?", options: ["border-width", "border-size", "border-thickness", "border-line"], correct: 0 }
    ]
};


let selectedLevel = 1; // Default level
let currentQuestion = 0;
let selectedOptions = Array(20).fill(-1); // Adjust the size based on the number of questions per level
let userName = '';

function startQuiz() {
    console.log('Start Quiz button clicked');
    userName = document.getElementById('userNameInput').value;
    selectedLevel = parseInt(document.getElementById('levelSelect').value);

    console.log('User name:', userName);
    if (userName.trim() === '') {
        alert('Please enter your name to start the quiz.');
        return;
    }

    document.querySelector('.start-container').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
    document.querySelector('.navbar').style.display = 'flex';

    // Load questions based on the selected level
    questions = questionsByLevel[selectedLevel];

    selectedOptions = Array(questions.length).fill(-1);
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const quizContainer = document.getElementById('quiz');
    const question = questions[currentQuestion];
    const totalQuestions = questions.length;
    const attemptedQuestions = selectedOptions.filter(option => option !== -1).length;

    quizContainer.innerHTML = `
        <div class="question-info">
            Question ${currentQuestion + 1}/${totalQuestions} (Attempted: ${attemptedQuestions})
        </div>
        <div class="question">${question.question}</div>
        <ul class="options">
            ${question.options.map((option, index) => 
                `<li class="${selectedOptions[currentQuestion] === index ? 'selected' : ''}" onclick="selectOption(${index})">${option}</li>`
            ).join('')}
        </ul>
    `;

    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').style.display = currentQuestion === questions.length - 1 ? 'none' : 'inline-block';
    document.getElementById('submitBtn').style.display = currentQuestion === questions.length - 1 ? 'inline-block' : 'none';
}

let timerDuration = 15 * 60; // 15 minutes in seconds
let timerInterval;

function startTimer() {
    const timerValueElement = document.getElementById('timerValue');

    timerInterval = setInterval(() => {
        if (timerDuration > 0) {
            timerDuration--;
            const minutes = Math.floor(timerDuration / 60);
            const seconds = timerDuration % 60;
            timerValueElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        } else {
            clearInterval(timerInterval);
            showTimeoutMessage();
        }
    }, 1000); // Update every second
}

function showTimeoutMessage() {
    document.querySelector('.quiz-container').style.display = 'none';
    document.querySelector('.navigation-buttons').style.display = 'none';
    document.querySelector('.navbar').style.display = 'none';
    document.getElementById('timeoutMessage').style.display = 'flex';
}

function restartQuiz() {
    location.reload(); // Refresh the page
}


function selectOption(index) {
    selectedOptions[currentQuestion] = index;
    loadQuestion();
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function showResults() {
    let score = 0;
    let attempted = 0;
    let incorrect = 0;
    let skipped = 0;
    const details = [];
    
    // Get the selected level from the dropdown
    const selectedLevel = document.getElementById('levelSelect').value;

    for (let i = 0; i < questions.length; i++) {
        if (selectedOptions[i] !== -1) {
            attempted++;
            if (selectedOptions[i] === questions[i].correct) {
                score++;
                details.push({
                    question: questions[i].question,
                    status: 'correct'
                });
            } else {
                incorrect++;
                details.push({
                    question: questions[i].question,
                    status: 'incorrect'
                });
            }
        } else {
            skipped++;
            details.push({
                question: questions[i].question,
                status: 'skipped'
            });
        }
    }

    const percentage = (score / questions.length) * 100;
    let feedback = '';
    let certificateGenerated = false;

    if (percentage < 50) {
        feedback = 'Very Bad. Improve Yourself! <br>';
    } else if (percentage >= 50 && percentage < 75) {
        feedback = 'Average. Keep Improving! <br>';
    } else {
        feedback = 'Congratulations!';
        generateCertificate();
        certificateGenerated = true;
    }

    document.querySelector('.quiz-container').style.display = 'none';
    document.querySelector('.navigation-buttons').style.display = 'none';
    document.getElementById('resultCertificateContainer').style.display = 'block';

    const resultElement = document.getElementById('results');
    if (resultElement) {
        resultElement.innerHTML = `
            <p>Your Score: ${percentage.toFixed(2)}%</p>
            <p>${feedback} ${userName}</p>
        `;
    }

    const certificateContainer = document.getElementById('certificateContainer');
    const downloadCertificateButton = document.getElementById('downloadCertificateButton');

    if (certificateGenerated) {
        if (certificateContainer) {
            certificateContainer.style.display = 'block';
        }
        if (downloadCertificateButton) {
            downloadCertificateButton.style.display = 'inline-block';
        }
    } else {
        if (certificateContainer) {
            certificateContainer.style.display = 'none';
        }
        if (downloadCertificateButton) {
            downloadCertificateButton.style.display = 'none';
        }
    }

    const formUrl = 'https://script.google.com/macros/s/AKfycbwlxbO-eMnpn97XPKulL5Sw4Dlnjz2yb9qPkYKkdtfLGB3vSW8UKxbmNH3Fd-UgY0EiqA/exec';
    const formData = new FormData();
    
    formData.append('userName', userName);
    formData.append('attempted', attempted);
    formData.append('score', score);
    formData.append('incorrect', incorrect);
    formData.append('skipped', skipped);
    formData.append('percentage', percentage.toFixed(2));
    formData.append('level', selectedLevel); // Add selected level to form data

    if (percentage >= 75) {
        formData.append('certificateGenerated', 'Yes');
    } else {
        formData.append('certificateGenerated', 'No');
    }

    fetch(formUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    }).then(response => {
        console.log('Form submission success:', response);
    }).catch(error => {
        console.error('Form submission error:', error);
    });

    localStorage.setItem('quizResults', JSON.stringify({
        percentage: percentage.toFixed(2),
        attempted: attempted,
        incorrect: incorrect,
        skipped: skipped,
        details: details,
        level: selectedLevel  // Store selected level in local storage
    }));
}







function toggleDetails() {
    window.location.href = '../Quizs/html-quiz-details.html'; // Redirect to the new page
}


function generateCertificate() {
    const userNameElement = document.getElementById('userName');
    const currentDateElement = document.getElementById('currentDate');
    const levelElement = document.getElementById('level'); // Assuming you add this element for level

    if (userNameElement) {
        userNameElement.textContent = userName;
    } else {
        console.error('userName element not found in the DOM.');
    }

    if (currentDateElement) {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.toLocaleString('default', { month: 'long' });
        const year = currentDate.getFullYear();
        currentDateElement.textContent = `${day} ${month} ${year}`;
    } else {
        console.error('currentDate element not found in the DOM.');
    }

    if (levelElement) {
        levelElement.textContent = `Level ${selectedLevel}`;
    } else {
        console.error('level element not found in the DOM.');
    }

    document.getElementById('certificateContainer').style.display = 'block';
}


function downloadCertificate() {
    const certificateElement = document.getElementById('certificate');
    
    html2canvas(certificateElement, {
        scale: 6 // Increase scale to improve resolution
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/png', 1.0); // 1.0 for full quality
        
        const link = document.createElement('a');
        link.download = 'certificate.png';
        link.href = imgData;
        link.click();
    });
}


function goback(){
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.close();
    }
  }