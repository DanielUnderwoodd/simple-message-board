import React from "react";
import Skeleton from "@mui/material/Skeleton";

export default function CardSkeleton() {
  return (
    <>
      <Skeleton variant="rounded" width="100%" height={160} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Skeleton height={50} variant="text" width="50%" />
        <Skeleton height={70} variant="text" width="80%" />
      </div>

      <Skeleton height={30} width="30%" />
    </>
  );
}
