import React from 'react';
import '../src/css/contact.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Contact = () => {
    var [name, setname] = useState("")
    var [Email, setEmail] = useState("")
    var [subject, setsubject] = useState("")
    var [message, setmessage] = useState("")

    var namecontant = (events) => {
        setname(name = events.target.value)

    }

    var emailcontant = (events) => {
        setEmail(Email = events.target.value)
    }

    var subjectcontant = (events) => {
        setsubject(subject = events.target.value)
    }

    var messagecontant = (events) => {
        setmessage(message = events.target.value)
    }

    var submit = (e) => {
        e.preventDefault();
        console.log({ name }, { Email }, { subject }, { message })
        alert("thanks for contact us")
        alert(`                Name:${name},
                Email:${Email},
                subject:${subject},
                messagw:${message}
   `)
        // preventDefault();

    }

    return (
        <>
            <div className="main-contact container">
                <div className="leftcontact">
                    <h2>Send Massage Us</h2>
                    <form action="" onSubmit={submit}>
                        <input className='form-control' onChange={namecontant} placeholder='Your Name' type="text" /><br />
                        <input className='form-control' onChange={emailcontant} placeholder='Your Email' type="email" /><br />
                        <input className='form-control' onChange={subjectcontant} placeholder='Subject' type="text" /><br />
                        <textarea className='form-control' name="" id="" onChange={messagecontant} placeholder='Message' cols="20" rows="8"></textarea><br />
                        <button className='text-center btn-contact w100' type="submit">Submit</button>
                    </form>

                </div>
                <div className="rightcontact">
                    <h2>Get In Touch</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto eligendi soluta nulla placeat
                        repudiandae earum, incidunt sit perferendis aliquid asperiores, nisi molestias tempore reprehenderit
                        aspernatur modi nihil ab eius voluptatum?</p>
                    <p><sub><i class="material-icons">&#xe0c8;</i></sub>&nbsp;Ehan Hathras Uttar Pradesh 204101</p>
                    <p><sub><i class="material-icons">&#xe324;</i>&nbsp;</sub>(+91)&nbsp;7456043916</p>
                    <p><sub><i class="material-icons">&#xe0be;</i></sub> &nbsp;utkarshbhardwaj158@gmail.com</p>
                    <p>Social Media Links:</p>



                    <Link href="/#" class="fa fa-linkedin"></Link>

                    <Link href="/#" class="fa fa-google"></Link>

                </div>
            </div>
        </>
    );
}

export default Contact;