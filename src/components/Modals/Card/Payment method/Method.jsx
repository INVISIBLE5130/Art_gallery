import React from "react";
import './Method.css';

class Method extends React.Component{

    render(){
        return(
            <select className="payment_method">
                <option>
                    Choose payment method:
                </option>
                <option value="1">
                    Waybill
                </option>
                <option value="2">
                    Credit
                </option>
                <option value="3">
                    Parts
                </option>
                <option value="4">
                    Online
                </option>
                <option value="5">
                    Installment plan
                </option>
            </select>
        )
    }
}

export default Method;