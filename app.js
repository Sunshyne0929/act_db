const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'it'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Route to display the form and data
app.get('/', (req, res) => {
    connection.query('SELECT * FROM ts', (err, results) => {
        if (err) throw err;
        res.render('index', { data: results });
    });
});

// Route to save form data to the database and redirect to the table
app.post('/save', (req, res) => {
    const { lastname, firstname, email, gender } = req.body;
    const query = 'INSERT INTO ts (lastname, firstname, email, gender) VALUES (?, ?, ?, ?)';
    
    connection.query(query, [lastname, firstname, email, gender], (err) => {
        if (err) throw err;
        // Redirect to home page after saving data
        res.redirect('/');
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
