import burger from './assests/buger.avif'
import nuggets from './assests/nuggets.jpg'
import fries from './assests/fries.avif'
import deal from './assests/deal.png'
import menuImage1 from './assests/menu1.avif'
import menuImage2 from './assests/menu2.avif'
import menuImage3 from './assests/menu3.avif'
import menuImage4 from './assests/menu4.avif'
import menuImage5 from './assests/menu5.avif'
import menuImage6 from './assests/menu6.avif'
import productOne from './assests/productImgOne.avif'
import productTwo from './assests/productImgTwo.avif'
import productThree from './assests/productImgThree.avif'
import productFour from './assests/productImgFour.avif'
import client from './assests/clientImg.avif'

const cart = [
   { img: burger
   },
   { img: nuggets
   },
   { img: fries
   },
   { img: deal
   }
];


const menu=[
 {
   img:menuImage1,
 },
 {
   img:menuImage2,
 },
 {
   img:menuImage3,
 },
 {
   img:menuImage4,
 },
 {
   img:menuImage5,
 },
 {
   img:menuImage6,
 },
];

const product=[
  {
    img:productOne,
  },
  {
    img:productTwo,
  },
  {
    img:productThree,
  },
  {
    img:productFour,
  },
  {
    img:productOne,
  },
  {
    img:productTwo,
  },
]

const review=[
  {
    img:client,
  },
  
  {
    img:client,
  },
  
  {
    img:client,
  },
]

const blog=[
  { img: burger
  },
  {
    img:menuImage1,
  },
  {
    img:productOne,
  },
]


export {cart,menu,product,review,blog}