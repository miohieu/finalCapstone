import { useEffect  } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "store"
import { getProjectDetail } from "store/Project/thunk"
import { Button } from "@chakra-ui/react"
import { Modal } from "components/ui/Modal"

export const ProjectDetail = () => {
    const param = useParams()
    

    const dispatch = useAppDispatch()

    useEffect(
        () => {
            dispatch(getProjectDetail(param.id))
        }, [dispatch, param.id])


    const project = useAppSelector(state => state.project.projectDetail)

    return (
        < div >
            <div> Project Details #{param.id}
                <h1>
                    Ten du an: {project?.alias}
                </h1>
            </div>
            <div className="container-task flex">
                {project?.lstTask?.map(e => (
                    <div className="container task-container">
                        <h1 className="title">{e.statusName}</h1>
                        <div>{e.lstTaskDeTail?.map(e => <p>{e} </p>)}</div>
                    </div>
                ))
                }
            </div>


            <Button data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >add task</Button>

             <Modal name={project?.alias} membersProject={project?.members}/>
        </ div >
    )
}

