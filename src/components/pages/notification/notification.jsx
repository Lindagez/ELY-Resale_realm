import React from 'react'
import './notification.scss'
import './notification.css'
const Notification = () => {
  return (
   <>
   <div className='notfiContainer'>
    
{/* <nav> */}



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
            {/* <div className="box shadow-sm mb-3 rounded bg-white ads-box text-center"> */}
                {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="img-fluid" alt="Responsive image" />
                <div className="p-3 border-bottom">
                    <h6 className="font-weight-bold text-dark">Notifications</h6>
                    <p className="mb-0 text-muted">You’re all caught up! Check back later for new notifications</p>
                </div> */}
                {/* <div className="p-3">
                    <button type="button" className="btn btn-outline-success btn-sm pl-4 pr-4">View settings</button>
                </div> */}
            {/* </div> */}
            {/* <div className="box mb-3 shadow-sm rounded bg-white profile-box text-center"> */}
                {/* <div className="p-5"> */}
                    {/* <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-fluid" alt="Responsive image" /> */}
                </div>
                {/* <div className="p-3 border-top border-bottom"> */}
                    {/* <h5 className="font-weight-bold text-dark mb-1 mt-0">Envato</h5>
                    <p className="mb-0 text-muted">Melbourne, AU</p> */}
                {/* </div> */}
                {/* <div className="p-3"> */}
                    {/* <div className="d-flex align-items-top mb-2">
                        <p className="mb-0 text-muted">Posted</p>
                        <p className="font-weight-bold text-dark mb-0 mt-0 ml-auto">1 day ago</p>
                    </div>
                    <div className="d-flex align-items-top">
                        <p className="mb-0 text-muted">Applicant Rank</p>
                        <p className="font-weight-bold text-dark mb-0 mt-0 ml-auto">25</p>
                    </div> */}
                {/* </div>
            </div>
        </div> */}
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
                    <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                        </div>
                        <div className="font-weight-bold mr-3">
                        <div className="text-truncate">product name </div>
                            <div className="small">product discription</div>
                            {/* <button type="button" className="btn btn-outline-success btn-sm">Say congrats</button> */}
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
                            <div className="text-right text-muted pt-1">4d</div>
                        </span>
                    </div>
                    <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" />
                        </div>
                        <div className="font-weight-bold mr-3">
                            <div>
                            <div className="text-truncate">product name </div>
                            <div className="small">product discription</div>
                            </div>
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
                            <div className="text-right text-muted pt-1">4d</div>
                        </span>
                    </div>
                    <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                        <div className="dropdown-list-image mr-3 d-flex align-items-center bg-success justify-content-center rounded-circle text-white">M</div>
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
                    <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                        </div>
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
                            <div className="text-right text-muted pt-1">4d</div>
                        </span>
                    </div>
                    <div className="p-3 d-flex align-items-center osahan-post-header">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                        </div>
                        <div className="font-weight-bold mr-3">
                            <div>
                            <div className="text-truncate">product name </div>
                            <div className="small">product discription</div>
                            </div>
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
                            <div className="text-right text-muted pt-1">4d</div>
                        </span>
                    </div>
                {/* </div> */}
            </div>
        </div>
    </div>
</div></div>
   </div>
   </>
  )
}

export default Notification