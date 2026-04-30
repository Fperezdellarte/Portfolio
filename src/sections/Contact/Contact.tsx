import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  
  const MotionBox = motion.create(Box);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!form.name.trim()) newErrors.name = "El nombre es requerido";

    if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Email inválido";

    if (form.message.length < 10)
      newErrors.message = "Mínimo 10 caracteres";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      await emailjs.send(
        "service_qcebotk",
        "template_cmybkqb",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "AB8nsS7qotRHwtkq2"
      );

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        px: 3,
        py: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MotionBox  
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ width: "100%", maxWidth: 500 }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}
        >
          Contacto
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            {success && (
              <Alert severity="success">
                Mensaje enviado correctamente. ¡Gracias por contactarme!
              </Alert>
            )}

            <TextField
              label="Nombre"
              name="name"
              fullWidth
              value={form.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />

            <TextField
              label="Email"
              name="email"
              fullWidth
              value={form.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />

            <TextField
              label="Mensaje"
              name="message"
              fullWidth
              multiline
              rows={4}
              value={form.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </Stack>
        </form>
      </MotionBox>
    </Box>
  );
};

export default Contact;