import React from 'react'
import Frozen from './Frozen'
import Dairy from './Dairy'
import Toiletries from './Toiletries'
import Cart from './Cart'
import Top from './Top'
import DisplayPageName from './DisplayPageName'
import NavBar from './NavBar'
import Admin from './Admin'
import User from './User'
import Consts from './Consts'
import ItemGrid from './ItemGrid'
import SideBar from './SideBar'
import Login from './Login'


export default class App extends React.Component{
        constructor(){
          super();
          this.state = {
              page : Consts.FROZEN,
              navBarClassName : "",
              addItemToCartClassName : ""
          }
          this.itemList = Consts.itemList;
          this.changePage  = this.changePage.bind(this);
        }

        filterItemList() {
          let items = []
          if (this.state.page === Consts.CART) {
                items = Consts.cart;
          } else {
                items = Consts.itemList.filter(item => item.category == this.state.page);
          }

          return items;
        }

        addItemToCart(item){
          alert('added Item: ' + item.name)
          Consts.cart.push(item);
        }

        changePage(page){
          switch (page) {
              case Consts.FROZEN:
              case Consts.DAIRY:
              case Consts.TOILETRIES:
              case Consts.CART:
                    this.state.navBarClassName= "";
                    this.state.addItemToCartClassName = "";
              break;
              default:
                    this.state.navBarClassName= "displayNone";
                    this.state.addItemToCartClassName = "displayNone";
            }
            this.setState(
                {
                  page : page
                }
            )
        }

        render(){
                let { page } = this.state
                let filteredItems  = this.filterItemList()
                if(page == Consts.FROZEN) {
                        shown = <Frozen/>

                }else if(page == Consts.DAIRY){
                        shown = <Dairy/>

                }else if(page == Consts.TOILETRIES){
                        shown = <Toiletries/>

                }else if(page == Consts.CART){
                        shown = <Cart/>

                }else if(page == Consts.USER){
                        shown = <User/>

                }else if(page == Consts.ADMIN){
                        this.props.history.push('/admin')
                        shown = <Admin/>
                }
                return  (
                            <div className = 'body'>
                                  <Top changePage ={this.changePage}></Top>
                                  <NavBar
                                          navBarClassName = {this.state.navBarClassName}
                                          changePage ={this.changePage}
                                          activeItem={this.state.page}
                                  />
                                  <DisplayPageName page = {page} ></DisplayPageName>
                                  {shown}
                                  <div className = 'wrapperGridAndCartSidebar'>
                                      <ItemGrid addItemToCartClassName = {this.state.addItemToCartClassName} addItemToCart = {this.addItemToCart} itemList = {filteredItems}> </ItemGrid>
                                      <SideBar/>
                                  </div>
                            </div>
                )
        }
}
