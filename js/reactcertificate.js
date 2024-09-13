const questionsByLevel = {
    1: [
        { question: "What is React?", options: ["A JavaScript library for building user interfaces", "A web server", "A programming language", "A database"], correct: 0 },
        { question: "What is the purpose of JSX in React?", options: ["To handle events", "To fetch data", "To write HTML in JavaScript", "To style React components"], correct: 2 },
        { question: "Which method is used to render components to the DOM in React?", options: ["ReactDOM.render()", "component.render()", "renderComponent()", "React.render()"], correct: 0 },
        { question: "What are props in React?", options: ["CSS styles", "Event listeners", "Properties passed to components", "State variables"], correct: 2 },
        { question: "Which hook is used to handle state in a functional component?", options: ["useEffect", "useState", "useReducer", "useContext"], correct: 1 },
        { question: "What does 'virtual DOM' mean in React?", options: ["A DOM that runs in a browser tab", "A DOM stored in local storage", "An in-memory representation of the real DOM", "A DOM that controls routing"], correct: 2 },
        { question: "Which lifecycle method is called after a component is rendered?", options: ["componentDidUpdate", "componentDidMount", "componentWillUnmount", "shouldComponentUpdate"], correct: 1 },
        { question: "How do you pass data from a parent to a child component in React?", options: ["Using props", "Using refs", "Using state", "Using context"], correct: 0 },
        { question: "Which hook is used to perform side effects in a functional component?", options: ["useEffect", "useMemo", "useCallback", "useState"], correct: 0 },
        { question: "What is the purpose of keys in React lists?", options: ["To handle events", "To pass props", "To set the component's state", "To uniquely identify elements"], correct: 3 },
        { question: "Which method is used to handle events in React?", options: ["addEventListener", "bindEvent", "onClick", "attachEvent"], correct: 2 },
        { question: "How do you handle conditional rendering in React?", options: ["Using if-else or ternary operators", "Using for loops", "Using switch statements", "Using try-catch"], correct: 0 },
        { question: "What is the purpose of 'setState()' in React class components?", options: ["To update the component's state", "To re-render the component", "To update props", "To change the component's style"], correct: 0 },
        { question: "Which hook is used to handle performance optimization in React?", options: ["useMemo", "useEffect", "useState", "useReducer"], correct: 0 },
        { question: "How do you create a new React app using the CLI?", options: ["npx create-react-app my-app", "react new-app", "npm start react", "react init my-app"], correct: 0 }
    ],

    2: [
        { question: "What is the purpose of 'useReducer' in React?", options: ["To handle events", "To manage complex state logic", "To fetch data", "To replace 'useEffect'"], correct: 1 },
        { question: "What are React fragments used for?", options: ["To handle side effects", "To create event handlers", "To group multiple elements without adding extra nodes to the DOM", "To manage state"], correct: 2 },
        { question: "What is the difference between 'useCallback' and 'useMemo'?", options: ["'useCallback' memoizes functions, 'useMemo' memoizes values", "'useCallback' manages props, 'useMemo' manages context", "'useCallback' handles side effects, 'useMemo' handles state", "'useCallback' re-renders the component, 'useMemo' triggers events"], correct: 0 },
        { question: "What is the significance of 'React.PureComponent'?", options: ["It performs a shallow comparison of props and state to avoid unnecessary re-renders", "It handles asynchronous operations", "It improves performance by memoizing state", "It enables routing in a React app"], correct: 0 },
        { question: "Which of the following is a higher-order component (HOC)?", options: ["A function that takes a component and returns a new component", "A class component with state", "A function that manages lifecycle methods", "A React component with useState hook"], correct: 0 },
        { question: "What is the purpose of the 'Context API' in React?", options: ["To handle side effects", "To optimize performance", "To manage routing in React", "To pass data globally without prop drilling"], correct: 3 },
        { question: "What is lazy loading in React?", options: ["Loading components in the background", "Preloading all components on the page", "Caching components in local storage", "Loading components only when they are needed"], correct: 3 },
        { question: "What does 'React.memo()' do?", options: ["It memoizes event listeners", "It is used to handle side effects", "It optimizes performance by memoizing a component", "It prevents state updates"], correct: 2 },
        { question: "Which hook can be used to access the DOM directly?", options: ["useMemo", "useEffect", "useRef", "useState"], correct: 2 },
        { question: "What is the purpose of 'useLayoutEffect' in React?", options: ["To handle state updates", "To manage performance", "To run code synchronously after the DOM has been updated", "To fetch data"], correct: 2 },
        { question: "How can you prevent re-renders in React when a parent component updates?", options: ["Using 'React.memo()' or 'shouldComponentUpdate'", "Using 'useState'", "Using 'useEffect'", "Using 'componentDidMount'"], correct: 0 },
        { question: "What is the difference between 'useEffect' and 'useLayoutEffect'?", options: ["'useEffect' runs after rendering, 'useLayoutEffect' runs during rendering", "'useEffect' runs asynchronously, 'useLayoutEffect' runs synchronously", "'useEffect' is for state, 'useLayoutEffect' is for props", "'useEffect' is for events, 'useLayoutEffect' is for DOM updates"], correct: 1 },
        { question: "Which of the following is NOT a valid React hook?", options: ["useStore", "useReducer", "useState", "useEffect"], correct: 0 },
        { question: "What is the role of 'useContext' in React?", options: ["To manage state", "To handle side effects", "To trigger re-renders", "To consume context values"], correct: 3 },
        { question: "How do you optimize performance in a large React application?", options: ["Using 'React.memo()' and 'useCallback'", "Avoiding the use of hooks", "Rendering all components at once", "Using inline CSS"], correct: 0 }
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
    
    const userData = `This certificate is proudly awarded to ${userName} for successfully completing the React JS Project. 
    
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

    const formUrl = 'https://script.google.com/macros/s/AKfycbyFjQSI9lSkNADtBygazkTGMPdxAh9srfyymq86069mozfwBSSyk2BYyThpztT9W_sUsw/exec';
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