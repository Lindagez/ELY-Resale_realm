import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './components/pages/page/page';
import { Settings } from './components/pages/settings.jsx/settings';
import Content from './layout/Content/Content';
import Notification from './components/pages/notification/notification';
import Navbar from './components/pages/page/header';
import { Product } from './components/pages/posts/posts';
import Landing from './components/pages/landing/landing';
import Footer from './components/pages/landing/footer';
// import   Product  from './components/pages/posts/posts';
// import Navbar from './components/pages/page/header';

function App() {
  return (
    <>
      <div className='app'>
        <Router>
        {/* <Sidebar /> */}
        <Navbar />
          <Routes>
            {/* <Route element={<Sidebar />}> */}
              <Route path='page' element={<Page />} />
              <Route path='settings' element={<Settings />} />
              <Route path='notification' element={<Notification />} />
              <Route path='post' element={<Product />} />
              <Route path='/' element={<Landing />} />
              <Route path='Footer' element={<Footer  />} />
            {/* </Route> */}
          </Routes>
       
        </Router>
        <Footer />
      </div>
    </>
  )
}

export default App;
