import React, { Component } from 'react'
import ImageItem from './ImageItem.js'
import images from './data.js'

export default class ImageList extends Component {


    render() {
        return (
            <div>
                Selection dropdown to filter results.
                <select>
                    <option value="option-1">Option 1</option>
                </select>
                {
                    images.map(image => 
                        <ImageItem
                            title={image.title}
                            url={image.url}
                            description={image.description}
                            keyword={image.keyword}
                            horns={image.horns} />)
                }
                
            </div>
        )
    }
}
