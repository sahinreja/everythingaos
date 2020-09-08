import React from 'react'
import { NavLink } from 'react-router-dom'
import CodeIcon from '@material-ui/icons/Code';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Navbar = ()=>{
    return(
        <> 
        <section className="header_top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6  mx-auto text-center">
                        <p>everything.ckf@gmail.com</p>
                    </div>
                    <div className="col-6  mx-auto text-center">   
                            <FacebookIcon className="mr-3" />
                            <InstagramIcon className="mr-3" />
                            <YouTubeIcon className="mr-3" />
                    </div>
                </div>
            </div>
        </section>
        <div className="container-fluid nav_bg">
          <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/"><CodeIcon  className="nav_icon" /> Everything</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/html">Html</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/css">Css</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/bootstrap">Bootstrap</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/javascript">Javascript</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/php">Php</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/reactjs">ReactJs</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/vuejs">Vuejs</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
          </div>
        </div>
        </>
    )
}
export default Navbar;