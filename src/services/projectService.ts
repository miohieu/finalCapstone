import { api } from 'constant'
import { url } from 'constant'
import { ProjectType } from 'schema/ProjectSchema'

const apiI = api({
    baseURL: url,
})

export const projectService = {
    createProject: ( data: ProjectType) => apiI.post('Project/createProject', data),
    getProjectCategory: () => apiI.get('/ProjectCategory')
}
