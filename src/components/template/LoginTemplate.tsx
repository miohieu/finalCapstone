import { StyleInput, Wrapper } from "components"
export const LoginTemplate = () => {
    return (

        <Wrapper>
            <div className="">
                <h1>Dang nhap</h1>
                <form action="">
                    <div>
                        <label htmlFor="username">Ten tai khoan</label>
                        <StyleInput type="text" id="username" />
                    </div>
                    <div>
                        <label htmlFor="Mat khau">Mat khau</label>
                        <StyleInput type="text" id="password" />
                    </div>
                    <div>
                    </div>
                </form>
            </div>

        </Wrapper>
    )
}

