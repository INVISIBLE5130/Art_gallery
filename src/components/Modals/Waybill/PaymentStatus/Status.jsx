import React from "react";
import './Status.css';

class Status extends React.Component{

    render(){
        const {handleChange} = this.props;

        return(
            <select onChange={handleChange} className="status">
                <option>
                    Choose payment status:
                </option>
                <option value="status=select1">
                    Paid
                </option>
                <option value="status=select5">
                    Unpaid
                </option>
            </select>
        )
    }
}

export default Status;