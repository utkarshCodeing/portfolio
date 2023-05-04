import React from 'react';
import pic1 from "../src/image/webdesign.png"
import pic2 from "../src/image/webdevl.png"
import pic3 from "../src/image/6.jpg"
import pic4 from "../src/image/android.png"
import pic5 from "../src/image/ios.png"
import pic6 from "../src/image/app.png"
import { Link } from 'react-router-dom';
import "../src/css/service.css"

const Service = () => {

    return (
        <>
            <div className="service container">
                <h1>SERVICES</h1>
                <p className='service-title'>We Provide These Services</p>
                <div className="upper">
                    <div className='service-card'>
                        <img className="card-img-top" src={pic1} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title service-h">Web Designing</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/contact" className='Services-link '>Contact Us</Link>
                        </div>
                    </div>
                    <div className='service-card'>
                        <img className="card-img-top" src={pic2} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title service-h">Web Development</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/contact" className='Services-link '>Contact Us</Link>
                        </div>
                    </div>
                    <div className='service-card'>
                        <img className="card-img-top" src={pic3} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title service-h">UI/UX Design</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/contact" className='Services-link '>Contact Us</Link>
                        </div>
                    </div>
                </div>
                <div className="down">
                    <div className='service-card'>
                        <img className="card-img-top" src={pic6} alt="Card  cap" />
                        <div className="card-body">
                            <h5 className="card-title service-h">App Development</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/contact" className='Services-link '>Contact Us</Link>
                        </div>
                    </div>
                    <div className='service-card'>
                        <img className="card-img-top" src={pic4} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title service-h">Android Developement</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/contact" className='Services-link '>Contact Us</Link>
                        </div>
                    </div>
                    <div className='service-card'>
                        <img className="card-img-top" src={pic5} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title service-h">IOS Developement</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/contact" className='Services-link '>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;
