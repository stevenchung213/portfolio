import React from 'react';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

export default class GitHubFetcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      repos: [],
      searchedRepos: []
    };

  }

  search (term) {
    $.post('/repos', term, (res) => {
      console.log(res);
      this.setState({repos: res});
      console.log('POST REQ SERVED');
    }, 'json');
  }

  componentDidMount() {
    $.get('/repos', (res) => {
      this.setState({repos: res });
    }, 'json');
  }

  render () {
    return (<div>
      <h1 id="title">Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <div className="table-responsive-sm">
        <table className="table table-sm">
          <thead className="thead">
          <tr>
            <th scope="col"></th>
            <th scope="col" style={{width: "12em"}}>github handle</th>
            <th scope="col">repo name</th>
            <th scope="col">repo description</th>
            <th scope="col" style={{width: "7em"}}>fork count</th>
            <th scope="col" style={{width: "8em"}}>last updated</th>
          </tr>
          </thead>
          <tbody>
            {this.state.repos.map((repo, i) => {
              return <RepoList repos={repo} key={i}/>
            })}
          </tbody>
        </table>
      </div>
    </div>)
  }
}

