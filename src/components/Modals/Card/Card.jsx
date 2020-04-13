import React from "react";
import './Card.css';
import Method from "./Payment method/Method";
import Customer from "../Customer/Customer";

class Card extends React.Component{

    render(){
        return(
            <div>
                <select className="card">
                    <option>
                        Choose card:
                    </option>
                    <option value="1">
                        Credit card
                    </option>
                    <option value="2">
                        Debit card
                    </option>
                </select>
                <Method/>
                <Customer/>
            </div>
        )
    }
}

export default Card;