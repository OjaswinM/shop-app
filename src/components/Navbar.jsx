import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

class Navbar extends Component {
  render() {

    const { classes } = this.props;

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className={`navbar-brand ${classes.lol}`} to="/">Stylo Boutique</Link>
        <ul className="navbar-nav">
          <li className={`nav-item ${classes.but}`}>
            <Link to="/lol" className={`nav-link`}>
              Generate Bill
            </Link>
          </li>
          <li className={`nav-item ${classes.but}`}>
            <a className="nav-link" href="#">Link 2</a>
          </li>
          <li className={`nav-item ${classes.but}`}>
            <a className="nav-link" href="#">Link 3</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default withStyles({
  lol: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "2em",
  },
  but: {
    display: "inline-block",
    transition: "300ms all ease",
    "&:hover":{
      background:"#73880a",
    },
  }
})(Navbar)
