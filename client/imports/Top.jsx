import React from 'react'
import Consts from './Consts'


export default class Top extends React.Component{

    handleItemClick = (name) => {
      this.props.changePage(name);
    }

        render(){
        return(
                <div className = 'wrapper4spaces top center font-bree font-size-small' >
                      <div>
                          <img src='http://res.cloudinary.com/ditmua47w/image/upload/c_scale,w_180/v1519509299/Logo.png'></img>
                      </div>
                      <div className = 'logo' display = 'grid' color = 'black'  onClick = {()=>{this.handleItemClick(Consts.ADMIN)}}>
                          <img src='http://res.cloudinary.com/ditmua47w/image/upload/c_scale,w_38/v1519669558/if_cog-settings-alt_353407.png'></img> ADMIN
                      </div>
                      <div  onClick = {()=>{this.handleItemClick(Consts.USER)}}>
                          <img src= 'http://res.cloudinary.com/ditmua47w/image/upload/c_scale,w_38/v1519669558/if_user_male2_172626_1.png'></img> USER GOES HERE
                      </div>
                      <div >
                          <img src='http://res.cloudinary.com/ditmua47w/image/upload/c_scale,w_38/v1519669557/if_log-out_2561461.png' onClick = {()=>{this.handleItemClick(Consts.LOGOUT)}}></img> LOG OUT
                      </div>
                </div>
                )
        }
}
