import {Reducer} from "react";
import CardActionTypes from "../../actions/cardsActions/actionTypes";
import ActionTypesEnum from "../../actions/ActionTypes.enum";

const initialState = {
  'card-0': {
    id: `card-0`,
    text: 'a test Card',
    list: 'list-0'
  }
}

const cardReducer: Reducer<any, CardActionTypes> = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypesEnum.ADD_CARD: {
      const {listID, text, id} = action.payload

      const newCard = {
        id: `card-${id}`,
        list: listID,
        text
      };
      return {...state, [`card-${id}`]: newCard}
    }

    case ActionTypesEnum.EDIT_CARD: {
      const {id, newText} = action.payload;
      const card = state[id];
      card.text = newText;
      return {...state, [`card-${id}`]: card};
    }

    case ActionTypesEnum.DELETE_CARD: {
      const {id} = action.payload;
      const newState = state;
      delete newState[id];
      return newState;
    }

    default:
      return state
  }
}

export default cardReducer;
