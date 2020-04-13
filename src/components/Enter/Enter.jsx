import React from "react";
import './Enter.css';
import {NavLink} from "react-router-dom";
import {Route} from "react-router-dom";
import Queries from "../Queries/Queries";

class Enter extends React.Component{
    constructor(){
        super();
        this.state = {
            title: 'Enter to Gallery'
        }
    }

    changeTitle = () => {
        let newTitle = this.state.title === 'Enter to Gallery' ? 'Go back' : 'Enter to Gallery';
        this.setState({
            title: newTitle
        });
    };

    render() {
        return (
            <div className="enter">
                <NavLink to={this.state.title === 'Go back' ? `/` : `/Queries`}
                         onClick={this.changeTitle}
                         activeClassName="enter__button__active"
                         className="enter__button__passive">
                    {this.state.title}
                </NavLink>

                <Route path="/Queries" component={Queries}/>
                <Route path="/"/>
            </div>
        )
    }
}

export default Enter;