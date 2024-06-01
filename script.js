const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
const verifyRegex = /^1?\s?(\d{3}|\(\d{3}\))[\s-]?\d{3}[\s-]?\d{4}$/;

const verifyNumber = num => {
    verifyRegex.test(num) ? 
        results.innerHTML+= `<p class="result valid">Valid US number: <span>${num}</span></p>` : 
        results.innerHTML+= `<p class="result invalid">Invalid US number: <span>${num}</span></p>`
    userInput.value = '';
}

const checkEmpty = (e) => {
    e.preventDefault();
    if (!userInput.value) { 
        alert("Please provide a phone number");
    } else {
        verifyNumber(userInput.value);
    }
}

const clearResults = (e) => {
    e.preventDefault();
    results.innerHTML = '';
}

const checkKeydown = (e) => {
    
} 

document.addEventListener("keydown", checkKeydown);
checkButton.addEventListener("click", checkEmpty);
clearButton.addEventListener("click", clearResults);