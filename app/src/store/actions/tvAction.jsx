export { removeTv } from "../reducer/tvSlice";
import axios from "../../utils/axios";
import { loadTv } from "../reducer/tvSlice";

export const fetchDetails = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const externalId = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const translations = await axios.get(`/tv/${id}/translations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const watchProvider = await axios.get(`/tv/${id}/watch/providers`);

    let ultimateDetails = {
      detail: detail.data,
      externalId: externalId.data,
      recommendations: recommendations.data.results,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      translations: translations.data.translations.map((t) => t.name),
      similar: similar.data.results,
      watchProvider: watchProvider.data.results.IN,
    };
    dispatch(loadTv(ultimateDetails));
  } catch (error) {
    console.log("Error: ", error);
  }
};
