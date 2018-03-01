
import _ from 'lodash'
import React, { Component } from 'react'
import { Checkbox, Grid, Header, Image, Rail, Segment, Sticky } from 'semantic-ui-react'
import StickyCart from './StickyCart'

const Placeholder = () => <Image src='/assets/images/wireframe/paragraph.png' />

export default class SideBar extends Component {
  state = { active: true }

  handleContextRef = contextRef => this.setState({ contextRef })

  handleToggle = () => this.setState({ active: !this.state.active })

  render() {
    const { active} = this.state
    const {contextRef} = this.props
    const {dynamicStyles} = this.props

    return (
              <Rail>
                <Sticky active={active} context={contextRef} >
                  <Header as='h3'>CART</Header>
                  <StickyCart/>
                </Sticky>
              </Rail>
      )
  }
}
