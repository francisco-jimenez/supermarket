import React from 'react'

export default class Item extends React.Component{
  constructor() {
    super();
    this.state = {
          units: '1'
    }
  }

  handleUnitChange(event) {
    this.setState(
        {units : event.target.value}
    )
  }

render() {
          var { addItemToCartClassName } = this.props;
          var { item } = this.props;
          return(
                  <div className = 'wrapperItemGrid'>
                      <div className = 'itemGrid'>
                            <img src= {item.imgSource}/>
                      </div>

                      <div className = 'center font-size-medium itemGrid'>
                            {item.price} €
                      </div>

                      <div className = 'itemGrid'>
                            {item.name}
                      </div>
                      <div className = 'itemGrid'>
                            Units: <input type="number" min="1" max={item.stock} value={this.state.units} onChange = {this.handleUnitChange.bind(this)}/>
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
