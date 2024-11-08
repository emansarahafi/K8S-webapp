const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'taskmanager'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

app.get('/api/tasks', (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error fetching tasks' });
            return;
        }
        res.json(results);
    });
});

app.post('/api/tasks', (req, res) => {
    const { description } = req.body;
    db.query('INSERT INTO tasks (description) VALUES (?)', [description], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error creating task' });
            return;
        }
        res.status(201).json({ id: result.insertId, description });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
