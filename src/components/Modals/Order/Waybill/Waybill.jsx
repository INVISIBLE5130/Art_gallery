import React from "react";
import './Waybill.css';

class Waybill extends React.Component{

    render(){
        return(
            <select className="order">
                <option>
                    Choose waybill number:
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

export default Waybill;