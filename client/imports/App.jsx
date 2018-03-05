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
import Footer from './Footer'
import CssDefs from './CssDefs'
import StickyCart from './StickyCart'
import DropDownOrderItems from './DropDownOrderItems'
import Search from './Search'
import _ from 'lodash'


export default class App extends React.Component{
        constructor(){
          super();
          this.state = {
              page : Consts.LOGIN ,
              showNavBar : false,
              addItemToCartClassName : "",
              showStickyCart : false,
              showNavBar : false,
              items : Consts.itemList
          }
          this.changePage  = this.changePage.bind(this);
          this.filterItemList = this.filterItemList.bind(this);
          this.searchItems = this.searchItems.bind(this);
          this.orderItemList = this.orderItemList.bind(this);
        }

        componentWillMount() {
          this.changePage(this.state.page)
        }

        searchItems(e){
          var items = this.state.items;
          items = this.filterItemList(this.state.page);
          items = items.filter(item => item.name.toUpperCase().includes(e.target.value.toUpperCase()));
          this.setState({items:items})
        }

        orderItemList(orderBy) {
          if(orderBy) {
            alert(orderBy)
          var items = this.state.items;
          switch (orderBy) {
            case Consts.orderBy.A_Z:
              // sort by name
                items = items.sort(function(a, b) {
                                      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                                      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                                      if (nameA < nameB) {
                                          return -1;
                                      }
                                      if (nameA > nameB) {
                                          return 1;
                                      }
                                      return 0;}
                                    )

              break;
              case Consts.orderBy.Z_A:
                        items = items.sort(function(a, b) {
                                            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                                            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                                            if (nameA > nameB) {
                                                return -1;
                                            }
                                            if (nameA < nameB) {
                                                return 1;
                                            }
                                            return 0;}
                                          )
              break;
              case Consts.orderBy.PRICEASC:
                // sort by name
                  items = items.sort(function(a, b) {
                                        var priceA = Number(a.price); // ignore upper and lowercase
                                        var priceB = Number(b.price); // ignore upper and lowercase
                                        if (priceA < priceB) {
                                            return -1;
                                        }
                                        if (priceA > priceB) {
                                            return 1;
                                        }
                                        return 0;}
                                      )

                break;
                case Consts.orderBy.PRICEDESC:
                  // sort by name
                    items = items.sort(function(a, b) {
                                          var priceA = Number(a.price); // ignore upper and lowercase
                                          var priceB = Number(b.price); // ignore upper and lowercase
                                          if (priceA > priceB) {
                                              return -1;
                                          }
                                          if (priceA < priceB) {
                                              return 1;
                                          }
                                          return 0;}
                                        )

                  break;
          }
            this.setState({items: items});
          }
        }
        filterItemList(page) {
          let items = []
          if (page === Consts.CART) {
                items = Consts.cart;
          } else {
                var currentItems = Consts.itemList;
                items = currentItems.filter(item => item.category == page);
          }
          return items;
        }

        getDynamicStyles(){
            var dynamicStyles = {}
            this.state.showStickyCart ?  dynamicStyles['SideBar'] = {} : dynamicStyles['SideBar'] = CssDefs.displayNone;
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
              break;
            }
            var items = this.filterItemList(page)
            this.setState(
                {
                  page : page,
                  items : items
                }
            )
        }

        render(){
                let { page } = this.props.params
                let dynamicStyles = this.getDynamicStyles()
                var shown

                if(page == Consts.CART){
                        shown = <Cart/>

                }else if(page == Consts.USER){
                        shown = <User history ={this.props.history} changePage ={this.changePage}/>

                }else if(page == Consts.ADMIN){
                        shown = <Admin history ={this.props.history} changePage ={this.changePage}/>
                }else if(page == Consts.LOGIN || Consts.LOGOUT){
                        //shown = <Login history ={this.props.history} changePage ={this.changePage}/>
                }
                return  (
                            <div className = 'body'>
                                  <Top changePage ={this.changePage}></Top>
                                  <NavBar
                                          showNavBar = {this.state.showNavBar}
                                          changePage ={this.changePage}
                                          activeItem={this.state.page}
                                  />
                                <DisplayPageName page={this.state.page}></DisplayPageName>
                                <div className = 'orderAndSearchWrapper'>
                                  <DropDownOrderItems orderItemList = {this.orderItemList}/>
                                  <Search searchItems = {this.searchItems}></Search>
                                </div>



                                  {shown}
                                  <div className = 'wrapperGridAndCartSidebar'>
                                    <ItemGrid addItemToCartClassName = {this.state.addItemToCartClassName} addItemToCart = {this.addItemToCart} itemList = {this.state.items}> </ItemGrid>
                                    <div ref={this.handleContextRef} style= {dynamicStyles.SideBar}>
                                            <StickyCart/>
                                    </div>
                                  </div>
                                  <Footer></Footer>
                            </div>
                )
        }
}
