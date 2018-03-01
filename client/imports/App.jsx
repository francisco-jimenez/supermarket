import React from 'react'
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
import {Segment} from 'semantic-ui-react'
import SeachComponent from './SearchComponent'
import Footer from './Footer'
import CssDefs from './CssDefs'
import StickyCart from './StickyCart'
import _ from 'lodash'


export default class App extends React.Component{
        constructor(){
          super();
          this.state = {
              page : Consts.LOGIN ,
              navBarClassName : "",
              showNavBar : false,
              addItemToCartClassName : "",
              showStickyCart : false,
              showNavBar : false
          }
          this.changePage  = this.changePage.bind(this);
          this.filterItemList = this.filterItemList.bind(this);
        }

        componentWillMount() {
          this.changePage(this.state.page)
        }


        filterItemList(e) {
          let items = []
          if (this.state.page === Consts.CART) {
                items = Consts.cart;
          } else {
                items = Consts.itemList.filter(item => item.category == this.state.page);
          }

          return items;
        }

        getDynamicStyles(){
            var dynamicStyles = {}
            this.state.showStickyCart ?  dynamicStyles['SideBar'] = {} : dynamicStyles['SideBar'] = CssDefs.displayNone;
            this.state.showNavBar ?  dynamicStyles['navBar'] = {} : dynamicStyles['navBar'] = CssDefs.displayNone;
            return dynamicStyles;
        }

        addItemToCart(item){
          alert('added Item: ' + item.name)
          Consts.cart.push(item);
        }

        handleContextRef = contextRef => this.setState({ contextRef })

        changePage(page){
          switch (page) {
              case Consts.CART:
                  this.props.history.push(page)
                  this.setState({
                     showStickyCart : false,
                     showNavBar : true,
                     addItemToCartClassName : ""
                  })
                  break;
              case Consts.FROZEN:
              case Consts.DAIRY:
              case Consts.TOILETRIES:
                    this.props.history.push(page)
                    this.setState({
                       showStickyCart : true,
                       showNavBar : true,
                       addItemToCartClassName : ""
                    })
                    break;
              break;
              case Consts.USER:
              case Consts.ADMIN:
              case Consts.LOGOUT:
              case Consts.LOGIN:
                    this.props.history.push(page)
                    this.setState({
                       showStickyCart : false,
                       showNavBar : false,
                       addItemToCartClassName : ""
                    })
                    this.state.addItemToCartClassName = "displayNone";
              break;
            }
            this.setState(
                {
                  page : page
                }
            )
        }

        render(){
                let { page } = this.props.params
                let filteredItems  = this.filterItemList()
                let dynamicStyles = this.getDynamicStyles()
                var shown

                if(page == Consts.CART){
                        shown = <Cart/>

                }else if(page == Consts.USER){
                        shown = <User history ={this.props.history} changePage ={this.changePage}/>

                }else if(page == Consts.ADMIN){
                        shown = <Admin history ={this.props.history} changePage ={this.changePage}/>
                }else if(page == Consts.LOGIN || Consts.LOGOUT){
                        debugger;
                        //shown = <Login history ={this.props.history} changePage ={this.changePage}/>
                }
                return  (
                            <div className = 'body'>
                                  <Top changePage ={this.changePage}></Top>
                                  <NavBar
                                          dynamicStyles = {dynamicStyles}
                                          changePage ={this.changePage}
                                          activeItem={this.state.page}
                                  />



                                  {shown}
                                  <div className = 'wrapperGridAndCartSidebar'>
                                    <ItemGrid addItemToCartClassName = {this.state.addItemToCartClassName} addItemToCart = {this.addItemToCart} itemList = {filteredItems}> </ItemGrid>
                                    <div ref={this.handleContextRef} style= {dynamicStyles.SideBar}>
                                            <StickyCart/>
                                    </div>
                                  </div>
                                  <Footer></Footer>
                            </div>
                )
        }
}
