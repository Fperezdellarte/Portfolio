import { Box, Typography, IconButton, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        py: 4,
        px: 2,
        mt: 10,
        borderTop: "1px solid rgba(148, 163, 184, 0.1)",
        textAlign: "center",
        
      }}
    >
      {/* Nombre */}
      <Typography variant="h6" sx={{ mb: 1 }}>
        Francisco Javier Pérez Dell´Arte
      </Typography>

      {/* Subtexto */}
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        Frontend Developer — React & TypeScript
      </Typography>

      <Typography variant="body2"  sx={{ color: "grey", opacity: 0.5 }}>
        fperezdellarte@gmail.com
      </Typography>
      {/* Redes */}
      <Stack 
            direction="row" 
            spacing={2}   
            sx={{  display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>

         <Box sx={{  display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}> 
            <IconButton
            href="https://github.com/fperezdellarte"
            target="_blank"
            sx={{
                color: "text.secondary",
                "&:hover": {
                color: "primary.main",
                transform: "translateY(-2px)",
                },
            }}
            >
            <GitHubIcon />
            </IconButton>

            <IconButton
            href="https://linkedin.com/in/francisco-javier-perez-dell-arte-1a3062238/"
            target="_blank"
            sx={{
                color: "text.secondary",
                "&:hover": {
                color: "primary.main",
                transform: "translateY(-2px)",
                },
            }}
            >
            <LinkedInIcon />
            </IconButton>
        </Box>
      </Stack>

      {/* Copyright */}
      <Typography variant="caption" color="text.secondary">
        © {new Date().getFullYear()} Francisco Javier Pérez Dell´Arte. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;