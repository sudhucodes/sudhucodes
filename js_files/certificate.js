const questionsByCategoryAndLevel = {
    htmlcss: {
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
    },
    fullstack: {
        1: [
            { question: "Which HTTP method is used to retrieve data from a server?", options: ["DELETE", "POST", "GET", "PUT"], correct: 2 },
            { question: "What does 'DOM' stand for in web development?", options: ["Document Object Model", "Data Object Manager", "Document Operation Mode", "Digital Object Model"], correct: 0 },
            { question: "Which CSS property is used to change the background color of an element?", options: ["bg-color", "color", "background-color", "background"], correct: 2 },
            { question: "Which JavaScript function is used to parse a string to an integer?", options: ["toInteger()", "parseFloat()", "Number()", "parseInt()"], correct: 3 },
            { question: "What does SQL stand for?", options: ["Structured Query Language", "Sequential Query Language", "Simple Query Language", "Server Query Language"], correct: 0 },
            { question: "Which of the following is a JavaScript framework?", options: ["Flask", "Laravel", "Django", "React"], correct: 3 },
            { question: "In Node.js, which module is used to create a server?", options: ["url", "fs", "http", "path"], correct: 2 },
            { question: "Which of the following is used to style React components?", options: ["SCSS", "Styled Components", "CSS", "All of the above"], correct: 3 },
            { question: "Which SQL command is used to remove a table from a database?", options: ["REMOVE", "DROP", "DELETE", "ERASE"], correct: 1 },
            { question: "Which of the following is a NoSQL database?", options: ["MongoDB", "SQLite", "PostgreSQL", "MySQL"], correct: 0 },
            { question: "What is the purpose of a 'package.json' file in Node.js?", options: ["To define CSS styles", "To configure database settings", "To store environment variables", "To manage project dependencies"], correct: 3 },
            { question: "Which of the following is a frontend framework?", options: ["Express", "Angular", "Ruby on Rails", "Spring"], correct: 1 },
            { question: "Which command is used to install a package globally in Node.js?", options: ["npm global", "npm install", "npm add -g", "npm install -g"], correct: 3 },
            { question: "Which HTTP status code indicates a successful request?", options: ["404", "500", "403", "200"], correct: 3 },
            { question: "Which of the following is used for version control in web development?", options: ["Docker", "Webpack", "Git", "Jenkins"], correct: 2 }
        ],
        2: [
            { question: "What is the purpose of the 'useEffect' hook in React?", options: ["To manage state in class components", "To handle events in React", "To optimize performance", "To perform side effects in function components"], correct: 3 },
            { question: "Which of the following is true about RESTful APIs?", options: ["They use WebSockets", "They require XML format", "They require OAuth2 authentication", "They are stateless"], correct: 3 },
            { question: "Which of the following can improve the performance of a React application?", options: ["Using multiple setState calls", "Writing inline CSS", "Avoiding use of hooks", "Using React.memo"], correct: 3 },
            { question: "Which method is used in Node.js to read a file asynchronously?", options: ["fs.readFileSync()", "fs.read()", "fs.open()", "fs.readFile()"], correct: 3 },
            { question: "In SQL, what does the 'JOIN' clause do?", options: ["Combines rows from two or more tables", "Deletes data from a table", "Filters data from a table", "Sorts data in a table"], correct: 0 },
            { question: "Which of the following is a valid React lifecycle method?", options: ["componentWillUpdate", "componentShouldUpdate", "componentWillMount", "componentDidMount"], correct: 3 },
            { question: "Which tool is commonly used for testing RESTful APIs?", options: ["Webpack", "Docker", "Nginx", "Postman"], correct: 3 },
            { question: "What is the purpose of the 'this' keyword in JavaScript?", options: ["Declares a variable", "Refers to the current object", "Defines a function", "Calls a method"], correct: 1 },
            { question: "Which of the following is a way to prevent SQL injection?", options: ["Using eval()", "Using string concatenation", "Disabling JavaScript", "Using prepared statements"], correct: 3 },
            { question: "In CSS, what does the 'box-sizing' property do?", options: ["Defines how the width and height of an element are calculated", "Changes the element's display type", "Specifies the padding and margin for an element", "Sets the layout model for an element"], correct: 0 },
            { question: "Which of the following is used to manage state in a React application?", options: ["Node.js", "Redux", "MongoDB", "Express"], correct: 1 },
            { question: "In MongoDB, what does the '$match' stage do in an aggregation pipeline?", options: ["Limits the number of documents", "Filters documents", "Groups documents", "Sorts documents"], correct: 1 },
            { question: "Which HTTP status code indicates 'Unauthorized' access?", options: ["401", "500", "403", "404"], correct: 0 },
            { question: "What is the difference between '==' and '===' in JavaScript?", options: ["'==' checks for value equality, '===' checks for both value and type equality", "'==' is for numbers, '===' is for strings", "'==' is a bitwise operator, '===' is a logical operator", "'==' checks for both value and type equality, '===' checks only for value equality"], correct: 0 },
            { question: "What is the main purpose of using Docker in web development?", options: ["To manage databases", "To write unit tests", "To deploy code to production", "To containerize applications"], correct: 3 }
        ]
    },    
    javascript: {
        1: [
            { question: "Which JavaScript keyword is used to declare a variable?", options: ["const", "let", "All of the above", "var"], correct: 2 },
            { question: "What is the output of 'typeof null' in JavaScript?", options: ["null", "undefined", "boolean", "object"], correct: 3 },
            { question: "Which function is used to parse a string to an integer?", options: ["parseFloat()", "Number()", "Math.floor()", "parseInt()"], correct: 3 },
            { question: "Which method is used to add new elements to an array?", options: ["insert()", "add()", "push()", "append()"], correct: 2 },
            { question: "Which event occurs when the user clicks on an HTML element?", options: ["onclick", "onmouseover", "onkey", "onchange"], correct: 0 },
            { question: "How do you write a comment in JavaScript?", options: ["'This is a comment'", "// This is a comment", "&lt;!-- This is a comment --&gt;", "# This is a comment"], correct: 1 },
            { question: "What does 'NaN' stand for in JavaScript?", options: ["Number and Null", "Not a Number", "New array Number", "Next available Number"], correct: 1 },
            { question: "Which method converts a JSON string to a JavaScript object?", options: ["objectify()", "JSON.stringify()", "parseJSON()", "JSON.parse()"], correct: 3 },
            { question: "Which method is used to remove the last element of an array?", options: ["pop()", "remove()", "shift()", "slice()"], correct: 0 },
            { question: "What is the correct way to check if a variable 'x' is an array?", options: ["typeof x == 'array'", "Array.isArray(x)", "x instanceof Array", "Both 1 and 3"], correct: 3 },
            { question: "What is the purpose of the 'this' keyword in JavaScript?", options: ["Creates a new object", "Defines a function", "Declares a variable", "Refers to the current object"], correct: 3 },
            { question: "Which method is used to remove whitespace from both sides of a string?", options: ["trim()", "cut()", "slice()", "substring()"], correct: 0 },
            { question: "What is the output of 'console.log(2 + '2')'?", options: ["'22'", "4", "'4'", "Error"], correct: 0 },
            { question: "Which method returns the index of the first occurrence of a value in an array?", options: ["indexOf()", "findIndex()", "includes()", "search()"], correct: 0 },
            { question: "How do you create an object in JavaScript?", options: ["var obj = {}", "var obj = []", "var obj = ()", "var obj = Object"], correct: 0 }
        ],
    
        2: [
            { question: "What is the purpose of the 'use strict' directive in JavaScript?", options: ["To prevent memory leaks", "To enable ES6 features", "To improve performance", "To enforce stricter parsing and error handling"], correct: 3 },
            { question: "Which method is used to merge two or more arrays?", options: ["concat()", "merge()", "join()", "combine()"], correct: 0 },
            { question: "What is a closure in JavaScript?", options: ["A function executed immediately after its definition", "A function that has access to its own scope, parent scope, and global scope", "A method to handle asynchronous code", "A block of code executed sequentially"], correct: 1 },
            { question: "What does the 'bind()' method do?", options: ["Merges two objects", "Calls a function immediately", "Creates a new instance of a class", "Creates a new function with 'this' set to a specific value"], correct: 3 },
            { question: "What is the difference between '==' and '===' in JavaScript?", options: ["'==' checks for both value and type equality, '===' checks only for value equality", "'==' is a bitwise operator, '===' is a logical operator", "'==' is for numbers, '===' is for strings", "'==' checks for value equality, '===' checks for both value and type equality"], correct: 3 },
            { question: "Which of the following is an IIFE (Immediately Invoked Function Expression)?", options: ["function() {}()", "(function() {});", "(function() {})()", "() => {}"], correct: 2 },
            { question: "Which of the following is NOT a JavaScript framework or library?", options: ["Django", "React", "Vue", "Angular"], correct: 0 },
            { question: "How can you avoid callback hell in JavaScript?", options: ["Using 'for' loops", "Using promises", "Using alerts", "Using event listeners"], correct: 1 },
            { question: "What is the role of 'async' in JavaScript?", options: ["To declare an asynchronous function", "To lock the execution", "To execute code in parallel", "To handle errors"], correct: 0 },
            { question: "Which method returns a new array with all elements that pass a test?", options: ["forEach()", "filter()", "reduce()", "map()"], correct: 1 },
            { question: "Which keyword is used to define a constant in JavaScript?", options: ["immutable", "const", "var", "let"], correct: 1 },
            { question: "What is the purpose of the 'finally' block in a try-catch-finally structure?", options: ["To catch exceptions", "To execute code after try and catch, regardless of the result", "To handle errors", "To terminate the program"], correct: 1 },
            { question: "What is the use of the 'Promise.all()' method?", options: ["To cancel all promises", "To run multiple promises in parallel", "To create a promise chain", "To run promises sequentially"], correct: 1 },
            { question: "Which statement is correct about arrow functions?", options: ["They do not have their own 'this' context", "They are available only in ES5", "They must have a return statement", "They are always asynchronous"], correct: 0 },
            { question: "What is the output of 'console.log(typeof [])'?", options: ["'array'", "'object'", "'function'", "'null'"], correct: 1 }
        ]
    },
    react: {
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
    },
};

