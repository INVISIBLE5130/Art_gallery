import React from "react";
import './Order.css';
import Waybill from "./Waybill/Waybill";
import Table from "../../Table/Table";

class Order extends React.Component{

    render(){
        const {handleChange, data} = this.props;

        return(
            <div>
                <select onChange={handleChange} className="order">
                    <option>
                        Choose status:
                    </option>
                    <option value="orders/done">
                        Formed
                    </option>
                    <option value="orders/in progress">
                        Forming
                    </option>
                    <option value="orders/in progress">
                        Not formed
                    </option>
                </select>
                <Waybill onChange={handleChange}/>
                <Table data={data}/>
            </div>
        )
    }
}

export default Order;