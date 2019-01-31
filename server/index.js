const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const {pins, db} = require('../db/index');
const {getReposByUsername, save, top25} = require('../helpers/githubFetcher');

const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname + '/../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

// Map routes
app.get('/pins', (req, res) => {
  pins.find({}).exec((err, data) => {
    if (err) {
      console.log('GET request ERROR = ', err);
    }
    res.status(200).send(data);
  });
});

app.post('/pins', (req, res) => {
  pins.create(req.body, err => {
    if (err) {
      console.log('mongo create error = ', err);
    }
    console.log('entry added to mongo = ', req.body);
  });
});

app.patch('/pins/:id', (req, res) => {
  let id = req.body.id;
  let updatedNote = req.body.note;
  pins.findOneAndUpdate({id: id}, {note: updatedNote})
    .exec(() => {
      res.status(204);
      console.log('note property updated for document with id=', id);
    });
});

app.delete('/pins/:id', (req, res) => {
  let id = req.body.id;
  pins.find({id: id})
    .remove()
    .exec(() => {
      res.status(202);
      console.log('document with id=', id, ' successfully deleted');
    });
});
// Map routes END


// GitHubFetcher routes
app.post('/repos', function (req, res) {
  let userHandle = Object.keys(req.body)[0];
  getReposByUsername(userHandle, (err, parsedResult) => {
    let allRepos = parsedResult;
    console.log(allRepos);
    let arrayCopy = [];
    allRepos.forEach((repo, i) => {
      let repo_id = parsedResult[i].id;
      let repo_name = parsedResult[i].name;
      let login = parsedResult[i].owner.login;
      let description = parsedResult[i].description;
      let avatar_url = parsedResult[i].owner.avatar_url;
      let fork_count = parsedResult[i].forks_count;
      let watchers = parsedResult[i].watchers;
      let updated_at = parsedResult[i].updated_at;
      let resultObj = {
        _id: repo_id,
        name: repo_name,
        login: login,
        avatar_url: avatar_url,
        description: description,
        forks_count: fork_count,
        watchers: watchers,
        updated_at: updated_at
      };
      save(resultObj);
      arrayCopy.push(resultObj);
    });

    res.status(201).send(arrayCopy);
  });
});

app.get('/repos', (req, res) => {
  top25((err, results) => {res.status(200).send(results)});
});
// GitHubFetcher routes END



app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
