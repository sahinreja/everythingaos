import React from 'react'
import { NavLink } from 'react-router-dom';
import AOS  from 'aos';

const Singup  = ()=>{
    AOS.init();
    return(
        <>
          <div className="container signup">
            <div className="row">
                <div className="col-lg-5 col-md-6 col-12 mx-auto mt-3"  data-aos="fade-down" data-aos-duration="500" data-aos-easing="ease-in-out-cubic">
                    <div className="card" style={{border:'1px solid #0275d8'}}>
                        <div className="card-header bg-primary">
                            <h3 className="text-white">Sign Up</h3>
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
                                <div className="form-group">
                                    <label htmlFor="">Confirm Password</label>
                                    <input type="password" className="form-control" placeholder="Enter Confirm Password" />
                                </div>
                                <br/>
                                <a href="" className="btn btn-outline-primary"> SignUp Now</a>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="card-text">
                                <p>Already Have An Account ?<NavLink to="/login">&nbsp;Click Here</NavLink> </p>
                                <p>Forget Password ?<NavLink to="/forgetpassword">&nbsp; Click Here</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Singup;