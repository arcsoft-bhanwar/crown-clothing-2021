import React from 'react';
import {connect} from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item.component';
import {CollectionPageContainer, CollectionTitle, CollectionItemsContainer} from './collection.styles'
import {selectCollection} from '../../redux/shop/shop.selector'

const CollectionPage = ({collection}) => {
    const {items, title}=collection;
    console.log('ooooo', collection)
    return(
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {
                    items.map((item)=><CollectionItem key={item.id} item={item}/>)
                }
            </CollectionItemsContainer>
            
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps)=>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
