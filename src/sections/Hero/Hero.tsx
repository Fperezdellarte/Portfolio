import { Box, Typography, Button, Stack } from "@mui/material";
import { motion, type Variants } from "framer-motion";

const MotionBox = motion.create(Box);
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
 <Box id="hero"
  sx={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    px: 2,
    position: "relative", 
    overflow: "hidden",
  }}
>
      <Box
  sx={{
    position: "absolute",
    width: 400,
    height: 400,
    background: "#6366f1",
    filter: "blur(120px)",
    opacity: 0.2,
    top: -100,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 0,
  }}
/>
      <MotionBox
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Nombre */}
        <MotionBox variants={item}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              letterSpacing: "-1px",
            }}
          >
            Francisco Javier Pérez Dell´Arte
          </Typography>
        </MotionBox>

        {/* Rol */}
        <MotionBox variants={item}>
          <Typography
            variant="h5"
            sx={{
              color: "text.secondary",
              mb: 3,
            }}
          >
            Frontend Developer — React & TypeScript
          </Typography>
        </MotionBox>

        {/* Descripción */}
        <MotionBox variants={item}>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "600px",
              mx: "auto",
              mb: 5,
              color: "text.secondary",
              fontSize: "1.1rem",
            }}
          >
            Desarrollo interfaces modernas, rápidas y escalables con foco en
            experiencia de usuario y código limpio.
          </Typography>
        </MotionBox>

        {/* Botones */}
        <MotionBox variants={item}>
          <Stack
            direction="row"
            spacing={2}
            sx={{justifyContent: "center", flexWrap: "wrap"}}
                      >
            <Button
              variant="contained"
              size="large"
              onClick={() => scrollToSection("projects")}
              sx={{
                px: 3,
                py: 1.2,
              }}
            >
              Ver proyectos
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={() => scrollToSection("contact")}
              sx={{
                px: 3,
                py: 1.2,
              }}
            >
              Contacto
            </Button>
          </Stack>
        </MotionBox>
      </MotionBox>
    </Box>
  );
};

export default Hero;