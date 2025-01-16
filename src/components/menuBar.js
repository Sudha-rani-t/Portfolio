import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  MenuItem,
} from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const MenuBar = () => {
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

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#111", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontSize: "30px" }}>
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
                          color: "#f0c040", // Change text color on hover
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
            <motion.div
              initial="hidden"
              animate="visible"
              style={{ display: "flex", gap: "15px" }}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  custom={index}
                  variants={menuVariants}
                >
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      color="inherit"
                      sx={{
                        "&:hover": {
                          color: "#f0c040", // Change text color on hover
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </ScrollLink>
                </motion.div>
              ))}
            </motion.div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuBar;
