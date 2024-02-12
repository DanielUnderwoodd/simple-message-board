import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import {
  Button,
  Typography,
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
} from "@mui/material";
const LazyCard = ({ card }) => {
  const { backgroundImage, title, description, avatar } = card;
  const [image, setImage] = useState(null);
  useEffect(() => {
    const onLoad = async () => {
      if (backgroundImage) {
        setImage(`data:image/png;base64,${backgroundImage}`);
      } else {
        const imageUrl = "https://source.unsplash.com/random?wallpapers";
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        setImage(objectURL);
      }
    };
    onLoad();
  }, [backgroundImage]);

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {!image ? (
        <Skeleton
          variant="rectangular"
          sx={{ paddingTop: "56.25%", borderRadius: 2 }}
        />
      ) : (
        <CardMedia
          component="div"
          sx={{
            pt: "56.25%",
          }}
          image={image}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {card.avatar ? (
            <Avatar src={`data:image/png;base64,${avatar}`} />
          ) : (
            <Avatar src={null} />
          )}

          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={`/channel/messages/${card.id}`}>View</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default React.memo(LazyCard);
