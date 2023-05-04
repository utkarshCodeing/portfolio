import React from 'react';
import "../src/css/home.css"
import pic from "../src/image/illustration2.jpg"
import Service from './Service';
import About from "./About"
import { Link } from "react-router-dom"
import Contactus from "./Contactus"
const Home = () => {
    return (
        <>
            <div className="container home">
                <div className="left">
                    <p>
                        <span className=' text '>My</span> Name is <br />
                        <span className='middle '>Utkarsh Sharma&nbsp; </span><br />
                        <p className='bottom'>
                            And  am a  <span className='text'><u><b>Web Developer.</b></u></span>
                        </p>
                    </p>
                    <button className="btn btn-primary btn-lg  text-light btn-sm active "> <Link to="resume.pdf" download target={'_blank'} className=' font text-light'>
                        CV/RESUME</Link></button>

                </div>
                <div className="right">
                    <img src={pic} alt="" />
                </div>
            </div>
            <Service />
            <About />
            <Contactus />
            {/* <h2 className='text-center m-3'>Our Services</h2>
            <div className="container text-dark">
                <div class="card-group">
                    <div class="card">
                        <img src={pic3} class="card-img-top" height="60%" />
                        <div class="card-body black text-light" >
                            <h5 class="card-title text-center">Web Development</h5>
                            <p class="card-text">Hello ! We Develop Many type of Webside using of these web devloping technology Like as :
                                <ol>
                                    <li>React js</li>
                                    <li>Node Js</li>
                                    <li>Java script</li>
                                </ol>
                            </p>
                            <Link className='link' to="/contact">Contact Us</Link>
                        </div>
                    </div>

                    <div class="card">
                        <img src={pic4} class="card-img-top" height="60%" />
                        <div class="card-body black text-light">
                            <h5 class="card-title text-center">UI/UX Design</h5>
                            <p class="card-text " height="35%">Hello ! Here we desigh Many type of UI/UX desigh. with use of this technology:
                                <ol>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JAVA SCRIPT</li>
                                </ol>
                            </p>

                            <Link className='link' to="/contact">Conatct US</Link>
                        </div>
                    </div>
                    <div class="card">
                        <img src={pic5} class="card-img-top" height="60%" />
                        <div class="card-body black text-light">
                            <h5 class="card-title text-center" >App Development</h5>
                            <p class="card-text" >Hello ! here Also we develope mobile Application With use of These technology:
                                <ol>
                                    <li>REACT NATIVE</li>
                                    <li>JAVA</li>
                                    <li>FLUTTER</li>
                                </ol>

                            </p>
                            <Link className='link' to="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    );
}

export default Home;