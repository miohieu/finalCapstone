import { useEffect, useState } from "react"
import { RootState, useAppDispatch, useAppSelector } from "store"
import { useSelector } from "react-redux"
import { getDanhSachThunk } from "store/getDanhSach"
import { getAccessToken } from "utils"
import { Modal } from "components/ui/Modal"

export const ProjectmnTemplate = () => {
    const dispatch = useAppDispatch()
    const { userList, isFetchingUserList } = useSelector((state: RootState) => state.getdanhsach)

    const accessToken = getAccessToken()
    const { user } = useAppSelector((state) => state.authentication)

    if (accessToken) {
        localStorage.setItem("CURRUSER", JSON.stringify(user))
    }

    console.log(user, "user")

    useEffect(() => {
        dispatch(getDanhSachThunk())
        return () => { }
    }, [dispatch]
    )


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
                            <td className="text-primary" style={{ width: 20 }}>{user.projectName}</td>
                            <td>{user.categoryName}</td>
                            <td>
                                <button className="btn btn-outline-success">
                                    {user?.creator.name}
                                </button>
                            </td>
                            <td><button className="btn btn-secondary" style={{ borderRadius: 50 }}>
                                {user?.members.map(
                                    (e) => {
                                        return (
                                            e.name.charAt(0))
                                    }

                                )}
                                /</button>
                            </td>
                            <td>
                                <button className="btn btn-primary"
                                data-bs-toggle="modal" 
                                data-bs-target="#exampleModal"
                                ><i className="fa-regular fa-pen-to-square"></i></button>
                                <button className="btn btn-danger ms-2"><i className="fa-solid fa-trash"></i></button>
                            </td>


                        </tr>


                    ))}

                </tbody>


            </table>

                 <Modal/>
        </div>
    )
}
