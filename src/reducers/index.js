import { combineReducers } from 'redux'
import { selectReducer } from './select'
import { mainReducer } from './main-page'

export const rootReducer = combineReducers({
  select: selectReducer,
  main: mainReducer
})
