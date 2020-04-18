import React from "react";
import './Waybill.css';

class Waybill extends React.Component{

    render(){
        const {handleChange} = this.props;

        return(
            <select onChange={handleChange} className="waybill">
                <option>
                    Choose waybill number:
                </option>
                <option value="/1">
                    1
                </option>
                <option value="/6">
                    6
                </option>
                <option value="/7">
                    7
                </option>
                <option value="/8">
                    8
                </option>
                <option value="/9">
                    9
                </option>
            </select>
        )
    }
}

export default Waybill;