const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

// selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")



const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }

    passBox.innerText = truncateString(password, totalChar.value);
}


generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function () {
        generatePassword();
    }

)


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}

function copyPassword() {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = passBox.innerText; // Get the text from passBox
    document.body.appendChild(tempTextArea); // Append the textarea to the body
    tempTextArea.select(); // Select the text
    document.execCommand("copy"); // Copy the selected text
    document.body.removeChild(tempTextArea); // Remove the temporary textarea
    const copyStatus = document.getElementById("copyStatus");
    copyStatus.style.display = "inline"; // Show the copied message
    // Hide the message after 2 seconds
    setTimeout(() => {
        copyStatus.style.display = "none";
    }, 2000);
}

const copyStatus = document.getElementById("copyStatus");
copyStatus.style.display = "inline"; // Show the copied message
// Hide the message after 2 seconds
setTimeout(() => {
    copyStatus.style.display = "none";
}, 2000);
