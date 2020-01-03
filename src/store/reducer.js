const INITIAL_STATE = {
  age: 0
};

//reducers listens and catch for the new actions provided by the saga and pass it to the components..
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "AGE_UP_NEW":
      return {
        ...state,
        age: (state.age += action.value)
      };

    case "AGE_DOWN_NEW":
      return {
        ...state,
        age: (state.age -= action.value)
      };
    default:
      return state;
  }
};

export default reducer;
