const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "3c25efec2428a20e51e79d6884070527",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  bgImage: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
