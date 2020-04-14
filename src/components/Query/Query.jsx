import React from "react";
import './Query.css';

class Query extends React.Component{
    render(){
        const {item, onOpenModal} = this.props;

        return(
            <div className="query" onClick={ () => onOpenModal (true, item.modal) }>
                <p className="query__title">
                    {item.name}
                </p>
            </div>
        )
    }
}

export default Query;