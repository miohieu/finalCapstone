import { z } from 'zod'
export const LoginSchema = z.object({
    email: z.string().email({ message: 'Email khong hop le' }),
    passWord: z.string().min(1, { message: 'Vui long nhap mat khau' }),
})

export const RegisterSchema = z.object({
  email: z.string().email({message: "Email sai dinh dang"}),
  passWord: z.string().min(4, {message: "Password it nhat 4 ky tu"}),
  name: z.string(),
  phoneNumber: z.string().regex(/\d{10,}/) 
})

export type RegisterType = z.infer<typeof RegisterSchema>  


