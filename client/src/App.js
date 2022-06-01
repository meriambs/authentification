import logo from './logo.svg';
import './App.css';
import NavbarUSer from './component/NavbarUser'
import Home from './component/Home'
import Login from './component/Login'
import Profil from './component/Profil'
import ProfileList from './component/ProfileList';
import Register from './component/Register'
import { Routes, Route } from "react-router-dom";
import ScdHomePage from './component/ScdHomePage';
import Singup from './component/Sign/Singup';
import Signin from './component/Sign/Signin';
import PrivateRoute from './component/PrivateRoute';

function App() {
  const token=localStorage.getItem('token')
    console.log('tokenapp part ',token)
  return (
    <div className="App">
     <NavbarUSer/>
     <Routes>
<Route path='/' element={ <Home/>} />
<Route path='/login' element={<Login/>} />
<Route path='/register' element={<Register/>}/>
<Route path='/profil' element={<ProfileList/>}/>
{/* <Route path='/signup'element={<Singup/>}/>
<Route path='/signin'element={<Signin/>}/> */}
<Route path='/app/Profile' element={<PrivateRoute/>}/>
     </Routes>
    
  
    </div>
  );
}

export default App;
