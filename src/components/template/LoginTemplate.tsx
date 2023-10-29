import { SInput, Wrapper } from "components"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema, LoginType } from "schema/LoginSchema"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "components"
import { loginThunk } from "store/Authentication"
import { useAppDispatch } from "store"
import { toast } from "react-toastify"
import { handleError } from "utils/handleError"
import { useNavigate } from "react-router-dom"
import { Link } from "@chakra-ui/react"

export const LoginTemplate = () => {
    const {
        register,
        trigger,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginType>({
        mode: "onChange",
        resolver: zodResolver(LoginSchema)
    })
    const dispatch = useAppDispatch()
const navigate = useNavigate()

    const onSubmit: SubmitHandler<LoginType> = (data) => {
        dispatch(loginThunk(data)).unwrap()
            .then(() => {
                toast.success("Dang nhap thanh cong")
                navigate("/")
            })
            .catch((err) => handleError(err)

            )
    }

    return (
        <Wrapper>
            <div className="form__signup">
                <h1>Dang nhap</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <SInput register={register}
                            name="email"
                            error={errors.email?.message}
                            type="text"
                            placeholder="Nhap email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Mat khau</label>
                        <SInput register={register}
                            name="passWord"
                            error={errors.passWord?.message}
                            type="password"
                            placeholder="Nhap mat khau"
                        />
                    </div>
                    <div>
                    </div>
                    <Button handleClick={() => { trigger() }}
                        text="Dang nhap" />
                </form>
                <p>Chua co tai khoan? 
                <Link
                className="text-underline"
                href="/register"> Dang ky ngay

                </Link></p>
            </div>
        </Wrapper>
    )
}

