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

export type ProjectDeatailType = {
    alias: string
    categoryId: number
    creator: number
    deleted: boolean
    description: string
    id: number
    projectName: string
}

export type TaskInfo = {
    listUserAsign: [],
    taskName: string,
    description: string,
    statusId: string,
    originalEstimate: number,
    timeTrackingSpent: number,
    timeTrackingRemaining: number,
    projectId: number,
    typeId: number,
    priorityId: number
}
