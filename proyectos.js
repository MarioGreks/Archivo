// Edita esta lista para cambiar el archivo. Cada proyecto es un expediente.
// tipo: "web", "app", "trabajo" o "repo" (sirve para los filtros).
// imagen: opcional, una captura en img/ (por ejemplo "img/proyecto.jpg"). Sin ella sale un boceto de relleno.
// Pie de la foto: "Versión X" si hay version; si no, nota (opcional) o dominio.
window.PROYECTOS = [
  {
    tipo: "app", version: "0.1.0",
    titulo: "Proyecto Alejandría",
    resumen: "Crea tu segundo cerebro: un universo 3D de neuronas de conocimiento, con laboratorios de Python y una IA local que propone conexiones.",
    estado: "Primera versión", nota: "Windows 10/11",
    imagen: "img/alejandria.svg", guia: "guias/alejandria.pdf",
    enlaces: [
      { texto: "Descargar", href: "https://github.com/MarioGreks/proyecto-alejandria/releases/latest/download/Proyecto-Alejandria-Setup.exe", principal: true, peso: "39,6 MB" },
      { texto: "Ver en GitHub", href: "https://github.com/MarioGreks/proyecto-alejandria" }
    ]
  },
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
