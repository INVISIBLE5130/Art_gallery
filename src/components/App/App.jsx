import React from "react";
import './App.css';
import Logo from "../Logo/Logo";
import Enter from "../Enter/Enter";

class App extends React.Component{
    render() {
        return (
            <div className="app">
                <Logo/>
                <Enter/>
            </div>
        )
    }
}

export default App;