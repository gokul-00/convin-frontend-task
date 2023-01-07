import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const store = configureStore({
  reducer: reducers,
  middleware: [thunk]
});

export default store;
