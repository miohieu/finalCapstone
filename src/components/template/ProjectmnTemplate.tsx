import { useEffect, useState } from "react"
import { RootState, useAppDispatch, useAppSelector } from "store"
import { useSelector } from "react-redux"
import { getDanhSachThunk } from "store/getDanhSach"
import { getAccessToken } from "utils"
import {
    Modal,
    Textarea,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    Button,
    useDisclosure
} from '@chakra-ui/react'

import { projectService } from "services"
import { handleError } from "utils/handleError"
import { toast } from "react-toastify"

export const ProjectmnTemplate = () => {
    const dispatch = useAppDispatch()
    const { userList, isFetchingUserList } = useSelector((state: RootState) => state.getdanhsach)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [projectName, setProjectName] = useState("")
    const accessToken = getAccessToken()
    const { user } = useAppSelector((state) => state.authentication)

    console.log(userList)
    if (accessToken) {
        localStorage.setItem("CURRUSER", JSON.stringify(user))
    }

    useEffect(() => {
        dispatch(getDanhSachThunk())
        return () => { }
    }, [dispatch]
    )

    const handleDelete = (id) => {
        projectService.deleteUser(id)
            .then(() => {
                toast.success("Xoa thanh cong")
            }
            )
            .catch(err => handleError(err))
    }

const [projectID, setID] = useState()

    return (
        <div>

            <table className="table ">
                <thead>
                    <tr>
                        <th>id <i className="fa-solid fa-angle-down"></i></th>
                        <th>projectName <i className="fa-solid fa-angle-down"></i></th>
                        <th>category <i className="fa-solid fa-angle-down"></i></th>
                        <th>creator <i className="fa-solid fa-angle-down"></i></th>
                        <th>members <i className="fa-solid fa-angle-down"></i></th>
                        <th>Action <i className="fa-solid fa-angle-down"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {userList?.map((user) => (
                        <tr key={user.id}>
                            <td style={{ width: 100 }}>{user.id}</td>
                            <td className="text-primary" style={{ width: 20 }}>
                                {user.projectName}
                            </td>
                            <td>{user.categoryName}</td>
                            <td>
                                <button className="btn btn-outline-success">
                                    {user?.creator.name}
                                </button>
                            </td>
                            <td><button className="btn btn-secondary btn-name" style={{ borderRadius: 50 }}>
                                {user?.members?.map(
                                    (e) => {
                                        return (
                                            e.name?.charAt(0))
                                    }
                                )}
                                /</button>
                                <button className="btn btn-info rounded-full" onClick={() => {

                                }}> + </button>
                            </td>
                            <td>
                                <button className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => {
                                        setProjectName(user.projectName)
                                        setID(user.id)
                                        onOpen()
                                        }}
                                ><i className="fa-regular fa-pen-to-square"></i></button>
                                <button className="btn btn-danger ms-2"
                                    onClick={() => handleDelete(user.id)}><i className="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>


                    ))}

                </tbody>


            </table>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                <form></form>
                <div>
                <label htmlFor="">Ten du an:</label>
                <input 
                value={projectName}
                disabled
                    />
                </div>
                <div>
                <label htmlFor="">ID du an:</label>
                <input value={projectID}
                disabled
                    />

                </div>
                <div>
                    <p>Mo ta du an</p>
                    <Textarea
                        placeholder="Mo ta du an"
                    />
                </div>

                <div>
                </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}


