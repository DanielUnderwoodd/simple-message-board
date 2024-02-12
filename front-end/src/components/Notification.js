import React, { useContext } from "react";
import Snackbar from "@mui/material/Snackbar";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { MainDispatchContext } from "../context/mainContext";

function Notification({ messages, clearMessages }) {
  const dispatch = useContext(MainDispatchContext);

  const handleClose = () => {
    if (messages) {
      clearMessages(dispatch);
    }
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      {messages.map((msg, index) => (
        <Snackbar
          key={index}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={!!messages}
          autoHideDuration={3000} // Hide the success notification after 3 seconds
          onClose={handleClose}
          message={msg}
          action={action}
          sx={{ width: 500 }}
        ></Snackbar>
      ))}
    </>
  );
}

export default React.memo(Notification);
