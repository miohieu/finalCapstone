import { createSlice } from '@reduxjs/toolkit'
import { assignUser, createProjectThunk, getProjectDetail } from './thunk'
import { toast } from 'react-toastify'
import { handleError } from 'utils/handleError'

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
    projectDetail: ProjectRes | undefined
}

const initialState: initalState = {
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
            })
            .addCase(getProjectDetail.fulfilled, (state, { payload }) => {
                state.projectDetail = payload
            })
            .addCase(assignUser.fulfilled, (_) => {
                toast.success("Added to project")

            }
            )
            .addCase(assignUser.rejected, (_, {payload})=> {
                console.log(payload)
            })
    },
})

export const { actions: projectAction, reducer: projectReducer } = projectSlice

