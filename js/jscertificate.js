const questionsByLevel = {
    1: [
        { question: "Which JavaScript keyword is used to declare a variable?", options: ["var", "let", "const", "All of the above"], correct: 3 },
        { question: "What is the output of 'typeof null' in JavaScript?", options: ["object", "null", "undefined", "boolean"], correct: 0 },
        { question: "Which function is used to parse a string to an integer?", options: ["parseInt()", "Number()", "parseFloat()", "Math.floor()"], correct: 0 },
        { question: "Which method is used to add new elements to an array?", options: ["push()", "add()", "append()", "insert()"], correct: 0 },
        { question: "Which event occurs when the user clicks on an HTML element?", options: ["onchange", "onclick", "onmouseover", "onkey"], correct: 1 },
        { question: "How do you write a comment in JavaScript?", options: ["// This is a comment", "<!-- This is a comment -->", "# This is a comment", "'This is a comment'"], correct: 0 },
        { question: "What does 'NaN' stand for in JavaScript?", options: ["Not a Number", "Number and Null", "Next available Number", "New array Number"], correct: 0 },
        { question: "Which method converts a JSON string to a JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "objectify()"], correct: 0 },
        { question: "Which method is used to remove the last element of an array?", options: ["pop()", "remove()", "slice()", "shift()"], correct: 0 },
        { question: "What is the correct way to check if a variable 'x' is an array?", options: ["Array.isArray(x)", "typeof x == 'array'", "x instanceof Array", "Both 1 and 3"], correct: 3 },
        { question: "What is the purpose of the 'this' keyword in JavaScript?", options: ["Refers to the current object", "Declares a variable", "Defines a function", "Creates a new object"], correct: 0 },
        { question: "Which method is used to remove whitespace from both sides of a string?", options: ["trim()", "cut()", "slice()", "substring()"], correct: 0 },
        { question: "What is the output of 'console.log(2 + '2')'?", options: ["'22'", "4", "'4'", "Error"], correct: 0 },
        { question: "Which method returns the index of the first occurrence of a value in an array?", options: ["indexOf()", "findIndex()", "includes()", "search()"], correct: 0 },
        { question: "How do you create an object in JavaScript?", options: ["var obj = {}", "var obj = []", "var obj = ()", "var obj = Object"], correct: 0 }
    ],

    2: [
        { question: "What is the purpose of the 'use strict' directive in JavaScript?", options: ["To enforce stricter parsing and error handling", "To improve performance", "To enable ES6 features", "To prevent memory leaks"], correct: 0 },
        { question: "Which method is used to merge two or more arrays?", options: ["concat()", "merge()", "combine()", "join()"], correct: 0 },
        { question: "What is a closure in JavaScript?", options: ["A function that has access to its own scope, parent scope, and global scope", "A block of code executed sequentially", "A function executed immediately after its definition", "A method to handle asynchronous code"], correct: 0 },
        { question: "What does the 'bind()' method do?", options: ["Creates a new function with 'this' set to a specific value", "Calls a function immediately", "Creates a new instance of a class", "Merges two objects"], correct: 0 },
        { question: "What is the difference between '==' and '===' in JavaScript?", options: ["'==' checks for value equality, '===' checks for both value and type equality", "'==' checks for both value and type equality, '===' checks only for value equality", "'==' is for numbers, '===' is for strings", "'==' is a bitwise operator, '===' is a logical operator"], correct: 0 },
        { question: "Which of the following is an IIFE (Immediately Invoked Function Expression)?", options: ["(function() {})()", "function() {}()", "() => {}", "(function() {});"], correct: 0 },
        { question: "Which of the following is NOT a JavaScript framework or library?", options: ["React", "Angular", "Vue", "Django"], correct: 3 },
        { question: "How can you avoid callback hell in JavaScript?", options: ["Using promises", "Using 'for' loops", "Using event listeners", "Using alerts"], correct: 0 },
        { question: "What is the role of 'async' in JavaScript?", options: ["To declare an asynchronous function", "To execute code in parallel", "To handle errors", "To lock the execution"], correct: 0 },
        { question: "Which method returns a new array with all elements that pass a test?", options: ["filter()", "map()", "reduce()", "forEach()"], correct: 0 },
        { question: "Which keyword is used to define a constant in JavaScript?", options: ["const", "let", "var", "immutable"], correct: 0 },
        { question: "What is the purpose of the 'finally' block in a try-catch-finally structure?", options: ["To execute code after try and catch, regardless of the result", "To handle errors", "To catch exceptions", "To terminate the program"], correct: 0 },
        { question: "What is the use of the 'Promise.all()' method?", options: ["To run multiple promises in parallel", "To run promises sequentially", "To cancel all promises", "To create a promise chain"], correct: 0 },
        { question: "Which statement is correct about arrow functions?", options: ["They do not have their own 'this' context", "They are always asynchronous", "They must have a return statement", "They are available only in ES5"], correct: 0 },
        { question: "What is the output of 'console.log(typeof [])'?", options: ["'object'", "'array'", "'function'", "'null'"], correct: 0 }
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
    
    const userData = `This certificate is proudly awarded to ${userName} for successfully completing the JavaScript Project. 
    
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

    const formUrl = 'https://script.google.com/macros/s/AKfycbxbD9Nf4_d-v0zYqm0p8xkX_2mryCYLReLg7jfdMSaNEbbYbhBG5ygYlN_zkle5Aatr/exec';
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