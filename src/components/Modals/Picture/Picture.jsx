import React from "react";
import './Picture.css';
import Category from "./Category/Category";
import Table from "../../Table/Table";

class Picture extends React.Component{

    render(){
        const {handleChange, data} = this.props;

        return(
            <div>
                <select onChange={handleChange} className="picture">
                    <option>
                        Choose artist full name:
                    </option>
                    <option value="1">
                        Криволап Анатолій Дмитрович
                    </option>
                    <option value="2">
                        Марчук Іван Степанович
                    </option>
                    <option value="3">
                        Ройтбурд Олександр Анатолійович
                    </option>
                </select>
                <Category handleChange={handleChange}/>
                <Table data={data}/>
            </div>
        )
    }
}

export default Picture;