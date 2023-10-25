import { combineReducers } from '@reduxjs/toolkit'
import { userAuthReducer } from './Authentication'
import { getDanhSachReducer } from './getDanhSach/slice'

export const rootReducer = combineReducers({
    authentication: userAuthReducer,
    getdanhsach : getDanhSachReducer
})

