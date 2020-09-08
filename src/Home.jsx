import React from 'react'
import banner from './images/banner.svg';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
const Home  = ()=>{
    AOS.init();
    return(
        <>
        <section className="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto order-2 order-md-1 first"
                     data-aos="rotate-ac" data-aos-duration="1000" data-aos-easing="ease-in-quad">
                        <h3>
                            <span className="text-warning font-wight-bold shadow">Dont Worry!</span>
                            <span className="text-primary shadow font-weight-bold">
                                Everything
                            </span> is here.</h3>
                            <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Corporis explicabo ipsum magni, similique quisquam, odio commodi ea, tempora
                            eius soluta earum animi amet illum deserunt mollitia. Est, ratione. Unde, 
                            consectetur?</p>
                            <NavLink to="/html" className="btn btn-outline-primary font-weight-bold">Get Started</NavLink>
                    </div>
                    <div className="col-md-6 col-10 mx-auto banner_img m-4 order-1" data-aos="rotate-c" data-aos-duration="1000" data-aos-easing="ease-in-quad">
                        <img src={banner} alt="mypic"  className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
       
        <section className="home my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-10 mx-auto">
                        <div className="card" data-aos="rotate-ac" data-aos-duration="1000" data-aos-easing="ease-in-quad">
                            <div className="card-header text-center">
                                <span><i className="fas fa-code card_icon"></i></span>
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <h3 className="text-center html5">HTML5</h3>
                                </div>
                                <div className="card-text">
                                    <p className="text-center">Here HTML5 is describing easy way and learn from scratch quickly</p>
                                </div>
                                <NavLink to="/html" className="btn btn-outline-primary">Let's Learn..</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-10 mx-auto">
                        <div className="card" data-aos="rotate-ac" data-aos-duration="1000" data-aos-easing="ease-in-quad">
                            <div className="card-header text-center">
                                <span><i className="fab fa-css3 card_icon"></i></span>
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <h3 className="text-center html5">CSS3</h3>
                                </div>
                                <div className="card-text">
                                    <p className="text-center">Here CSS3 is describing easy way and learn from scratch quickly</p>
                                </div>
                                <NavLink to="/css" className="btn btn-outline-primary">Let's Learn..</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-10 mx-auto">
                        <div className="card" data-aos="rotate-ac" data-aos-duration="1000" data-aos-easing="ease-in-quad">
                            <div className="card-header text-center">
                                <span><i className="fab fa-bootstrap card_icon"></i></span>
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <h3 className="text-center html5">BOOTSTRAP5</h3>
                                </div>
                                <div className="card-text">
                                    <p className="text-center">BOOTSTRAP5 is describing easy way and learn from scratch quickly</p>
                                </div>
                                <NavLink to="/bootstrap" className="btn btn-outline-primary">Let's Learn..</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-10 mx-auto">
                        <div className="card" data-aos="rotate-ac" data-aos-duration="1000" data-aos-easing="ease-in-quad">
                            <div className="card-header text-center">
                              <span><i class="fab fa-js-square card_icon"></i></span>
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <h3 className="text-center html5">Javascript</h3>
                                </div>
                                <div className="card-text">
                                    <p className="text-center">Javascript is describing easy way and learn from scratch quickly</p>
                                </div>
                                <NavLink to="/javascript" className="btn btn-outline-primary">Let's Learn..</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="home mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-10 mx-auto">
                         <div className="card" data-aos="rotate-c" data-aos-duration="1000" data-aos-easing="ease-in-quad">
                                <div className="card-header text-center">
                                    <span><i className="fab fa-php card_icon"></i></span>
                                </div>
                                <div className="card-body">
                                    <div className="card-title">
                                        <h3 className="text-center html5">PHP</h3>
                                    </div>
                                    <div className="card-text">
                                        <p className="text-center">Here PHP is describing easy way and learn from scratch quickly</p>
                                    </div>
                                    <NavLink to="/php" className="btn btn-outline-primary">Let's Learn..</NavLink>
                                </div>
                         </div>
                    </div>
                    <div className="col-md-3 col-10 mx-auto">
                          <div className="card" data-aos="rotate-c" data-aos-duration="1000" data-aos-easing="ease-in-quad">
                                <div className="card-header text-center">
                                    <span><i className="fab fa-react card_icon"></i></span>
                                </div>
                                <div className="card-body">
                                    <div className="card-title">
                                        <h3 className="text-center html5">ReacJS</h3>
                                    </div>
                                    <div className="card-text">
                                        <p className="text-center">Here ReacJS is describing easy way and learn from scratch quickly</p>
                                    </div>
                                    <NavLink to="/reactjs" className="btn btn-outline-primary">Let's Learn..</NavLink>
                                </div>
                         </div> 
                    </div> 

                    <div className="col-md-3 col-10 mx-auto">
                         <div className="card" data-aos="rotate-c" data-aos-duration="1000" data-aos-easing="ease-in-quad">
                                <div className="card-header text-center">
                                    <span><i className="fab fa-vuejs card_icon"></i></span>
                                </div>
                                <div className="card-body">
                                    <div className="card-title">
                                        <h3 className="text-center html5">VueJS</h3>
                                    </div>
                                    <div className="card-text">
                                        <p className="text-center">Here VueJS is describing easy way and learn from scratch quickly</p>
                                    </div>
                                    <NavLink to="/vuejs" className="btn btn-outline-primary">Let's Learn..</NavLink>
                                </div>
                         </div>
                    </div> 

                    <div className="col-md-3 col-10 mx-auto">
                         <div className="card" data-aos="rotate-c" data-aos-duration="1000" data-aos-easing="ease-in-quad">
                                <div className="card-header text-center">
                                    <span><i className="fab fa-node card_icon"></i></span>
                                </div>
                                <div className="card-body">
                                    <div className="card-title">
                                        <h3 className="text-center html5">NodeJS</h3>
                                    </div>
                                    <div className="card-text">
                                        <p className="text-center">Here NodeJS is describing easy way and learn from scratch quickly</p>
                                    </div>
                                    <NavLink to="/html" className="btn btn-outline-primary">Let's Learn..</NavLink>
                                </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Home;