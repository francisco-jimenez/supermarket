
import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import Consts from './Consts'

const options = [
  { key: 1, text: 'Price lower to higher', value: Consts.orderBy.PRICEASC },
  { key: 2, text: 'Price higher to lower', value: Consts.orderBy.PRICEDESC },
  { key: 3, text: 'Name A-Z', value: Consts.orderBy.A_Z },
  { key: 4, text: 'Name Z-A', value: Consts.orderBy.Z_A }
]

class DropdownOrderItems extends React.Component{

    constructor(){
    	super()
    	this.state = {
             text : 'Sort by'
    	}
    }

	handleChange(e,d){
      this.setState({text:e.target.innerText})
      this.props.orderItemList(d.value)
	}

	render(){

		return(
               <Menu compact>

                    <Dropdown
    	                     onChange  = {this.handleChange.bind(this)}
    	                     text      = {this.state.text}
    	                     simple
    	                     item
    	                     className = 'drop'
    	                     options   = {options}
    	            />

              </Menu>
		)
	}
}



export default DropdownOrderItems
