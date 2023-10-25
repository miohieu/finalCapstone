import { ProjectType } from "schema/ProjectSchema"
import { projectService } from "services"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const createProjectThunk = createAsyncThunk (
    'project/createProject',
    async (payload: ProjectType, {rejectWithValue}) => {
        try {
            const data = await projectService.createProject(payload)
            return data
            
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
