import * as S from './style';
import { dissolve, slide } from 'animations';

// Icons
import {
  NextDotJs as NextJsIcon,
  Framer as FramerIcon
} from '@styled-icons/simple-icons';

type Props = {
  title?: string;
  description?: string;
  illustrationSrc?: string;
};

const Main = ({ title, description, illustrationSrc }: Props) => (
  <S.Container exit={{ opacity: 0 }} initial="initial" animate="animate">
    <NextJsIcon color="white" />
    <FramerIcon />
    <S.Title variants={slide.left}>{title}</S.Title>
    <S.Description variants={slide.down}>{description}</S.Description>
    <S.Illustration variants={dissolve} src={illustrationSrc} />
  </S.Container>
);

export default Main;
