import {combineReducers} from 'redux';
import GlobalReducer from './GlobalReducer';
import HomeReducer from '../Screen/Home/Redux/reducer';

export const allReducers = combineReducers({
  Global: GlobalReducer,
  Home: HomeReducer,
});
