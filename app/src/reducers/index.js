import {
  FETCH_FILMS_START,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_FAILURE,
} from "../actions";

const initialState = {
  films: [],
  isLoading: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILMS_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case FETCH_FILMS_FAILURE:
      return {
        ...state, // handle the error
        loadingFacts: false,
        errorMessage: action.payload.message,
      };
    case FETCH_FILMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        films: action.payload,
      };
    default:
      return state;
  }
};
