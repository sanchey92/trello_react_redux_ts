import {createStore, applyMiddleware, combineReducers, Store} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import {persistStore, persistReducer, Persistor} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";

import listReducer from "./reducers/listReducer/listReducer";

const rootReducer = combineReducers({
  list: listReducer
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore() {
  const store: Store = createStore(
    persistedReducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunk))
  )
  const persistor: Persistor = persistStore(store);
  return {store, persistor}
}
