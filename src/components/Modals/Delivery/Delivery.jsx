import React from "react";
import './Delivery.css';
import Couriers from "./Couriers/Couriers";
import Table from "../../Table/Table";

class Delivery extends React.Component{

    render(){
        const {handleChange, data} = this.props;

        return(
            <div>
                <select onChange={handleChange} className="delivery">
                    <option>
                        Choose delivery date:
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
                <Couriers handleChange={handleChange}/>
                <Table data={data}/>
            </div>
        )
    }
}

export default Delivery;