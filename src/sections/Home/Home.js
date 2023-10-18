import React, { useContext, useEffect } from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import HomeContainer from "../../containers/HomeContainer";
import VideoLogo from "../../components/VideoLogo";
import { useTranslation } from "react-i18next";
import loaderContext from "../../contexts/loaderContext";

const Home = () => {
  const classes = useStyles();
  const { isLoading } = useContext(loaderContext);
  const controls = useAnimation();
  const { t } = useTranslation();

  useEffect(() => {
    if (!isLoading) {
      controls.start((i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.1 + 1.2 },
      }));
    } else {
      controls.start({ opacity: 0, y: 5 });
    }
  }, [isLoading, controls]);

  return (
    <HomeContainer id="home">
      <div>
        <Typography
          component={motion.p}
          animate={controls}
          custom={3}
          variant="body2"
          color="initial"
          style={{
            marginBottom: "0",
            fontSize: "20px",
            fontWeight: "800",
            marginLeft: "3px",
            letterSpacing: "2px",
            position: "relative",
            display: "inline-block",
          }}
        >
          {t("home_Name")}
        </Typography>
        <div>
          <Typography
            component={motion.p}
            animate={controls}
            custom={1}
            color="initial"
            variant="h5"
            style={{
              marginBottom: "10px",
              marginRight: "15px",
              fontSize: "60px",
              fontWeight: "bold",
              display: "inline-block",
            }}
          >
            {t("home_welcome")}
          </Typography>
          <Typography
            component={motion.p}
            animate={controls}
            custom={1}
            color="initial"
            variant="h5"
            style={{
              marginBottom: "10px",
              fontSize: "60px",
              fontWeight: "bold",
              display: "inline-block",
            }}
          >
            {t("home_i")}
          </Typography>
        </div>
        <motion.div animate={controls} custom={5}>
          {/* <Button
            component={Link}
            spy
            smooth
            offset={0}
            duration={500}
            to="contact"
            variant="outlined"
            color="primary"
            size="large"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            {t("home_contact_btn")}
          </Button> */}
        </motion.div>
      </div>
    </HomeContainer>
  );
};

const useStyles = makeStyles((theme) => ({
  subTitle: {
    marginBottom: "16px",
    fontSize: "75px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "45px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "35px",
    },
  },
}));

export default Home;
