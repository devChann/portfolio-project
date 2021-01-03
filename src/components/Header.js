import React from 'react';
import Typed from 'react-typed';
const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web Site Development and Web Site Promotions</h1>
                <Typed 
                 className= "typed-text"
                 strings = {["Web design","Web Development","Facebook Ads SVM","Google Ads","Personal Web Sites","e.t.c"]}
                 typeSpeed ={40}
                 backSpeed ={60}
                 loop
                 />
            <a href="#" className ="btn-main-offer">Contact Us</a>
            </div>
        </div>
    )
}

export default Header
