import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  padding: 0 50px;

  li {
    list-style-type: circle;
    margin: 10px 0;
  }
`;

const Span = styled.span`
  display: inline-block;
  margin: 0 8px;
`

const List = (props: any) => {
  const { movies } = props;
  if (!movies || movies.length === 0) return <p>No movies, sorry</p>;
  return (
    <ListWrapper>
      {movies
        .sort((movieOne: any, movieTwo: any) =>
          movieOne.title > movieTwo.title ? 1 : -1
        )
        .map((movie: any) => {
          return (
            <li key={movie.id} className="list">
              <Span>{movie.score * 100}%</Span>
              <a href={movie.url} target="_blank" rel="noopener noreferrer">
                {movie.title}{" "}
              </a>
              <Span>({movie.year})</Span>
            </li>
          );
        })}
    </ListWrapper>
  );
};

export default List;
