import React from 'react'
// import Sidebar from '../../../layout/Sidebar/Sidebar'
import'./settings.scss';
import'./settings.css';
import Sidenav from '../landingNew/sidenav';
import Nav from '../landingNew/nav';
export const Settings = () => {
  // const [basicModal, setBasicModal] = useState(false);

  // const toggleShow = () => setBasicModal(!basicModal);
  return (
    <>
    <Nav/>
    <div>
        {/* <Sidebar /> */}
    </div>
    <div className=' background settint-container'>
<Sidenav />
 
      <div class="container ">
<div className='centercard'>

 

{/*  */}
<section>
<details>
  <summary>
    {/* <div class="button"> */}
    <div class="card card-center" >
  <div  className="card-body" >Delete my acocunt permanently </div>
      {/* Show me the modal */}
    </div>
    <div class="details-modal-overlay"></div>
  </summary>
  <div class="details-modal">
    <div class="details-modal-close">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z" fill="black" />
      </svg>
    </div>
    <div class="details-modal-title">
      <h1>Delete my acocunt permanently</h1>
    </div>
    <div class="details-modal-content">
      <p>
    <h6>  Are you sure you want to permanently delete your account?
<br/>
      This action cannot be reversed.
    </h6>  </p>
      <footer>
		<a href="#" target="_blank" class="button success">yes</a>
		<label for="modal" class="button danger">No</label>
	</footer>
    </div>
  </div></details>
</section>
</div>
</div>
  


     
      </div></>

  )
}
