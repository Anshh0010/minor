const SearchReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TYPE':
      return {
        ...state,
        type: {
          ...state.type,
          [action.payload.field]: action.payload.value
        }
      };
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload
      };
    case 'SET_LOCATION':
      return {
        ...state,
        state: action.payload.state,
        city: action.payload.city
      };
    case 'RESET_FILTERS':
      return {
        type: {
          technology: false,
          commerce: false,
          arts: false,
          design: false,
          medical: false,
        },
        name: "",
        state: "",
        city: "",
      };
    default:
      return state;
  }
};

export default SearchReducer;