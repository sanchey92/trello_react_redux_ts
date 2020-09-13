import React, {FC} from 'react';

import {BoardButtonTypes} from "./BoardButton.types";
import {StyledButton} from "./BoardButton.styled";

const BoardButton: FC<BoardButtonTypes> = ({onClick, children}) => {
  return (
    <StyledButton variant='contained' onMouseDown={onClick}>
      {children}
    </StyledButton>
  )
}

export default BoardButton;
