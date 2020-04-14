import React from "react";
import './Payment.css';

class Payment extends React.Component{

    render(){
        return(
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
        )
    }
}

export default Payment;