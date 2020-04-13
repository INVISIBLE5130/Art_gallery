import React from "react";
import './Queries.css';
import Query from "../Query/Query";
import Modal from "../ModalWindow/Modal";

class Queries extends React.Component{
    state={
        queries: [
            {name: 'Query 1'},
            {name: 'Query 2'},
            {name: 'Query 3'},
            {name: 'Query 4'},
            {name: 'Query 5'},
            {name: 'Query 6'},
            {name: 'Query 7'},
            {name: 'Query 8'}
        ]
    }

    render() {
        const {queries} = this.state;

        return (
            <div className="queries">
                {queries.map((item, index) => {
                    return (
                        <Query key={index} name={item.name}/>
                    )
                })}
                <Modal/>
            </div>
        )
    }
}

export default Queries;