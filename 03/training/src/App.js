import React, { Component } from 'react'
import { HandlerToProps } from './handlerToProps/HandlerToProps'
import { Btn } from './handlerToProps/Btn'

export class App extends Component {

    state = {
        text: '0',
        first : '',
        mathF : '',
        resultCalc: ''
    }

    onChangeHandler = e => {
        this.setState({ text: e.target.value.replace(/\D/, '') })
    }

    incHandler = incCount => {
        const newNum = this.state.text === '0' ? String(incCount) : this.state.text + incCount
        this.setState({ text: newNum})
    }

    clearAll= e => {
        this.setState({
            text: '0',
            first : '',
            mathF : '',
            resultCalc: ''
        })
    }

    calculate = e => {
        if(this.state.mathF === '+'){
            this.state.resultCalc = Number(this.state.first) + Number(this.state.text)
        }
        if(this.state.mathF === '-'){
            this.state.resultCalc = Number(this.state.first) - Number(this.state.text)
        }
        if(this.state.mathF === '*'){
            this.state.resultCalc = Number(this.state.first) * Number(this.state.text)
        }
        if(this.state.mathF === '/'){
            this.state.resultCalc = Number(this.state.first) / Number(this.state.text)
        }
        this.setState({
            first: '',
            mathF:  '',
            text: this.state.resultCalc
        })
    }

    setMathFunc = incCount => {
        this.setState({
            first: this.state.text,
            mathF: incCount,
            text: '0'
        })
    }

    render () {
        return (
            <div>
                <h2>Верстка калькулятора!</h2>
                <table>
                    <tbody>
                    <tr>
                        <td colSpan="4"><output style={{textAlign: 'right'}}>
                            {this.state.first}
                        </output></td>
                    </tr>
                    <tr>
                        <td colSpan="4"><output style={{textAlign: 'right'}}>
                            {this.state.mathF}
                        </output></td>
                    </tr>
                    <tr>
                        <td colSpan="4"><input style={{textAlign: 'right'}} value={this.state.text}
                        onChange={this.onChangeHandler}/></td>
                    </tr>

                    <tr>
                        <td><Btn incCount={1} handler={this.incHandler}>1</Btn></td>
                        <td><Btn incCount={2} handler={this.incHandler}>2</Btn></td>
                        <td><Btn incCount={3} handler={this.incHandler}>3</Btn></td>
                        <td><button onClick={this.clearAll}>C</button></td>
                    </tr>

                    <tr>
                        <td><Btn incCount={4} handler={this.incHandler}>4</Btn></td>
                        <td><Btn incCount={5} handler={this.incHandler}>5</Btn></td>
                        <td><Btn incCount={6} handler={this.incHandler}>6</Btn></td>
                        <td><Btn incCount={'+'} handler={this.setMathFunc}>+</Btn></td>
                    </tr>

                    <tr>
                        <td><Btn incCount={7} handler={this.incHandler}>7</Btn></td>
                        <td><Btn incCount={8} handler={this.incHandler}>8</Btn></td>
                        <td><Btn incCount={9} handler={this.incHandler}>9</Btn></td>
                        <td><Btn incCount={'-'} handler={this.setMathFunc}>-</Btn></td>
                    </tr>

                    <tr>
                        <td><Btn incCount={'*'} handler={this.setMathFunc}>*</Btn></td>
                        <td><Btn incCount={0} handler={this.incHandler}>0</Btn></td>
                        <td><Btn incCount={'/'} handler={this.setMathFunc}>/</Btn></td>
                        <td><button type="button" onClick={this.calculate}>=</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}