import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from 'react-router-dom';

import {addBoard} from "../../../store/actions/boardsActions/boardActions";
import {CreateTitle, CreateInput, HomeContainer, Thumbnails} from "./HomePage.styled";
import BoardThumbnail from "../../components/BoardThumbnail/BoardThumbnail";

const HomePage: FC = () => {

  const [boardTitle, setBoardTitle] = useState<string>('');
  const dispatch = useDispatch();
  const boards = useSelector((state: any) => state.board);
  const boardOrder = useSelector((state: any) => state.boardOrder);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setBoardTitle(event.target.value);
  }

  const clickHandleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    if (boardTitle.trim()) dispatch(addBoard(boardTitle));
    setBoardTitle('');
  }

  return (
    <HomeContainer>
      <Thumbnails>
        {boardOrder.map((boardID: any) => {
          const board = boards[boardID];
          return (
            <Link
              key={boardID}
              to={`/${boardID}`}
              style={{textDecoration: 'none'}}
            >
              <BoardThumbnail {...board} />
            </Link>)
        })}
      </Thumbnails>
      <form onSubmit={clickHandleSubmit} style={{textAlign: 'center'}}>
        <CreateTitle>Create a new Board</CreateTitle>
        <CreateInput
          value={boardTitle}
          type='text'
          placeholder='enter board name'
          onChange={handleInputChange}
        />
      </form>
    </HomeContainer>
  )
}

export default HomePage;
