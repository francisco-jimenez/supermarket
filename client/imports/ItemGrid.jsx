import React from 'react'
import Item  from './Item'


export default class Cart extends React.Component{
        constructor(){
            super();
        }

        render(){
                var { itemList } = this.props
                return(
                <div>
                        <ul className = 'wrapper3spaces'>
                          {
                            itemList.map((item, index) => {
                                    return (
                                              <Item
                                                        addItemToCartClassName = {this.props.addItemToCartClassName}
                                                        addItemToCart = {this.props.addItemToCart}
                                                        key={item.name} item={item}>
                                              </Item>
                                            )
                            })
                          }
                        </ul>
                </div>
                )
        }
}
