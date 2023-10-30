import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "store"
import { getProjectDetail } from "store/Project/thunk"

export const ProjectDetail = () => {
    const param = useParams()

    const dispatch = useAppDispatch()

    useEffect(
        () => {
            dispatch(getProjectDetail(param.id))
        }, [dispatch,param.id])


    return (
        <div> Project Details #{param.id} </div>
    )
}

