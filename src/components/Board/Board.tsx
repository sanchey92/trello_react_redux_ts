import React, {FC, useCallback, useEffect} from "react";
import {useParams, Link} from 'react-router-dom'
import {DragDropContext, Droppable, DroppableProvided, DropResult} from "react-beautiful-dnd";
import {useDispatch, useSelector} from "react-redux";

import {setActiveBoard} from "../../store/actions/boardsActions/boardActions";
import {filterDraggable} from "../../store/actions/listActions/actionCreators";
import {Params} from "./Board.types";
import {ListContainer} from "./Board.styled";
import BoardList from "../BoardList/BoardList";

const Board: FC = () => {

  const boardID = useParams<Params>().boardID;
  const dispatch = useDispatch();

  const dispatchHandler = useCallback(() => {
    dispatch(setActiveBoard(boardID))
  }, [])

  useEffect(() => {
    dispatchHandler()
  }, [boardID])

  const lists = useSelector((state: any) => state.list);
  const cards = useSelector((state: any) => state.card);
  const boards = useSelector((state: any) => state.board);

  const board = boards[boardID];
  const listOrder = board.lists;

  const dragEndHandler = (result: DropResult): void => {
    const {destination, source, draggableId, type} = result;
    if (!destination) return;
    dispatch(
      filterDraggable(source.droppableId, destination.droppableId, source.index, destination.index, draggableId, type)
    )
  }

  if (!board) {
    return <p>Board not found!</p>
  }

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <Link to='/'>To Back</Link>
      <h2>{board.title}</h2>
      <Droppable droppableId='all-lists' type='list' direction='horizontal'>
        {
          (provided: DroppableProvided) => (
            <ListContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {
                listOrder.map((listID: any, idx: any) => {
                  const list = lists[listID];
                  if (list) {
                    const listCards = list.cards.map((cardID: any) => cards[cardID])
                    return (
                      <BoardList
                        key={list.id}
                        listID={list.id}
                        title={list.title}
                        cards={listCards}
                        index={idx}
                      />
                    )
                  }
                })
              }
              {provided.placeholder}
            </ListContainer>
          )
        }
      </Droppable>
    </DragDropContext>
  )
}

export default Board;
