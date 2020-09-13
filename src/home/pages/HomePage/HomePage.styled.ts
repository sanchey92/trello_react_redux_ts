import styled from 'styled-components';

const Thumbnails = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1;
  height: 50%;
  margin: 0 auto;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const CreateTitle = styled.h3`
 font-size: 48px;
 color: white; 
 font-weight: bold;
`;

const CreateInput = styled.input`
  width: 400px;
  height: 80px;
  font-size: 22px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  outline-color: blue;
  box-shadow: 0 2px 4px black;
  align-self: center;
`;

export {
  Thumbnails,
  HomeContainer,
  CreateTitle,
  CreateInput
}
