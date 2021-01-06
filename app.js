// import functions and grab DOM elements
const welcomeElement = document.getElementById('welcome');
const welcomeButton = document.getElementById('change-button');
const lowerButton = document.getElementById('lower-button');
const lowerPara = document.getElementById('lower-para');

// initialize state

// set event listeners to update state and DOM
welcomeButton.addEventListener('click', () => {
    console.log('they clicked!');
    welcomeElement.style.color = 'magenta';
    welcomeButton.textContent = 'How Dare You';
})

lowerButton.addEventListener('click', () => {
    console.log('clicked lower button');
    lowerButton.textContent = 'You Monster';
    lowerPara.style.transform = 'rotate(30deg)';
    lowerPara.textContent = "I can't believe you clicked! Now you've done it..."
})

// PLAN. Add button, when user clicks button, change style of welcome element