import React, {Fragment} from 'react';

const navBarStyle = {
  position: 'fixed',
  width: '100%',
  backgroundColor: 'transparent',
  zIndex: 999999
};

const name = {
  fontSize: '32px',
  fontFamily: 'Arial'
};

const rightSideBar = {
  textAlign: 'right'
};

const rightSideDropDown = {
  width: '200px',
  float: 'right',
};

const pointer = {
  cursor: 'pointer'
};

const NavBar = (props) => {

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light" style={navBarStyle}>
        <a className="navbar-brand" href="#" style={name}>STEVEN CHUNG</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={rightSideBar}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a id="home" className="nav-link" onClick={()=>props.handleClick('about')} style={pointer}>About <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Applications
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={rightSideDropDown}>
                <a className="dropdown-item" onClick={()=>props.handleClick('app1')} style={pointer}>Google Maps</a>
                <a className="dropdown-item" onClick={()=>props.handleClick('app2')} style={pointer}>Repo Fetcher</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" onClick={()=>props.handleClick('app3')} style={pointer}>App 3</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tech">Tech Stack</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">Resume</a>
            </li>
            {/*<li className="nav-item">*/}
              {/*<a className="nav-link disabled" href="#">Disabled</a>*/}
            {/*</li>*/}
          </ul>
        </div>
      </nav>
    </Fragment>
  )
};

export default NavBar;