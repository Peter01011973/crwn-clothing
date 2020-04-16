import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item';
import './preview-collection.css';

const PreviewCollection = ({ title, items, history, match, routeName }) => {
    // items.length = 4;
    return (
        <div className = 'preview-collection'>
            <h1 className = 'title' onClick = {() => history.push(`${match.url}/${routeName}`)}>{title.toUpperCase()}</h1>
            <div className = 'preview'>
                {
                    items.map((item, index) => {if (index < 4)
                        return <CollectionItem key = {item.id} item = {item}/>
                    })
                }
            </div>
        </div>
    )
}

export default withRouter(PreviewCollection)
