// Timer & Redirecting Script 

let timer = 20;
const timerText = document.getElementById("timer");
const redirectLink = document.getElementById("redirect-link");
const stopButton = document.getElementById("stop-button");
let countdown;

function startTimer() {
    countdown = setInterval(() => {
        if (timer > 0) {
            timer--;
            timerText.textContent = timer;
        } else {
            clearInterval(countdown);
            window.location.href = redirectLink.href;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
    document.getElementById("timer-text").textContent = "Redirecting stopped.";
    stopButton.style.display = "none"
}

startTimer();
stopButton.addEventListener("click", stopTimer);


// Mobile NavMenu Script 

function openMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    const menuOpenBtn = document.getElementById("menu-open-btn");
    const menuCloseBtn = document.getElementById("menu-close-btn");

    mobileMenu.classList.remove("-translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    menuOpenBtn.classList.add("hidden");
    menuCloseBtn.classList.remove("hidden");
}

function closeMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    const menuOpenBtn = document.getElementById("menu-open-btn");
    const menuCloseBtn = document.getElementById("menu-close-btn");
    
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("-translate-x-full");
    menuCloseBtn.classList.add("hidden");
    menuOpenBtn.classList.remove("hidden");
}