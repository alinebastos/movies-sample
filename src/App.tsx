import React from "react";
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import Home from './pages/Home';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Home />
    </Container>
  );
}

export default App;
