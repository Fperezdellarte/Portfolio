import type { Project } from "../types";


export const projects: Project[] = [
  {
    id: "1",
    title: "Sabelo Deportivamente",
    description: "Portal de noticias deportivas con roles, comentarios y panel admin.",
    allDescription: "Este Proyecto fue solcitado por una radio local, la cual solicito un portal de noticias deportivas. El proyecto se desarrollo con React y Firebase, utilizando Firestore para la base de datos y cloudinary para el almacenamiento de imágenes. Se implementaron roles de usuario para controlar el acceso a ciertas funciones, como la creación y edición de noticias. Además, se integró un sistema de comentarios para fomentar la interacción entre los usuarios. El proyecto se quedo en su primer MVP ya que el solicitante decidio pausar el desarrollo.",
    image: "/projects/sabelo.png",
    tech: ["React", "TypeScript", "Firebase", "MUI"],
    github: "https://github.com/Fperezdellarte/Sabelo-FE",
    demo: "https://sabelo-fe.onrender.com",
  },
  {
    id: "2",
    title: "Uniteach",
    description: "Proyecto Final de Carrera de Tecnico en desarrollo y calidad de software.",
    allDescription: "Este fue el Proyecto Final desarrollado para la Carrera de Tecnico en desarrollo y calidad de software en la Universidad Nacional Santo Tomas de Aquino. En este Proyecto se desarrollo una plataforma de cursos online, con funcionalidades para que los usuarios puedan registrarse, iniciar sesión, ver los cursos disponibles, inscribirse en ellos y acceder al contenido. El proyecto se desarrollo con React y Node.js, utilizando MySQL como base de datos. Se implemento un sistema de autenticación y autorización para proteger las rutas y controlar el acceso a ciertas funciones. Además, se integro un panel de administración para gestionar los cursos y los usuarios.",
    image: "/projects/uniteach.png",
    tech: ["React", "TypeScript", "Bootstrap", "Node.js", "MySQL"],
    github: "https://github.com/Fperezdellarte/UniTeach",
    demo: "https://uniteach.netlify.app",
  },
    {
    id: "3",
    title: "Portfolio",
    description: "Portfolio moderno con animaciones y diseño tipo SaaS.",
    allDescription: "Este es mi portfolio personal, donde muestro mis proyectos y habilidades. Está desarrollado con React y TypeScript, utilizando MUI para el diseño.",
    image: "/projects/portfolio.png",
    tech: ["React", "TypeScript", "MUI"],
    github: "https://github.com/Fperezdellarte/Portfolio",
    demo: "https://portfolio-zd91.onrender.com",
  },
];