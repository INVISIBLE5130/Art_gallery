import React from "react";
import './Picture.css';
import Category from "./Category/Category";
import Table from "../../Table/Table";

class Picture extends React.Component{

    render(){
        return(
            <div>
                <select className="picture">
                    <option>
                        Choose picture status:
                    </option>
                    <option value="1">
                        Done
                    </option>
                    <option value="2">
                        In process
                    </option>
                    <option value="3">
                        Undone
                    </option>
                </select>
                <Category/>
                <Table/>
            </div>
        )
    }
}

export default Picture;