export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const slide = {
  up: {
    exit: { y: 80 },
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  },
  down: {
    exit: { y: -80 },
    initial: { opacity: 0, y: -80 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
  },
  right: {
    exit: { x: 200 },
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  },
  left: {
    exit: { x: -200 },
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  }
};

export const dissolve = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.6 } }
};

export const tapScale = {
  scale: 0.9
};

export const hoverScale = { scale: 1.05, transition: { repeat: 'Infinity' } };


export const cellVariant = {
  dragging: {
    border: "2px dashed #008E95"
  },
  inactive: {
    border: "2px solid #fff"
  }
};

export const draggableVariant = {
  dragging: {
   scale: 0.8
  },
  inactive: {
   scale: 1
  }
};