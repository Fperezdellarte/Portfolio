import { Box, Typography, Grid, Paper, Stack } from "@mui/material";
import { motion } from "framer-motion";
import profileImg from "../../assets/profile.jpg";

const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const MotionBox = motion.create(Box);

const About = () => {
  const cards = [
    {
      title: "Frontend",
      desc: "React, TypeScript, MUI, Diseño Responsive",
    },
    {
      title: "Backend",
      desc: "Node.js, Firebase, APIs REST",
    },
    {
      title: "Tools",
      desc: "Git, Cloudinary, Vite",
    },
    {
      title: "Enfoque",
      desc: "Código limpio, UX y Performance",
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        px: 3,
        py: 10,
        display: "flex",
        alignItems: "center",
        ml: { md: "200px" },
      }}
    >
      <Grid container spacing={6} alignItems="center">
        
        <Grid item xs={12} md={7} sx={{width: { xs: "80%", md: "60%" }}}>
          <Paper
              sx={{
                p: 4,
                borderRadius: 3,
                border: "1px solid rgba(148, 163, 184, 0.1)",
                backgroundColor: "background.paper",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 12px 35px rgba(0,0,0,0.35)",
                    },
              }}
          >
          <MotionBox
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Box
              component="img"
              src={profileImg}
              alt="profile"
              sx={{
                width: { xs: "60%", md: "40%" },
                borderRadius: 3,
                mb: 3,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            />

            <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
              Sobre mí
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              Soy desarrollador frontend enfocado en crear interfaces modernas,
              rápidas y escalables. Me gusta construir productos que no solo
              funcionen bien, sino que también se vean bien.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              Trabajo principalmente con React, TypeScript y Material UI, y tengo
              experiencia integrando backend con Firebase y Node.js.
            </Typography>

            <Typography variant="body1">
              Actualmente estoy desarrollando proyectos personales y buscando
              oportunidades donde pueda crecer como desarrollador y aportar valor
              real.
            </Typography>
          </MotionBox>

          {/* Stats */}
          <Stack direction="row" spacing={4} sx={{ mt: 4 }}>
            <Box>
              <Typography variant="h5" fontWeight="bold">
                +3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Proyectos
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" fontWeight="bold">
                +4
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Años aprendiendo
              </Typography>
            </Box>
          </Stack>
            </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            {cards.map((itemData, index) => (
              <MotionBox
                key={index}
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: "1px solid rgba(148, 163, 184, 0.1)",
                    backgroundColor: "background.paper",
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(10px)",
                    mt: 5,
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 12px 35px rgba(0,0,0,0.35)",
                    },
                  }}
                >
                  <Stack spacing={1}>
                    <Typography variant="h6" fontWeight="bold">
                      {itemData.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {itemData.desc}
                    </Typography>
                  </Stack>
                </Paper>
              </MotionBox>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;