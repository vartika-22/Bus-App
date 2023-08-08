import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

export default class UserTableRow extends Component {
  constructor(props) {
    super(props)
    this.deleteUser = this.deleteUser.bind(this)
  }

  deleteUser() {
    axios
      .delete(
        'http://localhost:4000/users/delete-user/' + this.props.obj._id,
      )
      .then((res) => {
        console.log('User successfully deleted!')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.password}</td>
        <td>
          <Link
            className="edit-link" path={"product/:id"}
            to={'/edit-user/' + this.props.obj._id}
          >
            Edit
          </Link>
          <Button onClick={this.deleteUser} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    )
  }
}
