import {Reducer} from "react";
import ActionTypesEnum from "../../actions/ActionTypes.enum";

const activeBoardReducer: Reducer<any, any> = (state = null, action) => {
  switch (action.type) {

    case ActionTypesEnum.SET_ACTIVE_BOARD: {
      return action.payload
    }

    default:
      return state
  }
}

export default activeBoardReducer;
