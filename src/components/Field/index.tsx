import { useRef, useState, forwardRef } from 'react';
import * as S from './styles';
import * as Animate from 'animations';

const calcReason = (width: number, height: number) => {
    const calc = width / height;
    if (calc < 1) {
      return 'rectangle1';
    } else if (calc == 1) {
      return 'square';
    } else {
      return 'rectangle2';
    }
  } 

const Field = forwardRef((props: any, ref) => {
    const form = calcReason(parseFloat(props.width), parseFloat(props.height))
    return (
      <S.Block
      //@ts-ignore
        ref={ref}
        id={props.id}
        variants={Animate.cellVariant}
        animate={props.isDragging ? "dragging" : "inactive"}
        width={props.width} height={props.height}
        form={form}
      >     
          {props.optData && (
            <S.Content>
             {form} - {props.optData.value}
          </S.Content>
          )}
        
      </S.Block>
    );
  }
)

export default Field;
