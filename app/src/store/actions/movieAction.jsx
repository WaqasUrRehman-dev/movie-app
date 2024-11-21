export { removeMovie } from "../reducer/movieSlice";
import axios from "../../utils/axios";
import { loadMovie } from "../reducer/movieSlice";

export const fetchDetails = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalId = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const translations = await axios.get(`/movie/${id}/translations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const watchProvider = await axios.get(`/movie/${id}/watch/providers`);

    let ultimateDetails = {
      detail: detail.data,
      externalId: externalId.data,
      recommendations: recommendations.data.results,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      translations: translations.data.translations.map((t) => t.name),
      similar: similar.data.results,
      watchProvider: watchProvider.data.results.IN,
    };
    dispatch(loadMovie(ultimateDetails));
  } catch (error) {
    console.log("Error: ", error);
  }
};
