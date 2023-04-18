import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/home';
import Profile from './pages/Profile/profile';
import Contatc from './pages/Contact/contact';
import Header from './components/Header/header';
import Error from './pages/Error/error';
import Product from './pages/Product/product';


function RoutesApp(){
 return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/profile" element={ <Profile/> } />
        <Route path="/contact" element={ <Contatc/> } />
        <Route path="/product/:id" element={ <Product/> } />

        {/* para chamar um erro em note found o path fica com * */}
        <Route path="*" element={ <Error/> } />


    </Routes>
    </BrowserRouter>
 )
}
export default RoutesApp;