import React from "react";
import './Order.css';

class Order extends React.Component{

    render(){
        const {handleChange} = this.props;

        return(
            <select onChange={handleChange} className="order">
                <option>
                    Choose order:
                </option>
                <option value="id=select1">
                    1
                </option>
                <option value="id=select2">
                    2
                </option>
                <option value="id=select3">
                    3
                </option>
                <option value="id=select4">
                    4
                </option>
                <option value="id=select5">
                    5
                </option>
            </select>
        )
    }
}

export default Order;