import React, {FC} from "react";

import {Container, StyledCard, StyledTextarea, StyledIcon, ButtonContainer} from "./BoardForm.styled";
import {BoardFormTypes} from "./BoardForm.types";

const BoardForm: FC<BoardFormTypes> = ({text = '', onChange, closeForm, children}) => {

  return (
    <Container>
      <StyledCard>
        <StyledTextarea
          placeholder='Enter a title'
          autoFocus
          value={text}
          onChange={event => onChange(event)}
          onBlur={closeForm}
        />
        <ButtonContainer>
          {children}
          <StyledIcon onMouseDown={closeForm}>close</StyledIcon>
        </ButtonContainer>
      </StyledCard>
    </Container>
  )
}

export default BoardForm
