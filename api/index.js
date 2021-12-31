const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const authRoute = require('./routes/auth');

dotenv.config();

// const {MongoClient} = require('mongodb');
// const uri =
//   'mongodb+srv://RKPuram123:RKPuram123@cluster0.wuj7s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// client.connect(err => {
//   const collection = client.db('test').collection('devices');
//   // perform actions on the collection object
//   client.close();
// });

mongoose.connect(
  process.env.MONGO_URL,
  {useNewUrlParser: true, useUnifiedTopology: true},
  () => {
    console.log('Mongodb connected');
  },
);

const API_URL = '/api/'; //for the api url call

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use(`${API_URL}auth`, authRoute);

app.listen(`${process.env.PORT}`, () => {
  console.log('Server Running');
});
