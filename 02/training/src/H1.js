import React, { Component } from 'react'


export default class H1 extends Component {

    render () {
        return (
            <h1>
                Hello {this.props.toWhat}
            </h1>
        )
    }

}