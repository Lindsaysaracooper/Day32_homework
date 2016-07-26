import React from 'react';


const Nav = React.createClass({
    render: function() {
        return (
            <nav class = 'nav' >
                <ul>
                  <li>
                      <p> Card Collection < /p>
                  </li >
                  <li>
                      <p> Add New Card </p>
                </li>
                <li>
                      <p> Login / Sign Up </p>
                </li>
              </ul>
            </nav >


        )


    }
});

export default Nav;
