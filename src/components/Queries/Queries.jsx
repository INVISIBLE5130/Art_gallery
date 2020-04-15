import React from "react";
import './Queries.css';
import Query from "../Query/Query";
import Modal from "../ModalWindow/Modal";

class Queries extends React.Component{
    constructor() {
        super();

        this.state = {
            queries: [
                {name: 'Query 1', modal: 'payment', title: 'Payment'},
                {name: 'Query 2', modal: 'customer', title: 'Customer'},
                {name: 'Query 3', modal: 'order', title: 'Order'},
                {name: 'Query 4', modal: 'waybill', title: 'Waybill'},
                {name: 'Query 5', modal: 'delivery', title: 'Delivery'},
                {name: 'Query 6', modal: 'orderedItems', title: 'OrderedItems'},
                {name: 'Query 7', modal: 'picture', title: 'Picture'},
                {name: 'Query 8', modal: 'artist', title: 'Artist'},
                {name: 'Query 9', modal: 'all', title: 'All'}
            ],
            modalIsOpen:false,
            currentModalId: null
        }
    }

    openModal = (modalIsOpen= false, currentModalId= null) => {

        this.setState({
            currentModalId,
            modalIsOpen
        });
    }

    render() {
    const {queries, currentModalId, modalIsOpen} = this.state;
    const {title} = queries.find(({modal}) => modal === currentModalId) || {};

        return (
            <div className="queries">
                {queries.map((item, index) => {
                    return (
                        <Query key={index} item={item} onOpenModal={this.openModal}/>
                    )
                })}
                {modalIsOpen && <Modal
                    title={title}
                    currentModalId={currentModalId} onOpenModal={this.openModal}/>}
            </div>
        )
    }
}

export default Queries;