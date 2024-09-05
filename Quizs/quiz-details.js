document.addEventListener('DOMContentLoaded', () => {
    // Retrieve quiz results from localStorage
    const results = JSON.parse(localStorage.getItem('quizResults'));

    if (results) {
        // Display overall results
        document.getElementById('score').textContent = `Your Score: ${results.percentage}%`;
        document.getElementById('attemptedQuestions').textContent = `Questions Attempted: ${results.attempted}`;
        document.getElementById('incorrectAnswers').textContent = `Incorrect Answers: ${results.incorrect}`;
        document.getElementById('skippedQuestions').textContent = `Skipped Questions: ${results.skipped}`;

        // Display detailed question results
        const questionDetails = results.details.map((detail, index) => {
            const statusClass = detail.status === 'correct' ? 'correct' :
                                detail.status === 'incorrect' ? 'incorrect' : 'skipped';

            return `<p>Question ${index + 1}: ${detail.question} - <span class="${statusClass}">${detail.status.charAt(0).toUpperCase() + detail.status.slice(1)}</span></p>`;
        }).join('');

        document.getElementById('questionDetails').innerHTML = questionDetails;

        // Display detailed attempted question results
        const attemptedQuestionsDetails = results.details
            .filter(detail => detail.status === 'correct' || detail.status === 'incorrect')
            .map((detail, index) => {
                const statusClass = detail.status === 'correct' ? 'correct' : 'incorrect';
                return `<p>Question ${index + 1}: ${detail.question} - <span class="${statusClass}">${detail.status.charAt(0).toUpperCase() + detail.status.slice(1)}</span></p>`;
            }).join('');

        document.getElementById('attemptedQuestionsDetails').innerHTML = attemptedQuestionsDetails;

        // Display detailed incorrect question results
        const incorrectQuestionsDetails = results.details
            .filter(detail => detail.status === 'incorrect')
            .map((detail, index) => {
                return `<p>Question ${index + 1}: ${detail.question} - <span class="incorrect">Incorrect</span></p>`;
            }).join('');

        document.getElementById('incorrectQuestionsDetails').innerHTML = incorrectQuestionsDetails;

        // Display detailed skipped question results
        const skippedQuestionsDetails = results.details
            .filter(detail => detail.status === 'skipped')
            .map((detail, index) => {
                return `<p>Question ${index + 1}: ${detail.question} - <span class="skipped">Skipped</span></p>`;
            }).join('');

        document.getElementById('skippedQuestionsDetails').innerHTML = skippedQuestionsDetails;
    } else {
        document.body.innerHTML = '<p>No results found.</p>';
    }
});



// Show only attempted questions
function showAttemptedQuestions() {
    const attemptedSection = document.getElementById('attemptedQuestionsDetails');
    const incorrectSection = document.getElementById('incorrectQuestionsDetails');
    const skippedSection = document.getElementById('skippedQuestionsDetails');
    const questionDetailsSection = document.getElementById('questionDetails');

    // Check if the attemptedQuestionsDetails section is already visible
    const isVisible = attemptedSection.style.display === 'block';

    if (isVisible) {
        // If it is visible, hide all sections
        attemptedSection.style.display = 'none';
        incorrectSection.style.display = 'none';
        skippedSection.style.display = 'none';
        questionDetailsSection.style.display = 'none';
    } else {
        // If it is not visible, show the attemptedQuestionsDetails section
        attemptedSection.style.display = 'block';
        incorrectSection.style.display = 'none';
        skippedSection.style.display = 'none';
        questionDetailsSection.style.display = 'none';
    }
}

// Show only incorrect questions
function showIncorrectQuestions() {
    const attemptedSection = document.getElementById('attemptedQuestionsDetails');
    const incorrectSection = document.getElementById('incorrectQuestionsDetails');
    const skippedSection = document.getElementById('skippedQuestionsDetails');
    const questionDetailsSection = document.getElementById('questionDetails');

    // Check if the incorrectQuestionsDetails section is already visible
    const isVisible = incorrectSection.style.display === 'block';

    if (isVisible) {
        // If it is visible, hide all sections
        attemptedSection.style.display = 'none';
        incorrectSection.style.display = 'none';
        skippedSection.style.display = 'none';
        questionDetailsSection.style.display = 'none';
    } else {
        // If it is not visible, show the incorrectQuestionsDetails section
        attemptedSection.style.display = 'none';
        incorrectSection.style.display = 'block';
        skippedSection.style.display = 'none';
        questionDetailsSection.style.display = 'none';
    }
}

// Show only skipped questions
function showSkippedQuestions() {
    const attemptedSection = document.getElementById('attemptedQuestionsDetails');
    const incorrectSection = document.getElementById('incorrectQuestionsDetails');
    const skippedSection = document.getElementById('skippedQuestionsDetails');
    const questionDetailsSection = document.getElementById('questionDetails');

    // Check if the skippedQuestionsDetails section is already visible
    const isVisible = skippedSection.style.display === 'block';

    if (isVisible) {
        // If it is visible, hide all sections
        attemptedSection.style.display = 'none';
        incorrectSection.style.display = 'none';
        skippedSection.style.display = 'none';
        questionDetailsSection.style.display = 'none';
    } else {
        // If it is not visible, show the skippedQuestionsDetails section
        attemptedSection.style.display = 'none';
        incorrectSection.style.display = 'none';
        skippedSection.style.display = 'block';
        questionDetailsSection.style.display = 'none';
    }
}


// Toggle the visibility of all question details
function toggleDetails() {
    const detailsSection = document.getElementById('questionDetails');
    detailsSection.style.display = detailsSection.style.display === 'none' ? 'block' : 'none';
}

function goback(){
    window.history.back();
}