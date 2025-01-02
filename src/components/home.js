import React from 'react'
import {
    Typography,
    Container,
    Box,
    Button,
  } from "@mui/material";
  import sudha from "./../assests/sudha-img.jpg";
  import resume from "./../assests/Sudha-Rani-Resume.pdf";

const Home = () => {
  return (
    <div>
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
    </div>
  )
}

export default Home
