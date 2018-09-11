import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from '../logo.svg';
import '../App.css';
import * as actions from "../store/actions";

class About extends Component {

  componentDidMount() {
      this.props.fetchAbout()
  }

  render() {
    return (
      <section className="about">
        <h3>About</h3>
      </section>
    );
  }
}

const mapStateToProps = ({ DATA }) => {
  return {
    DATA
  };
};

export default connect(mapStateToProps, actions)(About);