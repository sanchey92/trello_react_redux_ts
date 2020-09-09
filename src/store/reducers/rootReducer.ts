import { combineReducers } from "redux";

import listReducer from "./listReducer/listReducer";
import cardReducer from "./cardReducer/cardReducer";
import boardsReducer from "./boardsReducer/boardsReducer";
import boardOrderReducer from "./boardOrderReducer/boardOrderReducer";
import activeBoardReducer from "./activeBoardReducer/activeBoardReducer";

const rootReducer = combineReducers({
  list: listReducer,
  card: cardReducer,
  board: boardsReducer,
  boardOrder: boardOrderReducer,
  activeBoard: activeBoardReducer
})

export default rootReducer
