import React from "react";
import './Modal.css';
import Card from "../Modals/Card/Card";

class Modal extends React.Component{
    // state={
    //     queryTitle: [
    //         {name: 'Payment'},
    //         {name: 'Customer'},
    //         {name: 'Order'},
    //         {name: 'Waybill'},
    //         {name: 'Delivery'},
    //         {name: 'Ordered items'},
    //         {name: 'Picture'},
    //         {name: 'Artist'}
    //     ]
    // }

    render(){

        function openQuery() {
            let modal = document.getElementById('modal');
            modal.classList.remove('active');
        }

        return(
            <div id="modal">
                <div className="modal__title">
                    <p className="title">
                        {/*{this.state.queryTitle.name}*/}
                        Payment
                    </p>
                </div>
                <Card/>
                <button className="send" type="submit" value="submit" formMethod="post">
                    Submit
                </button>
                <button className="close" onClick={ () => openQuery () }>
                    Close
                </button>
            </div>
        )
    }
}

export default Modal;