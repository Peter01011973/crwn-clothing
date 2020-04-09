import React from 'react';
import CollectionItem from '../collection-item/collection-item';
import './preview-collection.css';

const PreviewCollection = ({ title, items }) => {
    items.length = 4;
    return (
        <div className = 'preview-collection'>
            <h1 className = 'title'>{title.toUpperCase()}</h1>
            <div className = 'preview'>
                {
                    items.map(item => (
                        <CollectionItem key = {item.id} item = {item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection
