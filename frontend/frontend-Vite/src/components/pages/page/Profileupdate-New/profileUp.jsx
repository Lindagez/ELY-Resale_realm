import React from 'react'
import Nav from '../../landingNew/nav'
import Sidenav from '../../landingNew/sidenav'

const ProfileUp = () => {
  return (

<>
<Nav />
<Sidenav />
<div class="container p-0">
    {/* <h1 class="h3 mb-3">Settings</h1> */}
    <div class="row">
      

        <div class="col-md-7 col-xl-8">
            <div class="tab-content">
                <div class="tab-pane fade show active" id="account" role="tabpanel">

                    <div class="card">
                        <div class="card-header">
                            <div class="card-actions float-right">
                                <div class="dropdown show">
                                    <a href="#" data-toggle="dropdown" data-display="static">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal align-middle">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                        </svg> */}
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            <h5 class="card-title mb-0">Profile update</h5>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="form-group">
                                            <label for="inputUsername">Username</label>
                                            <input type="text" class="form-control" id="inputUsername" placeholder="Username"/>
                                        </div>
                                        <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputFirstName">First name</label>
                                        <input type="text" class="form-control" id="inputFirstName" placeholder="First name"/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputLastName">Last name</label>
                                        <input type="text" class="form-control" id="inputLastName" placeholder="Last name"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                                </div>
                                {/* <div class="form-group">
                                    <label for="inputAddress">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                </div> */}
                                {/* <div class="form-group">
                                    <label for="inputAddress2">Address 2</label>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                                </div> */}
                                <div class="form-row">
                                    {/* <div class="form-group col-md-6">
                                        <label for="inputCity">City</label>
                                        <input type="text" class="form-control" id="inputCity"/>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputState">subcity</label>
                                        <select id="inputState" class="form-control">
                                            <option selected="">Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div> */}
                                    {/* <div class="form-group col-md-2">
                                        <label for="inputZip">Zip</label>
                                        <input type="text" class="form-control" id="inputZip"/>
                                    </div> */}
                                    </div>
                                        {/* <div class="form-group">
                                            <label for="inputUsername">Biography</label>
                                            <textarea rows="2" class="form-control" id="inputBio" placeholder="Tell something about yourself"></textarea>
                                        </div> */}
                                    </div>
                                    <div class="col-md-4">
                                        <div class="text-center">
                                            <img alt="Andrew Jones" src="https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg" class="rounded-circle img-responsive mt-2" width="128" height="128"/>
                                            <div class="mt-2">
                                                <span class="btn btn-primary"><i class="fa fa-upload"></i></span>
                                            </div>
                                            <small>For best results, use an image at least 128px by 128px in .jpg format</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  posts...
  </label>
</div>
<br/>
                                <button type="submit" class="btn btn-primary">Save changes</button>
                            </form>

                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <div class="card-actions float-right">
                                {/* <div class="dropdown show"> */}
                                    {/* <a href="#" data-toggle="dropdown" data-display="static"> */}
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal align-middle">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                        </svg> */}
                                    {/* </a> */}

                                    {/* <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div> */}
                                    </div>
                                {/* </div>
                            </div> */}
                            <h5 class="card-title mb-0">Change password</h5>
                        </div>
                        <div class="card-body">
                            <form>
                            <div class="form-group">
                                    <label for="inputPasswordCurrent">Current password</label>
                                    <input type="password" class="form-control" id="inputPasswordCurrent"/>
                                    <small><a href="#">Forgot your password?</a></small>
                                </div>
                                <div class="form-group">
                                    <label for="inputPasswordNew">New password</label>
                                    <input type="password" class="form-control" id="inputPasswordNew"/>
                                </div>
                                <div class="form-group">
                                    <label for="inputPasswordNew2">Verify password</label>
                                    <input type="password" class="form-control" id="inputPasswordNew2"/>
                                </div>
                                <button type="submit" class="btn btn-primary">Save changes</button>
                            </form>

                        </div>
                    </div>

                </div>
              
            </div>
        </div>
    </div>

</div>
</>
  )
}

export default ProfileUp