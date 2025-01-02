import React, { useState} from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    useMediaQuery,
    useTheme,
    MenuItem,
  } from "@mui/material";
import { Link as ScrollLink, Element } from "react-scroll";

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
    
  return (
    <div>
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
    </div>
  )
}

export default MenuBar
