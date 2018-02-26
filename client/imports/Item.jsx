import React from 'react'

export default class Item extends React.Component{

render() {
          var { addItemToCartClassName } = this.props;
          var { item } = this.props;
          return(
                  <div className = 'wrapperItemGrid font-bree'>
                      <div className = 'itemGrid'>
                            <img src= {item.imgSource}/>
                      </div>

                      <div className = 'center'>
                            {item.price} €
                      </div>

                      <div className = 'center'>
                            {item.name}
                      </div>
                      <div className = 'center'>
                            Units: <input type="number" min="1" max={item.stock}/>
                      </div>
                      <div className= {addItemToCartClassName} >
                          <div className = 'center'>
                            <button onClick = {()=>{this.props.addItemToCart(item)}}> ADD TO CART   </button>
                          </div>
                      </div>

                  </div>
        )
        }
}
