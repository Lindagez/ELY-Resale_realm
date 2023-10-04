import React from 'react'
import './notification.scss'
import './notification.css'
import Nav from '../landingNew/nav'
import Sidenav from '../landingNew/sidenav'
const Notification = () => {
  return (
   <>
   <div className='notfiContainer'>
    
<Nav/>

<Sidenav />

{/* <spacer></spacer> */}


{/* <div className="notification-icon right">
  <i className="material-icons dp48 right">notifications</i>
  <span className="num-count">13</span>
</div>

</nav>

<main>

<div className="notification-container">
  <h3>Notifications
    <i className="material-icons dp48 right">settings</i>
  </h3>

  <input className="checkbox" type="checkbox" id="size_1" value="small" checked />
  <label className="notification new" for="size_1"><em>1</em> new <a href="">guest account(s)</a> have been created.<i className="material-icons dp48 right">clear</i></label>

  <input className="checkbox" type="checkbox" id="size_2" value="small" checked />
  <label className="notification new" for="size_2"><em>3</em> new <a href="">lead(s)</a> are available in the system.<i className="material-icons dp48 right">clear</i></label>
  
  <input className="checkbox" type="checkbox" id="size_3" value="small" checked />
  <label className="notification" for="size_3"><em>5</em> new <a href="">task(s)</a>.<i className="material-icons dp48 right">clear</i></label>

  <input className="checkbox" type="checkbox" id="size_4" value="small" checked />
  <label class="notification" for="size_4"><em>9</em> new <a href="">calendar event(s)</a> are scheduled for today.<i class="material-icons dp48 right">clear</i></label>

  <input class="checkbox" type="checkbox" id="size_5" value="small" checked />
  <label class="notification" for="size_5"><em>1</em> blog post <a href="">comment(s)</a> need approval.<i class="material-icons dp48 right">clear</i></label>
  
</div>



</main> */}
{/* </nav> */}



<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css" integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" crossorigin="anonymous" />

<div className="container notfiContainer">
    <div className="row">
        <div className="col-lg-3 left m">
      
            </div>
        <div className="col-lg-9 right m">
            <div className="box shadow-sm rounded bg-white mb-3">
                <div className="box-title border-bottom p-3">
                    <h6 className="m-0">Recent</h6>
                </div>
                <div className="box-body p-0">
                    <div className="p-3 d-flex align-items-center bg-light border-bottom osahan-post-header">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                        </div>
                        <div className="font-weight-bold mr-3">
                        <div className="text-truncate">product name </div>
                            <div className="small">product discription</div>
                        </div>
                        <span className="ml-auto mb-auto">
                            <div className="btn-group">
                                {/* <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> */}
                                    {/* <i className="mdi mdi-dots-vertical"></i> */}
                                    <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                        </div>
                                {/* </button> */}
                                <div className="dropdown-menu dropdown-menu-right">
                                    {/* <button className="dropdown-item" type="button"><i className="mdi mdi-delete"></i> Delete</button> */}
                                    {/* <button className="dropdown-item" type="button"><i className="mdi mdi-close"></i> Turn Off</button> */}
                                </div>
                            </div>
                            <br />
                            <div className="text-right text-muted pt-1">3d</div>
                        </span>
                    </div>
                    <div className="p-3 d-flex align-items-center osahan-post-header">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                        </div>
                        <div className="font-weight-bold mr-3">
                            <div className="mb-2">product 2</div>
                            {/* <button type="button" className="btn btn-outline-success btn-sm">View </button> */}
                        </div>
                        <span className="ml-auto mb-auto">
                            <div className="btn-group">
                                {/* <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="mdi mdi-dots-vertical"></i>
                                </button> */}
                                 <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                        </div>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button"><i className="mdi mdi-delete"></i> Delete</button>
                                    <button className="dropdown-item" type="button"><i className="mdi mdi-close"></i> Turn Off</button>
                                </div>
                            </div>
                            <br />
                            <div className="text-right text-muted pt-1">4d</div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="box shadow-sm rounded bg-white mb-3">
                <div className="box-title border-bottom p-3">
                    <h6 className="m-0">Earlier</h6>
                </div>
                <div className="box-body p-0">
                    <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                        <div className="dropdown-list-image mr-3 d-flex align-items-center bg-danger justify-content-center rounded-circle text-white">DRM</div>
                        <div className="font-weight-bold mr-3">
                            <div className="text-truncate">product name </div>
                            <div className="small">product discription</div>
                        </div>
                        <span className="ml-auto mb-auto">
                            <div className="btn-group">
                            <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                        </div>
                                <div className="dropdown-menu dropdown-menu-right" >
                                    <button className="dropdown-item" type="button"><i className="mdi mdi-delete"></i> Delete</button>
                                    <button className="dropdown-item" type="button"><i className="mdi mdi-close"></i> Turn Off</button>
                                </div>
                            </div>
                            <br />
                            <div className="text-right text-muted pt-1">3d</div>
                        </span>
                    </div>
                    <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                        <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" /></div>
                        <div className="font-weight-bold mr-3">
                        <div className="text-truncate">product name </div>
                            <div className="small">product discription</div>
                        </div>
                        <span className="ml-auto mb-auto">
                            <div className="btn-group">
                            <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                        </div>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button"><i className="mdi mdi-delete"></i> Delete</button>
                                    <button className="dropdown-item" type="button"><i className="mdi mdi-close"></i> Turn Off</button>
                                </div>
                            </div>
                            <br />
                            <div className="text-right text-muted pt-1">3d</div>
                        </span>
                    </div>
                    {/*  */}
                        
                    </div>
                {/* </div> */}
            </div>
        </div>
    </div>
</div></div>

   </>
  )
}

export default Notification