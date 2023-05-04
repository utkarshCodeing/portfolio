import React from 'react';
// import pic1 from "../src/image/1.jpg"
import pic2 from "../src/image/10.png"
import "../src/css/about.css"
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <>
            <div className="main-about container">
                <div className="leftabout">
                    <div className="about-left">
                        <img src={pic2} alt="" />
                    </div>
                    <div className="about-right">
                        <p><span>NAME:</span>&nbsp;Utkarsh Sharma</p>
                        <p><span>PROFILE:</span>&nbsp;Mern Stack Developer</p>
                        <p><span>EMAIL:</span>&nbsp;utkarshbhardwaj158@.com</p>
                        <p><span>PHONE:</span>&nbsp;(+91)7456043916</p>
                    </div>
                    <hr />
                    <h4>SkillS</h4><br />
                    <br />
                    <label htmlFor="">HTML	&#8594; 90%</label>
                    <div class="progress">
                        <div class="progress-bar bg-info skill-html" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div><br />
                    <label htmlFor="">CSS 	&#8594; 80%</label>
                    <div class="progress">
                        <div class="progress-bar bg-info skill-CSS" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div><br />
                    <label htmlFor="">JAVA SCRIPT 	&#8594; 80%</label>
                    <div class="progress">
                        <div class="progress-bar bg-info skill-js" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div><br />
                    <label htmlFor="">BOOTSCRIPT 	&#8594;90%</label>
                    <div class="progress">
                        <div class="progress-bar bg-info skill-Boot" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div><br />
                    <label htmlFor="">REACT JS	&#8594;85%</label>
                    <div class="progress">
                        <div class="progress-bar bg-info skill-react" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div><br />
                    <label htmlFor="">TYPE SCRIPT	&#8594;60%</label>
                    <div class="progress">
                        <div class="progress-bar bg-info skill-type" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div><br />
                    <label htmlFor="">NODE JS	&#8594;90%</label>
                    <div class="progress">
                        <div class="progress-bar bg-info skill-node" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div><br />
                    <label htmlFor="">EXPRESS JS 	&#8594;90%</label>
                    <div class="progress">
                        <div class="progress-bar bg-info skill-express" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div><br />
                    <label htmlFor="">MONGO DB 	&#8594;90%</label>
                    <div class="progress">
                        <div class="progress-bar bg-info skill-mongo" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div><br />
                </div>

                <div className="rightabout">
                    <h2>About Me</h2>
                    <p>Hi, My self Utkarsh Sharma.By profession i am a Software Engeneer.And i Belong form Hathras Utter Pradesh </p>
                    <p>And i completed Our Bachelor in stream of Computer Science (Bachelor Of Computer Application) from DR. BHIMRAO AMBEDKAR UNIVERSITY, AGRA <br />
                        And also i completed Our intermidiate (12th) and Highschool (10th) from UP Board</p>
                    <p>i Completed our MERN STACK WEB APPLICATION DOVELOPING traning From Ducat Noida  </p>
                    <h2>Achivement</h2>
                    <ol>
                        <li>i got Best Student Award In College.</li>
                        <li>i got Third Best Devloper Award From Ducat.</li>
                    </ol>
                    <h2>Hobbies</h2>
                    <ol>
                        <li>Coading </li>
                        <li>Traveling</li>
                        <li>Reading Books </li>
                        <li>Coocking Food</li>
                    </ol>
                    <p><sub><i class="material-icons">&#xe0c8;</i></sub>&nbsp;Ehan Hathras Uttar Pradesh 204101</p>
                    <p><sub><i class="material-icons">&#xe324;</i>&nbsp;</sub>(+91)&nbsp;7456043916</p>
                    <p><sub><i class="material-icons">&#xe0be;</i></sub> &nbsp;utkarshbhardwaj158@gmail.com</p>
                    <Link href="/#" class="fa fa-google"></Link>
                    <Link href="/#" class="fa fa-linkedin"></Link>

                </div>
            </div>
        </>

    );
}

export default About;