import { useAppDispatch, useAppSelector } from "store"
import { Avatar, Heading, Button } from "@chakra-ui/react"
import { Wrapper } from "components"
import { userAuthActions } from "store/Authentication"
import { useNavigate } from "react-router-dom"
import { findMe } from "utils/findMe"
import { DanhSach } from "types/getDanhSach"

export const Dashboard = () => {
    const {
        email,
        avatar,
        name
    } = useAppSelector(state => state.authentication?.user)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const myProject: DanhSach[] = useAppSelector(state => findMe(state.getdanhsach.userList, name))

    return (
        <div>
            <Wrapper>
                <div>
                    <Avatar size="2xl" src={avatar} />
                    <Heading as="h2">Hello, {email}</Heading>
                    <div>
                    <h1>My project</h1>
                    {myProject.map(e => <div> {e.projectName}</div>)}
                    </div>

                    <Button onClick={() => {
                        dispatch(userAuthActions.logOut())
                        navigate("/login")
                    }}>Dang xuat</Button>
                </div>

            </Wrapper>
        </div>
    )
}

