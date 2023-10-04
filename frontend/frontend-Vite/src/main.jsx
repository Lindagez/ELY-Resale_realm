import ReactDOM from 'react-dom/client'
import App from './App.jsx';
// import { SidebarProvider } from './context/sidebarContext.jsx';
import "mdbreact/dist/css/mdb.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'reactjs-popup/dist/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <SidebarProvider>
    <App />
    
  // </SidebarProvider>
)
