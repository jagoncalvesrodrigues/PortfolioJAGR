import styled from "styled-components";
import { FONT_SIZE } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";
import { motion } from "framer-motion";

const StyledTitleHeader = styled.div`
    width: 100%;
    padding: 20px;
    height:686px;
    font-family: "Barlow", sans-serif;
    @media screen and (width >= 768px){
        display: flex;
        flex-direction: column;
        padding: 20px;
    }
    @media screen and (width >= 1024px){
        padding: 40px;
    }
`;
const StyledTitle = styled(motion.h1)`
    color:${COLORS.green600};
    font-size: 3rem;
    font-weight: ${FONT_SIZE.Bold};

    @media screen and (width >= 768px){
        font-size: 4rem;
        margin: 0;
        margin-top: 130px;
    }
`;
const StyledName = styled(motion.h2)`
    color:white;
    font-size: 1.25rem;
    font-weight: ${FONT_SIZE.Medium};
    @media screen and (width >= 768px){
        font-size: 1.5rem;
    }
`;
const StyledSubTitle = styled.h1`
    color:rgba(255,255,255,0.5);
    font-size: 0.75rem;
    width: 180px;
    font-weight: ${FONT_SIZE.Medium};
    @media screen and (width >= 768px){
        font-size: 1rem;
        width: 180px;
        left: 460px;
        margin-top: 16px;
    }
    @media screen and (width >= 1024px){
        left: 475px;
        top: 40.5%;
    }
`;
const StyledPositionText = styled.div`
    @media screen and (width >= 768px){
        display:flex;
        gap: 10px;
    }
`;

export {StyledPositionText,StyledName,StyledSubTitle,StyledTitle,StyledTitleHeader}