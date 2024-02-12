import React from "react";
import { Button, TextField, Typography, Grid, Box } from "@mui/material";

import { changeForm } from "../actions/publicActions";

const ModalContent = ({ children }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 2,
      }}
    >
      <Typography variant="h6">Create Channel</Typography>
      {children}
    </Box>
  );
};

ModalContent.TextField = (props) => {
  let { dispatch, fieldName, ...others } = props;
  let type = "text";
  return (
    <Grid item xs={12}>
      <TextField
        variant="outlined"
        required
        fullWidth
        multiline
        onChange={(e) => changeForm(e, dispatch, fieldName, type)}
        {...others}
      />
    </Grid>
  );
};
ModalContent.File = (props) => {
  let { dispatch, fieldName, label, children } = props;

  let type = "file";
  return (
    <Grid item xs={12}>
      <label>Choose {label}</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => changeForm(e, dispatch, fieldName, type)}
      />
      {children}
    </Grid>
  );
};
ModalContent.Submit = (props) => {
  let { Submit, data, buttonCondition, onClose, children } = props;
  const submitConfig = async (e) => {
    e.preventDefault();
    const response = await Submit();
    if (response.success) {
      onClose();
    }
  };
  const onCondition = () => {
    let flag = 0;
    for (const element of buttonCondition) {
      if (!data?.[element] || data[element] === "") {
        flag = flag + 1;
      }
    }
    if (flag === 0) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <>
      <form onSubmit={submitConfig}>
        <Grid container spacing={2}>
          {children}
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={onCondition()}
        >
          Create
        </Button>
      </form>
    </>
  );
};

export default ModalContent;
