import {
  DECREASING_BOOKS,
  GET_BOOKS_FAILURE,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  INCREASING_BOOKS,
  UPDATE_BOOK_ERROR,
  UPDATE_BOOK_REQUEST,
  UPDATE_BOOK_SUCCESS,
} from "./actionTypes";

const initialState = {
  books: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BOOKS_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case GET_BOOKS_SUCCESS: {
      return {
        ...state,
        books: [...state.books, ...payload],
        isLoading: false,
        isError: false,
      };
    }
    case GET_BOOKS_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case UPDATE_BOOK_REQUEST: {
      return { ...state };
    }
    case UPDATE_BOOK_SUCCESS: {
      const newBooks = state.books.map((item) =>
        item.id === payload.id ? payload : item
      );

      return { ...state, books: newBooks };
    }
    case UPDATE_BOOK_ERROR: {
      return { ...state };
    }
    //sorting case
    case INCREASING_BOOKS: {
      return {
        ...state,
        books: state.books.sort((a, b) => a.release_year - b.release_year),
      };
    }
    case DECREASING_BOOKS: {
      return {
        ...state,
        books: state.books.sort((a, b) => b.release_year - a.release_year),
      };
    }
    default: {
      return state;
    }
  }
};
