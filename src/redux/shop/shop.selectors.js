import { createSelector } from "reselect";

const selectShop = state => state.shop;

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5
// }
export const selectShopData = (createSelector(
  [selectShop],
  shop => shop.collections
));

export const selectCollectionsForPreview = createSelector(
  [selectShopData],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParam => (
  createSelector(
    [selectShopData],
    collections => collections[collectionUrlParam]
  )
)

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)

export default selectShopData;