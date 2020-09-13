import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import {Droppable, Draggable, DraggableProvided, DroppableProvided} from "react-beautiful-dnd";
import {useDispatch} from "react-redux";

import {deleteList, editListTitle} from "../../../store/actions/listActions/actionCreators";
import {BoardListTypes} from "./BoardList.types";
import {ListContainer, TitleContainer, ListTitle, DeleteButton, StyledInput} from "./BoardList.styled";
import ListCard from "../ListCard/ListCard";
import CreateElement from "../CreateElement/CreateElement";

const BoardList: FC<BoardListTypes> = ({title, cards, listID, index}) => {

  const [isEditing, setEditing] = useState<boolean>(false);
  const [listTitle, setListTitle] = useState<string>(title);

  const dispatch = useDispatch();

  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setListTitle(event.target.value)
  }

  const handleDeleteList = () => {
    dispatch(deleteList(listID))
  }

  const handleFinishEditing = (event: FormEvent) => {
    event.preventDefault();
    dispatch(editListTitle(listID, listTitle))
    setEditing(false)
  }

  return (
    <Draggable draggableId={String(listID)} index={index}>
      {(provided: DraggableProvided) => (
        <ListContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable
            droppableId={String(listID)}
            type='card'
          >
            {(provided1: DroppableProvided) => (
              <div>
                <div>
                  {isEditing
                    ? (
                      <form onSubmit={handleFinishEditing}>
                        <StyledInput
                          type='text'
                          value={listTitle}
                          onChange={inputChange}
                          autoFocus
                          onFocus={event => event.target.select()}
                          onBlur={handleFinishEditing}
                        />
                      </form>
                    )
                    : (
                      <TitleContainer onClick={() => setEditing(true)}>
                        <ListTitle>{listTitle}</ListTitle>
                        <DeleteButton onClick={handleDeleteList}>delete</DeleteButton>
                      </TitleContainer>
                    )}
                </div>
                <div
                  {...provided1.droppableProps}
                  ref={provided1.innerRef}
                >
                  {cards.map((card: any, idx: any) => (
                    <ListCard
                      key={card.id}
                      text={card.text}
                      id={card.id}
                      listID={listID}
                      index={idx}
                    />
                  ))}
                  {provided1.placeholder}
                  <CreateElement listID={listID}/>
                </div>
              </div>
            )}
          </Droppable>
        </ListContainer>)}
    </Draggable>
  )
}

export default BoardList;
