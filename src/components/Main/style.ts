import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.main)`
  background-color: #ef6029;
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2%;
`;

export const Left = styled(motion.div)`
  width: 77%;
  display: flex;
  height: 100%;
`;

export const Top = styled(motion.div)`
  display: flex;
  width: 100%;
  padding: 2%;
  button {
    width: 150px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    background: none;

  }
`;

export const Middle = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 5px;
`;

export const Bottom = styled(motion.div)`
  padding: 2%;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  button {
    width: 130px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    background: none;

  }
`;

export const Right = styled(motion.div)`
  width: 20%;
  display: flex;
  border-radius: 5px;
  height: 100%;
  background-color: white;
  padding: 2%;
`;

export const Options = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Block = styled(motion.div)`
  width: 25%;
  padding: 2%;
  height: 150px;
  background-color: red;
`;


export const Content = styled(motion.div)<{inUse: boolean}>`
  ${({ inUse }) => css`
  width: 100%;
  margin: 4% 0;
  opacity: ${inUse ? '0.5' : '1'};
  height: 75px;
  background-color: green;
  padding: 2%;
  cursor: ${inUse ? 'default' : 'pointer'};;
  border-radius: 5px;`
}

`;