const fs = require('fs');
const path = require('path');

// Load the HTML file for testing
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();

// Import JSDOM if you need to simulate DOM elements (e.g., buttons, forms)
const { JSDOM } = require('jsdom');
const dom = new JSDOM(html);

test('Button should trigger alert with Hi', () => {
  const button = dom.window.document.querySelector('#alertBtn');
  expect(button.getAttribute('onclick')).toBe('sayHi()');
});

test('Form submission should display welcome message', () => {
  const form = dom.window.document.querySelector('#nameForm');
  const input = dom.window.document.querySelector('#name');
  input.value = 'John';
  form.onsubmit();
  
  const welcomeMessage = dom.window.document.querySelector('#welcomeMessage').textContent;
  expect(welcomeMessage).toBe('Hello, John!');
});

test('Form submission should alert when name is empty', () => {
  const form = dom.window.document.querySelector('#nameForm');
  const input = dom.window.document.querySelector('#name');
  input.value = ''; // Empty input
  const result = form.onsubmit();
  
  expect(result).toBe(false); // Form shouldn't submit if input is empty
});
