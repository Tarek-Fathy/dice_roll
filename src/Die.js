import React, { Component } from 'react';
import './Die.css'
class Die extends Component {
    
    render() {
        const {face} = this.props;
        return <i className = {`Die fa-solid fa-dice-${face}`}></i>
    }
}

export default Die;