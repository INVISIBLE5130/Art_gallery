import React from "react";
import './Customer.css';

class Customer extends React.Component{

    render(){
        const {secondHandleChange} = this.props;

        return(
            <div>
                <select onChange={secondHandleChange} className="customer">
                    <option>
                        Choose customer:
                    </option>
                    <option value="/success">
                        Сергієнко Ірина Михайлівна
                    </option>
                    <option value="/success">
                        Василенко Віталій Валентинович
                    </option>
                    <option value="/success">
                        Панасюк Михайло Йосипович
                    </option>
                    <option value="/success">
                        Середа Ніна Василівна
                    </option>
                    <option value="/success">
                        Бондаренко Анастасія Йосипівна
                    </option>
                </select>
            </div>
        )
    }
}

export default Customer;