import React from 'react'
// import './slick.css'
import './style.css'
const Nav = () => {
  return (
    <>
    {/* //  <div class="banner_bg_main"> */}
  {/* <!-- header top section start --> */}
  <div class="container">
     <div class="header_section_top">
        <div class="row">
           <div class="col-sm-12">
              <div class="custom_menu">
                 <ul>
                    <li><a href="/">HOME</a></li>
                    {/* <li><a href="#">Gift Ideas</a></li> */}
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="Sell">SELL</a></li>
                    <li><a href="notification">Notification</a></li>
                
                 </ul>
              </div>
           </div>
        </div>
     </div>
  </div></>
  )
}

export default Nav