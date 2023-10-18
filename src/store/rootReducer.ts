import { combineReducers } from '@reduxjs/toolkit'
import { userAuthReducer } from './Authentication'

export const rootReducer = combineReducers({
    authentication: userAuthReducer
})

