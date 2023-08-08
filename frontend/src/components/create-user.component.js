import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateUser extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  onChangeUserName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeUserPassword(e) {
    this.setState({ password: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const userObject = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    axios.post('http://localhost:4000/users/create-user', userObject)
      .then(res => console.log(res.data));

    this.setState({ name: '', email: '', password: '' })
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <h2 className="h-2">Add-User</h2>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeUserName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeUserEmail} />
        </Form.Group>

        <Form.Group controlId="Password">
          <Form.Label>password</Form.Label>
          <Form.Control type="password" value={this.state.password} onChange={this.onChangeUserPassword} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4 submit-btn">
          Create User
        </Button>
      </Form>
    </div>);
  }
}