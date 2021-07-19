import axios from 'axios';

export async function getOccasions(offset, limit) {
  return axios
    .get(
      `http://localhost:1337/second-hand-cars?_start=${offset}&_limit=${limit}`
    )
    .then((res) => res.data);
}

export async function getSingleOccasion(id) {
  const article = await axios
    .get(process.env.NEXT_PUBLIC_DETAILS_OCCASION_URL)
    .then((res) => res.data);

  return {
    ...article,
    pictureUrl: `https://picsum.photos/seed/${id}/600/400`,
  };
}
