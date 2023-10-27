import { api } from 'constant'
import { url } from 'constant'
import { ProjectType } from 'schema/ProjectSchema'
import { ApiResponse } from 'types'
import { ProjectDeatailType } from 'types'

const apiI = api({
    baseURL: url,
})

export const projectService = {
    createProject: ( data: ProjectType) => apiI.post<ApiResponse<ProjectDeatailType>>('Project/createProject', data),
    getProjectCategory: () => apiI.get('/ProjectCategory')
}
