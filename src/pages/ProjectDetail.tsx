import { useParams } from "react-router-dom"
import { projectService } from "services"

export const ProjectDetail = () => {
    const param = useParams()


    const fetch = async () => {
        const data = await projectService.getProjectDetail(param.id)
        console.log("data", data)
    }

    fetch()

    return (
        <div> Project Details #{param.id} </div>
    )
}

