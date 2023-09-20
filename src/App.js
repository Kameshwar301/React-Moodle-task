import logo from './logo.svg';
//import './App.css';
import './components/home/home.css';
import Home from './components/home/home';
import SuperOver from './components/superover/superover';
import { SocialButtons } from './components/socialButtons/socialButtons';
import { Notification } from './components/notification/notification';
import { Login } from './components/login/login';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Technology } from './components/technology/technology';

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/superover' element={<SuperOver/>}/>
          <Route path='/socialButtons' element={<SocialButtons/>}/>
          <Route path='/Notification' element={<Notification/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Technology' element={<Technology/>}/>
          
      </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
