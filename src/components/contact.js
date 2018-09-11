import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from '../logo.svg';
import '../App.css';
import * as actions from "../store/actions";

class Contact extends Component {

  render() {
    return (
      <section className="contact">
        <h3>Contact</h3>
      </section>
    );
  }
}


export default Contact;