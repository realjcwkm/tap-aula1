import React from "react";
import { Link, Typography } from "@mui/material";


function MenuItem({ href, title }) {
  return (
    <Typography component={Link} href={href} sx={{ color: "white", display: {xs: "none", sm: "block"} }}>
      {title}
    </Typography>
  );
}

export default MenuItem;
