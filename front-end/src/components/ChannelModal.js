import React, { useState, useContext } from "react";
import { Modal, Avatar } from "@mui/material";
import AddButton from "./AddButton";
import ModalContent from "./ModalContent";
import { MainDispatchContext, MainContext } from "../context/mainContext";
import { addChannel } from "../actions/fetchData";

const ChannelModal = () => {
  const dispatch = useContext(MainDispatchContext);
  const state = useContext(MainContext);

  const [open, setOpen] = useState(false);
  let { errorForm } = state;
  let { channels } = state.form;
  let buttonCondition = ["channelTitle", "channelDescription"];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AddButton onClick={handleOpen} label={"Channel"} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div>
          <ModalContent>
            <ModalContent.Submit
              Submit={() => addChannel(dispatch, channels)}
              data={channels}
              buttonCondition={buttonCondition}
              onClose={handleClose}
            >
              <ModalContent.TextField
                label="Title"
                fieldName="channelTitle"
                row={1}
                value={channels?.channelTitle ?? ""}
                dispatch={dispatch}
                error={errorForm?.channelTitle ?? false}
                helperText={errorForm?.channelTitle ? "Title is required" : ""}
              />
              <ModalContent.TextField
                label="Description"
                fieldName="channelDescription"
                row={4}
                value={channels?.channelDescription ?? ""}
                dispatch={dispatch}
                error={errorForm?.channelDescription ?? false}
                helperText={
                  errorForm?.channelDescription ? "Description is required" : ""
                }
              />
              <ModalContent.File
                label="Avatar"
                fieldName="channelAvatar"
                dispatch={dispatch}
              >
                <Avatar
                  src={
                    channels?.channelAvatar
                      ? URL.createObjectURL(channels.channelAvatar)
                      : null
                  }
                />
              </ModalContent.File>
              <ModalContent.File
                label="Background Image"
                fieldName="channelBackgroundImage"
                dispatch={dispatch}
                sx={{
                  // 16:9
                  pb: 2,
                }}
              >
                {channels?.channelBackgroundImage && (
                  <img
                    src={URL.createObjectURL(channels.channelBackgroundImage)}
                    alt="Background"
                    style={{ width: "100%", maxHeight: "200px" }}
                  />
                )}
              </ModalContent.File>
            </ModalContent.Submit>
          </ModalContent>
        </div>
      </Modal>
    </div>
  );
};

export default ChannelModal;
