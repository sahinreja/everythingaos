import React from 'react'
import logo2 from './images/html.gif'
import  AOS  from 'aos'
const Html =()=>{
    AOS.init()
    return(
        <>
        <section className="mt-5 html">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto"  data-aos="fade-down"
                     data-aos-duration="300"
                     data-aos-easing="ease-in-out-cubic">
                        <h3 className="mb-5">1.What is HTML?</h3>
                        <ul>
                            <li>
                                <p>HTML stands for Hyper Text Markup Language</p>
                            </li>
                            <li>
                                <p> HTML is the standard markup language for creating Web pages</p>
                            </li>
                            <li>
                                <p>HTML describes the structure of a Web page</p>
                            </li>
                            <li>
                                <p>HTML consists of a series of elements</p>
                            </li>
                            <li>
                                <p>HTML elements tell the browser how to display the content</p>
                            </li>
                            <li>
                                <p>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-10 mx-auto"  data-aos="fade-up" data-aos-duration="300"
                     data-aos-easing="ease-in-out-cubic">
                    <h3 className="mb-5">2.A Simple HTML Document</h3>
                        <p className="font-weight-bold m-5">
                        &lt;!DOCTYPE html&gt;<br/>
                        &lt;html&gt;<br/>
                        &lt;head&gt;<br/>
                        &lt;title&gt;<span className="text-primary">Page Title</span>&lt;/title&gt;<br/>
                        &lt;/head&gt;<br/>
                        &lt;body&gt;<br/>
                        &lt;h1&gt;<span className="text-danger">This is my Heading Tag</span>&lt;/h1&gt;<br/>
                        &lt;p&gt;<span className="text-warning">This is my Paragraph Tag</span>&lt;/p&gt;<br/>
                        &lt;/body&gt;<br/>
                        &lt;/html&gt;
                        </p>
                    </div>
                 </div>
            </div>
        </section>


        <section className="mt-5 html">
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-6 col-10 mx-auto"  data-aos="fade-right" data-aos-duration="300"
                     data-aos-easing="ease-in-out-cubic">
                        <h3  className="mb-5">3.Example Expained</h3>
                        <ul>
                            <li><p>The  <span className="text-danger">&lt;!DOCTYPE html&gt;</span> declaration defines
                            that this document is an HTML5 document</p></li>
                            <li><p>The <span className="text-danger">&lt;html&gt;</span> element is the root element of an HTML page</p></li>
                            <li><p>The <span className="text-danger">&lt;html&gt;</span> element contains meta information about the HTML page</p></li>
                            <li><p>The <span className="text-danger">&lt;title&gt;</span> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</p></li>
                            <li><p>The <span className="text-danger">&lt;title&gt;</span> element defines the document's body, and is a containerll the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</p></li>
                            <li><p>The <span className="text-danger">&lt;title&gt;</span>  element defines a large heading</p></li>
                            <li><p>The <span className="text-danger">&lt;title&gt;</span> element defines a paragraph</p></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-10 mx-auto"  data-aos="fade-left" data-aos-duration="300"
                     data-aos-easing="ease-in-out-cubic">
                        <h3  className="mb-5">4.What is an HTML Element?</h3>
                        <p>An HTML element is defined by a start tag, some content, and an end tag:</p>
                        <h5 className="my-4"><span className="text-danger">&lt;tagname&gt;</span>Content goes here...<span className="text-danger">&lt;/tagname&gt;</span></h5>
                        <p>The HTML element is everything from the start tag to the end tag:</p>
                        <h5 className="my-4"><span className="text-danger">&lt;h1&gt;</span>My first Heading<span className="text-danger">&lt;/h1&gt;</span></h5>
                        <h5 className="my-4"><span className="text-danger">&lt;p&gt;</span>My first paragraph.<span className="text-danger">&lt;/p&gt;</span></h5>
                    </div>
                </div>
            </div>
        </section>

        <section className="mt-5 html">
            <div className="container">
                <div className="row my-5">
                        <div className="col-lg-10 col-10 mx-auto"  data-aos="fade-down" data-aos-duration="300"
                     data-aos-easing="ease-in-out-cubic">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Start Element</th>
                                    <th>Element Content</th>
                                    <th>End Tag</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>&lt;html&gt;</th>
                                    <th>My first Heading</th>
                                    <th>&lt;/html&gt;</th>
                                </tr>
                                <tr>
                                    <th>&lt;p&gt;</th>
                                    <th>My first Paragrap</th>
                                    <th>&lt;/p&gt;</th>
                                </tr>
                                <tr>
                                    <th>&lt;br /&gt;</th>
                                    <th>none</th>
                                    <th>none</th>
                                </tr>
                                
                            </tbody>
                        </table>
                        </div>
                </div>
            </div>
        </section>

        <section className="mt-5 html">
        <div className="container">
        <h3>6.HTML Page Structure</h3>
             <div className="row my-5">
                 <div className="col-md-8 col-10 mx-auto"  data-aos="flip-down" data-aos-duration="300"
                     data-aos-easing="ease-in-out-cubic">
                     <img src={logo2} className="img-fluid" alt="mypic"/>
                 </div>
             </div>
         </div>
        </section>
        </>
    )
}
export default Html;