// index.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Route to display the calculator form
app.get('/', (req, res) => {
  res.send(`
    <h1>Calculator</h1>
    <form action="/calculate" method="post">
      <input type="number" name="num1" placeholder="Enter first number" required>
      <select name="operation">
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <input type="number" name="num2" placeholder="Enter second number" required>
      <button type="submit">Calculate</button>
    </form>
  `);
});

// Route to handle calculation
app.post('/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;
  let result;
  
  switch(operation) {
    case 'add':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case 'subtract':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case 'multiply':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case 'divide':
      result = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      result = 'Invalid operation';
  }
  
  res.send(`<h2>Result: ${result}</h2>`);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
