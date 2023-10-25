import { api } from 'constant'
import { LoginType, RegisterType } from 'schema/LoginSchema'
import { url } from 'constant'
import { ApiResponse } from 'types'
import { DanhSach } from 'types/getDanhSach'

const apiI = api({
    baseURL: url,
})

export const userService = {
    login: (data: LoginType) => apiI.post<ApiResponse<LoginType>>('/Users/signin', data),
    register: (data: RegisterType) => apiI.post<ApiResponse<RegisterType>>('Users/signup', data)
}
export const getDanhSachServices= {
    getListDanhSach :()=> apiI.get<ApiResponse<DanhSach[]>>('/Project/getAllProject')
}


