import React, { Component } from 'react';
import './Table.css';
import JSONViewer from 'react-json-viewer';

class Table extends Component {

    render() {
        const {data} = this.props;
        if (!data) return 'Loading...'
        console.log(data)

        return (<JSONViewer
            json = {data}
        />)
    }
}

export default Table;