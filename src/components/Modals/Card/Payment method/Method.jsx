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
                <option value="payments/готівка">
                    Готівка
                </option>
                <option value="payments/картка">
                    Кредит
                </option>
                <option value="payments/картка">
                    Частинами
                </option>
                <option value="payments/картка">
                    Онлайн
                </option>
                <option value="payments/готівка">
                    При отриманні
                </option>
            </select>
        )
    }
}

export default Method;