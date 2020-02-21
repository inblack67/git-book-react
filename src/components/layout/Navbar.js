import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const Navbar = ({icon, title}) => {

    return (
      <nav className="black">
      <div className="nav-wrapper">
        <div className="container">
        <Link to="/"><strong><i className={icon}></i> {title}</strong></Link>
        <Link to="/about" className="right">About</Link>
        </div>
      </div>
    </nav>
    )
}


Navbar.defaultProps = {
  title: "git | book",
  icon: "fa fa-github fa-2x left"
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}


export default Navbar;
