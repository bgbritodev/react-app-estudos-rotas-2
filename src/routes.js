import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/home';
import Profile from './pages/Profile/profile';
import Contatc from './pages/Contact/contact';


function RoutesApp(){
 return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/profile" element={ <Profile/> } />
        <Route path="/contact" element={ <Contatc/> } />

    </Routes>
    </BrowserRouter>
 )
}
export default RoutesApp;