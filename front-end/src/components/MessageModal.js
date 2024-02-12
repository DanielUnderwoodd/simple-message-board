import React, { useState, useContext } from "react";
import { Modal, Avatar } from "@mui/material";
import AddButton from "./AddButton";
import ModalContent from "./ModalContent";
import { MainDispatchContext, MainContext } from "../context/mainContext";
import { addMessage } from "../actions/fetchData";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const MessageModal = () => {
  const dispatch = useContext(MainDispatchContext);
  const state = useContext(MainContext);
  const [open, setOpen] = useState(false);
  let { errorForm } = state;
  let { messages } = state.form;
  let channelId = useParams();
  let buttonCondition = ["messageAlias", "messageText"];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AddButton onClick={handleOpen} label={"Message"} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div>
          <ModalContent>
            <ModalContent.Submit
              Submit={() => addMessage(dispatch, messages, channelId)}
              data={messages}
              buttonCondition={buttonCondition}
              onClose={handleClose}
            >
              <ModalContent.TextField
                label="Alias"
                fieldName="messageAlias"
                row={1}
                value={messages?.messageAlias ?? ""}
                dispatch={dispatch}
                error={errorForm?.messageAlias ?? false}
                helperText={errorForm?.messageAlias ? "Alias is required" : ""}
              />
              <ModalContent.TextField
                label="Subject"
                fieldName="messageSubject"
                row={4}
                value={messages?.messageSubject ?? ""}
                dispatch={dispatch}
                error={errorForm?.messageSubject ?? false}
                helperText={
                  errorForm?.messageSubject ? "Subject is required" : ""
                }
              />
              <ModalContent.TextField
                label="Text"
                fieldName="messageText"
                row={4}
                value={messages?.messageText ?? ""}
                dispatch={dispatch}
                error={errorForm?.messageText ?? false}
                helperText={errorForm?.messageText ? "Text is required" : ""}
              />
              <ModalContent.File
                label="Avatar"
                fieldName="messageAvatar"
                dispatch={dispatch}
              >
                <Avatar
                  src={
                    messages?.messageAvatar
                      ? URL.createObjectURL(messages.messageAvatar)
                      : null
                  }
                />
              </ModalContent.File>
            </ModalContent.Submit>
          </ModalContent>
        </div>
      </Modal>
    </div>
  );
};

export default MessageModal;
