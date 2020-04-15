import React from "react";
import './Card.css';
import Method from "./Payment method/Method";
import Customer from "./Customer/Customer";
import Table from "../../Table/Table";

class Card extends React.Component{

    render(){
        const {handleChange, data} = this.props;

        return(
            <div>
                <Method handleChange={handleChange}/>
                <Customer handleChange={handleChange}/>
                <Table data={data}/>
            </div>
        )
    }
}

export default Card;