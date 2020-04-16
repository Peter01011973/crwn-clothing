import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collection/collection';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/actions';
import WithSpinner from '../../components/with-spinner/with-spinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class Shop extends React.Component {
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {

            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            this.props.updateCollections(collectionsMap);
            this.setState({loading: false});
        })
        
        
    }

    render() {
        const { loading } = this.state;
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading = {loading} {...props}/>} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading = {loading} {...props}/>} />
            </div>
        )
    }
}

const matpDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
})

export default connect(null, matpDispatchToProps)(Shop)
