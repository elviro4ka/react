import React, { Component } from "react"
import { Btn } from './Btn'

export class HandlerToProps extends Component {

    state = {
        text: '0'
    }

    incHandler = incCount => {
        const newNum = this.state.text + incCount
        this.setState({ text: newNum})
    }

    render () {
        return (
            <div>
                D = {this.state.text}<br/>
                <Btn incCount={3} handler={this.incHandler}/>
            </div>
        )
    }
}


