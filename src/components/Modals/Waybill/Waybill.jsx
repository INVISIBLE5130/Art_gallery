import React from "react";
import './Waybill.css';
import Status from "./PaymentStatus/Status";

class Waybill extends React.Component{

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
                <Status/>
            </div>
        )
    }
}

export default Waybill;