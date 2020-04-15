import React from "react";
import './Picture.css';

class Picture extends React.Component{

    render(){
        const {handleChange} = this.props;

        return(
            <select onChange={handleChange} className="picture">
                <option>
                    Choose picture name:
                </option>
                <option value="1">
                    Сінай
                </option>
                <option value="2">
                    Прощавай, Караваджо!
                </option>
                <option value="3">
                    Портрет
                </option>
                <option value="4">
                    Кінь. Вечір
                </option>
                <option value="5">
                    Волошки
                </option>
            </select>
        )
    }
}

export default Picture;