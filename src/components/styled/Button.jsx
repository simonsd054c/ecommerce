import styled from "styled-components"

const Button = styled.button`
    height: 40px;
    border: none;
    background-color: rgba(38, 115, 141, 1);
    border-radius: 10px;
    font-size: 20px;
    padding: 0px 15px;
    color: ${(props) => props.greaterThanfive ? 'black' : 'white'};
    cursor: pointer;
    :hover {
        background-color: rgba(38, 115, 141, 0.8);
    }
    :disabled {
        background-color: grey;
        cursor: not-allowed;
    }
    /* ${(props) => {
        return `
            color: ${props.greaterThanfive ? 'black' : 'white'};
        `
    }} */
`

export default Button