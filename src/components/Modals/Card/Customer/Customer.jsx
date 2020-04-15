import React from "react";
import './Customer.css';

class Customer extends React.Component{

    render(){
        const {handleChange} = this.props;

        return(
            <div>
                <select onChange={handleChange} className="customer">
                    <option>
                        Choose customer:
                    </option>
                    <option value="fullName=select1">
                        Сергієнко Ірина Михайлівна
                    </option>
                    <option value="fullName=select2">
                        Василенко Віталій Валентинович
                    </option>
                    <option value="fullName=select3">
                        Панасюк Михайло Йосипович
                    </option>
                    <option value="fullName=select4">
                        Середа Ніна Василівна
                    </option>
                    <option value="fullName=select5">
                        Бондаренко Анастасія Йосипівна
                    </option>
                </select>
            </div>
        )
    }
}

export default Customer;