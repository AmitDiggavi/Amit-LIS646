window.onload = function () {
    console.log("Page loaded successfully!");
    
    // Call your functions here
    greetUser();
};

// Example function
function greetUser() {
    let userName = prompt("What's your name?");
    alert("Hello, " + userName + "! Welcome to the site.");
}
