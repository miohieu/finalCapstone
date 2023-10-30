import { SInput } from "components"
import { Textarea } from "@chakra-ui/react"
import { Button } from "components"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { ProjectSchema, ProjectType } from "schema/ProjectSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAppDispatch } from "store"
import { createProjectThunk } from "store/Project/thunk"
import { projectService } from "services"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { handleError } from "utils/handleError"
import { useNavigate } from "react-router-dom"

export const CreateProject = () => {
    const {
        register,
        trigger,
        control,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm<ProjectType>({
        mode: "onChange",
        resolver: zodResolver(ProjectSchema)
    })
    useEffect(() => {
        setValue('categoryId', 1); // Set the default value to 'Category 2'
    }, [setValue]);

    const dispatch = useAppDispatch()

    const [categories, setCategories] = useState([])

    const projectCategory = async () => {
        try {
            const data = await projectService.getProjectCategory()
            setCategories(data.data.content)
        } catch (err) {
            console.error(err)
        }

    }

    useEffect(() => { projectCategory() }, [])

    const navigate = useNavigate()


    const onSubmit: SubmitHandler<ProjectType> = (data) => {
        dispatch(createProjectThunk(data))
            .unwrap()
            .then((e) => {
                toast.success("Tao project thanh cong")


                const id = e.content.id

                navigate(`/projects/${id}`)

            })
            .catch((err: Error) => {
                handleError(err)
            })
    }




    return (
        <div>
            <h1>Create project</h1>
            <form onSubmit={
                handleSubmit(onSubmit)
            } >
                <SInput placeholder="Nhap ten du an"
                    label="Ten du an"
                    name="projectName"
                    register={register}
                    error={errors.projectName?.message} />
                <div>
                    <p>Mo ta du an</p>
                    <Textarea
                        placeholder="Mo ta du an"
                        {...register("description")
                        }
                    />
                </div>

                <div>
                    {categories && <Controller
                        name="categoryId"
                        control={control}
                        render={({ field }) => (
                            <select {...field} onChange={(e) => {
                                setValue("categoryId", +e.target.value)
                            }
                            }>
                                {categories.map((c) => (
                                    <option key={c.id} value={c.id}>
                                        {c.projectCategoryName}
                                    </option>
                                ))}
                            </select>
                        )}
                    />}
                </div>
                <Button handleClick={() => {
                    trigger()
                }} text="Create" />

            </form>
        </div>
    )
}

