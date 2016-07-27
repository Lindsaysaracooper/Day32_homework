import React from 'react';
import {Link}from 'react-router';

const Nav = React.createClass({
    render: function() {
        return (
            <nav className = 'nav' >
              <h1> Tarot Cards </h1>
                <ul>
                  <li>
                      <Link to="/cards" > Card Collection </Link>
                  </li>
                  <li>
                      <Link to ="/newCard"> Add New Card </Link>
                </li>
                <li>
                      <Link to ="/login"> Login / Sign Up </Link>
                </li>
              </ul>
            </nav>


        )


    }
});

export default Nav;
