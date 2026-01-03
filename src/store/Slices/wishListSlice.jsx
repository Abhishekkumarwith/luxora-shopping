export const WASHLIST_ADD_ITEM = "washlist/addItem";
export const WASHLIST_REMOVE_ITEM = "washlist/removeItem";

export function addWishList(productId) {
  return {
    type: WASHLIST_ADD_ITEM,
    payload: productId,
  };
}
export function removeWishList(productId) {
  return {
    type: WASHLIST_REMOVE_ITEM,
    payload: { productId },
  };
}

export function wishListReducer(state = [], action) {
  switch (action.type) {
    case WASHLIST_ADD_ITEM:
      const existingId = state.find(
        (wishList) => wishList.productId === action.payload.productId
      );
      if (existingId) {
        return state.map((wishList) => {
          if (existingId.productId === action.payload.productId) {
            return { ...wishList, quantity: wishList.quantity + 1 };
          } else wishList;
        });
      }
      return [...state, { ...action.payload, quantity: 1 }];
    case WASHLIST_REMOVE_ITEM:
      return state.filter(
        (washlistItem) => washlistItem.productId !== action.payload.productId
      );

    default:
      return state;
  }
}
