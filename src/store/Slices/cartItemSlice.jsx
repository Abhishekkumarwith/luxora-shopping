import { produce } from "immer";

export const CART_ADD_ITEM = "cart/addItem";
export const CART_REMOVE_ITEM = "cart/ItemRemove";
export const CART_ITEM_INCREASE_QUANTITY = "cart/IncreaseItemQuantity";
export const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseItemQuantity";

export const addCartItem = (productData) => {
  return { type: CART_ADD_ITEM, payload: productData };
};
export const removeCartItem = (productId) => {
  return { type: CART_REMOVE_ITEM, payload: { productId } };
};

export const CartIncreaseQuantity = (productId) => {
  return {
    type: CART_ITEM_INCREASE_QUANTITY,
    payload: { productId },
  };
};
export const CartDecreaseQuantity = (productId) => {
  return {
    type: CART_ITEM_DECREASE_QUANTITY,
    payload: { productId },
  };
};

export function cartReducer(original = [], action) {
  return produce(original, (state) => {
    const existingIndex = state.findIndex(
      (item) => item.productId === action.payload.productId
    );
    switch (action.type) {
      case CART_ADD_ITEM:
        if (existingIndex !== -1) {
          state[existingIndex].quantity += 1;
          break;
        }
        state.push({ ...action.payload, quantity: 1 });
        break;
      case CART_REMOVE_ITEM:
        state.splice(existingIndex, 1);
        break;
      case CART_ITEM_INCREASE_QUANTITY:
        if (existingIndex !== -1) {
          state[existingIndex].quantity += 1;
          break;
        }
      case CART_ITEM_DECREASE_QUANTITY:
        state[existingIndex].quantity -= 1;

        if (state[existingIndex].quantity <= 0) {
          state.splice(existingIndex, 1);
        }
    }
    return state;
  });
}
