import React from 'react'

export default class StickyCart extends React.Component{

render() {
          var { addItemToCartClassName } = {};
          var { item } = {};
          let styles = {
            main:{
              display:'grid',
              border:'1px solid gray',
              minHeight:'200px',
              minWidth:'200px',
              position:'fixed'
            },
            button:{
              outline:'none'
            },
            ele:{
              borderTop:'1px solid gray'

            }
          }
          return(
                  <div style={styles.main}>
                    <div style={styles.ele}> items :5</div>
                    <div style={styles.ele}>total : 450$</div>
                    <button style={styles.button}>checkout</button>

                  </div>
        )
        }
}
