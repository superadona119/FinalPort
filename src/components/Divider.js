import React from "react";
import { makeStyles } from "@material-ui/core";

const Divider = ({ fullWidth, width, ...rest }) => {
  const classes = useStyles({ fullWidth, width });
  return <div className={classes.root} {...rest}></div>;
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline",
    width: (props) => (props.fullWidth ? "100%" : props.width),
    height: "5px",
    backgroundColor: "#bd3b22",
    position: "absolute",
    top: "100px",
    left: "0px",
  },
}));

export default Divider;
