import React, { useContext, useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";

import { CircularProgress, Box } from "@mui/material";

import { fetchChannel } from "../actions/fetchData";
import { MainContext, MainDispatchContext } from "../context/mainContext";
import ChannelMessages from "../layout/ChannelMessages";

// TODO remove, this demo shouldn't need to reset the theme.

export default function MessageBody() {
  const dispatch = useContext(MainDispatchContext);
  const { channelList } = useContext(MainContext);
  const { channelId } = useParams();
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    if (channelList.length !== 0) {
      let result =
        channelList.find((channel) => channel.id == channelId) || null;
      setChannel(result);
    } else {
      get();
    }
    async function get() {
      setTimeout(async () => {
        let result = await fetchChannel(dispatch, channelId);
        setChannel(result);
      }, 1500);
    }
  }, [channelList]);
  return channel ? (
    <ChannelMessages channel={channel} />
  ) : (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        p: 2,
      }}
    >
      <CircularProgress color="primary" variant="indeterminate" />
    </Box>
  );
}
