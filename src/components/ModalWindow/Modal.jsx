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
import All from "../All/All";
import axios from "axios";

class Modal extends React.Component{

    state = {
        value: null,
        secondValue: "",
        data: null
    };

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({ value: value });
    }

    secondHandleChange = (e) => {
        const secondValue = e.target.value;
        this.setState({ secondValue: secondValue });
    }

    handlePrint = () => {
        const {value, secondValue} = this.state;
        if (value === null && secondValue === null) {
            console.log('error')
        } else {
            this.getData()
        }

        if (value !== null && secondValue === null) {
            this.getDataTable()
        }
    }

    getData = () => {
        axios.get(`http://localhost:5000/api/v1/${this.state.value}${this.state.secondValue}`)
            .then((response) => {
                const data = response.data;
                this.setState({data: data})
                console.log(data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    getDataTable = () => {
        axios.get(`http://localhost:5000/api/v1/${this.state.value}`)
            .then((response) => {
                const data = response.data;
                this.setState({data: data})
                console.log(data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    render(){
        const {currentModalId, onOpenModal, title} = this.props;
        const {data} = this.state;

        return(
            <div id="modal" className="active">
                <div className="modal__title">
                    <p className="title">
                        {title}
                    </p>
                </div>

                { currentModalId === 'payment' ? <Card
                    data={data}
                    handleChange={this.handleChange}
                    secondHandleChange={this.secondHandleChange}
                /> : null }
                { currentModalId === 'customer' ? <Customer
                    data={data}
                    handleChange={this.handleChange}
                    secondHandleChange={this.secondHandleChange}
                /> : null }
                { currentModalId === 'order' ? <Order
                    data={data}
                    handleChange={this.handleChange}
                    secondHandleChange={this.secondHandleChange}
                /> : null }
                { currentModalId === 'waybill' ? <Waybill
                    data={data}
                    handleChange={this.handleChange}
                    secondHandleChange={this.secondHandleChange}
                /> : null }
                { currentModalId === 'delivery' ? <Delivery
                    data={data}
                    handleChange={this.handleChange}
                    secondHandleChange={this.secondHandleChange}
                /> : null }
                { currentModalId === 'orderedItems' ? <OrderedItems
                    data={data}
                    handleChange={this.handleChange}
                    secondHandleChange={this.secondHandleChange}
                /> : null }
                { currentModalId === 'picture' ? <Picture
                    data={data}
                    handleChange={this.handleChange}
                    secondHandleChange={this.secondHandleChange}
                /> : null }
                { currentModalId === 'artist' ? <Artist
                    data={data}
                    handleChange={this.handleChange}
                    secondHandleChange={this.secondHandleChange}
                /> : null }
                { currentModalId === 'all' ? <All data={data} handleChange={this.handleChange}/> : null }
                <button onClick={this.handlePrint} className="send" type="submit" value="submit" formMethod="post">
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