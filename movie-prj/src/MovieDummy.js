export const getMovies = () => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        //API Key 입력
        Authorization: "",
      },
    };

    const data = fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1&region=KR",
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));
    return data;
  } catch {
    // 오류 발생시 실행
  }
};
