import React from 'react';
import './Navigator.css';


function Navigator(props) {
	return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark scrolling-navbar">
          <a className="navbar-brand" style={{color:"#EE5F46" }} href="/"><strong>Employ{'{err}'}</strong></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div id="caretDiv" style={{backgroundColor: "rgba(0,0,0,0.93)"}}>  
            <i  className={`fa fa-caret-right text-primary ${props.hide}`} id="caret" 
                onClick={() => props.navOpen ? props.closeNav() : props.openNav()}/>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>
            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item active">
               <strong> <a className="nav-link" style={{display: props.none}} href="http://localhost:8080/auth/linkedin">Login</a></strong>
              </li>
              <li className="nav-item active">
                <strong><a className="nav-link" style={{display: props.home}} 
                            onClick={() => props.navOpen ? props.closeNav() : props.openNav()}>Profile</a></strong>
              </li>
              <li className="nav-item active">
                <strong><a className="nav-link" style={{display: props.home}}href="http://localhost:8080/auth/logout">Logout</a></strong>
              </li>
            </ul>
          </div>
        </nav>
	)
}

export default Navigator;