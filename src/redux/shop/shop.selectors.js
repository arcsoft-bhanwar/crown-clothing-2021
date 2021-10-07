import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : [],
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );

  export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
  )

  export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections // we are getting shop.collection null then we need to convert into boolean that's why we put !! before this eg.= !! null and it return false
  )