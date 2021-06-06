import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.main)`
  background-color: #345df6;
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3%;
  text-align: center;
  justify-content: center;
  align-items: center;
  > svg {
    padding: 0.5%;
  }
`;

export const Logo = styled.img`
  width: 25rem;
`;

export const Title = styled(motion.h1)`
  font-size: 4rem;
  padding: 2% 0;
`;

export const Description = styled(motion.p)`
  font-size: 2rem;
  padding: 2% 0;
  width: 60%;
`;

export const Illustration = styled(motion.img)`
  width: min(35rem, 100%);
  background-color: white;
  padding: 0.5%;
  border-radius: 15px;
`;
