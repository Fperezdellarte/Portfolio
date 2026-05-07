import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Button,
  Box,
} from "@mui/material";
import type { Project } from "../../types";

const MotionBox = motion.create(Box);

type Props = {
  project: Project;
  onClick: () => void;
};

const ProjectCard = ({ project, onClick }: Props) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ height: "100%" }}
    >
      <Card
       onClick={onClick}
        sx={{
          display: "flex",
          flexDirection: "column",
          transition: "all 0.3s ease",
          height: "100%",
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            
          },
        }}
      >
        <CardMedia
          component="img"
          height="250"
          image={project.image}
          alt={project.title}
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            {project.title}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {project.description}
          </Typography>

          <Stack direction="row" spacing={1}  sx={{ mb: 2, flexWrap: "wrap" }}>
            {project.tech.map((tech) => (
              <Chip key={tech} label={tech} size="small" />
            ))}
          </Stack>

          <Stack direction="row" spacing={2}>
            {project.demo && (
              <Button size="small" variant="contained" href={project.demo} target="_blank" >
                Demo
              </Button>
            )}

            <Button size="small" variant="outlined" href={project.github} target="_blank">
              GitHub
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </MotionBox>
  );
};

export default ProjectCard;