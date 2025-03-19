import { motion } from "framer-motion";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { FONT_SIZE } from "../../constants/fonts";

const StyledBoxHome = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
`;

const StyledTitleHeader = styled.div`
    width: 100%;
    padding: 20px;
    height:686px;
    font-family: "Barlow", sans-serif;
`;
const StyledBoxBio = styled.div`
    background-color: white;
    width: 100%;
`;
const StyledBoxImgProfile = styled.div`
padding: 50px;
`;
const StyledBoxInfoBio = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
`;
const StyledParagraph = styled.p`
    font-size: 1rem;
    font-weight: ${FONT_SIZE.Medium};
    line-height: 25px;
`;
const StyledParagraphBold = styled.span`
    font-weight: ${FONT_SIZE.Extrabold};
`;
const StyledParagraphBoldW = styled.span`
    font-size: 2rem;
    font-weight: ${FONT_SIZE.Extrabold};
`;
const StyledSlider = styled.div`
    color: white;
    padding: 10px 0;
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    align-items: center;
    margin-top: auto;
`;
const StyledWord = styled(motion.div)`
    display: flex;
    gap: 20px;
`;
const StyledTitle = styled.h1`
    color:${COLORS.green600};
    font-size: 3rem;
    font-weight: ${FONT_SIZE.Bold};
`;
const StyledName = styled.h1`
    color:white;
    font-size: 1.25rem;
    font-weight: ${FONT_SIZE.Medium};
`;
const StyledSubTitle = styled.h1`
    color:rgba(255,255,255,0.5);
    font-size: 1rem;
    font-weight: ${FONT_SIZE.Medium};
`;
const StyledBoxTechnologies = styled.div`
    
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
    `;
const StyledTechnologiesBoxes = styled.div`
    padding: 50px 70px;
    display: flex;
    flex-direction: column;
    height: 1014px;
    justify-content: space-between;
`;
const StyledImgTech = styled(motion.img)`
    width: 40px;
    height: 45px;
`;
const StyledSingBoxTech = styled.div`
    background-color: ${COLORS.green600};
    height: 250px;
    padding: 30px 45px;
    display: flex;
    flex-wrap: wrap;
    gap: 35px;
    align-items: center;
    justify-content: center;
    `;
const StyledBoxPersonalInfo = styled.div`
    padding: 90px 50px;
    display: flex;
    flex-direction: column;
    gap:30px;
`;
const StyledInfoP = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 33px 20px;
    height: 100px;
    border: 2px solid ${COLORS.green600};
    color: white;
`;
const StyledTitlePersonal = styled.p`
    font-weight: ${FONT_SIZE.Medium};
    font-size: 1.25rem;
`;

export {StyledTitlePersonal,StyledBoxPersonalInfo,StyledInfoP,StyledImgTech,StyledSingBoxTech,StyledTechnologiesBoxes,StyledBoxTitleTech,StyledBoxTechnologies,StyledParagraphBoldW,StyledParagraphBold,StyledParagraph,StyledBoxBio,StyledBoxImgProfile,StyledBoxInfoBio,StyledSubTitle,StyledName,StyledTitle,StyledTitleHeader,StyledBoxHome,StyledWord,StyledSlider}