import * as actions from "../actions";
const initialState = {
  data: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SUCCESS:
      return {
        ...state,
        payload: action.payload,
      };
    case actions.REUQEST:
      return {
        ...state,
        data: action.data,
      };
    case actions.FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
