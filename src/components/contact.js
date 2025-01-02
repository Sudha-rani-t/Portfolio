import React, { useRef } from "react";
import { Typography, Container, Box, Button, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
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
    <div>
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
          id="contacts"
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
    </div>
  );
};

export default Contact;
