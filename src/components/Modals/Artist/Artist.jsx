import React from "react";
import './Artist.css';
import Location from "./Location/Location";

class Artist extends React.Component{

    render(){
        return(
            <div>
                <select className="artist">
                    <option>
                        Choose average price of paintings:
                    </option>
                    <option value="1">
                        $ 120 000
                    </option>
                    <option value="2">
                        $ 97 000
                    </option>
                    <option value="3">
                        $ 50 000
                    </option>
                    <option value="4">
                        $ 120 000
                    </option>
                    <option value="5">
                        $ 35 000
                    </option>
                </select>
                <Location/>
            </div>
        )
    }
}

export default Artist;