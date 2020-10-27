import React, { Component } from 'react'


export default class ImageItem extends Component {

    
 

    render() {
        return (
            <div className="animal-card">
                <h2>{this.props.title}</h2>
                <img src={this.props.url} alt="Animal"/>
                <div>Description: {this.props.description}</div>
                <div>Keyword: {this.props.keyword}</div>
                <div>How many horns? {this.props.horns}</div>
            </div>
        )
    }
}
