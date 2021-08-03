export const initialState = {
  language: false,
  customer: []
  
};

export const actionTypes = {
  LANGUAGE: "LANGUAGE",
  CUSTOMER: "CUSTOMER"
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LANGUAGE:
      return {
        ...state,
        language: action.language,
      };
      case actionTypes.CUSTOMER:
        return {
          ...state,
          customer: action.customer,
        };

    default:
      return state;
  }
};

export default reducer;
