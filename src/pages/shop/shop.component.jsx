import React from 'react';
import {Route} from 'react-router-dom'

import {ShopPageContainer} from './shop.styles'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

class ShopPage extends React.Component {

    unsubscribeFromSanapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);

            console.log('====>', collectionMap)

        })
    }

    render() {
        const { match } = this.props;

        //console.log('kkkkkk', match)
        return (
            <ShopPageContainer>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </ShopPageContainer>
        )
    }
}

export default ShopPage;