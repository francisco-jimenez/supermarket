export const FROZEN = 'Frozen';
export const DAIRY = 'Dairy';
export const TOILETRIES = 'Toiletries'
export const CART = 'Cart'
export const ADMIN = 'Admin'
export const USER = 'User'
export const LOGOUT = 'Logout'
export const LOGIN = 'Login'
export const REGISTER = 'Register'

export const cart = []

export const subcategories = [
                                  'fish',
                                  'ice cubes'
]

export const wrapperStickyCartGridStyle = {
    display: 'grid',
    border : 'black solid 2px',
    backgroundColor :  '#e0ebeb',
    gridTemplateRows: '3fr 1fr 1fr 1fr 1fr',
    //grid-template-rows: 100px 200px 100px;
    width : '160px',
    marginBottom : '15px'

}

export const displayNone = {
    display : 'none'
}

export const orderBy = {
    PRICEASC : 1,
    PRICEDESC : 2,
    A_Z   : 3,
    Z_A   : 4
}

export var itemList = [
        {
          "_id" :1,
          "name": " Frozen cod from Sweden freh ...............",
          "price": "100",
          "imgSource": "http://res.cloudinary.com/ditmua47w/image/upload/v1519561168/frozen_fish.jpg",
          "category": "Frozen",
          "stock" : 10,
          "unitsOnCart" : 0,
          "subcategory": "fish"
        },
        {
          "_id" :2,
          "name": " Frozen tuna",
          "price": "200",
          "imgSource": "http://res.cloudinary.com/ditmua47w/image/upload/v1519561167/frozen_stuff.jpg",
          "category": "Frozen",
          "stock" : 10,
          "unitsOnCart" : 0,
          "subcategory": "fish"
        },
        {
          "_id" :3,
          "name": "Salmon",
          "price": "200",
          "imgSource": "http://res.cloudinary.com/ditmua47w/image/upload/v1519561168/frozen_pie.jpg",
          "category": "Frozen",
          "stock" : 10,
          "unitsOnCart" : 0,
          "subcategory": "fish"
        },
        {
          "_id" :4,
          "name": "Salmon re",
          "price": "180",
          "imgSource": "http://res.cloudinary.com/ditmua47w/image/upload/v1519561168/frozen_pie.jpg",
          "category": "Frozen",
          "stock" : 10,
          "unitsOnCart" : 0,
          "subcategory": "fish"
        },
        {
          "_id" :5,
          "name": "Milk",
          "price": "180",
          "imgSource": "http://res.cloudinary.com/ditmua47w/image/upload/v1519597542/353992011_0_150x150.jpg",
          "category": "Dairy",
          "stock" : 10,
          "unitsOnCart" : 0,
          "subcategory": "milk"
        },
        {
          "_id" :6,
          "name": "Salfmon re",
          "price": "180",
          "imgSource": "http://res.cloudinary.com/ditmua47w/image/upload/v1519561168/frozen_pie.jpg",
          "category": "Toiletries",
          "stock" : 10,
          "unitsOnCart" : 0,
          "subcategory": "fish"
        },
        {
          "_id" :10,
          "name": " Frozenf cod from Sweden freh ...............",
          "price": "100",
          "imgSource": "http://res.cloudinary.com/ditmua47w/image/upload/v1519561168/frozen_fish.jpg",
          "category": "Frozen",
          "stock" : 10,
          "unitsOnCart" : 0,
          "subcategory": "fish"
        },
        {
          "_id" :12,
          "name": " Frofzen tuna",
          "price": "200",
          "imgSource": "http://res.cloudinary.com/ditmua47w/image/upload/v1519561167/frozen_stuff.jpg",
          "category": "Frozen",
          "stock" : 10,
          "unitsOnCart" : 0,
          "subcategory": "fish"
        },
        {
          "_id" :13,
          "name": "Salmddon",
          "price": "200",
          "imgSource": "http://res.cloudinary.com/ditmua47w/image/upload/v1519561168/frozen_pie.jpg",
          "category": "Frozen",
          "stock" : 10,
          "unitsOnCart" : 0,
          "subcategory": "fish"
        },
        {
          "_id" :14,
          "name": "Salmfon re",
          "price": "180",
          "imgSource": "http://res.cloudinary.com/ditmua47w/image/upload/v1519561168/frozen_pie.jpg",
          "category": "Frozen",
          "stock" : 10,
          "unitsOnCart" : 0,
          "subcategory": "fish"
        },
        {
          "_id" :15,
          "name": "Mddilk",
          "price": "180",
          "imgSource": "http://res.cloudinary.com/ditmua47w/image/upload/v1519597542/353992011_0_150x150.jpg",
          "category": "Dairy",
          "stock" : 10,
          "unitsOnCart" : 0,
          "subcategory": "milk"
        },
        {
          "_id" :16,
          "name": "Salmon re",
          "price": "1822",
          "imgSource": "http://res.cloudinary.com/ditmua47w/image/upload/v1519561168/frozen_pie.jpg",
          "category": "Toiletries",
          "stock" : 10,
          "unitsOnCart" : 0,
          "subcategory": "fish"
        },
        {
          "_id" :111,
          "name": " Frozend cddod from Sweden freh ...6............",
          "price": "100",
          "imgSource": "http://res.cloudinary.com/ditmua47w/image/upload/v1519561168/frozen_fish.jpg",
          "category": "Frozen",
          "stock" : 10,
          "unitsOnCart" : 0,
          "subcategory": "fish"
        },
        {
          "_id" :211,
          "name": " d tunae",
          "price": "200",
          "imgSource": "http://res.cloudinary.com/ditmua47w/image/upload/v1519561167/frozen_stuff.jpg",
          "category": "Frozen",
          "stock" : 10,
          "unitsOnCart" : 0,
          "subcategory": "fish"
        },
        {
          "_id" :311,
          "name": "1Salmorn",
          "price": "200",
          "imgSource": "http://res.cloudinary.com/ditmua47w/image/upload/v1519561168/frozen_pie.jpg",
          "category": "Frozen",
          "stock" : 10,
          "unitsOnCart" : 0,
          "subcategory": "fish"
        },
        {
          "_id" :4111,
          "name": "Salmonf re",
          "price": "180",
          "imgSource": "http://res.cloudinary.com/ditmua47w/image/upload/v1519561168/frozen_pie.jpg",
          "category": "Frozen",
          "stock" : 10,
          "unitsOnCart" : 0,
          "subcategory": "fish"
        },
        {
          "_id" :115,
          "name": "Milrk",
          "price": "184",
          "imgSource": "http://res.cloudinary.com/ditmua47w/image/upload/v1519597542/353992011_0_150x150.jpg",
          "category": "Dairy",
          "stock" : 10,
          "unitsOnCart" : 0,
          "subcategory": "milk"
        },
        {
          "_id" :6111,
          "name": "Salmron re",
          "price": "184",
          "imgSource": "http://res.cloudinary.com/ditmua47w/image/upload/v1519561168/frozen_pie.jpg",
          "category": "Toiletries",
          "stock" : 10,
          "unitsOnCart" : 0,
          "subcategory": "fish"
        }
]
