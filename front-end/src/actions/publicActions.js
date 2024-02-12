import { substringExtractor } from "./substringExtractor";

export const clearError = async (dispatch) => {
  try {
    dispatch({
      type: "REMOVE_ERROR",
    });
  } catch (e) {
    dispatch({
      type: "SET_ERROR",
      payload: e.response.data,
    });
  }
};

export const clearSuccess = async (dispatch) => {
  try {
    dispatch({
      type: "REMOVE_SUCCESS",
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: "SET_ERROR",
      payload: e.response.data,
    });
  }
};

export const changeForm = async (e, dispatch, fieldName, type) => {
  try {
    dispatch({
      type: "SET_ERROR_FORM",
      payload: {
        [fieldName]: !e.target.value.trim() ? true : false,
      },
    });

    let data;
    let actionType = substringExtractor(fieldName);

    switch (type) {
      case "file":
        data = e.target.files[0];
        break;
      case "text":
        data = e.target.value;
        break;
    }

    dispatch({
      type: `CHANGE_${actionType.toUpperCase()}_FORM`,
      payload: {
        [fieldName]: data,
      },
    });
  } catch (e) {
    dispatch({
      type: "SET_ERROR",
      payload: e.response,
    });
  }
};
