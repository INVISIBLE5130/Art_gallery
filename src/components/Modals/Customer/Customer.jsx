import React from "react";
import './Customer.css';
import Order from "./Order/Order";
import Table from "../../Table/Table";

class Customer extends React.Component{

    render(){
        const {handleChange, data} = this.props;

        return(
            <div>
                <select onChange={handleChange} className="customer">
                    <option>
                        Choose customer email:
                    </option>
                    <option value="сustomers/1">
                        bogdan79@xxxhot.fun
                    </option>
                    <option value="сustomers/2">
                        kira.ponomarenk@bkrointernational.site
                    </option>
                    <option value="сustomers/3">
                        kramarenko.serg@xygy.site
                    </option>
                    <option value="сustomers/4">
                        sereda.irina@devachek.org
                    </option>
                    <option value="сustomers/5">
                        margarita.lisen@baat.site
                    </option>
                </select>
                <Order handleChange={handleChange}/>
                <Table data={data}/>
            </div>
        )
    }
}

export default Customer;