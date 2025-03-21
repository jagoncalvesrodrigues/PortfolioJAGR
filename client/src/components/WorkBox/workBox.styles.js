import styled from "styled-components";
import { FONT_SIZE } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";

const StyledWork = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding: 10px;

    &:hover{
        background-color: ${COLORS.green900};
    }

    @media screen and (width >= 1024px){
        padding-left:25%;
        padding-right: 25%;
    }
`;
const StyledTechWork = styled.div`
    display: flex;
    height: 25px;
    gap: 10px;
`;
const StyledTitleWork = styled.p`
    font-family: "Barlow", sans-serif;
    font-size: 2rem;
    color: white;
    font-weight: ${FONT_SIZE.Bold};
`;

export {StyledWork,StyledTechWork,StyledTitleWork}
