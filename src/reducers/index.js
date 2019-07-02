import { combineReducers } from 'redux'
import listItems from './listItems'
import toggleMenus from './toggleMenus'

export default combineReducers({ listItems, toggleMenus })