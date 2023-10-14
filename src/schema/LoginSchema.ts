import { z } from 'zod'

export const LoginSchema = z.object({
    email: z.string().min(1, { message: 'Vui long email' }),
    passWord: z.string().min(1, { message: 'Vui long nhap mat khau' }),
})
export type LoginType = z.infer<typeof LoginSchema>

