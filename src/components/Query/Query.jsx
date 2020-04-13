import React from "react";
import './Query.css';

class Query extends React.Component{
    render(){
        const {name} = this.props;
        // const {queryTitle} = this.state;

        function openQuery() {
            let modal = document.getElementById('modal');
            modal.classList.add('active');
        }

        return(
            <div className="query" onClick={ () => openQuery () }>
                <p className="query__title">
                    {name}
                </p>
            </div>
        )
    }
}

export default Query;