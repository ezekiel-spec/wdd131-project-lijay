// Function to display the current date and time
function displayDateTime() {
    const dateTime = new Date();
    document.getElementById("dateTime").innerHTML = dateTime.toLocaleString();
}

// Function to validate the form
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    return true;
}

// Function to store data in localStorage
function storeData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("message", message);
}

// Function to retrieve data from localStorage
function retrieveData() {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const message = localStorage.getItem("message");

    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("message").value = message;
}

// Event listener for the form submission
document.getElementById("form").addEventListener("submit", function(event) {
    if (validateForm()) {
        storeData();
        alert("Thank you for your message!");
    } else {
        event.preventDefault();
    }
});

// Event listener for the page load
window.addEventListener("load", function() {
    displayDateTime();
    retrieveData();
});

// Function to use template literals
function useTemplateLiterals() {
    const name = "John";
    const age = 30;
    const sentence = `My name is ${name} and I am ${age} years old.`;
    console.log(sentence);
}

// Function to use JavaScript objects
function useJavaScriptObjects() {
    const person = {
        name: "John",
        age: 30,
        occupation: "Developer"
    };
    console.log(person);
}

// Function to use JavaScript arrays and array methods
function useJavaScriptArrays() {
    const colors = ["red", "green", "blue"];
    console.log(colors);
    colors.push("yellow");
    console.log(colors);
}

// Call the functions
useTemplateLiterals();
useJavaScriptObjects();
useJavaScriptArrays();
