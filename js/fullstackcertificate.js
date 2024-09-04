const questionsByLevel = {
    1: [
        { question: "Which HTTP method is used to retrieve data from a server?", options: ["GET", "POST", "PUT", "DELETE"], correct: 0 },
        { question: "What does 'DOM' stand for in web development?", options: ["Document Object Model", "Data Object Manager", "Document Operation Mode", "Digital Object Model"], correct: 0 },
        { question: "Which CSS property is used to change the background color of an element?", options: ["background-color", "color", "bg-color", "background"], correct: 0 },
        { question: "Which JavaScript function is used to parse a string to an integer?", options: ["parseInt()", "parseFloat()", "toInteger()", "Number()"], correct: 0 },
        { question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Sequential Query Language", "Server Query Language"], correct: 0 },
        { question: "Which of the following is a JavaScript framework?", options: ["React", "Laravel", "Django", "Flask"], correct: 0 },
        { question: "In Node.js, which module is used to create a server?", options: ["http", "fs", "path", "url"], correct: 0 },
        { question: "Which of the following is used to style React components?", options: ["CSS", "SCSS", "Styled Components", "All of the above"], correct: 3 },
        { question: "Which SQL command is used to remove a table from a database?", options: ["DROP", "DELETE", "REMOVE", "ERASE"], correct: 0 },
        { question: "Which of the following is a NoSQL database?", options: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"], correct: 0 },
        { question: "What is the purpose of a 'package.json' file in Node.js?", options: ["To manage project dependencies", "To define CSS styles", "To store environment variables", "To configure database settings"], correct: 0 },
        { question: "Which of the following is a frontend framework?", options: ["Angular", "Express", "Ruby on Rails", "Spring"], correct: 0 },
        { question: "Which command is used to install a package globally in Node.js?", options: ["npm install -g", "npm install", "npm global", "npm add -g"], correct: 0 },
        { question: "Which HTTP status code indicates a successful request?", options: ["200", "404", "500", "403"], correct: 0 },
        { question: "Which of the following is used for version control in web development?", options: ["Git", "Docker", "Jenkins", "Webpack"], correct: 0 }
    ],
    2: [
        { question: "What is the purpose of the 'useEffect' hook in React?", options: ["To perform side effects in function components", "To manage state in class components", "To handle events in React", "To optimize performance"], correct: 0 },
        { question: "Which of the following is true about RESTful APIs?", options: ["They are stateless", "They require XML format", "They use WebSockets", "They require OAuth2 authentication"], correct: 0 },
        { question: "Which of the following can improve the performance of a React application?", options: ["Using React.memo", "Writing inline CSS", "Using multiple setState calls", "Avoiding use of hooks"], correct: 0 },
        { question: "Which method is used in Node.js to read a file asynchronously?", options: ["fs.readFile()", "fs.readFileSync()", "fs.open()", "fs.read()"], correct: 0 },
        { question: "In SQL, what does the 'JOIN' clause do?", options: ["Combines rows from two or more tables", "Deletes data from a table", "Sorts data in a table", "Filters data from a table"], correct: 0 },
        { question: "Which of the following is a valid React lifecycle method?", options: ["componentDidMount", "componentWillUpdate", "componentShouldUpdate", "componentWillMount"], correct: 0 },
        { question: "Which tool is commonly used for testing RESTful APIs?", options: ["Postman", "Nginx", "Webpack", "Docker"], correct: 0 },
        { question: "What is the purpose of the 'this' keyword in JavaScript?", options: ["Refers to the current object", "Declares a variable", "Defines a function", "Calls a method"], correct: 0 },
        { question: "Which of the following is a way to prevent SQL injection?", options: ["Using prepared statements", "Using string concatenation", "Disabling JavaScript", "Using eval()"], correct: 0 },
        { question: "In CSS, what does the 'box-sizing' property do?", options: ["Defines how the width and height of an element are calculated", "Sets the layout model for an element", "Changes the element's display type", "Specifies the padding and margin for an element"], correct: 0 },
        { question: "Which of the following is used to manage state in a React application?", options: ["Redux", "Express", "Node.js", "MongoDB"], correct: 0 },
        { question: "In MongoDB, what does the '$match' stage do in an aggregation pipeline?", options: ["Filters documents", "Groups documents", "Sorts documents", "Limits the number of documents"], correct: 0 },
        { question: "Which HTTP status code indicates 'Unauthorized' access?", options: ["401", "403", "404", "500"], correct: 0 },
        { question: "What is the difference between '==' and '===' in JavaScript?", options: ["'==' checks for value equality, '===' checks for both value and type equality", "'==' checks for both value and type equality, '===' checks only for value equality", "'==' is for numbers, '===' is for strings", "'==' is a bitwise operator, '===' is a logical operator"], correct: 0 },
        { question: "What is the main purpose of using Docker in web development?", options: ["To containerize applications", "To manage databases", "To write unit tests", "To deploy code to production"], correct: 0 }
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
        const nameAlert = document.getElementById('nameAlert');
        nameAlert.textContent = `Please enter your name to start the quiz.`;
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

let timerDuration = 10 * 60; // 10 minutes in seconds
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
    let emoji = '';
    let certificateGenerated = false;
    
    if (percentage < 50) {
        feedback = 'Very Bad. Improve Yourself!<span class="emoji">😞</span><br>';
    } else if (percentage >= 50 && percentage < 75) {
        feedback = 'Average. Keep Improving!<span class="emoji">☹️</span><br>';
    } else {
        feedback = 'Congratulations!';
        emoji = '<span class="emoji">🤩</span>';
        generateCertificate();
        certificateGenerated = true;
    }
    
    document.querySelector('.quiz-container').style.display = 'none';
    document.querySelector('.navigation-buttons').style.display = 'none';
    document.getElementById('resultCertificateContainer').style.display = 'block';
    
    const resultElement = document.getElementById('results');
    if (resultElement) {
        resultElement.innerHTML = `
            <p>${feedback} ${userName} ${emoji}</p>
            <p>${score} out of ${questions.length} answers were correct.</p>
            <p>Your Score: ${percentage.toFixed(2)}%</p>
        `;
    }
    
        // Stop the timer when generating the certificate
        if (timerInterval) {
            clearInterval(timerInterval);
        }
    
        // Hide the timer container
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

    const formUrl = 'https://script.google.com/macros/s/AKfycbzbk7tjmrq4mhN1vwzcpfWdVf3jlhcDBi-fkqJmW2rHwIHXK88P_ysSoxlmuqksuSGy/exec';
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
    window.location.href = '../Quizs/quiz-details.html'; // Redirect to the new page
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