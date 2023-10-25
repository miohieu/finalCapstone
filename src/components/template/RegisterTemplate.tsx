
import { SInput, Wrapper } from "components"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema, RegisterType } from "schema/RegisterSchema"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "components"
import { useAppDispatch } from "store"
import { registerThunk } from "store/Authentication"

export const RegisterTemplate = () => {
    const {
        register,
        trigger,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterType>({
        mode: "onChange",
        resolver: zodResolver(RegisterSchema)
    })
    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<RegisterType> = (data) => {
        console.log("hello", data)
        dispatch(registerThunk(data))
    }

    return (
        <Wrapper>
            <div className="form__signup">
                <h1>Dang ky</h1>
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
                        <div>
                            <label htmlFor="name">Ho va Ten</label>
                            <SInput register={register}
                                name="name"
                                error={errors.name?.message}
                                type="text"
                                placeholder="Nhap ten"
                            />
                        </div>
                        <label htmlFor="password">So dien thoai</label>
                        <SInput register={register}
                            name="phoneNumber"
                            error={errors.phoneNumber?.message}
                            type="text"
                            placeholder="Nhap so dien thoai"
                        />
                    </div>
                    <div>
                    </div>
                    <Button handleClick={() => { trigger() }}
                        text="Dang ky" />
                </form>
            </div>
        </Wrapper>
    )
}

