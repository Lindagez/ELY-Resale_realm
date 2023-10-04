import './App.css';
// import Sidebar from './layout/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';
import Page from './components/pages/page/page';
import { Settings } from './components/pages/settings.jsx/settings';
// import Content from './layout/Content/Content';
import Notification from './components/pages/notification/notification';
// import Navbar from 'SsSS./components/pages/page/header';
import { Product } from './components/pages/posts/posts';
import Landing from './components/pages/landing/landing';
import Footer from './components/pages/landing/footer';
import { Order } from './components/pages/page/order/order';
import PropertyId from './components/pages/page/propertydetail/property';
// import LandingN fSSrom './components/pages/landingNew/landingN';
import LandingNew from './components/pages/landingNew/landingN';
// import Nav from './components/pages/landingNew/nav';
import FooterNew from './components/footer';
import Sidenav from './components/pages/landingNew/sidenav';
import Closed from './components/pages/page/closedPost/closed';
import ProfileUp from './components/pages/page/Profileupdate-New/profileUp';
// import { ManageNotification } from './components/pages/page/managenotification/managenotifi';
import { Deleteaccount } from './components/pages/page/deleteaccoutn/deleteaccount';
// import LandingN from './components/pages/landingNew/landingN';
// import   Product  from './components/pages/posts/posts';
// import Navbar from './components/pages/page/header';

function App() {
  
  return (
    <>
      <div className='app'>
        <Router>
          
     {/* <Nav/> */}
        {/* <Navbar /> */}
        {/* <Sidebar /> */}
          <Routes>
            
            {/* <Route element={<Sidebar />}> */}
              <Route path='page' element={<Page />} />
              <Route path='settings' element={<Settings />} />
              {/* <Route path='settings#security' element={<Settings />} /> */}

              <Route path='notification' element={<Notification />} />
              <Route path='post' element={<Product />} />
              <Route path='/landingOld' element={<Landing />} />
              <Route path='Sell' element={<Order />} />
              <Route path='Footer' element={<Footer  />} />
              <Route path='pro' element={<PropertyId  />} />
              <Route path='/' element={<LandingNew  />} />
              <Route path='sidenav' element={<Sidenav  />} />
              <Route path='ClosedPost' element={<Closed  />} />
              <Route path='ProfileUpdate' element={<ProfileUp  />} />
              {/* <Route path='ManageNotification' element={<ManageNotification  />} /> */}
              <Route path='Deleteaccount' element={<Deleteaccount  />} />
              
            {/* </Route> */}
          </Routes>
       
        </Router>
        {/* <Sidenav /> */}
        <FooterNew />
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default App;
