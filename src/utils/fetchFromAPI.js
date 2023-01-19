const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const response = await fetch(`${BASE_URL}/${url}&maxResults=100`, options);
  if (!response.ok) {
    throw new Error(`Something went wrong ( ${response.status} ) Error!`);
  }
  const data = await response.json();
  return data;
};
