import { GET_ALL_WORDS, NEW_WORD, SEARCH_WORD } from "../actions/actionType";
const intialState = {
  word: [],
  searchedWord: [],
};
const word = (state = intialState, action) => {
  switch (action.type) {
    case GET_ALL_WORDS:
      return { ...state, word: action.payload };
    case NEW_WORD:
      return { ...state, word: [...state.word, action.payload] };
    case SEARCH_WORD:
      return { ...state, searchedWord: action.payload };
    default:
      return state;
  }
};

export default word;
