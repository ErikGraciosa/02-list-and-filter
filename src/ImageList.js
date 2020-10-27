import React, { Component } from 'react'
import ImageItem from './ImageItem.js'
import images from './data.js'

export default class ImageList extends Component {

    state = {
        filter: ''
    }

    handleChange = e => {
        console.log(e)
        this.setState({
            filter: e.target.value
        });
    }

    render() {
        return (
            <>
            <h2>Selection dropdown to filter results.</h2>
            <select onChange={this.handleChange}>
                <option value="">Show All</option>
                <option value="markhor">Markhor</option>
                <option value="narwhal">Narwhal</option>
                <option value="unilego">UniLego</option>
                <option value="unicorn">Unicorn</option>
                <option value="rhino">Rhino</option>
                <option value="triceratops">Triceratops</option>
                <option value="chameleon">Chameleon</option>
                <option value="lizard">Lizard</option>
                <option value="dragon">Dragon</option>
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
