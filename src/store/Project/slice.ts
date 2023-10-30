import { createSlice } from '@reduxjs/toolkit'
import { createProjectThunk, getProjectDetail } from './thunk'

enum STATUSNAME {
    "BACKLOG",
    "SELECTED FOR DEVELOPMENT",
    "IN PROGRESS",
    "DONE"

}
type Task = {
    alias: "tồn đọng"
    lstTaskDeTail: []
    statusId: string
    statusName: STATUSNAME
}
interface ProjectRes {
    alias: string
    creator: { id: number, name: string }
    description: string
    id: number
    lstTask: [Task]
    members: []
    projectCategory: { id: number, name: string }
    projectName: string

}

interface initalState {
    adminToken:string
    projectDetail: ProjectRes | undefined
}

const initialState :initalState= {
    adminToken: " ",
    projectDetail: undefined

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
            .addCase(getProjectDetail.fulfilled, (state, { payload }) => {
                state.projectDetail = payload
            })
    },
})

export const { actions: projectAction, reducer: projectReducer } = projectSlice

