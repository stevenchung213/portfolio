import React, {Fragment} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NavBar from './NavBar.jsx';
import Map from './Map/components/Main.jsx';
import GitHubFetcher from './GitHubFetcher/index.jsx';
import Resume from './Resume.jsx';
import Contact from './Contact.jsx';
import TechStack from './TechStack.jsx';

const AppBox = styled.div`
  position: absolute; 
  width: 80%;
  height: 80%;
  border: solid 1px #D9E8DD;
  margin: 10% 10% 10% 10%;
  overflow: auto;
`;

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: ''
    };
  }

  changeView = (option) => {
    this.setState({
      view: option
    });
  };

  renderView = () => {
    const {view} = this.state;

    if (view === 'app1') {
      return <Map />
    }
    if (view === 'app2') {
      return <GitHubFetcher/>
    }
    if (view === 'app3') {
      return <App3/>
    }
    if (view === 'tech') {
      return <TechStack/>
    }
    if (view === 'resume') {
      return <Resume/>
    }
    if (view === 'contact') {
      return <Contact/>
    }
    if (view === 'profile') {
      return <Profile/>
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
