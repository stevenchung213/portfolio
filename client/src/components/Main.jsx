import React, {Fragment} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NavBar from './NavBar.jsx';
import Map from './Map/components/Main.jsx';
import GitHubFetcher from './GitHubFetcher/index.jsx';

const AppBox = styled.div`
  padding: 10% 10% 10% 10%;
`;

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'about'
    };
  }

  componentDidMount() {

  }

  changeView = (option) => {
    this.setState({
      view: option
    });
  };

  renderView = () => {
    const {view} = this.state;

    // if (view === 'about') {
    //   return <About/>
    // }
    if (view === 'app1') {
      return <Map/>
    }
    if (view === 'app2') {
      return <GitHubFetcher/>
    }
    if (view === 'app3') {
      return <App3/>
    }

  };

  render () {
    return (
      <Fragment>
        <NavBar handleClick={this.changeView}/>
        <AppBox>
          <div className="apps">
            {this.renderView()}
          </div>
        </AppBox>
      </Fragment>
    )
  }
};
