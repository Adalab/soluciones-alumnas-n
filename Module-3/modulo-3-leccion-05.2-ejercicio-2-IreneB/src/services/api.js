const callToApi = (searchName) => {
  return fetch(`https://api.tvmaze.com/search/shows?q=${searchName}`)
    .then((response) => response.json())
    .then((dataApi) => {
      const shows = dataApi.map((data) => {
        return {
          name: data.show.name,
        };
      });
      return shows;
    });
};

export default callToApi;
