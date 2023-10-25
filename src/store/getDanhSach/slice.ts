import { createSlice } from "@reduxjs/toolkit";
import { DanhSach } from "types/getDanhSach";
import { getDanhSachThunk } from ".";

type getdanhsachInitialState ={
    userList ?: DanhSach[]
    isFetchingUserList?: boolean
}


const initialState : getdanhsachInitialState = {}


const getDanhSachSlice = createSlice({
    name : 'getdanhsachuser',
    initialState,
    reducers : {},
    extraReducers(builder) {
        builder
        .addCase(getDanhSachThunk.fulfilled, (state,{payload})=>{
            state.userList = payload
            state.isFetchingUserList = false
        })
        .addCase(getDanhSachThunk.pending, (state)=>{
            state.isFetchingUserList = true
        })
        .addCase(getDanhSachThunk.rejected, (state)=>{
            state.isFetchingUserList = false
        })
    },

})
export const {actions : getDanhSachActions , reducer : getDanhSachReducer} = getDanhSachSlice