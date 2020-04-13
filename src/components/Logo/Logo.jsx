import React from "react";
import './Logo.css';

class Logo extends React.Component{
    render() {
        return (
            <div className="main">
                <img alt="Logo" className="logo" src={require('../../img/AG logo.jpg')}/>
            </div>
        )
    }
}

export default Logo;