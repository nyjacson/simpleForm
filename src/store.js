import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

// export default function createFinalStore() {
//   const finalCreateStore = compose()(createStore);
//   return finalCreateStore(rootReducer);
// }

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
)

export default store;