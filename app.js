// import functions and grab DOM elements
const welcomeElement = document.getElementById('welcome');
const welcomeButton = document.getElementById('change-button');
const lowerButton = document.getElementById('lower-button');
const lowerPara = document.getElementById('lower-para');
const paraInput = document.getElementById('para-input');
const middleButton = document.getElementById('middle-button')
const upperPara = document.getElementById('upper-para');

// initialize state

// set event listeners to update state and DOM
welcomeButton.addEventListener('click', () => {
    console.log('they clicked!');
    welcomeElement.style.color = 'magenta';
    welcomeButton.textContent = 'How Dare You';
})

middleButton.addEventListener('click', () => {
    upperPara.textContent = paraInput.value;
    upperPara.style.color = 'green';
})


lowerButton.addEventListener('click', () => {
    console.log('clicked lower button');
    lowerButton.textContent = 'You Monster';
    lowerPara.style.transform = 'rotate(350deg)';
    lowerPara.textContent = "I can't believe you clicked! Now you've done it..."
    lowerPara.style.color = 'red'

})

// PLAN. Add button, when user clicks button, change style of welcome element