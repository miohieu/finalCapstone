import { createSlice } from '@reduxjs/toolkit'
import { createProjectThunk } from './thunk'


const initialState = {
    adminToken: " "
}

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(createProjectThunk.fulfilled, (state, { payload }) => {
                console.log('payload: ', payload)
                state.adminToken = "hello"

            })
            .addCase(createProjectThunk.rejected, (_, { payload }) => {
                console.log(payload.response.data.message)
            })
    },
})

export const { actions: projectAction, reducer: projectReducer } = projectSlice

