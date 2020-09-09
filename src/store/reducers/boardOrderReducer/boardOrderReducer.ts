import {Reducer} from "react";
import ActionTypesEnum from "../../actions/ActionTypes.enum";

const initialState = ['board-0'];

const boardOrderReducer: Reducer<any, any> = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypesEnum.ADD_BOARD: {
      return [...state, `board-${action.payload.id}`]
    }

    default:
      return state
  }
};

export default boardOrderReducer
