// Edita esta lista para cambiar el archivo. Cada proyecto es un expediente.
// tipo: "web", "app", "trabajo" o "repo" (sirve para los filtros).
// imagen: opcional, una captura en img/ (por ejemplo "img/proyecto.jpg"). Sin ella sale un boceto de relleno.
// nota: opcional, el pie manuscrito de la foto (si no, usa dominio).
window.PROYECTOS = [
  {
    tipo: "web",
    titulo: "Mi primera web",
    resumen: "Descripción corta de lo que hace este proyecto.",
    estado: "Operativo", dominio: "mariogreks.github.io/mi-web",
    enlaces: [{ texto: "Abrir la web", href: "https://mariogreks.github.io/", principal: true }]
  },
  {
    tipo: "app", version: "1.0.0",
    titulo: "Mi primera app",
    resumen: "Descripción corta de lo que hace esta app.",
    estado: "Operativo", nota: "Windows",
    enlaces: [{ texto: "Descargar", href: "#", principal: true, peso: "10 MB" }]
  },
  {
    tipo: "trabajo",
    titulo: "Un trabajo de clase",
    resumen: "Descripción corta del trabajo, la asignatura y qué se aprendió.",
    estado: "Entregado", nota: "Curso 2026",
    enlaces: [{ texto: "Ver el trabajo", href: "#", principal: true }]
  },
  {
    tipo: "repo",
    titulo: "Mi primer repositorio",
    resumen: "Descripción corta del repositorio.",
    estado: "En marcha", dominio: "github.com/MarioGreks",
    enlaces: [{ texto: "Ver en GitHub", href: "https://github.com/MarioGreks", principal: true }]
  }
];
