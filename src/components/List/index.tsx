import React, { useState } from "react";
import styled from 'styled-components';

const ListWrapper = styled.ul`
  margin: 0 50px;

  li {
    list-style-type: circle;
    margin: 10px 0;
  }

  a {
    color: #844b00;

    &:hover {
      color: #472700;
    }
  }
`;

const Span = styled.span`
  display: inline-block;
  margin: 0 8px;
`

const Filter = styled.input`
  border: 1px solid #686767;
  padding: 10px;
  border-radius: 4px;

  &:focus {
    outline-offset: 0;
    outline-color: #686767;
    outline-style: auto;
    outline-width: 1px;
  }
`;

const Divider = styled.hr`
  background-color: #ccc;
  border: 0;
  border-color: transparent;
  margin: 20px 0;
  height: 1px;
`;

const FilterDecade = styled.select`
  background-color: #fff;
  border: 1px solid #686767;
  padding: 10px;
  border-radius: 4px;

  &:focus {
    outline-offset: 0;
    outline-color: #686767;
    outline-style: auto;
    outline-width: 1px;
  }
`;

const FilterLabel = styled.label`
  width: 150px;
  display: inline-block;
`

const List = (props: any) => {
  const { movies } = props;
  const [word, setWord] = useState('');
  const [filteredDisplay, setFilteredDisplay] = useState(props.movies);

  const handleChange = (e: any) => {
    let oldList = props.movies.map((movie: any) => {
      return { title: movie.title.toLowerCase(), score: movie.score, year: movie.year}
    })

    if (e!== '') {
      let newList = [];
      setWord(e);
      newList = oldList.filter((movie: any) =>
        movie.title.includes(word)
      );
      setFilteredDisplay(newList);
    } else {
      setFilteredDisplay(props.movies);
    }
  }

  if (!movies || movies.length === 0) return <p>No movies, sorry</p>;

  return (
    <div>
      <FilterLabel>Search by title:</FilterLabel>
      <Filter
        onChange={(e) => handleChange(e.target.value)}
        type="text"
        placeholder="Search by title"
      />
      <Divider />
      <ListWrapper>
        {filteredDisplay
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
    </div>
  );
};

export default List;
