import ActionTypesEnum from "../../actions/ActionTypes.enum";

const initialState = {
  'list-0': {
    id: 'list-0',
    cards: ['card-0'],
    title: 'initial list',
    board: 'board-0'
  }
};

const listReducer = (state = initialState, action: any) => {
  switch (action.type) {

    case ActionTypesEnum.ADD_LIST: {
      const {title, id} = action.payload;
      const newList = {
        id: `list-${id}`,
        title: title,
        cards: []
      };
      return {...state, [`list-${id}`]: newList};
    }


    default: return state
  }
}

export default listReducer;
