import React from 'react'
import Consts from './Consts'


export default class Admin extends React.Component{

        handleClick(){
          this.props.history.push('/supermarket')

        }

        render(){
                return(
                <div>
                        <button onClick={this.handleClick.bind(this)}> Back </button>
                        <h1>Admin</h1>
                </div>
                )
        }
}
