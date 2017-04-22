// @flow
import {combineReducers} from 'redux'
import nav from './navReducer'
import home from './homeReducer'

export default combineReducers({
  nav,
  home,
})

export const getNav = ({nav}) => nav
export const getHome = ({home}) => home
