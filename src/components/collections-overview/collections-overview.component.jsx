import React from 'react';

import { connect } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors.js';

import PreviewCollection from '../preview-collection/preview-collection.component';

import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {
        collections.map(({id , ...otherCollectionProps}) => (
        <PreviewCollection key={id} {...otherCollectionProps}/>
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  collections: selectCollectionsForPreview(state)
})


export default connect(mapStateToProps)(CollectionsOverview);