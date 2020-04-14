import React from "react";
import './OrderedItems.css';

class OrderedItems extends React.Component{

    render(){
        return(
            <select className="ordered_items">
                <option>
                    Choose ordered item:
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
        )
    }
}

export default OrderedItems;