import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

class Landing extends Component {
  render() {

    const { classes } = this.props;

    return (
      <div className="row">
        <div className="col-md-4"></div>
        <div className={`col-md-4 ${classes.heading}`}>Welcome</div>
        <div className="col-md-4"></div>
      </div>
    )
  }
}

export default withStyles({
  '@global': {
    html: {
      width: "100%",
    },
    body: {
      width: "100%",
      background: "#282c34",
    },
  },
  heading: {
    fontFamily: "Roboto",
    fontWeight: 500,
    color: "#ffffff",
    lineHeight: "1em",
    fontSize: "5em",
    textAlign:"center",
  }
})(Landing)
