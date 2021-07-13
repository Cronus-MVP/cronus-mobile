import { GET_USER } from "./action_types";

export const getUser = user => ({
    type: 'GET_USER',
    payload: user,
  });
  