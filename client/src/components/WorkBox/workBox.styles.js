import styled from "styled-components";
import { FONT_SIZE } from "../../constants/fonts";

const StyledWork = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
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
