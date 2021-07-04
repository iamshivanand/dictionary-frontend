import React, { useState } from "react";
import "./style.css";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

import { useSelector } from "react-redux";
import { ALL_WORDS } from "../../graphql/queries.js";
//graphql
import { useQuery } from "@apollo/client";

//actions
import { addWord, getAllWords, searchWord } from "../../actions/word";

//components
import DisplayWord from "../DisplayWord/DisplayWord";
function WordList() {
  const dispatch = useDispatch();

  const AllWords = useSelector((state) => state.word.word);
  const searchedWords = useSelector((state) => state.word.searchedWord);
  // console.log("searchedWords", searchedWords);

  const { data } = useQuery(ALL_WORDS);
  data ? dispatch(getAllWords(data.getWords)) : dispatch(getAllWords([]));
  // if (data) {
  //   console.log("data", data.getWords);
  //   dispatch(getAllWords(data.getWords));
  //   console.log("AllWords wordlist", AllWords);
  // } else {
  //   console.log(loading);
  //   dispatch(getAllWords([]));
  // }

  const [searchIcon, setSearchIcon] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newWord, setNewWord] = useState("");

  const handleSearch = (e) => {
    setSearchIcon(false);
    setSearchText(e.target.value);
    if (!e.target.value) {
      setSearchIcon(true);
    }

    dispatch(searchWord(e.target.value));
  };
  const handleSearchClose = () => {
    setSearchIcon(true);
    setSearchText("");
  };
  const newWordForm = () => {
    setShowForm(!showForm);
  };
  const closeForm = () => {
    setShowForm(false);
  };
  const handleNewWordValue = (e) => {
    setNewWord(e.target.value);
  };

  const addNewWord = (e) => {
    e.preventDefault();
    // console.log(newWord);

    newWord.length > 1
      ? dispatch(addWord(newWord))
      : alert("Add a correct word");
    setNewWord("");
    newWord.length > 1 ? setShowForm(false) : setShowForm(true);
  };

  return (
    <div className="wordListPage">
      <div className="searchBar">
        <input
          type="text"
          id="searchInput"
          name="search"
          value={searchText}
          placeholder="Search..."
          onChange={handleSearch}
        />
        {searchIcon ? (
          <SearchIcon style={{ color: "white" }} />
        ) : (
          <CloseIcon style={{ color: "white" }} onClick={handleSearchClose} />
        )}
      </div>
      {searchIcon ? (
        <div className="mainContentDiv">
          <h4 className="heading">Words List</h4>
          <div className="button">
            <Button
              variant="contained"
              color="secondary"
              size="small"
              style={{ borderRadius: "100%" }}
              onClick={newWordForm}
            >
              <AddIcon fontSize="large" />
            </Button>
          </div>

          {/* all the words will be displayed here */}
          {AllWords.map((word, index) => (
            <DisplayWord key={index} word={word} />
          ))}
        </div>
      ) : (
        <div className="searchContentDiv">
          {searchedWords.map((word, index) => (
            <DisplayWord key={index} word={word} />
          ))}
        </div>
      )}
      {/* this is the form for adding new word */}
      {showForm ? (
        <div className="formDiv">
          <div className="addWordForm">
            <form>
              <h2>Add to Dictionary</h2>
              <h6>New Word</h6>
              <input
                type="text"
                id="addNewWord"
                name="AddNewWord"
                value={newWord}
                placeholder="Add..."
                onChange={handleNewWordValue}
              />
              <div className="newWordButton">
                <Button variant="text" size="small" onClick={closeForm}>
                  CANCEL
                </Button>
                <Button
                  type="submit"
                  variant="text"
                  size="small"
                  onClick={addNewWord}
                >
                  ADD
                </Button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default WordList;
