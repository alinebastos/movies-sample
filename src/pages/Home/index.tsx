import React, { useEffect, useState } from "react";
import Header from '../../components/Header';
import styled from 'styled-components';
import List from '../../components/List';
import withListLoading from '../../components/WithListLoading';

const HomeWrapper = styled.div`
  padding: 0 50px;
`

const Home = () => {

  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    movies: null,
  });

  useEffect(() => {
    setAppState({ loading: true, movies: null });
    const apiUrl = `https://us-central1-beacon-fe-worksample-api.cloudfunctions.net/app/movies`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((movies) => {
        setAppState({ loading: false, movies: movies });
      });
  }, [setAppState]);

  return (
    <HomeWrapper>
      <Header title="Movies Evan Likes" />
      <ListLoading isLoading={appState.loading} movies={appState.movies} />
    </HomeWrapper>
  );
}

export default Home;