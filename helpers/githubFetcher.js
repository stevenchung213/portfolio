const {repo, db} = require('../db/index');
const request = require('request');
const api = require('../client/src/components/GitHubFetcher/config/api');

const getReposByUsername = (userHandle, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${userHandle}/repos`,
    method: 'GET',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${api}`
    }
  };
  request.get(options, (err, response) => {
    if (err) {
      callback(err);
    }
    let parsed = JSON.parse(response.body);
    // add callback paramater on getReposByUsername to do something with the result
    callback(null, parsed);
  });

};

// this function should save a repo or repos to the MongoDB
const save = (object) => {
  // This function should save a repo or repos to the MongoDB
  repo.create(object, (err) => {
    if (err) {
      console.log('ERROR ERROR ERROR \n', err);
      repo.update(object);
    } else {
      console.log('Inserted ', object, ' successfully!!');
    }
  });
};

// this function should return top 25 repos from MongoDB
const top25 = (callback) => {
  repo.find({}).sort({forks_count: -1}).limit(25).exec((err, docs) => {
    if (err) {
      callback(err, docs);
    } else {
      callback(null, docs);
    }
  });
};

module.exports.getReposByUsername = getReposByUsername;
module.exports.save = save;
module.exports.top25 = top25;
