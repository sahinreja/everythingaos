import React from 'react'
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
const Login  = ()=>{
    AOS.init();
    return(
        <>
        <div className="container login">
            <div className="row">
                <div className="col-lg-5 col-md-6 col-12 mx-auto mt-5"  data-aos="zoom-in" 
                data-aos-duration="500" 
                data-aos-easing="ease-in-out-cubic">
                    <div className="card" style={{border:'1px solid #5cb85c'}}>
                        <div className="card-header bg-success">
                            <h3 className="text-white">Login</h3>
                        </div>
                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input type="email" className="form-control" placeholder="Enter Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Password</label>
                                    <input type="password" className="form-control" placeholder="Enter Password" />
                                </div>
                                <br/>
                                <a href="" className="btn btn-outline-success">Login Now</a>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="card-text">
                                <p>New User ?<NavLink to="/signup" className="text-success">&nbsp;Click Here</NavLink> </p>
                                <p>Forget Password ?<NavLink to="/forgetpassword" className="text-success">&nbsp; Click Here</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login;