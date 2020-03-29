import React, { Component } from 'react';
import './directory.css';
import MenuItem from '../menu-item/menu-item';

export default class Directory extends Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageURL: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jeckets',
                    imageURL: 'https://i.ibb.co/px2tCc3/jeckets.png',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'womens',
                    imageURL: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'mens',
                    imageURL: 'https://i.ibb.co/R70vBrQ/mens.png',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
            ]
        }
    }

    render() {
        return (
            <div className = 'directory'>
                {this.state.sections.map(({id, ...restSectionProps}) => (
                    <MenuItem key = {id} {...restSectionProps}/>
                ))}
            </div>
        )
    }
}

