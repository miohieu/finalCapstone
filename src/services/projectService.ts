import { api } from 'constant'
import { url } from 'constant'
import { ProjectType } from 'schema/ProjectSchema'
import { ApiResponse } from 'types'
import { ProjectDeatailType } from 'types'

const apiI = api({
    baseURL: url,
})

export const projectService = {
    createProject: (
        data: ProjectType) => apiI
            .post<ApiResponse<ProjectDeatailType>>('Project/createProjectAuthorize', data),
    getProjectCategory: () => apiI.get('/ProjectCategory'),
    getProjectDetail: (id) => apiI.get(`Project/getProjectDetail?id=${id}`),
    assignUserProject: (data) => apiI.post('Project/assignUserProject', data),
    deleteUser: (id) => apiI.delete(`/Project/deleteProject?projectId=${id}`),
}
