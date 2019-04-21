import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import GenerateBillForm from '../../components/GenerateBillForm';

class GenerateBill extends Component {
  render() {

    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Typography variant="h6" gutterBottom>
          Bill Details
        </Typography>
        <GenerateBillForm />
      </div>
    )
  }
}

export default withStyles({
  '@global': {
    html: {
      width: "100%",
      height: "100%",
    },
    body: {
      width: "100%",
      height: "100%",
      background: "#282c34",
    },
  },
  container: {
    position: "absolute",
    width: "50%",
    left: "25%",
    top: "20%",
    padding:"2%",
    background: "#343A40",
    borderRadius: "5px",
  },
  
})(GenerateBill)
