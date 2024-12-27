import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(
  rootReducer, 
  // 在开发环境中，可以使用 Redux DevTools 扩展
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
