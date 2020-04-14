import React from "react";
import './Customer.css';
import Payment from "./Payment/Payment";
import Order from "./Order/Order";

class Customer extends React.Component{

    render(){
        return(
            <div>
                <Payment/>
                <Order/>
            </div>
        )
    }
}

export default Customer;