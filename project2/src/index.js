import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import Products from './components/Products';
import Contact from './components/Contact';
import About from './components/About';
import Details from "./components/Details";
import NotFound from "./components/NotFound";
import reportWebVitals from './reportWebVitals';
import BankApp from './BankApp';
import Logout from './components/Logout';


import {Link, Routes, Outlet, Route, BrowserRouter as Router } from 'react-router-dom';

const routing = (
  <Router>

    <div>
      <div className='middle'><h2>RJS Bakery</h2></div><hr/>
      <div className='index1'>
      <Link className='l1' to="/Login">Login</Link> |
      <Link className='l1' to="/Logout" >Logout</Link>
      </div>
      <div className='index2' > 
      <Link className='l1' to="/">Home</Link> |
      <Link className='l1' to="/Products">Products</Link> |
      <Link className='l1' to="/Contact">Contact</Link> |       
      <Link className='l1' to="/About">About</Link>
    
      </div>
      
    </div>
        <hr/>
        <Routes>
            <Route path="/"  element = { <App/> }  />
            <Route path="/Products"  element = { <Products /> }  />
            <Route path="/Details/:id"  element = { <Details  /> }  />
            <Route path="/About"  element = { <About /> }  />
            <Route path="/Contact"  element = { <Contact /> }  />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="*"  element = { <NotFound /> }  />
            <Route path="/BankApp" element={<BankApp/>}/>
            <Route path="/Logout" element={<Logout/>}/>
            
            </Routes> 
            <br/>
            <hr/>

            <footer className='footer'>
            <div className='row'>
                <div className='col-sm-3' >
                   <ul>
                    <li className='c1'>Categories</li><br/>
                    <li><a href="#">Breads Bakeries</a></li>
                    <li><a href="#">Doughnuts</a></li>
                    <li><a href="#">Bagels </a></li>
                    <li><a href="#">Pies Bakeries</a> </li>
                    <li><a  href="#">Pastries</a></li>
                   </ul> 
                </div>	
                <div className='col-sm-3' >
                    <ul>
                        <li className="c1">Follow us</li><br/>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Google Plus </a></li>
                        <li><a href="#">Instagram</a> </li>
                       </ul>  
                </div>
                <div className='col-sm-3'>
                    <ul>
                        <li className='c1'>Archive</li><br/>
                        <li><a href="#">August 2012</a></li>
                        <li><a href="#">July 2012</a></li>
                        <li><a href="#">June 2012</a></li>
                        <li><a href="#">May 2012</a> </li>
                        <li><a  href="#">April 2012</a></li>
                       </ul>   
                </div>	
                <div className='col-sm-3' >
                    <ul>
                        <li className='c1'>Copyright</li><br/>
                        <li><a href="#">Bakery &copy 2015 - Privacy Policy</a></li>
                        
                       </ul> 
                </div>			  
            </div><br/>
        </footer>

  </Router>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
