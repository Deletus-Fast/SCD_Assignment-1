# Welcome to My Interactive Page

This is an interactive webpage that greets users with a simple alert and allows them to submit their name to receive a personalized welcome message.

## Features

- **Button Alert**: Click the button to see a greeting alert.
- **Name Submission**: Enter your name in the form to receive a personalized message.

## HTML Structure

Here’s the HTML structure of the page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Webpage</title>
</head>
<body>
    <h1>Welcome to My Interactive Page</h1>

    <!-- Button to trigger an alert -->
    <button id="alertBtn" onclick="sayHi()">Click Me</button>

    <!-- Form submission example -->
    <form id="nameForm" onsubmit="return submitForm()">
        <label for="name">Enter your name:</label>
        <input type="text" id="name" name="name">
        <button type="submit">Submit</button>
    </form>

    <!-- Paragraph that updates dynamically -->
    <p id="welcomeMessage"></p>

    <script>
        // Function for button click alert
        function sayHi() {
            alert("Hi!");
        }

        // Form submission handler
        function submitForm() {
            const name = document.getElementById('name').value;
            if (name === "") {
                alert("Please enter your name!");
                return false;
            }
            document.getElementById('welcomeMessage').textContent = "Hello, " + name + "!";
            return false; // Prevent actual form submission
        }
    </script>
</body>
</html>
