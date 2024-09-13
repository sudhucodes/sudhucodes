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
        { question: "Which HTML element is used to embed SVG graphics?", options: ["&lt;object&gt;", "&lt;svg&gt;", "&lt;graphic&gt;", "&lt;embed&gt;"], correct: 1 },
        { question: "Which attribute is used to define a video source in HTML5?", options: ["video-src", "media", "source", "src"], correct: 3 },
        { question: "Which HTML tag is used to create a form control that lets users enter text?", options: ["&lt;textbox&gt;", "&lt;input&gt;", "&lt;textfield&gt;", "&lt;textarea&gt;"], correct: 1 },
        { question: "Which HTML5 attribute can be used to specify that an input field is a number?", options: ["number='true'", "inputtype='number'", "data-type='number'", "type='number'"], correct: 3 },
        { question: "What is the default value of the 'position' property in CSS?", options: ["relative", "fixed", "static", "absolute"], correct: 2 },
        { question: "Which CSS property is used to change the font of an element?", options: ["text-font", "font-style", "font-weight", "font-family"], correct: 3 },
        { question: "Which CSS selector is used to target the first child element of its parent?", options: [":nth-child(1)", ":first-of-type", ":child(1)", ":first-child"], correct: 3 },
        { question: "Which CSS property is used to change the text color of an element?", options: ["background-color", "text-color", "font-color", "color"], correct: 3 },
        { question: "Which attribute is used to specify the maximum length of an input field in HTML5?", options: ["maxlength", "limit", "max", "length"], correct: 0 },
        { question: "What is the purpose of the 'data-' attribute in HTML?", options: ["To store custom data", "To create forms", "To define styles", "To embed scripts"], correct: 0 },
        { question: "Which CSS property controls the spacing between lines of text?", options: ["text-spacing", "letter-spacing", "word-spacing", "line-height"], correct: 3 },
        { question: "Which HTML tag is used to define an unordered list?", options: ["&lt;list&gt;", "&lt;ul&gt;", "&lt;ol&gt;", "&lt;dl&gt;"], correct: 1 },
        { question: "Which CSS pseudo-class is used to select elements when the user mouses over them?", options: [":active", ":focus", ":hover", ":visited"], correct: 2 },
        { question: "Which HTML tag defines a section in a document?", options: ["&lt;div&gt;", "&lt;article&gt;", "&lt;section&gt;", "&lt;group&gt;"], correct: 2 },
        { question: "Which property is used to set the width of an element's border in CSS?", options: ["border-thickness", "border-line", "border-size", "border-width"], correct: 3 }
    ]    
};


let selectedLevel = 1; 
let currentQuestion = 0;
let selectedOptions = Array(20).fill(-1);
let userName = '';

function startQuiz() {
    console.log('Start Quiz button clicked');
    userName = document.getElementById('userNameInput').value;
    selectedLevel = parseInt(document.getElementById('levelSelect').value);

    console.log('User name:', userName);
    if (userName.trim() === '') {
        const nameAlert = document.getElementById('nameAlert');
        nameAlert.textContent = `Please enter your name to start the quiz.`;
        return;
    }

    document.querySelector('.start-container').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
    document.querySelector('.navbar').style.display = 'flex';

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
    }, 1000); 
}

function showTimeoutMessage() {
    document.querySelector('.quiz-container').style.display = 'none';
    document.querySelector('.navigation-buttons').style.display = 'none';
    document.querySelector('.navbar').style.display = 'none';
    document.getElementById('timeoutMessage').style.display = 'flex';
}

