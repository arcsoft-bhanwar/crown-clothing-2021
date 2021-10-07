import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { ShopPageContainer } from './shop.styles'
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.conatainer';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import CollectionPageContainer from '../collection/collection.container'

class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match } = this.props;

        return (
            <ShopPageContainer>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </ShopPageContainer>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);