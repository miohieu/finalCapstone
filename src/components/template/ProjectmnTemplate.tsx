import { NavLink } from "react-router-dom"
import { useEffect } from "react"
import { RootState, useAppDispatch } from "store"
import {getDanhSachThunk } from "store/getDanhSach"
import { useSelector } from "react-redux"
export const ProjectmnTemplate = () => {
  const dispatch = useAppDispatch()
  const {userList , isFetchingUserList} = useSelector((state:RootState)=>state.getdanhsach)
  console.log(isFetchingUserList)
  console.log(userList)
  
  useEffect(()=>{
    dispatch(getDanhSachThunk())
  },[dispatch])


  return (
    <div className="w-full flex">
      <div className="w-[300px] flex-none">
        <div className="flex flex-col">
        <div className="w-full py-[15px] px-[25px] h-[70px] flex justify-center items-center">
          <img src="/public/logo.png" alt="logo" className="w-full h-[70px] object-cover" />
        </div>
        <div className="flex flex-col mt-5">
          <NavLink to={'/board'} className='py-2 px-[35px] items-center'>
          <i className="fa-solid fa-credit-card me-4 text-[20px] font-bold"></i>
            <span>Cyber Board</span>
          </NavLink>
          <NavLink to={'/projectmn'} className='py-2 px-[35px] items-center'>
          <i className="fa-solid fa-gear me-4 text-[20px] font-bold" ></i>
          <span className="font-bold">Project management</span>
          </NavLink>
          <NavLink to={'/project'} className='py-2 px-[35px] items-center mb-4'>
          <i className="fa-solid fa-gear me-4 text-[20px] font-bold" ></i>
          <span>Create project</span>
          </NavLink>
          <hr style={{width:'90%', margin:'auto'}}/>
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
      <div className="flex-auto" style={{paddingLeft:"30px",paddingTop:"15px"}}>
          <h1 style={{fontSize:'30px',marginBottom:"10px"}}>Project management</h1>
          <button  className="btn btn-outline-secondary" style={{padding:'2px 10px'}}>Sort age</button>
          <button className="btn btn-outline-secondary ms-2" style={{padding:'2px 10px'}}>Clear filters</button>
          <button className="btn btn-outline-secondary ms-2" style={{padding:'2px 10px'}}>Clear filters and sorters</button>
          <div className="mt-3">
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
                {userList?.map((user)=>(
                <tr key={user.id}>
                  <td style={{width:100}}>{user.id}</td>
                  <td className="text-primary" style={{width:20}}>{user.projectName}</td>
                  <td>{user.categoryName}</td>
                  <td>
                  <button className="btn btn-outline-success">
                    {user?.creator.name}
                  </button>
                  </td>
                  <td>{user?.members.avatar}</td>
                  <td>
                    <button className="btn btn-primary"><i className="fa-regular fa-pen-to-square"></i></button>
                    <button className="btn btn-danger ms-2"><i className="fa-solid fa-trash"></i></button>
                  </td>


                </tr>



                ))}


            </tbody>


          </table>
          </div>

      </div>


    </div>
  )
}
