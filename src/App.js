import React, { useRef, useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Grid,
  Button,
  TextField,
  Card,
  CardContent,
  Modal,
  useMediaQuery,
  useTheme,
  MenuItem,
} from "@mui/material";
import { Link as ScrollLink, Element } from "react-scroll";
import emailjs from "@emailjs/browser";
import sudha from "./assests/sudha-img.jpg";
import resume from "./assests/Sudha-Rani-Resume.pdf";
import HTML from "./assests/html.jpeg";
import CSS from "./assests/css.png";
import JS from "./assests/js.png";
import REACT from "./assests/reactjs.jpeg";
import NODE from "./assests/node1.jpg";
import EXPRESS from "./assests/express1.png";
import MONGODB from "./assests/mongodb.png";
import SQL from "./assests/sql.png";
import GIT from "./assests/git.jpeg";
import OUP from "./assests/oup.png";
import ONLINE from "./assests/online.jpg";
import CTS from "./assests/cts.jpg";

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  const menuItems = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Experience", to: "experience" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  const form = useRef();
  const [activeBox, setActiveBox] = useState("box1");
  const [activeProject, setActiveProject] = useState(null);
  const [projects, setProjects] = useState([]);

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

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = [
          {
            name: "OUP Engineering Technology- MY MATH",
            image: OUP,
            details: {
              client: "Oxford University Press",
              category: "Education",
              duration: "August 2022 - March 2024",
              technologies:
                "HTML, JavaScript, CSS, React JS, Material UI, Micro Frontend, API, Git, Jira",
              description:
                "This project is designed to provide an engaging and structured learning experience for students across various grade levels. It offers a user-friendly interface for both students and teachers, promoting efficient learning and progress tracking. Students can log in to their accounts to view their learning progress, access grade-specific chapters, and complete homework, practice, and assignment tasks. Teachers, serving as administrators, manage student accounts, assign tasks, monitor performance, and assess homework and assignments. The platform allows teachers to track each student’s progress in real time, ensuring personalized feedback and grading. This practical learning tool fosters interactive and comprehensive math education for students.",
              responsibilities: [
                "Designed and implemented new user interfaces to enhance user experience and accessibility.",
                "Integrated new features to enhance application capabilities, driven by business requirements and user feedback.",
                "Integrated APIs to facilitate seamless data exchange and improve application functionality.",
                "Refactored and optimized code to enhance application performance, reducing load times and boosting efficiency.",
                "Analyzed and resolved production issues to maintain application stability and ensure a seamless user experience.",
                "Collaborated with back-end developers to integrate user interface elements into applications & Collaborate with designers to create visually appealing layouts for student progress tracking, chapter navigation, homework, practice, and assignment sessions.",
                "Conducted code reviews and provided mentorship to freshers, fostering a collaborative and knowledge sharing environment.",
                "Practiced in Agile ceremonies, such as sprint planning and retrospectives, to ensure smooth project progress.",
              ],
            },
          },
          {
            name: "Online Exam Portal",
            image: ONLINE,

            details: {
              client: "Internal Project",
              category: "Education",
              duration: "March 2022- July 2022",
              technologies:
                "HTML, JavaScript, CSS, React Js, Redux, Node.js, Express JS, Postman, Bootstrap, MongoDB, Git",
              description:
                "The project is an online exam portal designed to provide users with the ability to purchase and take mock exams for various purposes, such as government exams, foreign exams, or interview preparation. Upon logging in, users create a personalized profile that displays the categories of exams they are registered for. From the profile, users can select their desired exam category, which will take them to a dedicated dashboard showcasing available exams.To attempt an exam, users need to purchase it through the platform. Once the purchase is complete, an exam date is scheduled, and users are required to take the exam on the assigned day. After completing the exam, users can view their scores directly on the platform. The portal is designed to offer a seamless and user-friendly experience, ensuring easy navigation and accessibility for all users.",
              responsibilities: [
                "Implemented responsive and user friendly React components, ensuring high-quality code and optimal performance.",
                "Designed and implemented server-side logic using Node.js and Express.js, ensuring efficient and scalable code.",
                "Created and managed RESTful APIs to enable seamless communication between the client and server.",
                "Designed, developed and optimized MongoDB database, including schema design and indexing.",
                "Implemented data models and performed CRUD operations to manage application data effectively.",
                "Utilized Debugging tools and technologies to identify and resolve issues in both development and production environments.",
                "Conducted code reviews, identified and fixed bugs, and optimized application performance.",
                "Implemented continuous integration and development (CI/CD) practices to enhance development workflow and productivity.",
                "Provided clear and concise technical documentation to facilitate knowledge sharing.",
              ],
            },
          },
        ];
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const experiences = [
    {
      title: "Cognizant Technology Solutions",
      designation: "Developer",
      years: "3 Years",
      duration: "Dec-2021 → May-2024",
      companyImage: CTS,
    },
  ];

  const skills = skillSets[activeBox];

  const handleBoxClick = (boxKey) => {
    setActiveBox(boxKey);
  };

  const handleReadMore = (index) => {
    setActiveProject(index);
  };

  const handleClose = () => {
    setActiveProject(null);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_g8ugert", "template_vf5pdln", form.current, {
        publicKey: "v2HgdG_oZ-6mVfyrK",
      })
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Error sending message.");
        }
      );
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Fixed Menu Bar */}
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#111", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontSize: "30px" }}>
            PORTFOLIO
          </Typography>

          {isMobile ? (
            <>
              {/* Custom Hamburger Menu */}
              <div
                onClick={handleMenuToggle}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "20px",
                  width: "30px",
                }}
              >
                <span
                  style={{ background: "#fff", height: "3px", width: "100%" }}
                ></span>
                <span
                  style={{ background: "#fff", height: "3px", width: "100%" }}
                ></span>
                <span
                  style={{ background: "#fff", height: "3px", width: "100%" }}
                ></span>
              </div>

              {/* Dropdown Menu */}
              {menuOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "50px",
                    right: "10px",
                    backgroundColor: "#333",
                    borderRadius: "5px",
                    zIndex: 10,
                  }}
                >
                  {menuItems.map((item) => (
                    <MenuItem
                      key={item.to}
                      onClick={handleMenuClose}
                      sx={{
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "#555",
                        },
                      }}
                    >
                      <ScrollLink
                        to={item.to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {item.label}
                      </ScrollLink>
                    </MenuItem>
                  ))}
                </div>
              )}
            </>
          ) : (
            menuItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                style={{ textDecoration: "none" }}
              >
                <Button color="inherit" style={{ paddingLeft: "15px" }}>
                  {item.label}
                </Button>
              </ScrollLink>
            ))
          )}
        </Toolbar>
      </AppBar>

      <Container
        maxWidth="lg"
        sx={{ marginTop: "50px", paddingBottom: "40px" }}
      >
        {/* Home Section */}
        <Box
          sx={{
            padding: "80px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          id="home"
        >
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Right Side: Photo */}
            <Box
              sx={{
                flex: 1,
                order: { xs: 1, md: 2 },
                display: "flex",
                justifyContent: "center",
                padding: { xs: "0 0 20px 0", md: "0 40px 0 0" },
              }}
            >
              <img
                src={sudha}
                alt="Sudha"
                style={{
                  borderRadius: "10%",
                  width: "100%",
                  maxWidth: "350px",
                  height: "auto",
                  objectFit: "cover",
                  border: "5px solid #fff",
                }}
              />
            </Box>

            {/* Left Side: Name and Designation */}
            <Box
              sx={{
                flex: 1,
                order: { xs: 2, md: 1 },
                textAlign: { xs: "left", md: "left" },
                padding: { xs: "10px", md: "20px" },
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{
                  animation: "fadeInDown 1s ease-in-out",
                  fontFamily: "'Roboto Slab', serif",
                  fontSize: { xs: "28px", sm: "34px", md: "40px" },
                }}
              >
                Sudha Rani
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  animation: "fadeInUp 1.5s ease-in-out",
                  fontFamily: "'Roboto Slab', serif",
                  fontSize: { xs: "20px", sm: "24px", md: "28px" },
                }}
              >
                Frontend Developer
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  animation: "fadeIn 2s ease-in-out",
                  fontFamily: "'Roboto', sans-serif",
                  marginBottom: "20px",
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                }}
              >
                I have 3 years of experience building and designing software.
                Currently, I love to work on web applications using technologies
                like React, Next.js.
              </Typography>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#444",
                    color: "#fff",
                    padding: { xs: "8px 16px", md: "10px 20px" },
                    fontSize: { xs: "12px", md: "16px" },
                  }}
                >
                  Get Resume
                </Button>
              </a>
            </Box>
          </Container>
        </Box>

        {/* About Section */}
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
              Frontend developer with 3 years of hands-on experience in
              designing and implementing scalable web applications. Proficient
              in utilizing a diverse tech stack including JavaScript, Redux and
              React.js to deliver robust solutions. Skilled in micro frontends
              architecture, ensuring modular and maintainable codebases. Proven
              ability to collaborate effectively in cross-functional teams to
              meet project goals and deadlines. Known for delivering
              high-quality solutions. Strong problem-solving abilities and
              passionate about continuously learning and implementing best
              practices in software development to deliver exceptional user
              experiences.
            </Typography>
          </Box>
        </Container>

        {/* Skills Section */}
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

        {/* Experience Section */}
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
                      alignItems: "center",
                      marginBottom: "40px",
                      position: "relative", 
                    }}
                  >
                    {/* Image on the left */}
                    <Box
                      sx={{
                        width: "100px", 
                        height: "100px",
                        marginRight: "20px",
                      }}
                    >
                      <img
                        src={experience.companyImage} 
                        alt={`${experience.title} logo`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain", 
                          borderRadius: "5px",
                        }}
                      />
                    </Box>

                    {/* Card content */}
                    <CardContent sx={{ flex: 1, paddingBottom: "20px" }}>
                      <Typography variant="h6">{experience.title}</Typography>
                      <Typography variant="body2">
                        {experience.designation}
                      </Typography>
                      <Typography variant="body2">
                        {experience.years}
                      </Typography>
                      <Typography variant="body2">
                        {experience.duration}
                      </Typography>
                    </CardContent>
                  </Box>
                ))}

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "40px",
                    position: "relative", 
                  }}
                >
                  {/* Image on the left */}
                  <Box
                    sx={{
                      marginLeft: "50px",
                      transform: "translateX(-50%)", 
                      width: "10px", 
                      height: "10px",
                      backgroundColor: "#fff", 
                      borderRadius: "50%", 
                    }}
                  ></Box>

                  {/* Card content */}
                  <CardContent
                    sx={{ flex: 1, paddingBottom: "20px", marginLeft: "60px" }}
                  >
                    <Typography variant="h6">Associate</Typography>
                    <Typography variant="body2">
                      Jan 2024 - May 2024 
                    </Typography>
                  </CardContent>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    top: "333px",
                    left: "69px", 
                    width: "2px",
                    height: "14%",
                    backgroundColor: "#444",
                  }}
                ></Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "40px",
                    position: "relative", 
                  }}
                >
                  {/* Image on the left */}
                  <Box
                    sx={{
                      marginLeft: "50px",
                      transform: "translateX(-50%)",
                      width: "10px", 
                      height: "10px",
                      backgroundColor: "#fff", 
                      borderRadius: "50%", 
                    }}
                  ></Box>

                  {/* Card content */}
                  <CardContent
                    sx={{ flex: 1, paddingBottom: "20px", marginLeft: "60px" }}
                  >
                    <Typography variant="h6">Program Analyst</Typography>
                    <Typography variant="body2">
                      Jan 2023 - Dec 2023
                    </Typography>
                  </CardContent>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    top: "465px",
                    left: "69px", 
                    width: "2px",
                    height: "15%",
                    backgroundColor: "#444",
                  }}
                ></Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "40px",
                    position: "relative", 
                  }}
                >
                  {/* Image on the left */}
                  <Box
                    sx={{
                      marginLeft: "50px",
                      transform: "translateX(-50%)", 
                      width: "10px", 
                      height: "10px",
                      backgroundColor: "#fff", 
                      borderRadius: "50%", 
                    }}
                  ></Box>

                  {/* Card content */}
                  <CardContent
                    sx={{ flex: 1, paddingBottom: "20px", marginLeft: "60px" }}
                  >
                    <Typography variant="h6">
                      Program Analyst Traniee
                    </Typography>
                    <Typography variant="body2">Dec 2021 - Dec 2022</Typography>
                  </CardContent>
                </Box>
              </Box>
            </Box>
          </Container>
        </Element>

        {/* Projects Section */}
        <Container
          maxWidth="lg"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          <Box sx={{ padding: "10px 10px" }} id="projects">
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                textDecorationColor: "#444",
                fontFamily: "'Roboto Slab', serif",
                paddingBottom: "30px",
              }}
            >
              Projects
            </Typography>
            <Grid container spacing={3}>
              {projects && projects.length > 0 ? (
                projects.map((project, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card sx={{ backgroundColor: "#222", color: "#fff" }}>
                      <CardContent>
                        <img
                          src={project.image}
                          alt={project.name}
                          style={{
                            width: "100%",
                            height: "150px",
                            objectFit: "cover",
                            borderRadius: "8px",
                            marginBottom: "16px",
                          }}
                        />
                        <Typography variant="h5">{project.name}</Typography>
                        <Button
                          onClick={() => handleReadMore(index)}
                          variant="contained"
                          sx={{
                            backgroundColor: "#444",
                            color: "#fff",
                            marginTop: "10px",
                          }}
                        >
                          Read More
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Modal for Project Details */}
                    <Modal
                      open={activeProject === index}
                      onClose={handleClose}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "80%",
                          maxHeight: "80%",
                          backgroundColor: "#333",
                          color: "#fff",
                          borderRadius: "8px",
                          padding: "20px",
                          overflowY: "auto",
                        }}
                      >
                        <Typography variant="h5" sx={{ marginBottom: "10px" }}>
                          {project.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ marginBottom: "10px" }}
                        >
                          <strong>Client:</strong> {project.details.client}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ marginBottom: "10px" }}
                        >
                          <strong>Category:</strong> {project.details.category}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ marginBottom: "10px" }}
                        >
                          <strong>Duration:</strong> {project.details.duration}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ marginBottom: "10px" }}
                        >
                          <strong>Technologies:</strong>{" "}
                          {project.details.technologies}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ marginBottom: "10px" }}
                        >
                          <strong>Description:</strong>{" "}
                          {project.details.description}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ marginBottom: "10px" }}
                        >
                          <strong>Responsibilities:</strong>
                          <ul>
                            {project.details.responsibilities.map(
                              (point, idx) => (
                                <li key={idx}>{point}</li>
                              )
                            )}
                          </ul>
                        </Typography>
                        <Button
                          onClick={handleClose}
                          variant="contained"
                          sx={{
                            backgroundColor: "#555",
                            color: "#fff",
                            marginTop: "10px",
                          }}
                        >
                          Close
                        </Button>
                      </Box>
                    </Modal>
                  </Grid>
                ))
              ) : (
                <Typography variant="body1" color="textSecondary">
                  No projects available.
                </Typography>
              )}
            </Grid>
          </Box>
        </Container>
        {/* Contact Section with Form */}
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            paddingTop: "100px",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textDecoration: "underline",
              textUnderlineOffset: "5px",
              textDecorationColor: "#444",
              fontFamily: "'Roboto Slab', serif",
              paddingBottom: "40px",
              alignSelf: "flex-start",
            }}
          >
            Contact Me
          </Typography>

          <Box
            sx={{
              width: "100%",
              maxWidth: "600px",
              padding: "10px",
              borderRadius: "8px",
            }}
            id="contact"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {/* Name Field */}
              <TextField
                name="name"
                placeholder="Name"
                fullWidth
                margin="normal"
                variant="outlined"
                sx={{
                  backgroundColor: "#333",
                  height: "56px",
                  "& .MuiOutlinedInput-root": {
                    color: "#fff",
                    height: "100%",
                  },
                }}
              />

              {/* Email Field */}
              <TextField
                name="email"
                placeholder="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                sx={{
                  backgroundColor: "#333",
                  height: "56px",
                  "& .MuiOutlinedInput-root": {
                    color: "#fff",
                    height: "100%",
                  },
                }}
              />

              {/* Message Field */}
              <TextField
                name="message"
                placeholder="Message"
                fullWidth
                margin="normal"
                variant="outlined"
                multiline
                rows={8}
                sx={{
                  backgroundColor: "#333",
                  "& .MuiOutlinedInput-root": {
                    color: "#fff",
                    minHeight: "150px",
                  },
                }}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#444",
                  color: "#fff",
                  marginTop: "16px",
                  fontSize: "18px",
                  padding: "6px 12px",
                  width: "auto",
                  alignSelf: "center",
                  "&:hover": {
                    backgroundColor: "#555",
                  },
                }}
              >
                Send Message
              </Button>
            </form>
          </Box>
        </Container>
      </Container>
    </div>
  );
};

export default App;
