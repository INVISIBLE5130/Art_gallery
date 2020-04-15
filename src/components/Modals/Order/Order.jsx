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
                    <option value="?status=select1&">
                        Formed
                    </option>
                    <option value="?status=select2&">
                        Forming
                    </option>
                    <option value="?status=select3&">
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