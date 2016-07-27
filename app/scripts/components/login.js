import React from 'react';
import {Link}from 'react-router';
import {Router, Route, hashHistory} from 'react-router';


const Login = React.createClass({
  submitFunction: function (e){
      e.preventDefault();
      let username = this.refs.username.value;
      let password = this.refs.password.value;
      let data={
        username:username,
        passord:password
      };
      hashHistory.push('/cards');
  },
  render: function(){
    return(
      <div>
      <h1> Login </h1>
      <form onSubmit= {this.submitFunction}>
        <input type="text" placeholder="username" ref="username"/>
				<input type="password" placeholder="password" ref="password"/>
				<input type="submit" value="Submit"/>
			</form>
        <Link to="/" > BACK TO HOME </Link>
      </div>

    )
  }

});

export default Login;
