import { z } from "zod"


export const RegisterSchema = z.object({
  email: z.string().email({message: "Email ko hop le"}),
  passWord:z.string().min(6, {message: "Nhap it nhat 6 ky tu"}) ,
  name: z.string().toLowerCase().trim().min(6, {message: "Nhap it nhat 6 ky tu"}) ,
  phoneNumber:z.string().regex(/^[0-9]+$/,{message: "Nhap so dien thoai hop le"}), 
})


export type RegisterSchema = z.infer<typeof RegisterSchema>
