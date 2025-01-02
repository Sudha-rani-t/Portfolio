import React, {useState} from 'react'
import {
    Typography,
    Container,
    Box,
    Button,
    } from "@mui/material";
    import HTML from "./../assests/html.jpeg";
    import CSS from "./../assests/css.png";
    import JS from "./../assests/js.png";
    import REACT from "./../assests/reactjs.jpeg";
    import NODE from "./../assests/node1.jpg";
    import EXPRESS from "./../assests/express1.png";
    import MONGODB from "./../assests/mongodb.png";
    import SQL from "./../assests/sql.png";
    import GIT from "./../assests/git.jpeg";
    import { Element } from "react-scroll";

const Skill = () => {
    const [activeBox, setActiveBox] = useState("box1");
    const skillSets = {
        box1: [
          { name: "HTML", imgSrc: HTML },
          { name: "CSS", imgSrc: CSS },
          { name: "JavaScript", imgSrc: JS },
          { name: "React.js", imgSrc: REACT },
        ],
        box2: [
          { name: "Node.js", imgSrc: NODE },
          { name: "Express.js", imgSrc: EXPRESS },
        ],
        box3: [
          { name: "MongoDB", imgSrc: MONGODB },
          { name: "SQL", imgSrc: SQL },
        ],
        box4: [{ name: "Git", imgSrc: GIT }],
      };
      const skills = skillSets[activeBox];

      const handleBoxClick = (boxKey) => {
        setActiveBox(boxKey);
      };
  return (
    <div>
      <Element name="skills">
          <Container
            maxWidth="lg"
            sx={{
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
            }}
          >
            <Box sx={{ padding: "40px 10px" }} id="skills">
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
                My Skills
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 4,
                  flexDirection: { xs: "column", md: "row" },
                  fontFamily: "'Roboto', sans-serif",
                  animation: "fadeIn 1.5s ease-in-out",
                  paddingTop: "100px",
                }}
              >
                {/* Left Side - 4 Boxes */}
                <Box
                  sx={{
                    flex: 1,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#333", color: "#fff" }}
                    onClick={() => handleBoxClick("box1")}
                  >
                    Frontend
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#333", color: "#fff" }}
                    onClick={() => handleBoxClick("box2")}
                  >
                    Backend
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#333", color: "#fff" }}
                    onClick={() => handleBoxClick("box3")}
                  >
                    Database
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#333", color: "#fff" }}
                    onClick={() => handleBoxClick("box4")}
                  >
                    Tools & Technologies
                  </Button>
                </Box>
                {/* Right Side - Skills Display */}
                <Box
                  sx={{
                    flex: 1,
                    padding: 4,
                    border: "1px solid #333",
                    borderRadius: 2,
                    backgroundColor: "#222",
                    minHeight: "200px",
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(100px, 1fr))",
                    gap: 2,
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                  {skills.map((skill, index) => (
                    <Box key={index} sx={{ textAlign: "center" }}>
                      <img
                        src={skill.imgSrc}
                        alt={skill.name}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                          marginBottom: "8px",
                        }}
                      />
                      <Typography variant="body2">{skill.name}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Container>
        </Element>
    </div>
  )
}

export default Skill
