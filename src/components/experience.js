import React, { useState } from "react";
import { Typography, Container, Box, CardContent } from "@mui/material";
import { Element } from "react-scroll";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTS from "./../assests/cts.jpg";
const Experience = () => {
  const experiences = [
    {
      title: "Cognizant Technology Solutions",
      designation: "Developer",
      years: "3 Years",
      duration: "Dec-2021 → May-2024",
      companyImage: CTS,
    },
  ];
  const WorkIcon = () => <></>;
  return (
    <div>
      <Element name="experience">
        <Container
          maxWidth="lg"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              padding: "40px 10px",
              backgroundColor: "#000",
              color: "#fff",
            }}
            id="experience"
          >
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
              Experience
            </Typography>
            <Box
              sx={{
                maxWidth: "800px",
                margin: "0 auto",
                position: "relative",
                padding: "20px",
                fontFamily: "'Roboto', sans-serif",
                paddingTop: "100px",
              }}
            >
              {experiences.map((experience, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column", // mobile first (small screens)
                      sm: "row", // for small screens and up
                    },
                    alignItems: {
                      xs: "center", // center on small screens
                      sm: "flex-start", // left align for larger screens
                    },
                    marginBottom: "40px",
                    position: "relative",
                    textAlign: {
                      xs: "center", // center the text on small screens
                      sm: "left", // left align for larger screens
                    },
                  }}
                >
                  {/* Image */}
                  <Box
                    sx={{
                      width: "150px",
                      height: "100px",
                      marginRight: {
                        xs: 0, // no margin on small screens
                        sm: "20px", // 20px margin on larger screens
                      },
                      marginBottom: {
                        xs: "20px", // margin on bottom for small screens
                        sm: 0, // no margin on bottom for larger screens
                      },
                    }}
                  >
                    <img
                      src={experience.companyImage}
                      alt={`${experience.title} logo`}
                      style={{
                        width: "100%",
                        height: "150%",
                        objectFit: "contain",
                        borderRadius: "5px",
                      }}
                    />
                  </Box>

                  {/* Card content */}
                  <CardContent sx={{ flex: 1, marginTop: "20px" }}>
                    <Typography variant="h5">{experience.title}</Typography>
                    <Typography variant="body1">
                      {experience.designation}
                    </Typography>
                    <Typography variant="body1">{experience.years}</Typography>
                    <Typography variant="body1">
                      {experience.duration}
                    </Typography>
                  </CardContent>
                </Box>
              ))}
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#366", color: "#000" }}
                  contentArrowStyle={{ borderRight: "7px solid  #366" }}
                  iconStyle={{ background: "#fff" }}
                  icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Programmer Analyst Traniee
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Dec 2021 - Dec 2022
                  </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#366", color: "#000" }}
                  contentArrowStyle={{ borderRight: "7px solid  #366" }}
                  iconStyle={{ background: "#fff" }}
                  icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Programmer Analyst
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Dec 2022 - Jan 2024
                  </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#366", color: "#000" }}
                  contentArrowStyle={{ borderRight: "7px solid  #366" }}
                  iconStyle={{ background: "#fff" }}
                  icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">Associate</h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Jan 2024 - May 2024
                  </h4>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </Box>
          </Box>
        </Container>
      </Element>
    </div>
  );
};

export default Experience;
