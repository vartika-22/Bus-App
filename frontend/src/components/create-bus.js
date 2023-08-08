import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../App.css'

export default class CreateBus extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeBusid = this.onChangeBusid.bind(this);
    this.onChangeSource = this.onChangeSource.bind(this);
    this.onChangeDestination= this.onChangeDestination.bind(this);
    this.onChangeNoOfSeat = this.onChangeNoOfSeat.bind(this);
    this.onChangeFare = this.onChangeFare.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      Busid: '',
      source: '',
      destination: '',
      noOfSeat:'',
      fare:'',
    }
  }

  onChangeBusid(e) {
    this.setState({ Busid: e.target.value })
  }

  onChangeSource(e) {
    this.setState({ source: e.target.value })
  }

  onChangeDestination(e) {
    this.setState({ destination: e.target.value })
  }
  onChangeNoOfSeat(e) {
    this.setState({ noOfSeat: e.target.value })
  }
  onChangeFare(e) {
    this.setState({ fare: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const busObject = {
      Busid: this.state.Busid,
      source: this.state.source,
      destination: this.state.destination,
      noOfSeat:this.state.noOfSeat,
      fare: this.state.fare
    };
    axios.post('http://localhost:4000/bus/create-bus', busObject)
      .then(res => console.log(res.data));

    this.setState({ Busid: '', source: '', destination: '', noOfSeat:'',fare:'' })
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <h2 className="h-2">Add-Bus</h2>
        <Form.Group controlId="Busid">
          <Form.Label>Bus-Id</Form.Label>
          <Form.Control type="text" value={this.state.Busid} onChange={this.onChangeBusid} placeholder="Enter Bus Id. . ."/>
        </Form.Group>

        <Form.Group controlId="source">
          <Form.Label>Source</Form.Label>
          <Form.Control type="text" value={this.state.source} onChange={this.onChangeSource} placeholder="Enter Source. . ." />
        </Form.Group>

        <Form.Group controlId="destination">
          <Form.Label>Destination</Form.Label>
          <Form.Control type="text" value={this.state.destination} onChange={this.onChangeDestination} placeholder="Enter Destination. . . "/>
        </Form.Group>

        <Form.Group controlId="Seats">
          <Form.Label>Seats</Form.Label>
          <Form.Control type="number" value={this.state.noOfSeat} onChange={this.onChangeNoOfSeat} placeholder="No.of Seats available"/>
        </Form.Group>

        <Form.Group controlId="Fare">
          <Form.Label>Fare</Form.Label>
          <Form.Control type="number" value={this.state.fare} onChange={this.onChangeFare} placeholder="Enter Fare" />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4 submit-btn">
          Add-Bus
        </Button>
      </Form>
    </div>);
  }
}