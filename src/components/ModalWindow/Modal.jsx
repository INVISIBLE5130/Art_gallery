import React from "react";
import './Modal.css';
import Card from "../Modals/Card/Card";
import Customer from "../Modals/Customer/Customer";
import Order from "../Modals/Order/Order";
import Waybill from "../Modals/Waybill/Waybill";
import Delivery from "../Modals/Delivery/Delivery";
import OrderedItems from "../Modals/OrderedItems/OrderedItems";
import Picture from "../Modals/Picture/Picture";
import Artist from "../Modals/Artist/Artist";

class Modal extends React.Component{

    render(){
        const {currentModalId, onOpenModal, title} = this.props;

        return(
            <div id="modal" className="active">
                <div className="modal__title">
                    <p className="title">
                        {title}
                    </p>
                </div>

                { currentModalId === 'payment' ? <Card/> : null }
                { currentModalId === 'customer' ? <Customer/> : null }
                { currentModalId === 'order' ? <Order/> : null }
                { currentModalId === 'waybill' ? <Waybill/> : null }
                { currentModalId === 'delivery' ? <Delivery/> : null }
                { currentModalId === 'orderedItems' ? <OrderedItems/> : null }
                { currentModalId === 'picture' ? <Picture/> : null }
                { currentModalId === 'artist' ? <Artist/> : null }
                <button className="send" type="submit" value="submit" formMethod="post">
                    Submit
                </button>
                <button className="close" onClick={ () => onOpenModal(false) }>
                    Close
                </button>
            </div>
        )
    }
}

export default Modal;