function restartQuiz() {
    location.reload(); 
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
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();
    
    const formattedDate = `${day} ${month} ${year}`;
    const formattedTime = currentDate.toLocaleTimeString();
    
    const userData = `This certificate is proudly awarded to ${userName} for successfully completing the Frontend Project. 
    
    Quiz Details ~
    - Total Questions Attempted: ${attempted} 
    - Questions Skipped: ${skipped} 
    - Incorrect Answers: ${incorrect} 
    - Performance: ${percentage.toFixed(2)}%
    
    Date of Completion: ${formattedDate},
    Time of Completion: ${formattedTime}
    
    Sudhanshu Kumar
    Instructor, SudhuCodes`;

    // Generate QR code
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(userData)}&size=150x150`;

    const certificateQrDiv = document.getElementById('certificateqr');
    certificateQrDiv.innerHTML = `<img src="${qrUrl}" alt="QR Code">`;

    let feedback = '';
    let certificateGenerated = false;
    

    if (selectedLevel === '1') {
        if (percentage >= 75) {
            feedback = `Very Good ${userName}!<br> Let's complete Level 2 for certificate<span class="emoji">🤩</span><br>`;
            document.getElementById('start-level-2').style.display = 'inline';
        } else if (percentage >= 50) {
            feedback = 'Good Effort. Keep Improving!<span class="emoji">☹️</span><br>';
        } else {
            feedback = 'Needs Improvement. Try Again!<span class="emoji">😞</span><br>';
        }
    } else if (selectedLevel === '2') {
        if (percentage >= 75) {
            feedback = `Congratulations! ${userName}<span class="emoji">🤩</span><br>`;
            generateCertificate();
            certificateGenerated = true;
        } else if (percentage >= 50) {
            feedback = 'Good Effort. Keep Improving!<span class="emoji">😊</span><br>';
        } else {
            feedback = 'Needs Improvement. Try Again!<span class="emoji">😞</span><br>';
        }
    }
    
    document.querySelector('.quiz-container').style.display = 'none';
    document.querySelector('.navigation-buttons').style.display = 'none';
    document.getElementById('resultCertificateContainer').style.display = 'block';
    
    const resultElement = document.getElementById('results');
    if (resultElement) {
        resultElement.innerHTML = `
            <p>${feedback}</p>
            <p>${score} out of ${questions.length} answers were correct.</p>
            <p>Your Score: ${percentage.toFixed(2)}%</p>
        `;
    }
    

        if (timerInterval) {
            clearInterval(timerInterval);
        }
    
        if (timer) {
            timer.style.display = 'none';
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

    const formUrl = 'https://script.google.com/macros/s/AKfycbwF2j3JzJo_pqOGgtueZpvJ03ZNw0ABXKEaNRwtuvItvqYZmT-yYOwxRH4DZ2qk5fwI2A/exec';
    const formData = new FormData();
    
    formData.append('userName', userName);
    formData.append('attempted', attempted);
    formData.append('score', score);
    formData.append('incorrect', incorrect);
    formData.append('skipped', skipped);
    formData.append('percentage', percentage.toFixed(2));
    formData.append('level', selectedLevel); 

    

    if (selectedLevel === '1') {
        if (percentage >= 75) {
            formData.append('certificateGenerated', 'No');
        } else {
            formData.append('certificateGenerated', 'No');
        }
    } else if (selectedLevel === '2') {
        if (percentage >= 75) {
            formData.append('certificateGenerated', 'Yes');
        } else {
            formData.append('certificateGenerated', 'No');
        }
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
        level: selectedLevel 
    }));
}







function toggleDetails() {
    window.location.href = '../Quizs/quiz-details.html'; // Redirect to the new page
}


function generateCertificate() {
    const userNameElement = document.getElementById('userName');
    const currentDateElement = document.getElementById('currentDate');

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

    document.getElementById('certificateContainer').style.display = 'block';
}


function downloadCertificate() {
    const certificateElement = document.getElementById('certificate');
    
    html2canvas(certificateElement, {
        scale: 7, // Adjust scale as needed
        useCORS: true // Handle cross-origin images
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/png', 1.0); // 1.0 for full quality
        
        const link = document.createElement('a');
        link.download = 'certificate.png';
        link.href = imgData;
        link.click();
    }).catch(error => {
        console.error('Error generating certificate:', error);
    });
}



function goback(){
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.close();
    }
  }