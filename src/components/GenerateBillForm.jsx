import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class GenerateBillForm extends Component {

  state = {
    custName: '',
    custNumber: '',
    dateOut: '',
    blouseCount: '',
    chudidaarCount: '',
    dressCount: '',
    lowersCount: '',
    amount: '',
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
     fetch('/generate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state),
    });
  };

  render() {

    const { classes } = this.props;

    const {
      custName,
      custNumber,
      dateOut,
      blouseCount,
      chudidaarCount,
      dressCount,
      lowersCount,
      amount
    } = this.state;

    return (
      <div className={classes.container}>
        <form className={classes.form}>
          <TextField className={classes.item_l}
            label="Name"
            variant="outlined"
            value={custName}
            name="custName"
            onChange={this.handleInputChange}
          />
        <TextField className={classes.item_l}
            label=" Customer Number"
            variant="outlined"
            value={custNumber}
            name="custNumber"
            onChange={this.handleInputChange}
          />
        <TextField className={classes.item_l}
            label="Date-Out"
            type="date"
             variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            value={dateOut}
            name="dateOut"
            onChange={this.handleInputChange}
          />
        <TextField className={classes.item_l}
            label="Bill Amount"
            variant="outlined"
            value={amount}
            name="amount"
            onChange={this.handleInputChange}
          />
        <TextField className={classes.item_s}
            label="Blouse"
            type="number"
            variant="outlined"
            value={blouseCount}
            name="blouseCount"
            onChange={this.handleInputChange}
          />
        <TextField className={classes.item_s}
            label="Chudidaar"
            type="number"
            variant="outlined"
            value={chudidaarCount}
            name="chudidaarCount"
            onChange={this.handleInputChange}
          />
        <TextField className={classes.item_s}
            label="Dress"
            type="number"
            variant="outlined"
            value={dressCount}
            name="dressCount"
            onChange={this.handleInputChange}
          />
          <TextField className={classes.item_s}
              label="Lowers"
              type="number"
              variant="outlined"
              value={lowersCount}
              name="lowersCount"
              onChange={this.handleInputChange}
          />
        <Button
          variant="contained"
          size="small"
          href="#outlined-buttons"
          className={classes.but}
          onClick={this.handleSubmit}
        >
            Generate
        </Button>
        </form>
      </div>
    )
  }
}

export default withStyles({
  container: {
    position: "relative",
    height:"100%",
    width: "100%",
    background: "yellow",
    borderRadius: "1%",

  },
  form : {
    display: "grid",
    "grid-template-columns": "repeat(4, 1fr)",
    "grid-template-rows": "repeat(7, 1fr)",
    padding: "4%",
    "grid-gap":"12px",
  },
  item_l: {
    "grid-column": "1 / 5"
  },
  item_s: {
    "grid-row": "4",
  },
  but: {
    "grid-row": "7",
    "grid-column": "4"
  }
})(GenerateBillForm)
