import { combineReducers } from '@reduxjs/toolkit'
import { userAuthReducer } from './Authentication'
import { projectReducer } from './Project/slice'

export const rootReducer = combineReducers({
    authentication: userAuthReducer,
    project: projectReducer
})




