import _ from 'lodash'
import React, { Component } from 'react'
import { Grid, Header, Image, Rail, Segment, Sticky } from 'semantic-ui-react'

const Placeholder = () => <Image src='/assets/images/wireframe/paragraph.png' />

export default class SideBar extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state

    return (

              <Rail position='right'>
                <Sticky context={contextRef}>
                  <Image src='http://res.cloudinary.com/ditmua47w/image/upload/v1519561168/frozen_fish.jpg' />
                </Sticky>
              </Rail>
    )
  }
}
