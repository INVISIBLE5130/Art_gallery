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
                <option value="id=select1">
                    1
                </option>
                <option value="id=select6">
                    6
                </option>
                <option value="id=select7">
                    7
                </option>
                <option value="id=select8">
                    8
                </option>
                <option value="id=select9">
                    9
                </option>
            </select>
        )
    }
}

export default Waybill;