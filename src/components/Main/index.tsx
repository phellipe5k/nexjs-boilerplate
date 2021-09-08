import { useRef, useState, forwardRef, useEffect } from 'react';
import * as S from './style';
import * as Animate from 'animations';
import { motion, AnimateSharedLayout } from 'framer-motion';
import Field from '../Field';
//@ts-ignore

const data = [{ id: "51243", width: '225px', height: '150px'}, { id: "51843", width: '600px', height: '150px'}, { id: "81243", width: '400px', height: '150px', optionId: 113 }, { id: "51246", width: '150px', height: '150px', optionId: 112  },  { id: "512746", width: '500px', height: '150px'  },  { id: "5124256", width: '30%', height: '20%'  },  { id: "5124996", width: '12%', height: '20%' },  { id: "5127746", width: '12%', height: '20%'  }];
  

const Main = () => {
  const [squares, setSquares] = useState(data.map((el: any) => ({ data: el, ref: useRef(null) })));
  const [options, setOptions] = useState([{ value: 'Opt 1', id: 111, inUse: false }, { value: 'Opt 2', id: 113 , inUse: true }, { value: 'Opt 3', id: 112, inUse: true }, { value: 'Opt 4', id: 666, inUse: false }, { value: 'Opt 5', id: 667, inUse: false }, { value: 'Opt 6', id: 664, inUse: false }]);
  const [isDragging, setIsDragging] = useState([]);



  const editState = (type: string, id: any, optionId: any) => {
    switch(type) {
      case 'setSquares':
        const edit = squares.map(el => {
          if (el.data.id == id) {
            return { ...el, data: {...el.data, optionId} }
          }
          return el
        })
        setSquares(edit);
        return edit
      case 'setOptions':
        const editOpt = options.map(el => {
          if (el.id == id) {
           return {...el, inUse: true};
          } else if (optionId == el.id) {
            return {...el, inUse: false}
          }
          return el;
        })
        setOptions(editOpt)
        return editOpt;
      case 'setDragging':
        const setDragging = options.map((el, idx) => {
          if (idx == id) {
            return 'true';
          }
          return false;
        })
        // @ts-ignore
        setIsDragging(setDragging);
      default:
        return;
    }
  }

  const getActiveCellIndex = ({ point }: { point: any }) => {
    const cellIndex = squares.findIndex((cell: any) => {
      const {
        offsetLeft,
        offsetTop,
        offsetWidth,
        offsetHeight,
        parentElement
      } = cell.ref.current;

      const leftEdge = parentElement.offsetLeft + offsetLeft;
      const rightEdge = parentElement.offsetLeft + offsetLeft + offsetWidth;
      const topEdge = parentElement.offsetTop + offsetTop;
      const bottomEdge = parentElement.offsetTop + offsetTop + offsetHeight;
      return (
        point.x >= leftEdge &&
        point.x <= rightEdge &&
        point.y >= topEdge &&
        point.y <= bottomEdge
      );
    });
    
    // @ts-ignore
    if (cellIndex < 0) return activeIndex.active;
    return cellIndex;
  };

  const dragStart = (props: any, index: any) => {
      editState('setDragging', index, '');
  };


  const dragEnd = (_: any, info: any, dataOpt: any) => {
    const index = getActiveCellIndex(info);
    const square: any = squares[index];
    editState('setSquares', square.data.id, dataOpt.id);
    editState('setOptions', dataOpt.id, square.data.optionId)
    const setDragging = isDragging.map((el) => false)
              // @ts-ignore
    setIsDragging(setDragging);
  }
  return (
    <S.Container exit={{ opacity: 0 }} initial="initial" animate="animate">
      <S.Left>
        {/*<S.Top>
          <button>Adicionar Novo campo</button>
        </S.Top>*/}
        <AnimateSharedLayout>
          <S.Middle>
            { squares.map((square: any, index: any) => (
              <Field
                id={square.id}
                key={`cell-${index}`}
                dragStart={dragStart}
                dragEnd={dragEnd}
                index={index}
                isDragging={isDragging}
                ref={square.ref}
                width={square.data.width}
                height={square.data.height}
                optData={options.find(e => e.id == square.data.optionId)}
              />
            ))}
          </S.Middle>
        </AnimateSharedLayout>
       {/* <S.Bottom>
          <button>Salvar</button>
          </S.Bottom>*/}
      </S.Left>
      <S.Right>
        <S.Options>
          { options.map((el, index) => {
            return (
              // @ts-ignore
              <S.Content
                inUse={el.inUse}
                key={index}
                // variants - animate: animações
                variants={Animate.draggableVariant}
                animate={isDragging[index] ? "dragging" : "inactive"}
                dragElastic={1}
                onDragStart={(info) => dragStart(info, index)}
                onDragEnd={(_: any, info: any) => dragEnd(_, info, el)}
                layoutId="drag"
                drag={!el.inUse}
                whileHover={!el.inUse ? {
                  scale: 1.07,
                  transition: { duration: .3 },
                }: null}
                whileTap={!el.inUse ? { scale: 0.9 } : null}
          >
            {el.value}
          </S.Content>
            )
          }) }
        </S.Options>
      </S.Right>
    </S.Container>
  );
}



export default Main;
