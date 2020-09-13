import React, {ChangeEvent, FC, useState} from "react";
import {useDispatch} from "react-redux";

import {addList} from "../../../store/actions/listActions/actionCreators";
import {addCard} from "../../../store/actions/cardsActions/actionCreators";
import {CreateElementType} from "./CreateElement.type";
import BoardForm from "../BoardForm/BoardForm";
import BoardButton from "../BoardButton/BoardButton";
import OpenForm from "../OpenForm/OpenForm";

const CreateElement: FC<CreateElementType> = ({list, listID}) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch();

  const changeOpenFormHandler = () => setIsOpen(prevState => !prevState)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  };

  const handleAddList = () => {
    if (text.trim()) {
      dispatch(addList(text))
    }
    setText('');
  }

  const handleAddCard = () => {
    if (text.trim()) {
      dispatch(addCard(listID, text))
    }
    setText('');
  }

  return (
    <>
      {
        isOpen
          ? (<BoardForm
            text={text}
            onChange={handleInputChange}
            closeForm={changeOpenFormHandler}
          >
            <BoardButton onClick={list ? handleAddList : handleAddCard}>
              {list ? 'Add List' : 'Add Card'}
            </BoardButton>
          </BoardForm>)
          : (<OpenForm onClick={changeOpenFormHandler}>
            {list ? 'Add another list' : 'Add another card'}
          </OpenForm>)
      }
    </>
  )
}

export default CreateElement
