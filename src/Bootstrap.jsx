import React from 'react'
import logo from './images/boots.png';
import AOS from 'aos';
const Bootstrap  = ()=>{
    AOS.init();
    return(
        <>
         <section className="bootstrap5 mt-5">
             <div className="container">
                 <div className="row">
                     <div className="col-md-6 col-10 mx-auto order-2 order-lg-1" data-aos="zoom-in" 
                data-aos-duration="300" 
                data-aos-easing="ease-in-out-cubic" >
                         <h1 className="mt-5">Build fast, responsive sites with Bootstrap</h1>
                         <h5>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</h5>
                         <br/>
                         <a href="" className="btn btn-success bt">Get Started</a>
                     </div>
                     <div className="col-md-6 col-10 mx-auto order-1" data-aos="fade-up" 
                data-aos-duration="300" 
                data-aos-easing="ease-in-out-cubic">
                         <img src={logo} className="img-fluid ml-sm-5 mt-md-5" alt=""/>
                     </div>
                 </div>
             </div>
         </section>
       
         <section className="bootstrap5 mt-5">
             <div className="container">
                 <div className="row">
                     <div className="col-md-6 col-10 mx-auto" data-aos="fade-right" 
                data-aos-duration="300" 
                data-aos-easing="ease-in-out-cubic">
                         <div className="bg">
                         <i className="fa fa-code"></i>
                         </div>
                         <h2 className="my-4">Installation</h2>
                         <h5>Install Bootstrap’s source Sass and JavaScript files via npm, Composer, or Meteor.</h5>
                         <p>Package managed installs don’t include documentation or our full build scripts. You can also use our npm template repo to quickly generate a Bootstrap project via npm.</p>
                         <br/>
                         <a href="" className="btn btn-outline-info">Read installation docs</a>
                     </div>
                     <div className="col-md-6 col-10 mx-auto my-5" data-aos="fade-left" 
                data-aos-duration="300" 
                data-aos-easing="ease-in-out-cubic">
                         <div className="bg1">
                             <h6 className="font-weight-light">#Via npm <br/>
                             npm install bootstrap</h6>
                             <br/>
                             <h6 className="font-weight-light">#Via gem <br/>
                             gem install bootstrap -v 4.5.2</h6>
                             
                         </div>
                     </div>
                 </div>
             </div>
         </section>  

         <section className="bootstrap5 mt-5">
             <div className="container">
                 <div className="row">
                     <div className="col-md-6 col-10 mx-auto" data-aos="fade-right" 
                data-aos-duration="300" 
                data-aos-easing="ease-in-out-cubic">
                         <div className="bg3">
                         <i className="fa fa-code"></i>
                         </div>
                         <h2 className="my-4">BootstrapCDN</h2>
                         <h5>When you only need to include Bootstrap’s compiled CSS or JS, you can use BootstrapCDN.</h5>
                         <p>See it in action with our simple starter template, or browse the examples to jumpstart your next project.</p>
                         <br/>
                         <a href="" className="btn btn-outline-info">Explore the docs</a>
                     </div>
                     <div className="col-md-6 col-10 mx-auto my-5" data-aos="fade-left" 
                data-aos-duration="300" 
                data-aos-easing="ease-in-out-cubic" >
                         <div className="bg1">
                             <h6 className="font-weight-light">#Via npm <br/>
                             npm install bootstrap</h6>
                             <br/>
                             <h6 className="font-weight-light">#Via gem <br/>
                             gem install bootstrap -v 4.5.2</h6>
                             
                         </div>
                     </div>
                 </div>
             </div>
         </section>
        
        
         <section className="bootstrap5 mt-5">
             <div className="container">
                 <div className="row">
                     <div className="col-md-6 col-10 mx-auto" data-aos="fade-right" 
                data-aos-duration="300" 
                data-aos-easing="ease-in-out-cubic">
                         <div className="bg4">
                         <i className="fa fa-code"></i>
                         </div>
                         <h2 className="my-4">Bootstrap Icons</h2>
                         <h5>For the first time ever, Bootstrap has its own open source SVG icon library, designed to work best with our components and documentation.</h5>
                         <p>Bootstrap Icons are designed to work best with Bootstrap components, but they’ll work in any project. They’re SVGs, so they scale quickly and easily, can be implemented in several ways, and can be styled with CSS.</p>
                         <br/>
                         <a href="" className="btn btn-outline-info">Get Bootstrap Icons</a>
                     </div>
                     <div className="col-md-6 col-10 mx-auto my-4" data-aos="fade-left" 
                data-aos-duration="300" 
                data-aos-easing="ease-in-out-cubic">
                         <img src="https://getbootstrap.com/docs/4.5/assets/img/bootstrap-icons.png" className="img-fluid" alt=""/>
                     </div>
                 </div>
             </div>
         </section>
        </>
    )
}
export default Bootstrap;