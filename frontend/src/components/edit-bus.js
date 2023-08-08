import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class EditBus extends Component {

  constructor(props) {
    super(props)

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
  componentDidMount() {
    axios.get('http://localhost:4000/bus/get-bus/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          Busid: res.data.Busid,
          source: res.data.source,
         destination: res.data.destination,
         noOfSeat: res.data.noOfSeat,
         fare: res.data.fare
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('http://localhost:4000/bus/update-bus/' + this.props.match.params.id, busObject)
      .then((res) => {
        console.log(res.data)
        console.log('Bus successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/bus-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Busid">
          <Form.Label>Bus-Id</Form.Label>
          <Form.Control type="text" value={this.state.Busid} onChange={this.onChangeBusid} />
        </Form.Group>

        <Form.Group controlId="Source">
          <Form.Label>Source</Form.Label>
          <Form.Control type="text" value={this.state.source} onChange={this.onChangeSource} />
        </Form.Group>

        <Form.Group controlId="Destination">
          <Form.Label>Destination</Form.Label>
          <Form.Control type="text" value={this.state.destination} onChange={this.onChangeDestination} />
        </Form.Group>

        <Form.Group controlId="Seats">
          <Form.Label>Seats</Form.Label>
          <Form.Control type="text" value={this.state.noOfSeat} onChange={this.onChangeNoOfSeat} />
        </Form.Group>

        <Form.Group controlId="Fare">
          <Form.Label>Fare</Form.Label>
          <Form.Control type="text" value={this.state.fare} onChange={this.onChangeFare} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" className=" mt-4submit-btn">
          Update-BusDeatails
        </Button>
      </Form>
    </div>);
  }
}