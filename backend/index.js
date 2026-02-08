/**
 * ==============================================================================
 * 👋 Hi Yossi!
 * * Just a quick note: I removed the 'node_modules' folders to keep the zip file 
 * light and easy to download. 
 * * You'll just need to run specific command in both 'backend' and 'frontend' 
 * folders to get everything running again:
 * * > npm install
 * * Thanks!
 * ==============================================================================
 */



const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '19991999',
  database: 'server_management'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to DB:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.get('/api/servers', (req, res) => {
  const query = `
    SELECT servers.*, companies.name as companyName 
    FROM servers 
    JOIN companies ON servers.company_id = companies.id
  `;
  
  connection.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.post('/api/status/server/api', (req, res) => {
  const { id, status } = req.body;
  const sql = "UPDATE servers SET status = ? WHERE id = ?";
  
  connection.query(sql, [status, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Status changed', id, status });
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});