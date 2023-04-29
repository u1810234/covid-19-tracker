import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@mui/material";

const InfoBox = ({ title, cases, total }) => {
  return (
    <Card className="infoBox">
      <CardContent>
        <Typography color="textSecondary" className="infoBox__title">
          {title}
        </Typography>
        <Typography className="infoBox__cases">{cases}</Typography>
        <Typography color="textSecondary" className="infoBox__total">{total}</Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
