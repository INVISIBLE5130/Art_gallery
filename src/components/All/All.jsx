import React from "react";
import './All.css';
import Table from "../Table/Table";

class All extends React.Component{

    render(){
        const {handleChange, data} = this.props;

        return(
            <div>
                <select onChange={handleChange} className="all">
                    <option>
                        Choose table:
                    </option>
                    <option value="payments">
                        Оплата
                    </option>
                    <option value="customers">
                        Замовники
                    </option>
                    <option value="orders">
                        Замовлення
                    </option>
                    <option value="waybills">
                        Накладні
                    </option>
                    <option value="couriers">
                        Курьери
                    </option>
                    <option value="deliveries">
                        Доставка
                    </option>
                    <option value="orderedItems">
                        Замовлені предмети
                    </option>
                    <option value="pictures">
                        Картини
                    </option>
                    <option value="artists">
                        Художники
                    </option>
                </select>
                <Table data={data}/>
            </div>
        )
    }
}

export default All;