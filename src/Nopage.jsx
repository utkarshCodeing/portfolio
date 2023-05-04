import React from 'react';
import "../src/css/nopage.css"
const Nopage = () => {
    return (
        <>
            <div className='height'>
                <h2 className='text-danger'> <i className='fas fa-exclamation-triangle' ></i> 404 Page Not Found</h2>
                <p className='taxt-succes'>Invalid URL</p>
                {/* <i class='fas fa-exclamation-triangle' ></i> */}
                {/* style='font-size:48px;color:red' */}
            </div>
        </>
    );
}

export default Nopage;