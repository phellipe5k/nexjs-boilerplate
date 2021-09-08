import styled, { css } from 'styled-components'
import { motion } from 'framer-motion';

export const Block = styled(motion.div)<{ width: string, height: string }>`
  ${({ width, height }) => css`
    width: ${width};
    padding: 1%;
    height: ${height};
    background-color: red;
    margin: 1%;
  `}
`;

export const Content = styled(motion.div)`
  width: 100%;
  margin: 1%;
  height: 100%;
  background-color: green;
  padding: 2%;

`;

export const ContentInside = styled(motion.div)`
    width: 100%;
    height: 100%;
    background-color: blue;
`;