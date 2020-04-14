import React from "react";
import './Order.css';
import Waybill from "./Waybill/Waybill";
import Table from "../../Table/Table";

class Order extends React.Component{

    render(){
        return(
            <div>
                <select className="order">
                    <option>
                        Choose status:
                    </option>
                    <option value="1">
                        Formed
                    </option>
                    <option value="2">
                        Forming
                    </option>
                    <option value="3">
                        Not formed
                    </option>
                </select>
                <Waybill/>
                <Table/>
            </div>
        )
    }
}

export default Order;