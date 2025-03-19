import { motion } from "framer-motion";
import styled from "styled-components";

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

export {StyledSlider,StyledWord}