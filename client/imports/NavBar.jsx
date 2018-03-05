import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import Consts from './Consts'
import CssDefs from './CssDefs'

export default class NavBar extends Component {
  state = { activeItem: null }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.changePage(name);
  }

  getDynamicStyles(){
      var dynamicStyles = {}
      this.props.showNavBar ?  dynamicStyles['navBar'] = {} : dynamicStyles['navBar'] = CssDefs.displayNone;
      return dynamicStyles;
  }



  render() {
    const { activeItem } = this.state
    const   dynamicStyles = this.getDynamicStyles()

    return (
      <div style = {dynamicStyles.navBar}>
        <Menu fluid widths={4}>
          <Menu.Item name = {Consts.FROZEN}
                    active={activeItem === Consts.FROZEN}
                    onClick={this.handleItemClick} />
          <Menu.Item name= {Consts.DAIRY}
                     active={activeItem === Consts.DAIRY}
                     onClick={this.handleItemClick} />
          <Menu.Item name= {Consts.TOILETRIES}
                    active={activeItem === Consts.TOILETRIES}
                    onClick={this.handleItemClick} />
          <Menu.Item name= {Consts.CART}
                    active={activeItem === Consts.CART}
                    onClick={this.handleItemClick} />
        </Menu>
      </div>
    )
  }
}
