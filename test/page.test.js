const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom'); // Import JSDOM

// Load the HTML file for testing
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const dom = new JSDOM(html);
const { window } = dom;

// Set the document for the window
global.document = window.document;

// Set up the form submission handler again in the test (if needed)
const form = window.document.querySelector('#nameForm');
const input = window.document.querySelector('#name');
const welcomeMessage = window.document.querySelector('#welcomeMessage');

form.onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = input.value.trim();
    if (name) {
        welcomeMessage.textContent = `Hello, ${name}!`;
    } else {
        alert('Name is required!');
        return false; // Prevent submission if name is empty
    }
};

test('Button should trigger alert with Hi', () => {
    const button = window.document.querySelector('#alertBtn');
    expect(button.getAttribute('onclick')).toBe('sayHi()');
});

// test('Form submission should alert when name is empty', () => {
//   input.value = '';

//     // Simulate form submission
//     form.onsubmit(new Event('submit')); // Pass a new event object

//     const button = window.document.querySelector('#alertBtn');
//     expect(button.getAttribute('onclick')).toBe('Name is required!');
// });

test('Form submission should display welcome message', () => {
    input.value = 'John';

    // Simulate form submission
    form.onsubmit(new Event('submit')); // Pass a new event object

    expect(welcomeMessage.textContent).toBe('Hello, John!');
});

