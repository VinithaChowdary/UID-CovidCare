const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'nodejs',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the MySQL database');
});

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

app.get('/index', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/index', function(req, res) {
  // Handle the redirect after successful login
  res.redirect('/index');
});

app.get('/login', (req, res) => {
  // Render the login page (login.html)
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      throw err;
    }

    if (result.length > 0) {
      // Valid credentials, redirect to /index
      res.redirect('/index');
    } else {
      // Invalid credentials, redirect back to login page with an error message
      res.redirect('/login?error=1');
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
