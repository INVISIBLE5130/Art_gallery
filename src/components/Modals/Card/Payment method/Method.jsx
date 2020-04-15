import React from "react";
import './Method.css';

class Method extends React.Component{

    render(){
        const {handleChange} = this.props;

        return(
            <select onChange={handleChange} className="payment_method">
                <option>
                    Choose payment method:
                </option>
                <option value="?type=select1&">
                    Waybill
                </option>
                <option value="?type=select2&">
                    Credit
                </option>
                <option value="?type=select3&">
                    Parts
                </option>
                <option value="?type=select4&">
                    Online
                </option>
                <option value="?type=select5&">
                    Installment plan
                </option>
            </select>
        )
    }
}

export default Method;