import { useEffect } from "react"
import { RootState, useAppDispatch } from "store"
import { getDanhSachThunk } from "store/getDanhSach"
import { useSelector } from "react-redux"
export const ProjectmnTemplate = () => {
    const dispatch = useAppDispatch()
    const { userList, isFetchingUserList } = useSelector((state: RootState) => state.getdanhsach)

const user = useSelector(state => state.user)

console.log(user)

    useEffect(() => {
        dispatch(getDanhSachThunk())
    }, [dispatch])


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
                            <td>{user?.members.map(
                                (e) => {
                                    return (
                                        e.name.charAt(0))
                                }

                            )}</td>
                            <td>
                                <button className="btn btn-primary"><i className="fa-regular fa-pen-to-square"></i></button>
                                <button className="btn btn-danger ms-2"><i className="fa-solid fa-trash"></i></button>
                            </td>


                        </tr>



                    ))}


                </tbody>


            </table>
        </div>
    )
}
