import React, {useState, useEffect} from 'react'
import {
    Typography,
    Container,
    Box,
    Grid,
    Button,
    Card,
    CardContent,
    Modal,
  } from "@mui/material";
  import OUP from "./../assests/oup.png";
import ONLINE from "./../assests/online.jpg";

const Project = () => {
  const [activeProject, setActiveProject] = useState(null);
    const [projects, setProjects] = useState([]);
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
    const handleReadMore = (index) => {
      setActiveProject(index);
    };
  
    const handleClose = () => {
      setActiveProject(null);
    };
  return (
    <div>
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

    </div>
  )
}

export default Project
