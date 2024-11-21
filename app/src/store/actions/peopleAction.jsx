export { removePeople } from "../reducer/peopleSlice";
import axios from "../../utils/axios";
import { loadPeople } from "../reducer/peopleSlice";

export const fetchDetails = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalId = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);

    let ultimateDetails = {
      detail: detail.data,
      externalId: externalId.data,
      combinedCredits: combinedCredits.data,
      tvCredits: tvCredits.data,
      movieCredits: movieCredits.data,
    };
    dispatch(loadPeople(ultimateDetails));
  } catch (error) {
    console.log("Error: ", error);
  }
};
