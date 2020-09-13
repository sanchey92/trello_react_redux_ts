import styled from 'styled-components';

const Thumbnail = styled.div`
  height: 280px;
  width: 280px;
  background: yellow;
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 2px 4px black;
`;

const Title = styled.h4`
  color: red;
  text-decoration: none;
`;

export {
  Thumbnail,
  Title
}
