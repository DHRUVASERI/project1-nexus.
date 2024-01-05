document.addEventListener('DOMContentLoaded', function () {
   
    const savedCredentials = JSON.parse(localStorage.getItem('userCredentials')) || [];
    document.querySelector('#loginForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get values from the form
        const enteredUsername = document.querySelector('#loginUsername').value;
        const enteredPassword = document.querySelector('#loginPassword').value;

        // Check if entered credentials match any saved credentials
        const user = savedCredentials.find(cred => cred.username === enteredUsername && cred.password === enteredPassword);

        if (user) {
            // Redirect to the welcome page
            window.location.href = 'welcome.html';
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });

    // Add an event listener to the signup form
    document.querySelector('#signupForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get values from the form
        const newUsername = document.querySelector('#signupUsername').value;
        const newPassword = document.querySelector('#signupPassword').value;

        // Check if the username is already taken
        if (savedCredentials.some(cred => cred.username === newUsername)) {
            alert('Username already taken. Please choose a different one.');
            return;
        }

        // Store the new credentials locally
        savedCredentials.push({ username: newUsername, password: newPassword });
        localStorage.setItem('userCredentials', JSON.stringify(savedCredentials));

        alert('Signup successful! You can now log in.');
    });
});
