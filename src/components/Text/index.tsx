import * as S from './style';
import TextTypes from './types';
import { FadeScale } from 'styles/animations';

const Text = ({ title = 'Text' }: TextTypes) => (
  <S.Container
    initial="hidden"
    animate="visible"
    variants={FadeScale}
    transition={FadeScale.transition}>
    <S.Title data-cy="text">{title}</S.Title>
  </S.Container>
);

export default Text;
