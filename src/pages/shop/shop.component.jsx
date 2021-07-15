import React, { useEffect } from 'react';

import { Route } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';

import { fetchCollectionStart } from '../../redux/shop/shop.actions';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';


import { connect } from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);
const ShopPage = ({ fetchCollectionStart, isCollectionFetching, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  },[fetchCollectionStart]);

  return(
    <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
      <Route path={`${match.path}/:collectionId` } render={(props) => <CollectionsPageWithSpinner isLoading={isCollectionFetching} {...props} />} />
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);