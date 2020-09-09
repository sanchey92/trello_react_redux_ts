import {uuid} from 'uuidv4';
import ActionTypesEnum from "../ActionTypes.enum";
import {IAddCard, IDeleteCard, IEditCard} from "./Interfaces";

const addCard = (listID: string, text: string): IAddCard => {
  const id = uuid();
  return {
    type: ActionTypesEnum.ADD_CARD,
    payload: {listID, text, id}
  }
}

const editCard = (id: string, listID: string, newText: string): IEditCard => {
  return {
    type: ActionTypesEnum.EDIT_CARD,
    payload: {id, listID, newText}
  }
}

const deleteCard = (id: string, listID: string): IDeleteCard => {
  return {
    type: ActionTypesEnum.DELETE_CARD,
    payload: {id, listID}
  }
}

export {
  addCard,
  editCard,
  deleteCard
}
