import styled from "styled-components";
import { FONT_SIZE } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";
import { motion } from "framer-motion";

const StyledBoxTechnologies = styled.div`
    width: 100%;
`;
const StyledTitleTech = styled.p`
    @media screen and (width >= 768px){
        margin:0;
    }
`;
const StyledBoxTitleTech = styled.div`
    background-color: white;
    color: ${COLORS.green600};
    font-size: 2.5rem;
    font-weight: ${FONT_SIZE.Bold};
    font-family: "Barlow", sans-serif;
    display: flex;
    justify-content: center;
    width: 100%;
    letter-spacing: 4px;
    border-top: 2px solid ${COLORS.green900};

    @media screen and (width >= 768px){
        font-size: 4rem;
        height: 120px;
        display: flex;
        align-items: center;
    }
    @media screen and (width >= 1024px){
        padding: 50px;
        flex-direction: column;
        align-items: end;
    }
`;
const StyledTechnologiesBoxes = styled.div`
    padding: 50px 70px;
    display: flex;
    flex-direction: column;
    height: 1014px;
    justify-content: space-between;
    @media screen and (width >= 768px){
        height: 100%;
        align-items: center;
        justify-content: center;
        gap:35px;
    }
    @media screen and (width >= 1024px){
        flex-direction: row;
    }
`;
const StyledImgTech = styled(motion.img)`
    width: 35px;
    height: 40px;
    @media screen and (width >= 768px){
        width: 40px;
        height: 45px;
    }
    @media screen and (width >= 1024px){
        width: 45px;
        height: 50px;
    }
`;
const StyledSingBoxTech = styled.div`
    background-color: ${COLORS.green600};
    height: 250px;
    padding: 30px 45px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    align-items: center;
    justify-content: center;

    @media screen and (width >= 768px){
        gap: 35px;
        width: 100%;
        height: 200px;
    }
    @media screen and (width >= 1024px){
        height: 350px;
        width: 350px;
    }
`;

export {StyledTitleTech,StyledBoxTechnologies,StyledBoxTitleTech,StyledImgTech,StyledSingBoxTech,StyledTechnologiesBoxes}