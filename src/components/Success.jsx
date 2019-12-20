import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
export class Success extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="CONGRATULATIONS!!!" />
          <h1>Thank you for your subscription</h1>
          <p>you will get an further instruction</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
