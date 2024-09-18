// Array of quizzes
const quizzes = [
  { name: "HTML", link: "get/certificate.html", category: "htmlcss" },
  { name: "Full-Stack", link: "get/certificate.html", category: "fullstack" },
  { name: "JavaScript", link: "get/certificate.html", category: "javascript" },
  { name: "React", link: "get/certificate.html", category: "react" },
  { name: "YouTube Clone", link: "get/certificate.html", category: "youtube-clone" },
  { name: "Spotify Clone", link: "get/certificate.html", category: "spotify-clone" }
];

// Function to generate quiz list
function generateQuizList() {
  const quizListContainer = document.querySelector('.quiz-list');
  quizListContainer.innerHTML = '';

  quizzes.forEach(quiz => {
    const quizItem = document.createElement('a');
    quizItem.href = quiz.link;
    quizItem.target = '_blank';
    quizItem.innerHTML = `<i class="fa-solid fa-code"></i> Start ${quiz.name} Quiz`;
    
    // Add a data-category attribute
    quizItem.setAttribute('data-category', quiz.category);
    
    // Add event listener to store the category in localStorage when clicked
    quizItem.addEventListener('click', function() {
      localStorage.setItem('quizCategory', quiz.category);
    });

    quizListContainer.appendChild(quizItem);
  });

  const quizCount = quizzes.length;
  document.getElementById('all-quiz-count').innerText = `${quizCount}`;
}

generateQuizList();
