import React from "react";
import './Waybill.css';
import Status from "./PaymentStatus/Status";
import Table from "../../Table/Table";

class Waybill extends React.Component{

    render(){
        const {handleChange, data} = this.props;

        return(
            <div>
                <select onChange={handleChange} className="order">
                    <option>
                        Choose date:
                    </option>
                    <option value="?date=select1&">
                        2020-04-14
                    </option>
                    <option value="?date=select2&">
                        2020-04-14
                    </option>
                    <option value="?date=select3&">
                        2020-04-14
                    </option>
                    <option value="?date=select4&">
                        2020-04-14
                    </option>
                </select>
                <Status handleChange={handleChange}/>
                <Table data={data}/>
            </div>
        )
    }
}

export default Waybill;