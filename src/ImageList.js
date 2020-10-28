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
            <h2>Select desired dropdown to filter results. Only select one filter at a time, return back to "Show all"</h2>
            <div>
                <div className="filter-box">
                    Filter by keyword.
                    <select onChange={this.handleChange}>
                        <option value="">Show All</option>
                        {
                            uniqueKeywords.map(image => 
                                <Option
                                    keyword={image} />)
                        }
                    </select>
                </div>
                {/* Where other drop down is */}
                <div className="filter-box">
                    Filter by number of horns.
                    <select onChange={this.handleChange}>
                        <option value="">Show All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">100</option>
                    </select>
                </div>
            </div>
            <div className="animal-list">              
                {
                    images.filter((oneCard) => {
                        if (!this.state.filter) return true;

                        if (oneCard.keyword === this.state.filter)
                        return true;

                        if(oneCard.horns.toString() === this.state.filter)
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
