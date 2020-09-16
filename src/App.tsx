import React from 'react';
import GlobalStyle from "./globalStyles";
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header title="Movies Evan Likes" />
    </div>
  );
}

export default App;
