import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_LOGIN":
      return {
        ...state,
        authenticated: action.payload.authenticated,
        role: action.payload.role,
        uid: action.payload.uid,
      };
    default:
      return state;
  }
};
export default rootReducer;
