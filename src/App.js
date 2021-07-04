import React from "react";
import "./App.css";
// import { useDispatch } from "react-redux";

import { Grid } from "@material-ui/core";
//components
import WordList from "./components/wordList/WordList";

//actions
// import { getAllWords } from "./actions/word";

//grapghql
import {
  ApolloClient,
  createHttpLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:5000/",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllWords());
  // }, [dispatch]);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Grid container>
          <Grid item xs={12} sm={8} md={6}>
            <WordList />
          </Grid>
        </Grid>
      </div>
    </ApolloProvider>
  );
}

export default App;
