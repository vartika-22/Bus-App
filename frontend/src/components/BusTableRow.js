import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

export default class BusTableRow extends Component {
  constructor(props) {
    super(props)
    this.deleteBus = this.deleteBus.bind(this)
  }

  deleteBus() {
    axios
      .delete(
        'http://localhost:4000/bus/delete-bus/' + this.props.obj._id,
      )
      .then((res) => {
        console.log('Bus successfully deleted!')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.Busid}</td>
        <td>{this.props.obj.source}</td>
        <td>{this.props.obj.destination}</td>
        <td>{this.props.obj.noOfSeat}</td>
        <td>{this.props.obj.fare}</td>
        <td>
           <a href='/booking'> <Button className='booking-btn' >Book Now</Button></a>
        </td>
        <td>
          <Link
            className="edit-link" path={"product/:id"}
            to={'/edit-bus/' + this.props.obj._id}
          >
            Edit
          </Link>
          <Button onClick={this.deleteBus} size="sm" variant="danger" className='del-btn' >
            Delete
          </Button>
        </td>
        
      </tr>
    )
  }
}
