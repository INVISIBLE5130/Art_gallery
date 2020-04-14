import React from "react";
import './Status.css';

class Status extends React.Component{

    render(){
        return(
            <select className="status">
                <option>
                    Choose payment status:
                </option>
                <option value="1">
                    Paid
                </option>
                <option value="2">
                    Unpaid
                </option>
            </select>
        )
    }
}

export default Status;