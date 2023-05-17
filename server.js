require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 3000;

const studentRoutes = require('./src/student/routes');

app.use(express.json());

app.use('/api/v1/students', studentRoutes);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));