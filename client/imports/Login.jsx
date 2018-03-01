import React, { Component } from 'react';
import Consts from './Consts'

class Login extends Component {

  handleLogin(){
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        Meteor.loginWithPassword(
                {email},password,(err=>{
                      debugger;
                      console.log(email);
                      console.log(password);
                      if(err){
                          alert('not existing user')
                      }else{
                          debugger;
                      }
                })
        )
  }

  handleRegister(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    debugger;
    Meteor.call('createUserInServer', email, password)
  }

  render() {
    return (
      <div className = 'wrapperLogin body'>
            <div className = 'center'>
               <img src='http://res.cloudinary.com/ditmua47w/image/upload/c_scale,w_304/v1519649254/Captura_de_pantalla_2018-02-26_a_las_13.46.06.png'/>
          </div>
            <div className = 'center font-pacifico welcome-back'>
                Welcome back!
          </div>
          <div className = 'wrapperLoginInputs font-bree rounded-corners'>
               <div className = 'center'>
                 user
               </div>
               <input id='email' className= 'loginInput' type='text'/>
          </div>
            <div className = 'wrapperLoginInputs font-bree rounded-corners'>
              <div className = 'center'>
                password
              </div>
              <input id='password' className= 'loginInput' type='text'/>
          </div>
            <div className = 'center'>
                 <button className = 'font-bree loginButton' onClick={this.handleLogin}>
                      Login
                 </button>
            </div>
                <div className = 'center'>
                    <button className = ' font-bree loginButton' onClick={this.handleRegister}>
                         Sign up
                    </button>
                </div>
      </div>
    );
  }

}

export default Login;
