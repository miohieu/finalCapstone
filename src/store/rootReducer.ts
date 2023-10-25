import { combineReducers } from '@reduxjs/toolkit'
import { userAuthReducer } from './Authentication'
import { getDanhSachReducer } from './getDanhSach/slice'
import { projectReducer } from './Project/slice'


export const rootReducer = combineReducers({
    authentication: userAuthReducer,
    getdanhsach : getDanhSachReducer,
    project: projectReducer
})




