import { z } from "zod";


export const ProjectSchema = z.object({
    projectName: z.string().min(1, { message: "khong duoc de trong" }),
    description: z.string().min(0, {message:"optional"}),
    categoryId: z.number()
})

export type ProjectType = z.infer<typeof ProjectSchema>

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
