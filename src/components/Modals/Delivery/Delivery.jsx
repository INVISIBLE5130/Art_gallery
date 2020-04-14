import React from "react";
import './Delivery.css';
import OrderedItems from "./OrderedItems/OrderedItems";
import Table from "../../Table/Table";

class Delivery extends React.Component{

    render(){
        return(
            <div>
                <select className="delivery">
                    <option>
                        Choose delivery number:
                    </option>
                    <option value="1">
                        1
                    </option>
                    <option value="2">
                        2
                    </option>
                    <option value="3">
                        3
                    </option>
                    <option value="4">
                        4
                    </option>
                    <option value="5">
                        5
                    </option>
                </select>
                <OrderedItems/>
                <Table/>
            </div>
        )
    }
}

export default Delivery;