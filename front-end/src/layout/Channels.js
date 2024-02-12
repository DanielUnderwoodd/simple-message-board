import React, { lazy, Suspense, useContext, useEffect } from "react";
import { Stack, Grid, Box, Typography, Container } from "@mui/material";
import CardSkeleton from "../components/CardSkeleton";
import ChannelModal from "../components/ChannelModal";
import { fetchChannels } from "../actions/fetchData";
import { MainContext, MainDispatchContext } from "../context/mainContext";

// TODO remove, this demo shouldn't need to reset the theme.
const Card = lazy(() => import("../components/LazyCard"));

export default function Channels() {
  const dispatch = useContext(MainDispatchContext);
  const state = useContext(MainContext);
  let { channelList } = state;
  useEffect(() => {
    async function get() {
      await fetchChannels(dispatch);
    }
    get();
  }, []);
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
            Channels
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
            margin={0}
          >
            <ChannelModal />
          </Stack>
        </Container>
      </Box>
      {/* End hero unit */}

      <Grid container>
        <Grid item xs={12} lg={12} sx={{ px: 2 }}>
          <Grid container spacing={3}>
            {channelList.map((card) => (
              <Grid
                item
                key={card.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ pb: 2 }}
              >
                <Suspense fallback={<CardSkeleton />}>
                  <Card card={card} key={card.id} />
                </Suspense>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
}
