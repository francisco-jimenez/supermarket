import React, { Component } from 'react';

class Login extends Component {

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
               <input className= 'loginInput' type='text'/>
          </div>
            <div className = 'wrapperLoginInputs font-bree rounded-corners'>
              <div className = 'center'>
                password
              </div>
              <input className= 'loginInput' type='text'/>
          </div>
            <div className = 'center'>
                 <button className = 'font-bree loginButton'>
                      Login
                 </button>
            </div>
                <div className = 'center'>
                    <button className = ' font-bree loginButton'>
                         Sign up
                    </button>
                </div>
      </div>
    );
  }

}

export default Login;
