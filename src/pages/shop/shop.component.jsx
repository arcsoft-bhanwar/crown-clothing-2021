import React from 'react';
import {Route} from 'react-router-dom'
import{connect} from 'react-redux'
import {ShopPageContainer} from './shop.styles'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component';
const CollectionOverviewWithSpinner= WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    }

    unsubscribeFromSanapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections')
        collectionRef.get().then(snapshot=>{
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({loading:false})
        })
        /* collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({loading:false})
        }) */
    }

    render() {
        const { match } = this.props;
        const {loading} = this.state;

        //console.log('kkkkkk', match)
        return (
            <ShopPageContainer>
                {/* <Route exact path={`${match.path}`} component={CollectionOverview} /> */}
                <Route exact path={`${match.path}`} render ={(props)=><CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
                {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
                <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={loading} {...props}/>} />
            </ShopPageContainer>
        )
    }
}
const mapDispatchToProps = (dispatch)=>({
    updateCollections: collectionMap=> dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);