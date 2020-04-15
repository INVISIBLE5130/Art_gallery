import React from "react";
import './Couriers.css';

class Couriers extends React.Component{

    render(){
        const {handleChange} = this.props;

        return(
            <select onChange={handleChange} className="couriers">
                <option>
                    Choose courier:
                </option>
                <option value="1">
                    Nathan Mendez
                </option>
                <option value="2">
                    Brittany Hubbard
                </option>
                <option value="3">
                    Zephania Mcgee
                </option>
                <option value="4">
                    Kenyon Conner
                </option>
            </select>
        )
    }
}

export default Couriers;