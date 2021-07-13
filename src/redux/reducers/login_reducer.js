import { GET_USER } from "../actions/action_types";

const user = (state = {}, action) => {
    switch (action.type) {
      case GET_USER:
        return action.payload;
      default:
        return null;
    }
  };
  export default user;