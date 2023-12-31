import axios, { AxiosRequestHeaders, CreateAxiosDefaults } from 'axios'
import { getAccessToken } from 'utils'

const TokenCybersoft = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NyIsIkhldEhhblN0cmluZyI6IjE1LzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNzk1NTIwMDAwMCIsIm5iZiI6MTY3ODk4NjAwMCwiZXhwIjoxNzA4MTAyODAwfQ.YGLcwOu11pM9sD9C2a0dia7O_6vvsYwkCoo1sqcbCFM'

export const url = "https://jiranew.cybersoft.edu.vn/api"
export const api = (config?: CreateAxiosDefaults) => {
    const a = axios.create(config)
    a.interceptors.request.use((config) => {
        
        return {
            ...config,
            headers: { 
                TokenCybersoft,
                Authorization: "Bearer " + getAccessToken() || ""
            } as unknown as AxiosRequestHeaders,
        }
    })

    return a
}

