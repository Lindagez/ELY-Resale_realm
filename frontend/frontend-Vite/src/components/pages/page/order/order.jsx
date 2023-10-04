import React from 'react'
import { useEffect } from 'react';
import './order.css'
import Nav from '../../landingNew/nav';
import Sidenav from '../../landingNew/sidenav';
export const Order = () => {
    useEffect(() => {
  
      $("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 500,
        onStepChanging: function (event, currentIndex, newIndex) {

          return true;
        },
        labels: {
          // finish: "Home",
          next: "Next",
          previous: "Previous"
        }
      });
  

      $('.wizard > .steps li a').click(function () {
        $(this).parent().addClass('checked');
        $(this).parent().prevAll().addClass('checked');
        $(this).parent().nextAll().removeClass('checked');
      });
  
    
      $('.forward').click(function () {
        $("#wizard").steps('next');
      })
      $('.backward').click(function () {
        $("#wizard").steps('previous');
      })
  
      
      $('.checkbox-circle label').click(function () {
        $('.checkbox-circle label').removeClass('active');
        $(this).addClass('active');
      })
    }, []);
  return (
  <>
  {/* <div>

  </div> */}
    <Nav />
  
  <Sidenav />
    <div>

<div class="wrapper ">
    <form action="">
        <div className="ordershadow" id="wizard">
          
            <h4></h4>
            <section>
                <div class="form-row"> <input type="text" class="form-control" placeholder="Item Name"/> </div>
                <div class="form-row"> <input type="text" class="form-control" placeholder="price"/> </div>
                <div class="form-row"> <input type="file" class="form-control" placeholder="photo add

                "
                multiple="true" /> </div>
            </section> 
            <h4></h4>
            <section>
         
                <div class="form-row"> <input type="tel" class="form-control" placeholder="phone number"/> </div>
                <div class="form-row"> <input type="text" class="form-control" placeholder="city"/> </div>
                <div class="form-row"> <input type="text" class="form-control" placeholder="subcity"/> </div>
            </section>
            <h4></h4>
            <section>
            <div>
                 Category:
                <select class="select">
  <option value="1">Select a category</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
  <option value="5">Five</option>
</select></div>
{/* <div class="form-group col-md-4"> */}
category
                                        {/* <label for="inputState"> category:</label> */}
                                        {/* <select id="inputState" class="form-control">
                                            <option selected="">Why do you leave?</option>
                                            <option>I’ve already sold my items.</option>
                                            <option>I haven`t found anything interesting on Jiji.com.et</option>
                                            <option>I have a duplicate account.</option>
                                         
                                            <option>other reason</option>
                                        </select>
                                    </div> */}
<br/>
<div class="form-row" style={{marginBottom: "18px"}}> <textarea name="" id="" class="form-control" placeholder="Discription" style={{Height: "108px"}}></textarea> </div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
   Negotiable
  </label>
</div>
{/* <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div> */}

            </section> 
            <h4></h4>
            <section>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                    <circle class="path circle" fill="none" stroke="#73AF55" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                    <polyline class="path check" fill="none" stroke="#73AF55"strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                </svg>
                <p class="success">Upload  successfully. </p>
          
               
            </section>
        </div>
        
    </form>
</div>
    </div>


    </>
  )
}
