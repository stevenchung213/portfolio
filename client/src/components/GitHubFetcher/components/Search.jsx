import React from 'react';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };

  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      term: e.target.value
    });
    console.log(this.state.term);
  }

  search(e) {
    e.preventDefault();
    $('#search').val('');
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div className="input-group mb-3">
        <input id="search" type="text" className="form-control" placeholder="enter a github handle to see user's repos" aria-label="Recipient's username"
               aria-describedby="basic-addon2" onChange={this.onChange.bind(this)}/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={this.search.bind(this)}>submit</button>
        </div>
      </div>
    )
  }
}

export default Search;
