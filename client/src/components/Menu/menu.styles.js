import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { motion } from "framer-motion";

const StyledBoxMainMenu = styled.div`
    width: 100%;
`;
const StyledBoxMenu = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 25px;
    `;
const StyledButtonToggle = styled.button`
    width:90px;
    background-color: ${COLORS.green900};
    border-style: none;
    color: white;
    box-shadow: 0.1em 0.1em 0.3em rgb(0 0 0 / 50%);
    @media screen and (width >= 768px){
        display: none;
    }
`;
const StyledGameImg = styled.img`
    display: none;
    @media screen and (width >= 768px){
        width: 45px;
        display: flex;
    }
`;
const StyledOptionsBox = styled.div`
    display: none;
    @media screen and (width >= 768px){
        display: flex;
        gap: 20px;
        align-items: center;
        color: white;
    }
`;

//MOBILE

const StyledOptionMenu = styled.li`
    margin-bottom:10px ;
`;
const StyledMotionMenuMobile = styled(motion.div)`
    width: 100vw;
    height: calc(100vh - 96px);
    background-color: ${COLORS.black};
    position: fixed;
    z-index: 34;
    padding: 30px;
    display: flex;
    align-items: center;
    color: white;
    font-size: 2.5rem;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export {StyledMotionMenuMobile,StyledGameImg,StyledOptionsBox,StyledOptionMenu,StyledBoxMainMenu,StyledBoxMenu,StyledButtonToggle}