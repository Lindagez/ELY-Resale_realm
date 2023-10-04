import React from 'react'
import  { useState } from 'react';
// import './slick.css'
import './style.css'
import imgs from '../../../assets/images/images/toggle-icon.png';
import Nav from './nav';
const LandingNew = () => {
   const [navWidth, setNavWidth] = useState(0);

   const openNav = () => {
     setNavWidth(250);
   };
 
   const closeNav = () => {
     setNavWidth(0);
   };
  return (
    <div>
    
      <div class="banner_bg_main">
         {/* <!-- header top section start --> */}
     <div>
     <Nav/>
     </div>
     
         {/* <!-- header top section start -->
         <!-- logo section start --> */}<br/>
         <div class="logo_section">
            <div class="container">
               <div class="row">
                  <div class="col-sm-12">
                     {/* <div class="logo"><a href="index.html"><img src="images/logo.png"/></a></div> */}
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- logo section end -->
         <!-- header section start --> */}
         <div class="header_section">
            
            <div class="container">
            <br/>

               <div class="containt_main">
               <div id="mySidenav" style={{ width: `${navWidth}px` }} className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
          {/* <a href="settings">profile management  </a> */}
          <a href="post"> Your post</a>
          <a href="ProfileUpdate">profile update</a>
          <a href="ClosedPost">Closed Post</a>
          <a href="Deleteaccount">Delete account </a>

        </div>
        <span className="toggle_icon" onClick={openNav}><img src={imgs} alt="Toggle Navigation" /></span>
                  <div class="dropdown">
                     {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Category 
                     </button> */}

                     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {/* <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a> */}
                     </div>
                  </div><br/>
                  <div></div>
                  <div class="main">
                 <br/>
                     {/* <!-- Another variation with a button --> */}
                     <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search this blog"/>
                        <div class="input-group-append">
                           <button class="btn btn-secondary" type="button" style={{backgroundColor: "#f26522", borderColor:"#f26522 "}}>
                           <i class="fa fa-search"></i>
                           </button>
                        </div>
                     </div>
                  </div>
                  <div class="header_box">
                     <div class="lang_box ">
                        {/* <a href="#" title="" class="nav-link" data-toggle="dropdown" aria-expanded="true">
                        <img src="images/flag-uk.png" alt="flag" class="mr-2 " title="United Kingdom"/> English <i class="fa fa-angle-down ml-2" aria-hidden="true"></i>
                        </a> */}
                        <div class="dropdown-menu ">
                           <a href="#" class="dropdown-item">
                           <img src="images/flag-france.png" class="mr-2" alt="flag"/>
                           French
                           </a>
                        </div>
                     </div>
                     <div class="login_menu">
                        <ul>
                           <li><a href="#">
                              {/* <i class="fa fa-shopping-cart" aria-hidden="true"></i> */}
                              <span class="padding_10"></span></a>
                           </li>
                           <li><a href="#">
                              {/* <i class="fa fa-user" aria-hidden="true"></i> */}
                              <span class="padding_10"></span></a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- header section end -->
         <!-- banner section start --> */}
         <div class="banner_section layout_padding">
            <div class="container">
               <div id="my_slider" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                     <div class="carousel-item active">
                        <div class="row">
                           <div class="col-sm-12">
                              <h1 class="banner_taital">Get Start <br/>Your favriot shopping</h1>
                              <div class="buynow_bt"><a href="#">Buy Now</a></div>
                           </div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="row">
                           <div class="col-sm-12">
                              <h1 class="banner_taital">Get Start <br/>Your favriot shoping</h1>
                              <div class="buynow_bt"><a href="#">Buy Now</a></div>
                           </div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="row">
                           <div class="col-sm-12">
                              <h1 class="banner_taital">Get Start <br/>Your favriot shoping</h1>
                              <div class="buynow_bt"><a href="#">Buy Now</a></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a class="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                  <i class="fa fa-angle-left"></i>
                  </a>
                  <a class="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                  <i class="fa fa-angle-right"></i>
                  </a>
               </div>
            </div>
         </div>

    </div>
    <div class="fashion_section">
         <div id="main_slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
               <div class="carousel-item active">
                  <div class="container">
                     {/* <h1 class="fashion_taital">Man & Woman Fashion</h1> */}
                     <div class="fashion_section_2">
                        <div class="row">
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Hp laptop </h4>
                                 <p class="price_text">Price  <span style={{color: "#262626"}}>40000 ETB</span></p>
                                 <div class="tshirt_img"><img src="https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">iphone 12</h4>
                                 <p class="price_text">Price  <span style={{color: "#262626"}}> 30000 ETB</span></p>
                                 <div class="tshirt_img"><img src="https://media.gettyimages.com/id/1364620309/photo/iphone-13-pro.jpg?s=612x612&w=gi&k=20&c=j7GCAcJt1-BbdsXPuvRGS80NSwryWmLA2rTiax33s_c="/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">iphone 13 pro</h4>
                                 <p class="price_text">Price  <span style={{color: "#262626"}}>80000 ETB</span></p>
                                 <div class="tshirt_img"><img src="https://blog.bestbuy.ca/wp-content/uploads/2019/03/phone-size-e1649722474372.jpg"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  <div class="container">
                     <h1 class="fashion_taital">Man & Woman Fashion</h1>
                     <div class="fashion_section_2">
                        <div class="row">
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Man T -shirt</h4>
                                 <p class="price_text">Price  <span style={{color: "#262626"}}>birr 30</span></p>
                                 <div class="tshirt_img"><img src="https://www.canstarblue.com.au/wp-content/uploads/2022/09/iphone-14-purple.jpg"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Man -shirt</h4>
                                 <p class="price_text">Price  <span style={{color: "#262626"}}>30 birr</span></p>
                                 <div class="tshirt_img"><img src="images/dress-shirt-img.png"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Woman Scart</h4>
                                 <p class="price_text">Price  <span style={{color: "#262626"}}>30 birr</span></p>
                                 <div class="tshirt_img"><img src="images/women-clothes-img.png"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="fashion_section">
         <div id="main_slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
               <div class="carousel-item active">
                  <div class="container">
                     {/* <h1 class="fashion_taital">Man & Woman Fashion</h1> */}
                     <div class="fashion_section_2">
                        <div class="row">
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Samsung s21</h4>
                                 <p class="price_text">Price  <span style={{color: "#262626"}}>300000 ETB</span></p>
                                 <div class="tshirt_img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8OOVRbDAyHsSnswsneYl0w1Z7eYSDB4ItfdbN9YPYZ20284s04jHbmeWJX4S3BsFWPNM&usqp=CAU"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Iphone 13 promax </h4>
                                 <p class="price_text">Price  <span style={{color: "#262626"}}>100000 ETB</span></p>
                                 <div class="tshirt_img"><img src="https://cdn.idealo.com/folder/Product/203235/5/203235577/s3_produktbild_gross_11/apple-iphone-15-pro.jpg"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Desktop</h4>
                                 <p class="price_text">Price  <span style={{color: "#262626"}}>700000 ETB</span></p>
                                 <div class="tshirt_img"><img src="https://www.findingtheuniverse.com/wp-content/uploads/2019/04/Laptop-for-photo-editing_by_Laurence-Norah.jpg"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  <div class="container">
                     <h1 class="fashion_taital">Samsung s20 plus</h1>
                     <div class="fashion_section_2">
                        <div class="row">
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Man T -shirt</h4>
                                 <p class="price_text">Price  <span style={{color: "#262626"}}>birr 30</span></p>
                                 <div class="tshirt_img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8OOVRbDAyHsSnswsneYl0w1Z7eYSDB4ItfdbN9YPYZ20284s04jHbmeWJX4S3BsFWPNM&usqp=CAU"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Man -shirt</h4>
                                 <p class="price_text">Price  <span style={{color: "#262626"}}>30 birr</span></p>
                                 <div class="tshirt_img"><img src="images/dress-shirt-img.png"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Woman Scart</h4>
                                 <p class="price_text">Price  <span style={{color: "#262626"}}>30 birr</span></p>
                                 <div class="tshirt_img"><img src="images/women-clothes-img.png"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* </div></div> */}
            <div class="fashion_section">
         <div id="main_slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
               <div class="carousel-item active">
                  <div class="container">
                     {/* <h1 class="fashion_taital">Man & Woman Fashion</h1> */}
                     <div class="fashion_section_2">
                        <div class="row">
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Samsung s20 plus</h4>
                                 <p class="price_text">Price  <span style={{color: "#262626"}}>28000 ETB</span></p>
                                 <div class="tshirt_img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8OOVRbDAyHsSnswsneYl0w1Z7eYSDB4ItfdbN9YPYZ20284s04jHbmeWJX4S3BsFWPNM&usqp=CAU"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy now</a></div>
                                    <div class="seemore_bt"><a href="#">see more</a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Samsung s21</h4>
                                 <p class="price_text">Price  <span style={{color: "#262626"}}>25000ETB</span></p>
                                 <div class="tshirt_img"><img src="https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fHww&w=1000&q=80"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Iphone 11 promax</h4>
                                 <p class="price_text">Price  <span style={{color: "#262626"}}>450000 ETB</span></p>
                                 <div class="tshirt_img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYMBQgHrg8miqYIq1bH_0nSxBJn4iMs0yvNMGrMz0E3GGoH38YSp9ACHdKc3nM_H9Jlk&usqp=CAU"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  <div class="container">
                     <h1 class="fashion_taital">Man & Woman Fashion</h1>
                     <div class="fashion_section_2">
                        <div class="row">
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Man T -shirt</h4>
                                 <p class="price_text">Price  <span style={{color: "#262626"}}>birr 30</span></p>
                                 <div class="tshirt_img"><img src="https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fHww&w=1000&q=80"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Man -shirt</h4>
                                 <p class="price_text">Price  <span style={{color: "#262626"}}>30 birr</span></p>
                                 <div class="tshirt_img"><img src="https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fHww&w=1000&q=80"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-4 col-sm-4">
                              <div class="box_main">
                                 <h4 class="shirt_text">Woman Scart</h4>
                                 <p class="price_text">Price  <span style={{color: "#262626"}}>30 birr</span></p>
                                 <div class="tshirt_img"><img src="images/women-clothes-img.png"/></div>
                                 <div class="btn_main">
                                    <div class="buy_bt"><a href="#">Buy Now</a></div>
                                    <div class="seemore_bt"><a href="#">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div></div></div></div></div>
            {/* <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
            <i class="fa fa-angle-left"></i>
            </a>
            <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
            <i class="fa fa-angle-right"></i> */}
            {/* </a> */}
            
         </div>
      </div>
               </div>
   
    
  )
}

export default LandingNew