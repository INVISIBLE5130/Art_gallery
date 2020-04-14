import React from "react";
import './Customer.css';
import Payment from "./Payment/Payment";
import Order from "./Order/Order";
import Table from "../../Table/Table";

class Customer extends React.Component{

    render(){
        return(
            <div>
                <Payment/>
                <Order/>
                <Table/>
            </div>
        )
    }
}

export default Customer;