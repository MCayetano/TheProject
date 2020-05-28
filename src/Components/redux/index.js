import {combineReducers} from 'redux'

import user from './user';
// import auto from './auto';
// import commercial from './commercial';
import Home from '../Home';

export default combineReducers({ user, Home})