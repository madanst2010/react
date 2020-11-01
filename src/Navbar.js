import React from 'react';
import { BrowserRouter , Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
const Navbar = () => {
    return (
       <>
    
       <div className="container-fluid nav_bg">
           <div className="row">
               <div className="col-10 mx-auto">

             
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
            </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link  className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link  className="nav-link" to="/project">Project</Link>
                </li>
                
                <li className="nav-item">
                    <Link  className="nav-link" to="/contact">Contact</Link>
                </li>
             
                <li className="nav-item" >
                <Link  className="nav-link" to="/donate"><div className="box">Donate</div></Link>
                       
                  
                </li>
              
            </ul>
        </div>
      
    </nav>
    </div>
           </div>
       </div>
    </>
    );

}
export default Navbar;