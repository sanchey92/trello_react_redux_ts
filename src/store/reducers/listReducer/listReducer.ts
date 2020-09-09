import ActionTypesEnum from "../../actions/ActionTypes.enum";
import {Reducer} from "react";

const initialState = {
  'list-0': {
    id: 'list-0',
    cards: ['card-0'],
    title: 'initial list',
    board: 'board-0'
  }
};

const listReducer: Reducer<any, any> = (state = initialState, action: any) => {
  switch (action.type) {

    case ActionTypesEnum.ADD_LIST: {
      const {title, id, boardID} = action.payload;
      const newList = {
        id: `list-${id}`,
        title: title,
        cards: [],
        board: `board-${boardID}`
      };
      return {...state, [`list-${id}`]: newList};
    }

    case ActionTypesEnum.EDIT_LIST_TITLE: {
      const {listID, newTitle} = action.payload;
      const list: any = state[listID];
      list.title = newTitle;
      return {...state, [listID]: list}
    }

    case ActionTypesEnum.DELETE_LIST: {
      const {listID} = action.payload
      const newState = state;
      delete newState[listID];
      return newState
    }

    case ActionTypesEnum.DRAG_HAPPENED: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        type
      } = action.payload;

      if (type === 'list') return state;

      if (droppableIdStart === droppableIdEnd) {
        const list = state[droppableIdStart];
        const card = list.cards.splice(droppableIndexStart, 1);
        list.card.splice(droppableIndexEnd, 0, ...card);
        return {...state, [droppableIdStart]: list};
      }

      if (droppableIdStart !== droppableIndexEnd) {
        const startList = state[droppableIdStart];
        const endList = state[droppableIdEnd];
        const card = startList.cards.splice(droppableIndexStart, 1);

        endList.cards.splice(droppableIndexEnd, 0, ...card);

        return {
          ...state,
          [droppableIdStart]: startList,
          [droppableIdEnd]: endList
        }
      }
      return state
    }

    default:
      return state
  }
}

export default listReducer;
