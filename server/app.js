const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const db = require('./server/database');
const appointmentsRouter = require('./routes/appointments');
app.use('/appointments', appointmentsRouter);

db.execute('SELECT * FROM appointments_db')
.then(result=> {})
.catch(err => {
    console.log(err);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
