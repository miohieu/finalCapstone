import styled from "@emotion/styled"

type ButtonProps = {
text: string
handleClick?:()=>void
}
const Buttons = ({ text, handleClick }:ButtonProps) => {
    return (
        <div>
            <button className="button btn btn-warning p-3" onClick={() => handleClick()}>
                    {text}
            </button>
        </div>
    )
}



export const Button = styled(Buttons)`
.button {
    background-color: red;
    color: yellow,
    border: 1px solid black
}

`
