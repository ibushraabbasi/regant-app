import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

//pages and components
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar'
import Employment_Type from './pages/employmenttype/Employment_Type';
import Notification from './pages/notification/Notification'
import Addcart from './pages/addcart/Addcart';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <div className='container'>
        <Navbar/>
        <Sidebar/>

        <Routes>
         <Route exact path='/dashboard' Component={Dashboard} />
         <Route path='/login' Component={Login} />
         <Route path='/signup' Component={Signup} />
         <Route path='/employmenttype' Component={Employment_Type}/>
         <Route path='/notification' Component={Notification}/>
         <Route path='/addcart' Component={Addcart}/>
        </Routes>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App
