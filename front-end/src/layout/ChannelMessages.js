import React, { memo, lazy } from "react";

import { Stack, Grid, Box, Typography, Container } from "@mui/material";
import MessageModal from "../components/MessageModal";

// TODO remove, this demo shouldn't need to reset the theme.
const Messages = lazy(() => import("../components/LazyMessage"));
function ChannelMessges({ channel }) {
  return (
    <main>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {channel && channel.title}
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
            margin={0}
          >
            <MessageModal />
          </Stack>
        </Container>
      </Box>
      {/* End hero unit */}

      <Grid container sx={{ px: 2 }}>
        {channel.messages.length !== 0
          ? channel.messages.map((message) => (
              <Messages key={message.id} message={message} />
            ))
          : " There no message To show"}
      </Grid>
    </main>
  );
}

export default ChannelMessges;
