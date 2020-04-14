import React from "react";
import './Category.css';

class Category extends React.Component{

    render(){
        return(
            <select className="category">
                <option>
                    Choose category:
                </option>
                <option value="1">
                    Пейзаж
                </option>
                <option value="2">
                    Абстракция
                </option>
                <option value="3">
                    Портрет
                </option>
                <option value="4">
                    Натюрморт
                </option>
                <option value="5">
                    Живопись
                </option>
            </select>
        )
    }
}

export default Category;