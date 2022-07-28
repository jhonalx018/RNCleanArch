import {
  createStore,
  combineReducers,
  applyMiddleware,
  CombinedState,
} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {persistStore, persistReducer, PersistConfig} from 'redux-persist';

import itunesReducers from '@store/reducers/ItunesReducers';
import itunesEpics from '@store/epics/ItunesEpics';

import AsyncStorage from '@react-native-community/async-storage';
import {ItunesApi} from '@infrastructure/apiServices/itunesApi';

const persistConfig: PersistConfig<CombinedState<any>> = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({itunesReducers});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const DEPENDENCIES_STORE = {
  itunesApi: new ItunesApi(),
};

const observableMiddleware = createEpicMiddleware({
  dependencies: DEPENDENCIES_STORE,
});

export const store = createStore(
  persistedReducer,
  applyMiddleware(observableMiddleware),
);

export const persistor = persistStore(store as any);

export type TRootState = ReturnType<typeof rootReducer>;
export type TDependecy = typeof DEPENDENCIES_STORE;

observableMiddleware.run(itunesEpics as any);
