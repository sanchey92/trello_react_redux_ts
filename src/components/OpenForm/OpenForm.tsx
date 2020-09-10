import React, {FC} from "react";
import styled from 'styled-components';
import Icon from "@material-ui/core/Icon";

import {OpenFormTypes} from "./OpenForm.types";

const OpenForm: FC<OpenFormTypes> = ({list, onClick, children}) => {

  const textOpacity = list ? 1: .5;
  const textColor = list ? 'white': 'inherit';
  const textBackground = list ? 'rgba(0, 0, 0, .15)': 'inherit';

  const OpenFormButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  height: 36px;
  margin-left: 8px;
  width: 300px;
  padding-left: 10px;
  padding-right: 10px;
  opacity: ${textOpacity};
  color: ${textColor};
  background-color: ${textBackground};
`;

  return (
    <OpenFormButton onClick={onClick}>
      <Icon>add</Icon>
      <p style={{flexShrink: 0}}>
        {children}
      </p>
    </OpenFormButton>
  )
}

export default OpenForm;
