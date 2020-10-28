import React, { Component } from 'react'
import ImageItem from './ImageItem.js'
import images from './data.js'
import Option from './Option.js'
import uniqueKeywords from './uniqueKeywords.js'

export default class ImageList extends Component {

    state = {
        filter: ''
    }

    handleChange = e => {
        this.setState({
            filter: e.target.value
        });
    }
    
    render() {
        return (
            <>
            <h2>Select desired dropdown to filter results.</h2>
            <select onChange={this.handleChange}>
                <option value="">Show All</option>
                {
                    uniqueKeywords.map(image => 
                        <Option
                            keyword={image} />)
                }
            </select>
            <div className="animal-list">              
                {
                    images.filter((oneCard) => {
                        if (!this.state.filter) return true;

                        if (oneCard.keyword === this.state.filter)
                        return true;

                        return false;
                    })     
                    .map(image => 
                        <ImageItem
                            title={image.title}
                            url={image.url}
                            description={image.description}
                            keyword={image.keyword}
                            horns={image.horns} />)
                }
            </div>
            </>
        )
    }
}
