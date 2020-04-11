import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collection-overview.css';

import { selectCollectionForPreview } from '../../redux/shop/selectors';
import PreviewCollection from '../../components/preview-collection/preview-collection';

const CollectionOverview = ({ collections }) => (
    <div className='collection-overview'>
        {
            collections.map(({ id, ...restCollectionProps }) => (
                <PreviewCollection key={id} {...restCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview)
