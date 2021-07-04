import { GET_ALL_WORDS, NEW_WORD, SEARCH_WORD } from "./actionType";
import * as api from "../api";

export const getAllWords = (data) => async (dispatch) => {
  try {
    const { data } = await api.allWords();
    // console.log("ALL_WORDS", data);
    const action = {
      type: GET_ALL_WORDS,
      payload: data,
    };
    dispatch(action);
  } catch (error) {
    console.error(error.message);
  }
};

export const addWord = (newWord) => async (dispatch) => {
  try {
    const word = { newWord };
    const { data } = await api.addNewWord(word);
    console.log("NewWordData", data);
    const action = {
      type: NEW_WORD,
      payload: data,
    };
    dispatch(action);
  } catch (error) {
    console.error(error.message);
  }
};

export const searchWord = (title) => async (dispatch) => {
  try {
    if (title.length) {
      const { data } = await api.searchword(title);
      // console.log("Searched", data);
      const action = {
        type: SEARCH_WORD,
        payload: data,
      };
      dispatch(action);
    } else {
      const action = {
        type: SEARCH_WORD,
        payload: [],
      };
      dispatch(action);
    }
  } catch (error) {
    console.log(error.message);
  }
};

// export const search = () => async (dispatch) => {
//   try {
//     const { data } = await api.search();
//     console.log("Data oxford", data);
//     const action = {
//       type: "search_Oxford",
//       payload: data,
//     };
//     dispatch(action);
//   } catch (error) {
//     console.log("Error", error);
//   }
// };
