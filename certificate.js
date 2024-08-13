const questions = [
    {
        question: "What is the correct HTML tag for the largest heading?",
        options: ["&lt;h1&gt;", "&lt;h6&gt;", "&lt;heading&gt;", "&lt;head&gt;"],
        correct: 0
    },
    {
        question: "Which HTML element is used to specify a footer?",
        options: ["&lt;footer&gt;", "&lt;bottom&gt;", "&lt;end&gt;", "&lt;foot&gt;"],
        correct: 0
    },
    {
        question: "Which attribute specifies the destination of a link?",
        options: ["dest", "href", "link", "path"],
        correct: 1
    },
    {
        question: "Which attribute is used for image alt text?",
        options: ["title", "alt", "src", "desc"],
        correct: 1
    },
    {
        question: "What is the correct HTML tag for an inline frame?",
        options: ["&lt;iframe&gt;", "&lt;frame&gt;", "&lt;embed&gt;", "&lt;object&gt;"],
        correct: 0
    },
    {
        question: "Which attribute defines inline styles?",
        options: ["class", "style", "id", "inline"],
        correct: 1
    },
    {
        question: "Which HTML5 tag is used for navigation?",
        options: ["&lt;nav&gt;", "&lt;menu&gt;", "&lt;links&gt;", "&lt;navigation&gt;"],
        correct: 0
    },
    {
        question: "Which tag is used for audio files?",
        options: ["&lt;audio&gt;", "&lt;sound&gt;", "&lt;music&gt;", "&lt;voice&gt;"],
        correct: 0
    },
    {
        question: "Which is not a self-closing tag?",
        options: ["&lt;img&gt;", "&lt;br&gt;", "&lt;p&gt;", "&lt;hr&gt;"],
        correct: 2
    },
    {
        question: "Which attribute opens a link in a new tab?",
        options: ["target", "new", "rel", "link"],
        correct: 0
    },
    {
        question: "Which element is not semantic?",
        options: ["&lt;article&gt;", "&lt;section&gt;", "&lt;div&gt;", "&lt;header&gt;"],
        correct: 2
    },
    {
        question: "Which attribute makes an input required?",
        options: ["required", "validate", "mandatory", "compulsory"],
        correct: 0
    },
    {
        question: "Which tag creates a drop-down list?",
        options: ["&lt;select&gt;", "&lt;list&gt;", "&lt;dropdown&gt;", "&lt;menu&gt;"],
        correct: 0
    },
    {
        question: "Which attribute merges table cells horizontally?",
        options: ["colspan", "rowspan", "merge", "colmerge"],
        correct: 0
    },
    {
        question: "Which tag defines the main content?",
        options: ["&lt;main&gt;", "&lt;body&gt;", "&lt;content&gt;", "&lt;primary&gt;"],
        correct: 0
    },
    // New questions
    {
        question: "Which HTML tag is used to create a numbered list?",
        options: ["&lt;ol&gt;", "&lt;ul&gt;", "&lt;li&gt;", "&lt;list&gt;"],
        correct: 0
    },
    {
        question: "Which attribute is used to specify the language of an HTML document?",
        options: ["lang", "dir", "xml:lang", "locale"],
        correct: 2
    },
    {
        question: "Which tag is used to define a hyperlink?",
        options: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;url&gt;"],
        correct: 2
    },
    {
        question: "Which tag is used to define a table cell?",
        options: ["&lt;td&gt;", "&lt;tr&gt;", "&lt;th&gt;", "&lt;cell&gt;"],
        correct: 0
    },
    {
        question: "Which tag is used to define an image map?",
        options: ["&lt;map&gt;", "&lt;imgmap&gt;", "&lt;imagemap&gt;", "&lt;maparea&gt;"],
        correct: 3
    }

];


let currentQuestion = 0;
let selectedOptions = Array(questions.length).fill(-1);
let userName = '';

