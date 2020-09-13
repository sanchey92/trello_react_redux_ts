import styled from 'styled-components';
import Icon from "@material-ui/core/Icon";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 5px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline-color: blue;
  border-radius: 5px;
  margin-bottom: 3px;
  padding: 5px;
`;

const DeleteButton = styled(Icon)`
  cursor: pointer;
  transition: opacity .3s ease-in-out;
  opacity: .2;
  &:hover {
    opacity: .8;
  }
`;

const ListTitle = styled.div`
  transition: background .3s ease-in;
  ${TitleContainer}:hover & {
    background: #ccc;
  }
`;

export {
  ListContainer,
  TitleContainer,
  StyledInput,
  DeleteButton,
  ListTitle
}
