(function () {
  var $ = function (s) { return document.querySelector(s); };
  var lista = window.PROYECTOS || [];
  var etiquetas = { web: "Web", app: "App", trabajo: "Trabajo", repo: "Repo" };
  var filtro = "todo", texto = "";

  function esc(s) { var d = document.createElement("div"); d.textContent = s == null ? "" : s; return d.innerHTML; }
  function norm(s) { return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }

  function ficha(p, i) {
    var id = "e" + i, n = String(i + 1).padStart(2, "0");
    var img = p.imagen
      ? '<img class="captura" src="' + esc(p.imagen) + '" alt="Boceto de ' + esc(p.titulo) + '" loading="lazy">'
      : '<span class="letra" aria-hidden="true">' + esc(p.titulo.charAt(0)) + "</span>";
    var botones = (p.enlaces || []).map(function (e) {
      return '<a class="boton' + (e.principal ? " prin" : "") + '" href="' + esc(e.href) + '" target="_blank" rel="noopener">' + esc(e.texto) + "</a>" +
        (e.peso ? '<span class="peso">' + esc(e.peso) + "</span>" : "");
    }).join("") + (p.guia ? '<a class="boton" href="' + esc(p.guia) + '" target="_blank" rel="noopener" aria-label="Guía en PDF de ' + esc(p.titulo) + '">Guía</a>' : "");
    var meta = [p.estado && "Estado: " + p.estado, p.licencia && "Licencia " + p.licencia].filter(Boolean).join(" · ");
    var pie = p.version ? "Versión " + p.version : p.nota || p.dominio || "sin título";
    return '<li data-t="' + esc(p.tipo) + '" data-b="' + esc(norm(p.titulo + " " + p.resumen + " " + (etiquetas[p.tipo] || ""))) + '" ' +
      'style="--giro:' + (((i * 37) % 9) - 4) / 10 + 'deg;animation-delay:' + i * 70 + 'ms;' +
      '--cx:' + (52 + (i * 29) % 40) + '%;--cy:' + (-50 + (i * 17) % 40) + 'px;--taza:' + (72 + (i * 13) % 44) + 'px;' +
      '--cinta:' + (4 + (i * 41) % 60) + '%;--cr:' + (i % 2 ? 3 : -4) + 'deg">' +
      '<details class="ficha" id="' + id + '"><summary>' +
      '<span class="num">Nº ' + n + '</span><span class="tit">' + esc(p.titulo) + (p.version ? ' <small class="ver">v' + esc(p.version) + "</small>" : "") + "</span>" +
      '<span class="sello">' + esc(etiquetas[p.tipo] || p.tipo) + '</span><span class="mas" aria-hidden="true">+</span></summary>' +
      '<div class="cuerpo"><figure class="foto"><div class="img">' + img + "</div>" +
      "<figcaption>" + esc(pie) + "</figcaption></figure>" +
      '<div class="datos"><p class="resumen">' + esc(p.resumen) + "</p>" +
      (meta ? '<p class="meta">' + esc(meta) + "</p>" : "") +
      '<div class="acciones">' + botones + "</div></div>" +
      '<img class="marca" src="icon.png" alt="" width="58" height="58"></div></details></li>';
  }

  var raiz = $("#archivo");
  raiz.innerHTML = lista.map(ficha).join("");
  var filas = Array.prototype.slice.call(raiz.children);

  function pintar() {
    var q = norm(texto), total = 0;
    filas.forEach(function (li) {
      var ok = (filtro === "todo" || li.dataset.t === filtro) && (!q || li.dataset.b.indexOf(q) >= 0);
      li.hidden = !ok;
      if (ok) total++;
    });
    $("#contador").textContent = total + (total === 1 ? " expediente" : " expedientes");
    $("#vacio").hidden = total !== 0;
  }

  document.querySelectorAll(".filtros button").forEach(function (b) {
    b.addEventListener("click", function () {
      filtro = b.dataset.f;
      document.querySelectorAll(".filtros button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
      pintar();
    });
  });
  $("#q").addEventListener("input", function (e) { texto = e.target.value; pintar(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement.tagName !== "INPUT") { e.preventDefault(); $("#q").focus(); }
  });

  $("#anio").textContent = new Date().getFullYear();
  if (window.ACTUALIZADO) {
    $("#actualizado").textContent = new Date(window.ACTUALIZADO + "T12:00:00").toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
    $("#act-sep").hidden = false;
  }
  pintar();

  // Fondo de esporas: motas sueltas que flotan despacio hacia arriba
  var c = $("#fondo"), g = c.getContext("2d"), pts = [];
  function medir() {
    c.width = innerWidth; c.height = innerHeight;
    pts = Array.from({ length: Math.round(innerWidth * innerHeight / 9000) }, function () {
      return { x: Math.random() * c.width, y: Math.random() * c.height, v: .03 + Math.random() * .09,
               r: .6 + Math.random() * 1.8, f: Math.random() * 6.3, s: Math.random() * 6.3 };
    });
  }
  function dibujar(t) {
    g.clearRect(0, 0, c.width, c.height);
    g.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--espora").trim();
    pts.forEach(function (p) {
      p.y -= p.v; p.x += Math.sin(t / 4000 + p.s) * .08;
      if (p.y < -5) { p.y = c.height + 5; p.x = Math.random() * c.width; }
      var tw = .5 + .5 * Math.sin(t / 2000 + p.f);
      g.globalAlpha = .08 + tw * .1; g.beginPath(); g.arc(p.x, p.y, p.r * 4, 0, 7); g.fill();
      g.globalAlpha = .35 + tw * .4; g.beginPath(); g.arc(p.x, p.y, p.r, 0, 7); g.fill();
    });
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) requestAnimationFrame(dibujar);
  }
  medir(); dibujar(0); addEventListener("resize", medir);
})();
