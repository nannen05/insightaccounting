import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from '../logo.svg';
import '../App.css';
import * as actions from "../store/actions";

class Services extends Component {

  componentDidMount() {
      this.props.fetchServices()
  }

  render() {
    return (
      <section className="services">
        <h3>Services</h3>
      </section>
    );
  }
}

const mapStateToProps = ({ DATA }) => {
  return {
    DATA
  };
};

export default connect(mapStateToProps, actions)(Services);
