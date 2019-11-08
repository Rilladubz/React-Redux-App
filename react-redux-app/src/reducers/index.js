import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

export const initialState = {
  myData: [],
  followersData: [],
  Error: "",
  isFetching: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        myData: action.payload[0],
        followersData: action.payload[1],
        isFetching: false
      };
    case FETCH_FAILURE:
      return {
        ...state,
        myDataError: action.payload,
        isFetching: false
      };

    default:
      return state;
  }
};
