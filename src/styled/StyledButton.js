import styled from "styled-components";

export const StyledButton = styled.button`
    color: ${props => props.color};
    border: none;
    background: transparent;
    visibility: ${props => props.hidden ? 'hidden' : 'visible'};
    cursor: pointer;
    font-size: 20px;
`;