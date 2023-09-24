import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { Wrapper } from "components"
export const AuthLayout = () => (
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

