import { combineReducers } from 'redux'

import ui from './ui'
import countries from './countries'

const createRootReducer = () =>
  combineReducers({
    ui,
    countries,
  })

export default createRootReducer
