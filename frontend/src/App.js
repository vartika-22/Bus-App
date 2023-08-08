import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateUser from './components/create-user.component'
import EditUser from './components/edit-user.component'
import UserList from './components/user-list.component'
import CreateBus from './components/create-bus'
import EditBus from './components/edit-bus'
import BusList from './components/buslist'
import Home from './components/Home/Home'
import Login from './components/Home/Login/Login'
import Signin from './components/Home/Login/SignUp'
import NavBeforeLogin from './components/Home/navbar/navbar'
import Booking from './components/Booking/Booking'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar variant="dark" className='navbar1'>
            <Container>
              <Navbar.Brand className='nav'>
                <Link to={'/login'} className="nav-link">
                  Bus-Booking
                </Link>
              </Navbar.Brand>

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
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <Login {...props} />}
                  />
                  <Route
                    exact
                    path="/home"
                    component={(props) => <Home {...props} />}
                  />
                  <Route
                    exact
                    path="/signup"
                    component={(props) => <Signin {...props} />}
                  />
                  <Route
                    exact
                    path="/login"
                    component={(props) => <Login {...props} />}
                  />
                  <Route
                    exact
                    path="/create-user"
                    component={(props) => <CreateUser {...props} />}
                  />

                  <Route
                    exact
                    path="/edit-user/:id"
                    component={(props) => <EditUser {...props} />}
                  />
                  <Route
                    exact
                    path="/user-list"
                    component={(props) => <UserList {...props} />}
                  />

                  <Route
                    exact
                    path="/create-bus"
                    component={(props) => <CreateBus {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-bus/:id"
                    component={(props) => <EditBus {...props} />}
                  />
                  <Route
                    exact
                    path="/bus-list"
                    component={(props) => <BusList {...props} />}
                  />
                  <Route
                    exact
                    path="/booking"
                    component={(props) => <Booking {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
