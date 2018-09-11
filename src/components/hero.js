import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from '../logo.svg';
import '../App.css';
import * as actions from "../store/actions";

class Hero extends Component {

  componentDidMount() {
      this.props.fetchHero()
  }

  render() {
    return (
      <section className="hero">
        <h3>Hero</h3>
      </section>
    );
  }
}

const mapStateToProps = ({ DATA }) => {
  return {
    DATA
  };
};

export default connect(mapStateToProps, actions)(Hero);