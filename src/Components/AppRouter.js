import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Breeds from '../Pages/Breeds';
import NotFoundPage from '../Pages/NotFoundPage';


const AppRouter = () => {
    return (
        <BrowserRouter>
       <NavBar/>
            <Routes>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/breeds' component={Breeds}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='*' component={NotFoundPage}/>
             </Routes>
        </BrowserRouter>
    );
}

export default AppRouter

