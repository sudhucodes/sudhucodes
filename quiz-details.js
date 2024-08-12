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
    document.getElementById('attemptedQuestionsDetails').style.display = 'block';
    document.getElementById('incorrectQuestionsDetails').style.display = 'none';
    document.getElementById('skippedQuestionsDetails').style.display = 'none';
    document.getElementById('questionDetails').style.display = 'none';
}

// Show only incorrect questions
function showIncorrectQuestions() {
    document.getElementById('incorrectQuestionsDetails').style.display = 'block';
    document.getElementById('attemptedQuestionsDetails').style.display = 'none';
    document.getElementById('skippedQuestionsDetails').style.display = 'none';
    document.getElementById('questionDetails').style.display = 'none';
}

// Show only skipped questions
function showSkippedQuestions() {
    document.getElementById('skippedQuestionsDetails').style.display = 'block';
    document.getElementById('attemptedQuestionsDetails').style.display = 'none';
    document.getElementById('incorrectQuestionsDetails').style.display = 'none';
    document.getElementById('questionDetails').style.display = 'none';
}

// Toggle the visibility of all question details
function toggleDetails() {
    const detailsSection = document.getElementById('questionDetails');
    detailsSection.style.display = detailsSection.style.display === 'none' ? 'block' : 'none';
}