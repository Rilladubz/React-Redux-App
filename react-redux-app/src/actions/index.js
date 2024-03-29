import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getMyGitHub = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .all([
      axios.get("https://api.github.com/users/rilladubz"),
      axios.get("https://api.github.com/users/rilladubz/followers")
    ])
    .then(
      axios.spread((res, followerRes) => {
        // console.log(res, followerRes);
        dispatch({
          type: FETCH_SUCCESS,
          payload: [res.data, followerRes.data]
        });
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_FAILURE,
        payload: err.response.data.message
      })
    );
};
