import axios from "axios";
const url = "https://dictionary472021.herokuapp.com/dictionary";

//fetch the word from oxford dicionary
export const allWords = async () => await axios.get(`${url}/allWords`);
export const addNewWord = async (newWord) =>
  await axios.post(`${url}/addWord`, newWord);
export const searchword = async (title) =>
  await axios.get(`${url}/search/${title}`);

// export const search = async () => await axios.post(`${url}/oxford/search`);
