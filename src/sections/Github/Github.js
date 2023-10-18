import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import { useTranslation } from "react-i18next";
import GitHubCalendar from "react-github-calendar";
import { AnimatePresence } from "framer-motion";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <SectionContainer id="github" title={t("menu_github")} maxWidth="md">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AnimatePresence>
          <GitHubCalendar
            username="superadona119"
            blockSize={15}
            blockMargin={5}
            color="#bd3b22"
            fontSize={16}
          />
        </AnimatePresence>
      </div>
    </SectionContainer>
  );
};

export default Projects;
