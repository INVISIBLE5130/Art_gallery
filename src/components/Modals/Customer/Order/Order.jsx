import React from "react";
import './Order.css';

class Order extends React.Component{

    render(){
        const {handleChange} = this.props;

        return(
            <select onChange={handleChange} className="order">
                <option>
                    Choose order:
                </option>
                <option value="/bogdan79@xxxhot.fun">
                    1
                </option>
                <option value="/kira.ponomarenk@bkrointernational.site">
                    2
                </option>
                <option value="/kramarenko.serg@xygy.site">
                    3
                </option>
                <option value="/sereda.irina@devachek.org">
                    4
                </option>
                <option value="/margarita.lisen@baat.site">
                    5
                </option>
            </select>
        )
    }
}

export default Order;