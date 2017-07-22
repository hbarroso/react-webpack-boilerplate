import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './style.scss'

class HelloMessage extends Component {
    render() {
        return(
            <h1>okok!</h1>
        );
    }
}

ReactDOM.render(<HelloMessage />, document.querySelector('.container'));