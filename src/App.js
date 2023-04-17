import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

//pages and components
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <div className='container'>
        <Navbar/>
        <Routes>
         <Route exact path='/' Component={Dashboard} />
         <Route path='/login' Component={Login} />
         <Route path='/signup' Component={Signup} />
        </Routes>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App
