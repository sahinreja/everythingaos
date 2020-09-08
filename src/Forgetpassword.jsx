import React from 'react'
import {NavLink} from 'react-router-dom'

const Forgetpassword=()=>{
    return(
        <>
         <div className="container forgetpass">
            <div className="row">
                <div className="col-lg-5 col-md-6 col-12 mx-auto mt-5">
                    <div className="card" style={{border:'1px solid #d9534f'}}>
                        <div className="card-header bg-danger">
                            <h3 className="text-white">Reset Password</h3>
                        </div>
                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input type="email" className="form-control" placeholder="Enter Email" />
                                </div>
                                <br/>
                                <a href="" className="btn btn-outline-danger">Reset Password</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Forgetpassword;