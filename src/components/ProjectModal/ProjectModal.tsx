import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { Project } from "../../types";

type Props = {
  open: boolean;
  onClose: () => void;
  project: Project | null;
};

const ProjectModal = ({ open, onClose, project }: Props) =>  {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      sx={{
        "& .MuiPaper-root": {
          borderRadius: 1,
          position: "relative",
          overflow: "visible",
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: -35,
          right: -35,
          zIndex: 10,
          boxShadow: "0 8px 25px rgba(0,0,0,0.35)",
          "&:hover": {
            backgroundColor: "primary.main",
            color: "#fff",
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent sx={{ p: 4, backgroundColor: "background.paper", borderRadius: 1 }}>
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{ width: "100%", mb: 3 }}
        />

        <Typography variant="h5" sx={{ mb: 2 }}>
          {project.title}
        </Typography>

        <Typography sx={{ mt: 2}}>{project.allDescription}</Typography>
        
          <Stack direction="row" spacing={2} sx={{mt: 2}}>
            {project.demo && (
              <Button size="small" variant="contained" href={project.demo} target="_blank" >
                Demo
              </Button>
            )}

            <Button size="small" variant="outlined" href={project.github} target="_blank">
              GitHub
            </Button>
          </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;