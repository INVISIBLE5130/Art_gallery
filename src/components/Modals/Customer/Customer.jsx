import React from "react";
import './Customer.css';

class Customer extends React.Component{

    render(){
        return(
            <select className="customer">
                <option>
                    Choose customer:
                </option>
                <option value="1">
                    Сергієнко Ірина Михайлівна
                </option>
                <option value="2">
                    Василенко Віталій Валентинович
                </option>
                <option value="3">
                    Панасюк Михайло Йосипович
                </option>
                <option value="4">
                    Середа Ніна Василівна
                </option>
                <option value="5">
                    Бондаренко Анастасія Йосипівна
                </option>
            </select>
        )
    }
}

export default Customer;