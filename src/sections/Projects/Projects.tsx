import { Box, Typography, Grid } from "@mui/material";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import { projects } from "../../data/projects";
import type { Project } from "../../types";

const MotionBox = motion.create(Box);

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);
  
  const handleOpen = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };
  return (
    <Box
      id="projects"
      sx={{
        px: 3,
        py: 10
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 6, fontWeight: "bold", textAlign: "center", }}
      >
        Mis Proyectos
      </Typography>

      <MotionBox
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
              sx={{justifyContent: "center", display: "flex" }}
      >
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
              <ProjectCard project={project} onClick={() => handleOpen(project)} />
            </Grid>
          ))}
        </Grid>
      </MotionBox>
      <ProjectModal
  project={selectedProject}
  open={open}
  onClose={handleClose}
/>
    </Box>
    
  );
};

export default Projects;