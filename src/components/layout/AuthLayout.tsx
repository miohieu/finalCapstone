import { Box } from "@chakra-ui/react"
import { Outlet, useNavigate } from "react-router-dom"
import { Wrapper } from "components"
import { getAccessToken } from "utils"
import { useEffect } from "react"
export const AuthLayout = () => {
    const token = getAccessToken()
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            navigate("/")
        } else {
            navigate("/login")
        } 
        return () => {}
    }, [token, navigate])
    return (
        <Wrapper>
            <div className="auth-layout-container">
                <div className="auth-layout__content flex-container">
                    <Box className="auth-image">
                        <img src="/authpic.jpg"
                            alt="bug-management"
                            style={{
                                height: "100vh",
                                objectFit: "cover",
                            }}
                        />
                    </Box>

                    <Box className="auth-box ">
                        <Outlet />
                    </Box>
                </div>
            </div>
        </Wrapper>
    )
}



