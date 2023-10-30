import { ProjectType } from "schema/ProjectSchema"
import { projectService } from "services"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const createProjectThunk = createAsyncThunk(
    'project/createProject',
    async (payload: ProjectType, { rejectWithValue }) => {
        try {
            const data = await projectService.createProject(payload)
            return data.data

        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getProjectDetail = createAsyncThunk(
    'project/projectDetail',
    async(payload, {rejectWithValue}) => {
    try {
        console.log(payload)
        const data = await projectService.getProjectDetail(payload)
        return data.data.content
    } catch (err) {
        return rejectWithValue(err)
    }
})



