import React from 'react'

const FooterNew = () => {
  return (
    <>
        <div className='page-container'>
      <div className='content-wrapper'>
    <div class="footer_section layout_padding">
    <div class="container">
       {/* <div class="footer_logo"><a href="index.html"><img src="images/footer-logo.png"/></a></div> */}
       <div class="input_bt">
          <input type="text" class="mail_bt" placeholder="Your Email" name="Your Email"/>
          
          <span class="subscribe_bt" id="basic-addon2"><a href="#"></a></span>
       </div>
       <div class="input_bt">
          <input type="text" class="mail_bt" placeholder="comment" name="Your Email"/>
          
          <span class="subscribe_bt" id="basic-addon2"><a href="#">Submit</a></span>
       </div>
       <div class="footer_menu">
          <ul>
             <li><a href="#">Home</a></li>
             <li><a href="#">property</a></li>
             <li><a href="#">profile</a></li>
             {/* <li><a href="#">Today's Deals</a></li> */}
             <li><a href="#">Customer Service</a></li>
          </ul>
       </div>
       <div class="location_main">Help Line  Number : <a href="#">+251994009300</a></div>
    </div>
 </div>
 <div class="copyright_section">
    <div class="container">
       <p class="copyright_text">© 2023 All Rights Reserved <a href=""></a></p>
    </div>
 </div></div></div></>
  )
}

export default FooterNew