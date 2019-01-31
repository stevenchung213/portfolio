import React, {Fragment} from 'react';

const navBarStyle = {
  position: 'fixed',
  width: '100%',
  backgroundColor: 'transparent',
  zIndex: 999999
};

const name = {
  fontSize: '24px',
  fontFamily: 'Montserrat',
  color: '#343a40',
  cursor: 'pointer'
};

const rightSideBar = {
  textAlign: 'right'
};

const rightSideDropDown = {
  width: '200px',
  float: 'right',
};

const pointer = {
  fontFamily: 'Montserrat',
  color: '#343a40',
  cursor: 'pointer'
};

const NavBar = (props) => {

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light" style={navBarStyle}>
        <a className="navbar-brand" onClick={()=>props.handleClick('profile')} style={name}>STEVEN CHUNG</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={rightSideBar}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" style={pointer} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Applications
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={rightSideDropDown}>
                <a className="dropdown-item" onClick={()=>props.handleClick('app1')} style={pointer}>My Map Pins</a>
                <a className="dropdown-item" onClick={()=>props.handleClick('app2')} style={pointer}>Repo Fetcher</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" onClick={()=>props.handleClick('app3')} style={pointer}>App 3</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={()=>props.handleClick('tech')} style={pointer}>Tech Stack</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={()=>props.handleClick('resume')} style={pointer}>Resume</a>
            </li>
            <li className="nav-item">
              <a id="home" className="nav-link" onClick={()=>props.handleClick('contact')} style={pointer}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  )
};

export default NavBar;