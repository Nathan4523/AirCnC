/**
 * aqui vem a inicializacao do servidor
 */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

/**
  * Para forçar o uso em json
  */
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://dev:dev@cluster0-axc3j.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
   useUnifiedTopology: true 
});

app.use('/files', express.static(path.resolve(__dirname, '../', 'uploads')));
app.use(routes);

app.listen(3333);
