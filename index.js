require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const db = require('./database/dbConfig.js');
const workers = require('./employees/helpers.js')

const secret = process.env.JWT_SECRET || 'I like cookies;'

const server = express()

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.send("It's alive!");
});


const port = process.env.PORT || 5002;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));


