import React, { useEffect } from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Divider from "../components/Divider";

const SectionContainer = ({
  children,
  maxWidth,
  full,
  reverse,
  title,
  padding,
  ...rest
}) => {
  const classes = useStyles({ full, maxWidth, padding });
  const titleControls = useAnimation();
  const contentControls = useAnimation();
  const [titleRef, titleInView] = useInView();
  const [contentRef, contentInView] = useInView();
  // const [contentStart, setContentStart]=useState(false)

  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible");
    }
  }, [titleControls, titleInView]);

  useEffect(() => {
    if (contentInView) {
      // setContentStart(true)
      contentControls.start("visible");
    }
  }, [contentControls, contentInView]);

  return (
    <Container component="section" className={classes.container} {...rest}>
      {title && (
        <motion.div
          ref={titleRef}
          animate={titleControls}
          initial="hidden"
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: reverse ? 0 : 0 },
          }}
          className={classes.titleContainer}
        >
          <Typography variant="h4" color="initial" className={classes.subTitle}>
            Expert Web Developer
          </Typography>

          <Divider width="10%" />
          <Typography variant="h3" color="initial" className={classes.title}>
            {title}
          </Typography>
        </motion.div>
      )}
      <motion.div
        ref={contentRef}
        animate={contentControls}
        initial="hidden"
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 20,
          when: "beforeChildren",
        }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -50 },
        }}
      >
        {children}
      </motion.div>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: (props) => (props.padding ? `${props.padding}px` : "80px"),
    paddingBottom: (props) => (props.padding ? `${props.padding}px` : "80px"),
  },
  titleContainer: {
    paddingBottom: theme.spacing(8),

    maxWidth: "100%",
    position: "relative",
  },
  title: {
    margin: theme.spacing(1, 0),
    whiteSpace: "nowrap",
    fontWeight: "bold",
  },
  subTitle: {
    whiteSpace: "nowrap",
    fontWeight: "bold",
    fontSize: "20px",
  },
  childrenContainer: {
    minHeight: "100%",
  },
}));

export default SectionContainer;