function startQuiz() {
    console.log('Start Quiz button clicked');
    userName = document.getElementById('userNameInput').value;
    console.log('User name:', userName);
    if (userName.trim() === '') {
        alert('Please enter your name to start the quiz.');
        return;
    }
    document.querySelector('.start-container').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const quizContainer = document.getElementById('quiz');
    const question = questions[currentQuestion];
    const totalQuestions = questions.length;
    const attemptedQuestions = selectedOptions.filter(option => option !== -1).length;

    quizContainer.innerHTML = `
        <div class="question-info">
            Question ${currentQuestion + 1} of ${totalQuestions} (Attempted: ${attemptedQuestions})
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
    let certificateGenerated = false; // New flag to track if certificate should be generated

    if (percentage < 50) {
        feedback = 'Very Bad. Try Again!';
    } else if (percentage >= 50 && percentage < 75) {
        feedback = 'Average. Keep Improving!';
    } else {
        feedback = 'Very Good. Congratulations!';
        generateCertificate();
        certificateGenerated = true;
    }

    document.querySelector('.quiz-container').style.display = 'none';
    document.querySelector('.navigation-buttons').style.display = 'none';
    document.getElementById('resultCertificateContainer').style.display = 'block';

    // Display results
    const resultElement = document.getElementById('results');
    if (resultElement) {
        resultElement.innerHTML = `
            <p>Your Score: ${percentage.toFixed(2)}%</p>
            <p>${feedback}</p>
        `;
    } else {
        console.error('results element not found in the DOM.');
    }

    // Display attempted, incorrect, and skipped questions
    const attemptedQuestionsElement = document.getElementById('attemptedQuestions');
    if (attemptedQuestionsElement) {
        attemptedQuestionsElement.textContent = `Questions Attempted: ${attempted}`;
    } else {
        console.error('attemptedQuestions element not found in the DOM.');
    }

    const incorrectAnswersElement = document.getElementById('incorrectAnswers');
    if (incorrectAnswersElement) {
        incorrectAnswersElement.textContent = `Incorrect Answers: ${incorrect}`;
    } else {
        console.error('incorrectAnswers element not found in the DOM.');
    }

    const skippedQuestionsElement = document.getElementById('skippedQuestions');
    if (skippedQuestionsElement) {
        skippedQuestionsElement.textContent = `Skipped Questions: ${skipped}`;
    } else {
        console.error('skippedQuestions element not found in the DOM.');
    }

    // Save results to local storage
    localStorage.setItem('quizResults', JSON.stringify({
        percentage: percentage.toFixed(2),
        attempted: attempted,
        incorrect: incorrect,
        skipped: skipped,
        details: details
    }));

    // Confirm data storage
    const storedData = localStorage.getItem('quizResults');
    console.log('Stored data:', storedData);

    // Conditionally display certificate and download button
    const certificateContainer = document.getElementById('certificateContainer');
    const downloadCertificateButton = document.getElementById('downloadCertificateButton');

    if (certificateGenerated) {
        if (certificateContainer) {
            certificateContainer.style.display = 'block';
        } else {
            console.error('certificateContainer element not found in the DOM.');
        }

        if (downloadCertificateButton) {
            downloadCertificateButton.style.display = 'inline-block';
        } else {
            console.error('downloadCertificateButton element not found in the DOM.');
        }
    } else {
        if (certificateContainer) {
            certificateContainer.style.display = 'none';
        }

        if (downloadCertificateButton) {
            downloadCertificateButton.style.display = 'none';
        }
    }
}



function toggleDetails() {
    window.location.href = 'quiz-details.html'; // Redirect to the new page
}


function generateCertificate() {
    const userNameElement = document.getElementById('userName');
    console.log('userNameElement:', userNameElement); // Debugging statement
    const currentDateElement = document.getElementById('currentDate');
    console.log('currentDateElement:', currentDateElement); // Debugging statement

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
        scale: 4 // Increase scale to improve resolution
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