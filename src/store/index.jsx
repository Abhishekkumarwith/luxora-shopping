import { combineReducers, createStore } from "redux";
import { productRaducer } from "./Slices/productSlice";
import { cartReducer } from "./Slices/cartItemSlice";
import { wishListReducer } from "./Slices/wishListSlice";

const reducer = combineReducers({
  products: productRaducer,
  cartItem: cartReducer,
  wishList: wishListReducer,
});

export const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  console.log(store.getState());
});
