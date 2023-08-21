const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res) => {
  db.query('SELECT * FROM appointments', (err, results) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).send('Database error');
    } else {
      res.render('index', { appointments: results });
    }
  });
});

router.post('/', (req, res) => {
  const { name, phone, email, date } = req.body;
  db.query(
    'INSERT INTO appointments (name, phone, email, date) VALUES (?, ?, ?, ?)',
    [name, phone, email, date],
    (err, result) => {
      if (err) {
        console.error('Database error:', err);
        res.status(500).send('Database error');
      } else {
        res.redirect('/appointments');
      }
    }
  );
});

router.get('/delete/:id', (req, res) => {
  const appointmentId = req.params.id;
  db.query('DELETE FROM appointments WHERE id = ?', [appointmentId], (err) => {
    if (err) {
      console.error('Database error:', err);
    }
    res.redirect('/appointments');
  });
});

router.get('/json', (req, res) => {
  db.query('SELECT * FROM appointments', (err, results) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).send('Database error');
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
