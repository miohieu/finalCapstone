import { StyleInput, Wrapper } from "components"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema, LoginType } from "schema/LoginSchema"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "components"
import { userService } from "services"

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

    const onSubmit: SubmitHandler<LoginType> = (data) => {
         userService.login(data).then((res) => {console.log(res)})
        console.log(data)
    }

    return (
        <Wrapper>
            <div className="form__signup">
                <h1>Dang nhap</h1>
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <div>
                        <label htmlFor="username">Ten tai khoan</label>
                        <StyleInput type="text" id="username" {...register("email")} />
                        {errors.email && errors.passWord?.message}
                    </div>
                    <div>
                        <label htmlFor="Mat khau">Mat khau</label>
                        <StyleInput type="text" id="password" {...register("passWord")} />
                        {errors.passWord && errors.passWord?.message}
                    </div>
                    <div>
                    </div>
                    <Button handleClick={() => { trigger()}} 
                    text="Dang nhap"/>
                </form>
            </div>
        </Wrapper>
    )
}

