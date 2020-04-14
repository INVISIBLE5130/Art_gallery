import React from "react";
import './Card.css';
import Method from "./Payment method/Method";
import Customer from "./Customer/Customer";
import Table from "../../Table/Table";

class Card extends React.Component{

    render(){
        return(
            <div>
                <Method/>
                <Customer/>
                <Table/>
            </div>
        )
    }
}

export default Card;