import React, { Component } from 'react';
import collections from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection';

export class Shop extends Component {
    constructor() {
        super();
        this.state = {
            collections
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className = 'shop-page'>
                {
                    collections.map(({id, ...restCollectionProps}) => (
                        <PreviewCollection key = {id} {...restCollectionProps}/>
                    ))
                }
                
            </div>
        )
    }
}

export default Shop
