import React from 'react';
import './collection-item.css';

const CollectionItem = ({name, price, imageUrl}) => {
    console.log(imageUrl);
    
    return (
        <div className = 'collection-item'>
            <div className = "image" style ={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className = 'item-info'>
                <span>{name}</span>
                <span>${price}</span>
            </div>
            
        </div>
    )
}

export default CollectionItem
