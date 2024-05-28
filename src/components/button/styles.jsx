import styled from "styled-components";

export const ButtonContainer = styled.button`
    background-color: 1px solid #fafafa;
    border: 1px solid #fafafa;
    border-radius: 20px;
    min-height: 62px;
    width: 80%;

    margin: 15px;

    &: hover {
        background-color: #fafafa60;
        cursor: pointer;
    }
`;
