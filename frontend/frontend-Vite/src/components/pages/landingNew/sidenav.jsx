import React from 'react'
import  { useState } from 'react';
import imgs from '../../../assets/images/images/untitled.png';

const Sidenav = () => {
  const [navWidth, setNavWidth] = useState(0);

   const openNav = () => {
     setNavWidth(250);
   };
 
   const closeNav = () => {
     setNavWidth(0);
   };
  return (
    <>
     <div class="header_section">
            <div class="container">
               <div class="containt_main">
               <div id="mySidenav" style={{ width: `${navWidth}px` }} className="sidenav"></div>
    <div id="mySidenav" style={{ width: `${navWidth}px` }} className="sidenav">
          
         <h2>   Profile setting </h2>
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
         
         
          {/* <a href="settings">profile management  </a> */}
          <a href="post"> Your post</a>
          <a href="ProfileUpdate">profile update</a>
          <a href="ClosedPost">Closed Post</a>
          <a href="Deleteaccount">Delete account </a>

          <a href="#">Sign Out</a>

        </div>
        <span className="toggle_icon    " onClick={openNav}>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
           
          {/* <img src={imgs} alt="Toggle Navigation" /> */}
          </span>
                  <div class="dropdown">
                     {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Category 
                     </button> */}
                     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {/* <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a> */}
                     </div>
                  </div>
                  </div></div></div>
                  <br/>
    </>
  )
}

export default Sidenav