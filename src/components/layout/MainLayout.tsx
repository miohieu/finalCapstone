import { NavLink, useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import { getAccessToken } from "utils"


export const MainLayout = () => {
const navigate = useNavigate()
const token = getAccessToken()

    useEffect(() => {
        if (token) {
            navigate("/login")
        }  
        return () => {}
    }, [token, navigate])
    return (
        <div className="w-full flex">
            <div className="w-[300px] flex-none">
                <div className="flex flex-col">
                    <div className="w-full py-[15px] px-[25px] h-[70px] flex justify-center items-center">
                        <img src="/logo.png" alt="logo" className="w-full h-[70px] object-cover" />
                    </div>
                    <div className="flex flex-col mt-5">
                        <NavLink to={'/dashboard'} className='py-2 px-[35px] items-center'>
                            <i className="fa-solid fa-credit-card me-4 text-[20px] font-bold"></i>
                            <span>Cyber Board</span>
                        </NavLink>
                        <NavLink to={'/'} className='py-2 px-[35px] items-center'>
                            <i className="fa-solid fa-gear me-4 text-[20px]" ></i>
                            <span className="">Project management</span>
                        </NavLink>
                        <NavLink to={'/projects/create-project'} className='py-2 px-[35px] items-center mb-4'>
                            <i className="fa-solid fa-gear me-4 text-[20px] font-bold" ></i>
                            <span>Create project</span>
                        </NavLink>
                        <hr style={{ width: '90%', margin: 'auto' }} />
                        <NavLink to={'/releases'} className='py-2 px-[35px] items-center mt-4'>
                            <i className="fa-solid fa-van-shuttle me-4 text-[20px] font-bold" ></i>
                            <span>Releases</span>
                        </NavLink>
                        <NavLink to={'/issues'} className='py-2 px-[35px] items-center'>
                            <i className="fa-solid fa-bars me-4 text-[20px] font-bold" ></i>
                            <span>Issues and filter</span>
                        </NavLink>
                        <NavLink to={'/pages'} className='py-2 px-[35px] items-center'>
                            <i className="fa-solid fa-copy me-4 text-[20px] font-bold" ></i>
                            <span>Pages</span>
                        </NavLink>
                        <NavLink to={'/reports'} className='py-2 px-[35px] items-center'>
                            <i className="fa-solid fa-paper-plane me-4 text-[20px] font-bold" ></i>
                            <span>Reports</span>
                        </NavLink>
                        <NavLink to={'/component'} className='py-2 px-[35px] items-center'>
                            <i className="fa-solid fa-box me-4 text-[20px] font-bold" ></i>
                            <span>Components</span>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="flex-auto" style={{ paddingLeft: "30px", paddingTop: "15px" }}>
                <Outlet />

            </div>


        </div>
    )
}

