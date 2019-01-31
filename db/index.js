const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const mongoURI = 'mongodb://localhost:27017/portfolio';

mongoose.connect(mongoURI, {useNewUrlParser: true})
  .then(() => {
    console.log('mongo database connected successfully @ ' + mongoURI);
  })
  .catch(()=> {
    console.log('error connecting mongo database')
  });

const db = mongoose.connection;

// define schema
const repoSchema = mongoose.Schema({
  _id: Number,
  name: String,
  login: String,
  avatar_url: String,
  description: String,
  forks_count: Number,
  watchers: Number,
  updated_at: String
});

const pinsSchema = mongoose.Schema({
  id: Number,
  note: String,
  position: {
    lat: Number,
    lng: Number
  }
});

// within the repo db, create schema 'repoSchema'
const repo = mongoose.model('repo', repoSchema);
const pins = mongoose.model('pins', pinsSchema);


module.exports.repo = repo;
module.exports.pins = pins;
module.exports.db = db;