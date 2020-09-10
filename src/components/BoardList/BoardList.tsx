import React, {FC, useState} from "react";
import {Droppable, Draggable, DraggableProvided, DroppableProvided} from "react-beautiful-dnd";

import {BoardListTypes} from "./BoardList.types";
import {ListContainer} from "./BoardList.styled";
import ListCard from "../ListCard/ListCard";

const BoardList: FC<BoardListTypes> = ({title, cards, listID, index}) => {

  const [isEditing, setEditing] = useState<boolean>(false);
  const [listTitle, setListTitle] = useState<string>('');

  return (
    <Draggable draggableId={String(listID)} index={index}>
      {
        (provided: DraggableProvided) => (
          <ListContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Droppable droppableId={String(listID)} type='card'>
              {
                (provided1: DroppableProvided) => (
                  <div {...provided1.droppableProps} ref={provided1.innerRef}>
                    {
                      cards.map((card: any, idx: any) => (
                        <ListCard
                          key={card.id}
                          text={card.text}
                          id={card.id}
                          listID={listID}
                          index={idx}
                        />
                      ))
                    }
                    {provided1.placeholder}
                  </div>
                )
              }
            </Droppable>
          </ListContainer>
        )
      }
    </Draggable>
  )
}

export default BoardList;
