import styled from "styled-components";
import { FONT_SIZE } from "../../constants/fonts";

const StyledBoxBio = styled.div`
    background-color: white;
    width: 100%;

    @media screen and (width>=768px){
        display: flex;
        flex-direction: row;
        height: 800px;
    }
`;
const StyledBoxImgProfile = styled.div`
    padding: 50px;
    @media screen and (width>=768px){
        width: 50%;
        margin: auto;
    }
    @media screen and (width>=1024px){
        padding: 100px;
    }
`;
const StyledImgProfile = styled.img`
    @media screen and (width>=1024px){

        margin: auto;
    }
    @media screen and (width>=1160px){
        width: 355px;
        height: 464px;
    }
`;
const StyledBoxInfoBio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
    @media screen and (width>=768px){
        width: 50%;
    }
`;
const StyledParagraph = styled.p`
    font-size: 1rem;
    font-weight: ${FONT_SIZE.Medium};
    line-height: 25px;
    @media screen and (width>=1024px){
        width: 430px;
    }
`;
const StyledParagraphBold = styled.span`
    font-weight: ${FONT_SIZE.Extrabold};
`;
const StyledParagraphBoldW = styled.span`
    font-size: 2rem;
    font-weight: ${FONT_SIZE.Extrabold};
`;

export {StyledImgProfile,StyledBoxBio,StyledBoxImgProfile,StyledBoxInfoBio,StyledParagraph,StyledParagraphBold,StyledParagraphBoldW}