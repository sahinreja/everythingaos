import React from 'react'
import AOS from 'aos'
const Javascript  = ()=>{
    AOS.init();
    return(
        <>
        <section className="mt-5 javascript">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto"  data-aos="zoom-in" 
                data-aos-duration="300" 
                data-aos-easing="ease-in-out-cubic">
                        <h2 className="font-weight-bold"><i className="fa fa-star text-danger"></i> <u>JavaScript Introduction</u></h2>
                        <br/>
                        <h4>JavaScript Can Change HTML Content</h4>
                        <p>One of many JavaScript HTML methods is <span className="bg-secondary p-2 text-warning">getElementById().</span></p>
                        <p>The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":</p>
                        <h5>Example</h5>
                        <p className="bg-primary text-white p-2 text-center">
                            document.getElementById("demo") <br/> .innerHTML = "Hello JavaScript";</p>
                    </div>
                    <div className="col-md-6 col-10 mx-auto"  data-aos="fade-left" 
                data-aos-duration="300" 
                data-aos-easing="ease-in-out-cubic">
                        <h3 className="font-weight-bold">
                            <i className="fa fa-star text-warning"></i>
                            <u>JavaScript Can Change HTML Attribute Values</u>
                        </h3>
                        <p>In this example JavaScript changes the value of the 
                            <span className="text-danger bg-warning p-1">src</span> 
                            (source) attribute of an 
                            <span className="text-danger bg-warning p-1">img tag:</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="mt-5 javascript">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto"  data-aos="fade-right" 
                data-aos-duration="300" 
                data-aos-easing="ease-in-out-cubic">
                        <h3 className="font-weight-bold">
                            <i className="fa fa-star text-primary"></i>
                            <u>JavaScript Can Change HTML Styles (CSS)</u>
                        </h3>
                        <p>Changing the style of an HTML element, is a variant of changing an HTML attribute:</p>
                        <h4>Example</h4>
                        <p className="bg-danger p-2 text-warning text-center">document.getElementById("demo")
                        <br/>.style.fontSize = "35px";</p>
                    </div>
                    <div className="col-md-6 col-10 mx-auto"  data-aos="fade-left" 
                data-aos-duration="300" 
                data-aos-easing="ease-in-out-cubic">
                        <h3 className="font-weight-bold"><i className="fa fa-star text-info"></i><u>JavaScript Can Hide HTML Elements</u></h3>
                        <p>Hiding HTML elements can be done by changing the <span className="bg-success text-warning p-1">display</span> style:</p>
                        <h4>Example</h4>
                        <p className="bg-success text-warning p-2 fon text-center">document.getElementById("demo") <br/>
                         .style.display = "none";</p>
                    </div>
                </div>
            </div>
        </section>


           
        <section className="mt-5 javascript">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto"  data-aos="fade-right" 
                data-aos-duration="300" 
                data-aos-easing="ease-in-out-cubic">
                        <h3 className="font-weight-bold">
                            <i className="fa fa-star text-primary"></i>
                            <u>JavaScript Can Show HTML Elements</u>
                        </h3>
                        <p>Showing hidden HTML elements can also be done by changing the 
                            <span className="text-danger bg-primary p-1">display</span> style:</p>
                        <h4>Example</h4>
                        <p className="bg-danger p-2 text-warning text-center">document.getElementById("demo")
                        <br/>.style.display = "block";</p>
                    </div>
                    <div className="col-md-6 col-10 mx-auto"  data-aos="fade-left" 
                data-aos-duration="300" 
                data-aos-easing="ease-in-out-cubic">
                        <h3 className="font-weight-bold"><i className="fa fa-star text-info">
                            </i><u>JavaScript Where To</u></h3>
                        <h5>The <span className="bg-danger text-warning px-1">script</span> Tag</h5>
                        <p>In HTML, JavaScript code is inserted between
                            <span className="bg-success text-warning p-1">script</span> and 
                            <span className="bg-success text-warning p-1">script</span> tag</p>
                        <h4>Example</h4>
                        <p className="bg-success text-warning p-2 fon text-center">document.getElementById("demo") <br/>
                         .innerHTML = "My first Javascript";</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Javascript;