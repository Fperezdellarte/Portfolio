import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { useEffect, useState } from "react";

const sections = ["hero", "about", "projects", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("hero");

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        if (
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActive(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(15, 23, 42, 0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(148, 163, 184, 0.1)",
        
      }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          {sections.map((section) => (
            <Button
              key={section}
              onClick={() => scrollToSection(section)}
              sx={{
                  color: active === section ? "primary.main" : "text.secondary",
                  fontWeight: active === section ? "bold" : "normal",
                  transition: "all 0.3s",
                  position: "relative",

                  "&::after":
                    active === section
                      ? {
                          content: '""',
                          position: "absolute",
                          bottom: -2,
                          left: 0,
                          width: active === section ? "100%" : "0%",
                          height: "2px",
                          backgroundColor: "primary.main",
                          transition: "width 0.3s ease",
                        }
                      : {},
              }}
            >
              {section.toUpperCase()}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;