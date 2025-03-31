import axios from "axios";

const BASE_URL = "https://imdb.iamidiotareyoutoo.com/search";

// const a = ['a', 'b', 'c', 'd']
export const fetchMoviesAB = async () => {
  const responseA = await fetch(
    `https://imdb.iamidiotareyoutoo.com/search?q=a`
  );
  const dataA = await responseA.json();
  const responseB = await axios.get(
    `https://imdb.iamidiotareyoutoo.com/search?q=b`
  );
  const dataB = await responseB.data;

  var data = dataA.description.concat(dataB.description);

  return data;
};
