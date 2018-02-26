import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import Consts from './Consts'

export default class NavBar extends Component {
  state = { activeItem: null }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.changePage(name);
  }

  render() {
    const { activeItem } = this.state

    return (
      <div className={this.props.navBarClassName}>
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
