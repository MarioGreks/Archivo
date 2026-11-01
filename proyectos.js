// Edita esta lista para cambiar el archivo. Cada proyecto es un expediente.
// tipo: "web", "app", "trabajo" o "repo" (sirve para los filtros).
// imagen: opcional, una captura en img/ (por ejemplo "img/proyecto.jpg"). Sin ella sale un boceto de relleno.
// Pie de la foto: "Versión X" si hay version; si no, nota (opcional) o dominio.
window.PROYECTOS = [
  {
    tipo: "app", version: "0.1.0",
    titulo: "Proyecto Alejandría",
    resumen: "Crea tu segundo cerebro: un universo 3D de neuronas de conocimiento, con laboratorios de Python y una IA local que propone conexiones.",
    estado: "Primera versión",
    imagen: "img/alejandria.svg", guia: "guias/alejandria.pdf",
    enlaces: [
      { texto: "Descargar", href: "https://github.com/MarioGreks/proyecto-alejandria/releases/latest/download/Proyecto-Alejandria-Setup.exe", principal: true, peso: "39,6 MB" },
      { texto: "Ver en GitHub", href: "https://github.com/MarioGreks/proyecto-alejandria" }
    ]
  }
];
