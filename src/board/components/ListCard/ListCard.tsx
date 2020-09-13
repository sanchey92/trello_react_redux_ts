import React, {ChangeEvent, FC, useState} from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {Draggable, DraggableProvided} from "react-beautiful-dnd";
import {useDispatch} from "react-redux";

import {editCard, deleteCard} from "../../../store/actions/cardsActions/actionCreators";
import {ListCardTypes} from "./ListCard.types";
import {CardContainer, DeleteButton, EditButton} from "./ListCard.styled";
import BoardForm from "../BoardForm/BoardForm";
import BoardButton from "../BoardButton/BoardButton";

const ListCard: FC<ListCardTypes> = ({text, id, listID, index}) => {

  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [cardText, setCardText] = useState<string>(text);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCardText(event.target.value);
  }

  const handleDeleteCard = (): void => {
    dispatch(deleteCard(id, listID));
  }

  const saveCard = (event: MouseEvent) => {
    event.preventDefault();
    dispatch(editCard(id, listID, cardText));
    setIsEdit(false)
  }

  const renderEditForm = () => {
    return (
      <BoardForm text={cardText} onChange={handleInputChange} closeForm={() => setIsEdit(false)}>
        <BoardButton onClick={saveCard}>Save</BoardButton>
      </BoardForm>
    )
  }

  const renderCard = () => {
    return (
      <Draggable draggableId={String(id)} index={index}>
        {(provided: DraggableProvided) => (
          <CardContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <EditButton onMouseDown={() => setIsEdit(true)} fontSize='small'>
              edit
            </EditButton>
            <DeleteButton onMouseDown={handleDeleteCard} fontSize='small'>
              delete
            </DeleteButton>
            <Card>
              <CardContent>
                <Typography>{text}</Typography>
              </CardContent>
            </Card>
          </CardContainer>
        )}
      </Draggable>
    )
  }

  return isEdit ? renderEditForm() : renderCard();

}

export default ListCard;
