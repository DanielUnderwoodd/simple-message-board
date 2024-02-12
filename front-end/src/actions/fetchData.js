import Api from "../api/config";

export const fetchChannels = async (dispatch) => {
  try {
    let response = await Api.get("/pb/channels");
    if (response && response.data) {
      dispatch({
        type: "SET_CHANNELS",
        payload: response.data,
      });
    }
  } catch (e) {
    dispatch({
      type: "SET_ERROR",
      payload: e.response?.data || e.message,
    });
  }
};

export const fetchChannel = async (dispatch, id) => {
  try {
    let response = await Api.get(`/pb/channel/${id}`);
    if (response && response.data) {
      return {
        ...response.data,
      };
    }
  } catch (e) {
    dispatch({
      type: "SET_ERROR",
      payload: e.response?.data || e.message,
    });
  }
};

export const addChannel = async (dispatch, channels) => {
  try {
    let {
      channelTitle,
      channelDescription,
      channelAvatar,
      channelBackgroundImage,
    } = channels;
    const formData = new FormData();
    // Append other attributes
    formData.append("title", channelTitle);
    formData.append("description", channelDescription);
    formData.append("avatar", channelAvatar);
    formData.append("backgroundImage", channelBackgroundImage);

    let response = await Api.post("/pb/add-channel", formData, {
      "Content-Type": "multipart/form-data",
    });
    if (response && response.data) {
      dispatch({
        type: "SET_CHANNELS",
        payload: response.data.channels,
      });
      dispatch({
        type: "SET_SUCCESS",
        payload: response.data.message,
      });
      return {
        success: true,
      };
    }
  } catch (e) {
    dispatch({
      type: "SET_ERROR",
      payload: e.response?.data || e.message,
    });
    return {
      success: false,
    };
  }
};

export const addMessage = async (dispatch, messages, data) => {
  try {
    let { messageAlias, messageSubject, messageText, messageAvatar } = messages;
    const formData = new FormData();
    // Append other attributes
    formData.append("alias", messageAlias);
    formData.append("subject", messageSubject);
    formData.append("avatar", messageAvatar);
    formData.append("text", messageText);
    formData.append("channelId", data.channelId);

    let response = await Api.post("/pb/channel/add-message", formData, {
      "Content-Type": "multipart/form-data",
    });
    if (response && response.data) {
      dispatch({
        type: "SET_CHANNELS",
        payload: response.data.channels,
      });
      dispatch({
        type: "SET_SUCCESS",
        payload: response.data.message,
      });
      return {
        success: true,
      };
    }
  } catch (e) {
    dispatch({
      type: "SET_ERROR",
      payload: e.response?.data || e.message,
    });
    return {
      success: false,
    };
  }
};
