import styled from "styled-components";
import Textarea from 'react-textarea-autosize';
import Card from "@material-ui/core/Card";
import Icon from "@material-ui/core/Icon";

const Container = styled.div`
  width: 284px;
  margin-bottom: 8px;
`;

const StyledCard = styled(Card)`
  min-height: 85px;
  padding: 6px 8px 2px 0;
`;

const StyledTextarea = styled(Textarea)`
  resize: none;
  width: 100%;
  overflow: hidden;
  outline: none;
  border: none;
`;

const ButtonContainer = styled.div`
  margin-top: 8px;
  margin-left: 7px;
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  margin-left: 8px;
  cursor: pointer;
`;

export {
  Container,
  StyledCard,
  StyledTextarea,
  ButtonContainer,
  StyledIcon
}
