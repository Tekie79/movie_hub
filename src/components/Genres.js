import axios from "axios";
import React, { useEffect } from "react";
import Chip from "@material-ui/core/Chip";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  //handle clicks on genres
  // to add to selected
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    //remove from genre list
    setGenres(genres.filter((g) => g.id !== genre.id));
    //reset the page
    setPage(1);
  };
  //to remove from selected genres
  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  //data from api
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };
  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres({});
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres &&
        selectedGenres.map((genre) => {
          return (
            <Chip
              id={genre.id}
              label={genre.name}
              style={{ margin: 2 }}
              size="small"
              color="primary"
              clickable
              onDelete={() => handleRemove(genre)}
            />
          );
        })}
      {genres &&
        genres.map((genre) => {
          return (
            <Chip
              id={genre.id}
              label={genre.name}
              style={{ margin: 2 }}
              size="small"
              clickable
              onClick={() => handleAdd(genre)}
            />
          );
        })}
    </div>
  );
};

export default Genres;
