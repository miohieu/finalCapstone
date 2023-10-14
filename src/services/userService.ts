import { api } from 'constant'
import { LoginType } from 'schema/LoginSchema'
import { url } from 'constant'
import { ApiResponse } from 'types'

const apiI = api({
    baseURL: url,
})

export const userService = {
    login: (data: LoginType) => apiI.post<ApiResponse<LoginType>>('/Users/signin', data),

}



