document.addEventListener('DOMContentLoaded', () => {
    const results = JSON.parse(localStorage.getItem('quizResults'));

    if (results) {
        document.getElementById('score').textContent = `Your Score: ${results.percentage}%`;
        document.getElementById('attemptedQuestions').textContent = `Questions Attempted: ${results.attempted}`;
        document.getElementById('incorrectAnswers').textContent = `Incorrect Answers: ${results.incorrect}`;
        document.getElementById('skippedQuestions').textContent = `Skipped Questions: ${results.skipped}`;

        const questionDetails = results.details.map((detail, index) => {
            const statusClass = detail.status === 'correct' ? 'correct' :
                                detail.status === 'incorrect' ? 'incorrect' : 'skipped';
            return `<p>Question ${index + 1}: ${detail.question} - <span class="${statusClass}">${detail.status.charAt(0).toUpperCase() + detail.status.slice(1)}</span></p>`;
        }).join('');
        document.getElementById('questionDetails').innerHTML = questionDetails;

        const attemptedQuestionsDetails = results.details
            .filter(detail => detail.status === 'correct' || detail.status === 'incorrect')
            .map((detail, index) => {
                const statusClass = detail.status === 'correct' ? 'correct' : 'incorrect';
                return `<p>Question ${index + 1}: ${detail.question} - <span class="${statusClass}">${detail.status.charAt(0).toUpperCase() + detail.status.slice(1)}</span></p>`;
            }).join('');
        document.getElementById('attemptedQuestionsDetails').innerHTML = attemptedQuestionsDetails;

        const incorrectQuestionsDetails = results.details
            .filter(detail => detail.status === 'incorrect')
            .map((detail, index) => `<p>Question ${index + 1}: ${detail.question} - <span class="incorrect">Incorrect</span></p>`).join('');
        document.getElementById('incorrectQuestionsDetails').innerHTML = incorrectQuestionsDetails;

        const skippedQuestionsDetails = results.details
            .filter(detail => detail.status === 'skipped')
            .map((detail, index) => `<p>Question ${index + 1}: ${detail.question} - <span class="skipped">Skipped</span></p>`).join('');
        document.getElementById('skippedQuestionsDetails').innerHTML = skippedQuestionsDetails;
    }
});

function showAttemptedQuestions() {
    toggleVisibility('attemptedQuestionsDetails');
}

function showIncorrectQuestions() {
    toggleVisibility('incorrectQuestionsDetails');
}

function showSkippedQuestions() {
    toggleVisibility('skippedQuestionsDetails');
}

function toggleDetails() {
    toggleVisibility('questionDetails');
}

function toggleVisibility(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = section.style.display === 'block' ? 'none' : 'block';
}

function goback() {
    window.history.back();
}
