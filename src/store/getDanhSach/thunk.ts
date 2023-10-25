import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDanhSachServices } from "services";

export const getDanhSachThunk = createAsyncThunk('getDanhSach/getDanhSachList', 
async(_, {rejectWithValue})=>{
    try{
        const data = await getDanhSachServices.getListDanhSach()
        return data.data.content
    }catch(err){
        return rejectWithValue(err)
    }
}
)