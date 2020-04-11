import { createSelector } from 'reselect';
import collection from '../../pages/collection/collection';

const selectShopData = state => state.shop;

export const selectCollections = createSelector(
    [selectShopData],
    shop => shop.collections
)

export const selectCollection = collectionURLParam => createSelector(
    [selectCollections],
    collections => collections[collectionURLParam]
)

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)
