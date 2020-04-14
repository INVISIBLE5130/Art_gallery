import React from "react";
import './Location.css';

class Location extends React.Component{

    render(){
        return(
            <select className="location">
                <option>
                    Choose artist location:
                </option>
                <option value="1">
                    Одеса
                </option>
                <option value="2">
                    Київ
                </option>
                <option value="3">
                    Одеса
                </option>
                <option value="4">
                    Київ
                </option>
                <option value="5">
                    Вінниця
                </option>
            </select>
        )
    }
}

export default Location;