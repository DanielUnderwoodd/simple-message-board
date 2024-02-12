export const initialState = {
  channelList: [],
  error: [],
  success: [],
  form: {},
  errorForm: {
    channels: {},
    messages: {},
  },
};

export function mainReducer(state, action) {
  switch (action.type) {
    case "SET_ERROR_FORM":
      return { ...state, errorForm: { ...state.errorForm, ...action.payload } };

    case "SET_CHANNELS":
      return { ...state, channelList: action.payload, form: {} };
    case "SET_ERROR":
      return { ...state, error: [...state.error, action.payload] };
    case "REMOVE_ERROR":
      return { ...state, error: [] };
    case "SET_SUCCESS":
      return { ...state, success: [...state.success, action.payload] };
    case "REMOVE_SUCCESS":
      return { ...state, success: [] };
    case "CHANGE_CHANNEL_FORM":
      return {
        ...state,
        form: {
          ...state.form,
          channels: { ...state.form.channels, ...action.payload },
        },
      };
    case "CHANGE_MESSAGE_FORM":
      return {
        ...state,
        form: {
          ...state.form,
          messages: { ...state.form.messages, ...action.payload },
        },
      };
  }
}
