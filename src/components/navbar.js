import React from 'react'
// react font awsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
function navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">

            <a className="navbar-brand" href="#"> I&C Limited </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} style ={{color:'white'}}/>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Services</a>
                </li> <li className="nav-item">
                  <a className="nav-link" href="#">My Work</a>
                </li> <li className="nav-item">
                  <a className="nav-link" href="#">Contacts</a>
                </li>
              </ul>
              
            </div>
          </div>
      </nav>
    )
}

export default navbar
