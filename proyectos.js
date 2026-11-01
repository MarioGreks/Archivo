// Edita esta lista para cambiar el archivo. Cada proyecto es un expediente.
// tipo: "web", "app", "trabajo" o "repo" (sirve para los filtros).
// imagen: opcional, una captura en img/ (por ejemplo "img/proyecto.jpg"). Sin ella sale un boceto de relleno.
// Pie de la foto: "Versión X" si hay version; si no, nota (opcional) o dominio.
// licencia: opcional, el nombre corto de la licencia del repositorio (MIT, GPL-3.0…); sale en la ficha.
// Fecha de la última subida (la actualiza /subir-portal); sale en el pie.
window.ACTUALIZADO = "2026-11-01";
window.PROYECTOS = [
  {
    tipo: "app", version: "0.1.0", plataformas: ["Windows 10/11"],
    titulo: "Proyecto Alejandría",
    resumen: "Crea tu segundo cerebro: un universo 3D de neuronas de conocimiento, con laboratorios de Python y una IA local que propone conexiones.",
    estado: "Primera versión", licencia: "MIT",
    imagen: "img/alejandria.svg", guia: "guias/alejandria.pdf",
    enlaces: [
      { texto: "Descargar", href: "https://github.com/MarioGreks/proyecto-alejandria/releases/latest/download/Proyecto-Alejandria-Setup.exe", principal: true, peso: "39,6 MB" },
      { texto: "Ver en GitHub", href: "https://github.com/MarioGreks/proyecto-alejandria" }
    ]
  }
];
