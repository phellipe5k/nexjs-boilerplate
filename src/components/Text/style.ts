import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.main)`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.palette.primary.main};
  `}
`;

export const Title = styled(motion.h1)`
  font-size: 4rem;
  padding: 2% 0;
`;
