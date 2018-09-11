import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from './logo.svg';
import './App.css';
import * as actions from "./store/actions";

import Hero from './components/hero'
import Services from './components/services'
import Team from './components/team'
import About from './components/about'
import Contact from './components/contact'

class App extends Component {

  componentDidMount() {
      this.props.fetchTeam()
  }

  render() {
    return (
      <div className="App">
        <Hero />
        <Services />
        <Team />
        <About />
        <Contact />
      </div>
    );
  }
}

const mapStateToProps = ({ DATA }) => {
  return {
    DATA
  };
};

export default connect(mapStateToProps, actions)(App);

