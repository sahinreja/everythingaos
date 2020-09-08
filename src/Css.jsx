import React from 'react';
import AOS from 'aos';
const Css  = ()=>{
    AOS.init();
    return(
        <>
         <section className="mt-5 css" >
             <div className="container">
                 <div className="row">
                     <div className="col-md-6 col-10 mx-auto"  data-aos="fade-up" data-aos-duration="300"
                     data-aos-easing="ease-in-out-cubic">
                         <h3 className="mb-4">1.What is CSS?</h3>
                         <ul>
                             <li><p>CSS stands for Cascading Style Sheets</p></li>
                             <li><p>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</p></li>
                             <li><p>CSS saves a lot of work. It can control the layout of multiple web pages all at once</p></li>
                             <li><p>External stylesheets are stored in CSS files</p></li>
                         </ul>
                     </div>
                     <div className="col-md-6 col-10 mx-auto"  data-aos="fade-down" data-aos-duration="300"
                     data-aos-easing="ease-in-out-cubic">
                         <h3 className="mb-4">2.Why Use CSS?</h3>
                         <p>CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.</p>
                         
                     </div>
                 </div>
             </div>
         </section>

         <section className="mt-5 css">
             <div className="container">
                 <div className="row">
                     <div className="col-md-6 col-10 mx-auto"  data-aos="fade-right" data-aos-duration="300"
                     data-aos-easing="ease-in-out-cubic">
                         <h3 className="mb-4">3.CSS Example</h3>
                         <h4 className="ml-5"><span className="text-danger">body</span> &#123;<br/>background-color: lightblue;<br/>&#125;</h4>
                         <h4 className="ml-5"><span className="text-danger">h1</span> &#123;<br/>color: white;<br/>
                         text-align: center; <br/> &#125;</h4>
                         <h4 className="ml-5"><span className="text-danger">p</span> &#123;<br/>font-family: verdana;<br/>
                         font-size: 20px; <br/> &#125;</h4>
                     </div>
                     <div className="col-md-6 col-10 mx-auto"  data-aos="fade-left" data-aos-duration="300"
                     data-aos-easing="ease-in-out-cubic">
                     <h3 className="mb-4">4.CSS Solved a Big Problem</h3>
                     <p>HTML was NEVER intended to contain tags for formatting a web page!</p>
                     <p>HTML was created to describe the content of a web page, like:</p>
                     <h5>&lt;h1&gt;This is a Heading&lt;/h1&gt;</h5>
                     <h5 className="mb-4">&lt;p&gt;This is a Paraghrap&lt;/p&gt;</h5>

                     <p>When tags like &lt;font&gt;, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process.</p>
                     </div>
                 </div>
             </div>
         </section>
         
         <section className="mt-5 css">
             <div className="container">
                 <div className="row">
                     <div className="col-md-6 col-10 mx-auto"  data-aos="fade-right" data-aos-duration="300"
                     data-aos-easing="ease-in-out-cubic">
                         <h3>5.CSS Syntax</h3>
                         <p>A CSS rule-set consists of a selector and a declaration block:</p>
                         <table className="table table-striped">
                             <thead>
                                 <tr>
                                     <th>Selecter</th>
                                     <th>Property</th>
                                     <th>Value</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 <tr>
                                     <th>h1</th>
                                     <th>&#123; color :</th>
                                     <th>red &#125;</th>
                                 </tr>
                                 <tr>
                                     <th>p</th>
                                     <th>&#123; font-size :</th>
                                     <th>24px &#125;</th>
                                 </tr>
                             </tbody>
                         </table>
                         <p>The selector points to the HTML element you want to style.</p>
                         <p>The declaration block contains one or more declarations separated by semicolons.</p>
                         <p>Each declaration includes a CSS property name and a value, separated by a colon.</p>
                         <p>Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.</p>
                     </div>
                     <div className="col-md-6 col-10 mx-auto"  data-aos="fade-left" data-aos-duration="300"
                     data-aos-easing="ease-in-out-cubic">
                         <h3>6.Example</h3>
                         <p>In this example all &lt;p&gt; elements will be center-aligned, with a red text color:</p>
                         <h4 className="ml-5">
                             p &#123;<br/>
                             color : red;<br/>
                             text-align : center;<br/>
                             &#125;
                         </h4>
                     </div>
                 </div>
             </div>
         </section>
        
        <section className="my-5 css">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto"  data-aos="fade-right" data-aos-duration="300"
                     data-aos-easing="ease-in-out-cubic">
                        <h3>7.CSS Selectors</h3>
                        <p>CSS selectors are used to "find" (or select) the HTML elements you want to style.</p>
                        <p>We can divide CSS selectors into five categories:</p>
                        <ul>
                            <li><p>Simple selectors (select elements based on name, id, class)</p></li>
                            <li><p>Combinator selectors (select elements based on a specific relationship between them)</p></li>
                            <li><p>Pseudo-class selectors (select elements based on a certain state)</p></li>
                            <li><p>Pseudo-elements selectors (select and style a part of an element)</p></li>
                            <li><p>Attribute selectors (select elements based on an attribute or attribute value)</p></li>
                        </ul>
                        <p>This page will explain the most basic CSS selectors.</p>
                    </div>
                    <div className="col-md-6 col-10 mx-auto"  data-aos="fade-left" data-aos-duration="300"
                     data-aos-easing="ease-in-out-cubic">
                        <h3>8.The CSS element Selector</h3>
                        <p>The element selector selects HTML elements based on the element name.</p>
                        <h4>Example</h4>
                        <p>Here, all 	&lt;p&gt; elements on the page will be center-aligned, with a red text color: </p>
                        <h4 className="ml-5"><span className="text-danger">p </span>&#123;<br/>
                        text-align : center ; <br/>
                        color : red  ;<br/>
                        &#125;</h4>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="mb-5 css">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto"  data-aos="fade-right" data-aos-duration="300"
                     data-aos-easing="ease-in-out-cubic">
                        <h3>9.The CSS id Selector</h3>
                        <p>The id selector uses the id attribute of an HTML element to select a specific element.</p>
                        <p>The id of an element is unique within a page, so the id selector is used to select one unique element!</p>
                        <p>To select an element with a specific id, write a hash (#) character, followed by the id of the element.</p>
                        <h4>Example</h4>
                        <p>The CSS rule below will be applied to the HTML element with id="para1": </p>
                        <h4 className="ml-5"><span className="text-danger">#para1</span> &#123;<br/>
                        text-align : center;<br/>
                        color : red;<br/>
                        &#125;</h4>
                    </div>
                    <div className="col-md-6 col-10 mx-auto"></div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Css;