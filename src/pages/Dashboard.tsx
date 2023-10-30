import { useAppDispatch, useAppSelector } from "store"
import { Avatar , Heading, Button} from "@chakra-ui/react"
import { Wrapper } from "components"
import { userAuthActions } from "store/Authentication"
import { useNavigate } from "react-router-dom"

export const Dashboard = () => {
    const { 
        email,
        avatar,
    } = useAppSelector(state => state.authentication?.user)

const dispatch = useAppDispatch()
const navigate = useNavigate()

    return (
        <div>
            <Wrapper>
            <div>
                    <Avatar size="2xl" src={avatar} />
                    <Heading as="h2">Hello, {email}</Heading>

                    <Button onClick={() => {
                        dispatch(userAuthActions.logOut())
                        navigate("/login")
                    }}>Dang xuat</Button>
            </div>

            </Wrapper>
        </div>
    )
}

