import React,{useEffect} from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { ShopPageContainer } from './shop.styles'
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.conatainer';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import CollectionPageContainer from '../collection/collection.container'

const ShopPage = ({fetchCollectionsStartAsync, match}) => {

    useEffect(()=>{
        fetchCollectionsStartAsync();
    },[fetchCollectionsStartAsync])

        return (
            <ShopPageContainer>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </ShopPageContainer>
        )
    }


const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);