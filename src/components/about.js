import React from "react";
import { Typography, Container, Box } from "@mui/material";

const About = () => {
  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <Box sx={{ padding: "10px 10px" }} id="about">
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textDecoration: "underline",
              textUnderlineOffset: "5px",
              textDecorationColor: "#444",
              fontFamily: "'Roboto Slab', serif",
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              lineHeight: "1.6",
              animation: "fadeIn 1.5s ease-in-out",
              paddingTop: "50px",
            }}
          >
            Frontend developer with 3 years of hands-on experience in designing
            and implementing scalable web applications. Proficient in utilizing
            a diverse tech stack including JavaScript, Redux and React.js to
            deliver robust solutions. Skilled in micro frontends architecture,
            ensuring modular and maintainable codebases. Proven ability to
            collaborate effectively in cross-functional teams to meet project
            goals and deadlines. Known for delivering high-quality solutions.
            Strong problem-solving abilities and passionate about continuously
            learning and implementing best practices in software development to
            deliver exceptional user experiences.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default About;
