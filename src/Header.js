import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <h1>Testing <span className="red">.map</span> and <span className="blue">.filter</span> with <span className="green">dropdowns</span> and <span className="yellow">horned animals</span>. </h1>
                <div className="roar"><h1><span className="orange">ROAR!</span></h1></div>
            </header>
        )
    }
}
