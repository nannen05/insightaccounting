import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from '../logo.svg';
import '../App.css';
import * as actions from "../store/actions";

class Team extends Component {

  componentDidMount() {
      this.props.fetchTeam()
  }

  render() {
    return (
      <section className="team">
        <h3>Team</h3>
      </section>
    );
  }
}

const mapStateToProps = ({ DATA }) => {
  return {
    DATA
  };
};

export default connect(mapStateToProps, actions)(Team);