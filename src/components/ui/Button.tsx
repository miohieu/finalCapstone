import styled from "@emotion/styled"

const Buttons = ({ text, handleClick }) => {
    return (
        <div>
            <button className="button-signup" onClick={() => handleClick()}>
                <p></p>{text}
            </button>
        </div>
    )
}



export const Button = styled(Buttons)`
.button-signup {
    background-color: red;
    color: yellow,
    border: 1px solid black
}

`
