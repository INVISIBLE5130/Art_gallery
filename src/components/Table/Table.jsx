import React, { Component } from 'react';
import './Table.css';
import JSONViewer from 'react-json-viewer';

class Table extends Component {
    render() {
        return (
            <JSONViewer
                json={[
                    {
                        task: 'Learn React',
                        done: true,
                        task1: 'Learn React',
                        done1: true,
                    },
                    {
                        task: 'Learn React',
                        done: true,
                        task1: 'Learn React',
                        done1: true,
                    },
                    {
                        task: 'Learn React',
                        done: true,
                        task1: 'Learn React',
                        done1: true,
                    },
                    {
                        task: 'Learn React',
                        done: true,
                        task1: 'Learn React',
                        done1: true,
                    },
                ]}
            />
        );
    }
}

export default Table;