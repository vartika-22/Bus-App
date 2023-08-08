import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "../Home";

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class NavBeforeLogin extends React.Component {
  state = {};
  render() {
    return (
    <div>
        <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-user'} className="nav-link">
                    Create-User
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/user-list'} className="nav-link">
                    User-List
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/create-bus'} className="nav-link">
                    Add-Bus
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/bus-list'} className="nav-link">
                    Bus-List
                  </Link>
                </Nav>
                </Nav>
        
    </div>    
      
    );
  }
}

export default NavBeforeLogin;
