import React from 'react';
import "../src/css/footer.css"
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
       <>
        <div className='footer mt-4'>
            <div>
                <p className='footer-content text-center'>Copyright © 2023 Develop By Utkarsh Sharma India Allu rights reserved.</p>

            </div>
            <div>
                <Link href="/#" class="fa fa-google" target={'_blank'}></Link>
                <Link href="https://www.linkedin.com/in/utkarsh-sharma-653588243" class="fa fa-linkedin" target={'_blank'}></Link>
            </div>
            </div>
        
    </>
    );
}

export default Footer;
