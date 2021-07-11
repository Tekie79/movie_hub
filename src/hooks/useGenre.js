const useGenres = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";

  // extract the ids of selected genres
  const genreId = selectedGenres.map((g) => g.id);
  //coma separated Ids
  return genreId.reduce((acc, cur) => acc + "," + cur);
};

export default useGenres;
