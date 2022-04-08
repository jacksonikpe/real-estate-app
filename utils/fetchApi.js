import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "92f1a0af96msh28ffe74e7ca5ae2p132492jsn40a6a2e20159",
    },
  });

  return data;
};
