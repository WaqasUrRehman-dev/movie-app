import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTQ0YzcyNjBiYzYyNzUzYmEzOTA0OGM0MTAyODg5ZSIsIm5iZiI6MTczMTAwODU1Ny4xNTU1NDU3LCJzdWIiOiI2NzJiZDY4YzUwZTE1ZThmNWE1ODU2ODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4-Z-EQAEhAko9SaukQ22Cs2LXk1_YcpsVQaWtTu0MNo",
  },
});

export default instance;
