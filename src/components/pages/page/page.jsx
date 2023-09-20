import React from 'react'
// import Sidebar from '..'
import "./page.css"
import Content from '../../../layout/Content/Content';
const Page = () => {
  return (
    
<> 


  {/* <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card">
          <div class="rounded-top text-white d-flex flex-row" style={{backgroundColor: "#000", height:"200px"}}>
            <div class="ms-4 mt-5 d-flex flex-column" style={{width: "150px"}}>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
                style={{width: "150px", zIndex:" 1"}}/>
              <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark"
                style={{zIndex: "1"}}>
                Edit profile
              </button>
            </div></div></div></div></div></div> */}


<div className='profile-container '>

{/* 
        <div class="card"> */}
          <div class="rounded-top text-white d-flex flex-row" style={{ height:"200px"}}>
            <div class="ms-4 mt-5 d-flex flex-column" style={{width: "150px"}}>
              <img src="https://img.freepik.com/premium-vector/person-avatar-design_24877-38130.jpg?w=2000"
                alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
                style={{width: "150px", zIndex:" 1"}}/>
              <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark"
                style={{zIndex: "1"}}>  Edit profile
              </button>
            </div></div>
  <div className='profile-margin'>
{/* <input className='form-control' type='file'/> */}
</div>
<div className='profile-texts '>
  <input type='text' 

    class="form-control  m-1"
    placeholder='Name'
  />

  <input type='text' 

  class="form-control  m-1"
  placeholder='email'
  />
  
</div>

<div className='profile-text '>

 
<input type='text' 

  name='name'
    className="form-control  m-1"
    placeholder='Name'
  />

  <input type='text' 
  
  className="form-control  m-1"
  placeholder='email'
  />




</div>

 <div className='profile-tex '><br/>
<button
                  
                      type='submit'
                      className='btn btn-secondary rounded-2 text-white shadow-1 '
                  
                    >
                     update
                    </button>
                    <button
                  
                      type='submit'
                      className='btn btn-secondary rounded-2 text-white shadow-1 '
                  
                    >
                 cancel
                    </button>

</div> 
</div>

</>
  )
}

export default Page;