const categoryTitles = {
    'htmlcss': 'Frontend Project (HTML/CSS)',
    'fullstack': 'Full-Stack Development Project',
    'javascript': 'JavaScript Development Project',
    'react': 'React Development Project',
    'youtube-clone': 'YouTube Clone Project',
    'spotify-clone': 'Spotify Clone Project'
};

let selectedLevel = 1;
let currentQuestion = 0;
let selectedOptions = [];
let questions = [];
let userName = '';
let timerDuration = 15 * 60;
let timerInterval;

function startQuiz() {
    console.log('Start Quiz button clicked');
    userName = document.getElementById('userNameInput').value.trim();
    selectedLevel = parseInt(document.getElementById('levelSelect').value);
    const nameAlert = document.getElementById('nameAlert');
    nameAlert.textContent = '';

    if (userName === '') {
        nameAlert.textContent = 'Please enter your name to start the quiz.';
        return;
    }

    const quizCategory = localStorage.getItem('quizCategory');

    if (!quizCategory || !questionsByCategoryAndLevel[quizCategory]) {
        nameAlert.textContent = `${quizCategory.toUpperCase()} quiz is currently unavailable.`;
        return;
    }

    document.querySelector('.start-container').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
    document.querySelector('.navbar').style.display = 'flex';

    // Load questions based on the selected category and level
    questions = questionsByCategoryAndLevel[quizCategory][selectedLevel];
    selectedOptions = Array(questions.length).fill(-1); // Initialize selected options array

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

function selectOption(optionIndex) {
    selectedOptions[currentQuestion] = optionIndex; // Store the selected option
    loadQuestion(); // Reload the question to reflect the selected option
}

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

    const formUrl = 'https://script.google.com/macros/s/AKfycbwJEi_SzbALTVwU7FeeqoQ0XeuT6xXHehPHqBzMP0WVvdjHl6yIeDUD0_JSfZUC0rkyWA/exec';
    const formData = new FormData();

    const quizType = localStorage.getItem('quizCategory') || 'Unknown';
    const quizCategory = categoryTitles[quizType] || 'Unknown Project';

    formData.append('userName', userName);
    formData.append('attempted', attempted);
    formData.append('score', score);
    formData.append('incorrect', incorrect);
    formData.append('skipped', skipped);
    formData.append('percentage', percentage.toFixed(2));
    formData.append('level', selectedLevel);
    formData.append('quizCategory', quizCategory);


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
    const titleElement = document.querySelector('.frontend-project');

    // Get quizCategory from localStorage
    const quizCategory = localStorage.getItem('quizCategory') || 'Unknown';

    // Set userName
    if (userNameElement) {
        userNameElement.textContent = userName;
    } else {
        console.error('userName element not found in the DOM.');
    }

    // Set currentDate
    if (currentDateElement) {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.toLocaleString('default', { month: 'long' });
        const year = currentDate.getFullYear();
        currentDateElement.textContent = `${day} ${month} ${year}`;
    } else {
        console.error('currentDate element not found in the DOM.');
    }

    // Set certificate title
    if (titleElement) {
        const title = categoryTitles[quizCategory] || 'Project Certificate';
        titleElement.textContent = title;
    } else {
        console.error('frontend-project element not found in the DOM.');
    }

    // Display certificate container
    document.getElementById('certificateContainer').style.display = 'block';
}


function downloadCertificate() {
    const certificateElement = document.getElementById('certificate');
    
    html2canvas(certificateElement, {
        scale: 7, // Quility increase
        useCORS: true 
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/png', 1.0);
        
        const link = document.createElement('a');
        link.download = 'certificate.png';
        link.href = imgData;
        link.click();
    }).catch(error => {
        console.error('Error generating certificate:', error);
    });
}