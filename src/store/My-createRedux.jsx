export function MyCreateStore(reducer) {
  let state;
  const listeners = [];
  const store = {
    getState() {
      return state;
    },

    dispatch(action) {
      state = reducer(state, action);
    },
    subscribe(listener) {
      listeners.push(listener);
      listeners.forEach((callback) => [callback()]);

      return function () {
        const listenerIndex = listeners.find(
          (registeredListener) => registeredListener === listener
        );
        listeners.splice(listenerIndex, 1);
      };
    },
  };

  store.dispatch({ type: "@@INIT" });

  return store;
}
