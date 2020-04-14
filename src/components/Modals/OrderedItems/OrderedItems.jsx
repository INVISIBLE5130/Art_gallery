import React from "react";
import './OrderedItems.css';
import Picture from "./Picture/Picture";

class OrderedItems extends React.Component{

    render(){
        return(
            <div>
                <select className="ordered_items">
                    <option>
                        Choose delivery status:
                    </option>
                    <option value="1">
                        Sent out
                    </option>
                    <option value="2">
                        On hold
                    </option>
                    <option value="3">
                        Not sent out
                    </option>
                </select>
                <Picture/>
            </div>
        )
    }
}

export default OrderedItems;