import { createSelector } from 'reselect';

const selectShopData = state => state.shop;

export const selectCollections = createSelector(
    [selectShopData],
    shop => shop.collections
)

export const selectCollection = collectionURLParam => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionURLParam] : null
)

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)
