export type ApiResponse<T> = {
    statusCode: number
    message: string
    content: T
    dateTime: string

}
export type User = {
    id: number
    accessToken: string
    avatar: string,
    email: string
    name: string
    phoneNumber: string
}
