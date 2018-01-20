console.log('may node be with you');
console.log('woo');

const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

const APIS_COLLECTION = 'contacts';

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('listenting on 300');
});
