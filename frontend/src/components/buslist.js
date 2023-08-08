import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import BusTableRow from './BusTableRow';
import NavBeforeLogin from "./Home/navbar/navbar";


export default class BusList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      buss: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/bus/')
      .then(res => {
        this.setState({
          buss: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.buss.map((res, i) => {
      return <BusTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (
       
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Bus-Id</th>
            <th>Source</th>
            <th>Destination</th>
            <th>seat</th>
            <th>Fare</th>
            <th></th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>
);

  }
}