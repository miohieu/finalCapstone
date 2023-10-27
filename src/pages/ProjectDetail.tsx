import { useParams } from "react-router-dom"

export const ProjectDetail = () => {
  const param = useParams()
  return (
    <div> Project Details #{param.id} </div>
  )
}

