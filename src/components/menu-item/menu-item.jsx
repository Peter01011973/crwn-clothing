import React from 'react';
import './menu-item.css';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title, imageURL, size, linkUrl, history, match}) => {
    return (
        <div className={`${size} menu-item`} onClick = {() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{ backgroundImage: `url(${imageURL})` }}></div>
                <div className="content" >
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            
        </div>
    )
}

export default withRouter(MenuItem)