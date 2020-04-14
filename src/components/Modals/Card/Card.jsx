import React from "react";
import './Card.css';
import Method from "./Payment method/Method";
import Customer from "./Customer/Customer";

class Card extends React.Component{

    render(){
        return(
            <div>
                <Method/>
                <Customer/>
            </div>
        )
    }
}

export default Card;