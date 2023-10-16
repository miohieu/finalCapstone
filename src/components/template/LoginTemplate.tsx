import { SInput , Wrapper } from "components"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema, LoginType } from "schema/LoginSchema"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "components"
import { loginThunk } from "store/Authentication"
import { useAppDispatch } from "store"

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

    const onSubmit: SubmitHandler<LoginType> = (data) => {
        dispatch(loginThunk(data))
        console.log("hello", data)
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
            </div>
        </Wrapper>
    )
}

