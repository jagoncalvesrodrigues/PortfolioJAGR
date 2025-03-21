import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { FONT_SIZE } from "../../constants/fonts";

const StyledBoxPersonalInfo = styled.div`
    padding: 90px 50px;
    display: flex;
    flex-direction: column;
    gap:30px;

    @media screen and (width>=768px){
        flex-direction: row;
    }
`;
const StyledInfoP = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 33px 20px;
    height: 100px;
    border: 2px solid ${COLORS.green600};
    color: white;

    &:hover{
        background-color: ${COLORS.green600};
    }

    @media screen and (width>=768px){
        flex-direction:column;
        width: 100%;
        height: 200px;
    }
`;
const StyledTitlePersonal = styled.p`
    font-weight: ${FONT_SIZE.Medium};
    font-size: 1.25rem;
`;

export {StyledBoxPersonalInfo,StyledInfoP,StyledTitlePersonal}