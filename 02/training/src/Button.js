import React, { Component } from 'react'


export default class Button extends Component {
    alertClick = () => {
        alert(this.props.msg)
    }

    render () {
        return (
            <button type="button" onClick={this.alertClick}> Hello </button>
        )
    }

}