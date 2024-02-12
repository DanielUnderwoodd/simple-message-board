import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddChannelButton = ({ onClick, label }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      onClick={onClick}
    >
      Add {label}
    </Button>
  );
};

export default AddChannelButton;
