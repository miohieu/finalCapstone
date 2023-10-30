import { z } from "zod";


export const ProjectSchema = z.object({
    projectName: z.string().min(1, { message: "khong duoc de trong" }),
    description: z.string().min(0, {message:"optional"}),
    categoryId: z.number()
})

export type ProjectType = z.infer<typeof ProjectSchema>

