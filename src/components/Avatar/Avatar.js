import React from "react";
import { makeStyles } from "@material-ui/core";
import AvatarImg from "../../assets/images/avatar.png";

const Avatar = () => {
  const classes = useStyles();
  return <img src={AvatarImg} alt="Mehdi BHA" className={classes.avatarImg} />;
};

const useStyles = makeStyles((theme) => ({
  avatarImg: {
    borderRadius: "20px",
    width: "270px",
    height: "320px",
    objectFit: "cover",
    boxShadow: theme.shadows[10],
  },
}));

export default Avatar;
