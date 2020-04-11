import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './directory.css';
import MenuItem from '../menu-item/menu-item';
import { selectSections } from '../../redux/directory/selectors';

const Directory = ({sections}) => (
    <div className='directory'>
        {sections.map(({ id, ...restSectionProps }) => (
            <MenuItem key={id} {...restSectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectSections
})

export default connect(mapStateToProps)(Directory);
