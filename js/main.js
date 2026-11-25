/**
 * OVG Solutions: Estrategia de Negocios Internacionales
 * JavaScript Vanilla Corporativo
 */

// 1. Base de datos de entrevistas en TV y conferencias (Hero Section)
// Video principal: Brújula Internacional (f6AchS7QvgU)
const entrevistasOVG = [
  {
    id: "f6AchS7QvgU",
    titulo: "Oportunidades de Negocio Internacional en Venezuela",
    programa: "Brújula Internacional",
    canal: "Globovisión",
    descripcion: "Perspectivas de diplomacia comercial, articulación con embajadas y cámaras binacionales, y superación de barreras para la exportación e inversión."
  },
  {
    id: "4pZmR2lirYE",
    titulo: "Estrategia de Negocios Internacionales y Competitividad",
    programa: "Entrevista Especial TV",
    canal: "Televisión Nacional",
    descripcion: "Análisis gerencial sobre apertura de mercados globales, inserción competitiva de empresas y estructuración de alianzas estratégicas internacionales."
  },
  {
    id: "dbDovZD7Jjg",
    titulo: "Cooperación Empresarial y Desarrollo Sustentable",
    programa: "Foro Gerencial",
    canal: "Economía y Negocios",
    descripcion: "Claves metodológicas para la conformación de joint ventures, transferencia tecnológica y fortalecimiento del tejido PyME frente a entornos cambiantes."
  },
  {
    id: "UHqKzPdFrHc",
    titulo: "Alianzas de Cooperación Empresarial e Impacto Organizacional",
    programa: "Aparición en Televisión",
    canal: "Especial Gerencia",
    descripcion: "El rol protagónico del capital humano, el desarrollo gerencial y la investigación-acción aplicada en la modernización de los sectores productivos."
  }
];

// 2. Desarrollo de Nuestra Organización por Periodos, Etapas y Eventos Relevantes (Línea del Tiempo)
const hitosTrayectoria = [
  {
    periodo: "1979 – 1982",
    titulo: "Investigación Aplicada en Escuelas de Gerencia del Reino Unido",
    instituciones: "Reino Unido • Investigación de Maestría",
    detalle: "Desarrollo de la idea fundacional basada en un proyecto de investigación aplicada en escuelas de gerencia y universidades del Reino Unido, orientado al fortalecimiento del empresario y de las organizaciones de pequeña y mediana escala."
  },
  {
    periodo: "1982 – 1983",
    titulo: "Catálogo de Consultoría y Creación del Sistema SICOA",
    instituciones: "Sistema Integral de Consultoría Organizacional Aplicado (SICOA)",
    detalle: "Estructuración de la propuesta en un plan de acción formal, definición del catálogo de áreas de consultoría, inicio del ejercicio profesional independiente y creación del sistema SICOA (Sistema Integral de Consultoría Organizacional Aplicado)."
  },
  {
    periodo: "1985 – 1990",
    titulo: "Registro de METODOGER en Caracas y Consolidación PyME",
    instituciones: "Caracas, Venezuela • Junio de 1985",
    detalle: "Inicio y registro formal de METODOGER en Caracas, Venezuela en junio de 1985, consolidando la práctica de consultoría gerencial, desarrollo de capital humano y asesoría estratégica enfocada en el sector PyME."
  },
  {
    periodo: "1990 – 1993",
    titulo: "Doctorado Europeo y Acreditación Multilateral",
    instituciones: "Reino Unido y España • BID • Banco Mundial • Unión Europea",
    detalle: "Estudios avanzados de Doctorado Europeo en Creación y Dirección de Empresas (Universidad Autónoma de Barcelona y Durham University Business School), desarrollo de consultoría internacional y acreditación ante organismos multilaterales (BID, Banco Mundial y Unión Europea)."
  },
  {
    periodo: "1993 – 2000",
    titulo: "Proyectos de Exportación y Entrenamientos en Japón e India",
    instituciones: "Centroamérica • Sudamérica • Unión Europea • Japón • India",
    detalle: "Ejecución de proyectos internacionales de exportación en Centroamérica y Sudamérica con fondos de la Unión Europea, complementados con entrenamientos gerenciales avanzados en desarrollo industrial sustentable y PyMEs en Japón y en gestión del talento humano y empleo en India."
  },
  {
    periodo: "2001 – 2010",
    titulo: "Cooperación Internacional, BuyUSA.com, CEDIE y Pasantía SBA",
    instituciones: "Corea del Sur • Embajadas Acreditadas • EE.UU. (SBA) • CEDIE, A.C.",
    detalle: "Entrenamiento gerencial en Corea del Sur, cooperación comercial con embajadas acreditadas, certificación en el programa BuyUSA.com, creación de CEDIE, A.C. (ONG para el desarrollo empresarial sustentable y el emprendimiento) y pasantía gerencial en EE.UU. junto a la Small Business Administration (SBA)."
  },
  {
    periodo: "2011 – Actualidad",
    titulo: "Consolidación del Grupo OVG Solutions",
    instituciones: "OVG Solutions • METODOGER Consultoría • CEDIE, A.C.",
    detalle: "Consolidación del Grupo OVG Solutions como firma de estrategia de negocios internacionales, consultoría gerencial en empresa familiar y planes de sucesión, desarrollo empresarial PyME y cooperación empresarial transfronteriza."
  }
];

// 3. Conexiones de Conocimientos y Cooperación Empresarial (Genérico y por Regiones)
const conexionesCooperacion = [
  {
    region: "europa",
    titulo: "Reino Unido y Unión Europea",
    paises: "Reino Unido • Unión Europea • España • Bélgica",
    tipo: "Universidades, Centros Especializados y Cámaras Binacionales",
    detalle: "Intercambio académico-gerencial y cooperación técnica en investigación aplicada, creación de empresas, desarrollo PyME, proyectos con fondos europeos y vínculos comerciales con cámaras binacionales y embajadas acreditadas."
  },
  {
    region: "norteamerica",
    titulo: "Estados Unidos",
    paises: "Estados Unidos",
    tipo: "Agencias de Fomento PyME, Universidades y Cámaras de Comercio",
    detalle: "Cooperación institucional derivada de pasantías en agencias de desarrollo para pequeñas empresas (SBA), certificación en programas de promoción comercial (BuyUSA.com) y acompañamiento a empresas en exploración del mercado norteamericano."
  },
  {
    region: "asia-oceania",
    titulo: "Asia y Oceanía",
    paises: "Japón • India • Corea del Sur • Australia • Nueva Zelanda",
    tipo: "Centros de Productividad, Institutos de Talento y Alianzas Comerciales",
    detalle: "Transferencia de buenas prácticas en productividad industrial sustentable, gestión estratégica del recurso humano, políticas de fomento al emprendimiento y exploración de acuerdos de cooperación comercial y tecnológica."
  },
  {
    region: "latinoamerica",
    titulo: "Venezuela, Región Andina y Centroamérica",
    paises: "Venezuela • Perú • Guatemala • Centroamérica",
    tipo: "Cámaras Empresariales, Embajadas Acreditadas y Organismos Multilaterales",
    detalle: "Articulación directa con cámaras binacionales, cámaras de exportadores, embajadas acreditadas, universidades y sectores productivos para misiones comerciales, internacionalización de PyMEs y programas de desarrollo sustentable."
  }
];

// 4. Casos de Éxito en Consultoría (Enfoque 100% Genérico y Confidencial)
const casosConsultoria = [
  {
    id: 1,
    numero: "01",
    titulo: "Estructuración de Alianzas Internacionales y Joint Ventures",
    categoria: "alianzas",
    alcance: "América Latina / Europa y Asia",
    sector: "Corporaciones Internacionales",
    resumen: "Evaluación de viabilidad y diseño de esquemas de asociación estratégica entre inversionistas extranjeros y grupos empresariales locales.",
    solucion: "Análisis financiero, compatibilidad de culturas directivas y estructuración de acuerdos de cooperación empresarial con soporte jurídico especializado.",
    resultado: "Consolidación de consorcios operativos y alianzas de coinversión con mitigación de riesgos regulatorios y comerciales."
  },
  {
    id: 2,
    numero: "02",
    titulo: "Apertura de Mercados en Centroamérica y el Caribe",
    categoria: "mercados",
    alcance: "Centroamérica y Caribe",
    sector: "Telecomunicaciones, Manufactura y Servicios",
    resumen: "Acompañamiento estratégico a empresas en expansión para el ingreso a nuevos mercados regionales y la identificación de socios locales.",
    solucion: "Estudios de oportunidades de mercado, diseño de agendas ejecutivas, tours de negocios y coordinación de ruedas de negociación bilateral.",
    resultado: "Establecimiento de representaciones comerciales, acuerdos de distribución regional y ampliación sostenida de cartera de exportación."
  },
  {
    id: 3,
    numero: "03",
    titulo: "Transacción Confidencial y Expansión en el Sector Farmacéutico",
    categoria: "alianzas",
    alcance: "Venezuela / Mercados Globales",
    sector: "Sector Farmacéutico y Salud",
    resumen: "Asesoría estratégica integral en valoración organizacional y prospección confidencial de compradores o socios estratégicos internacionales.",
    solucion: "Estructuración de información ejecutiva confidencial, evaluación de activos productivos y conducción de mesas de negociación.",
    resultado: "Cierre exitoso de operación estratégica maximizando el valor patrimonial y la continuidad operativa para los accionistas."
  },
  {
    id: 4,
    numero: "04",
    titulo: "Vinculación con Cámaras Binacionales y Embajadas Acreditadas",
    categoria: "diplomacia",
    alcance: "Caracas / Países Concurrentes",
    sector: "Diplomacia Comercial y Multisectorial",
    resumen: "Asesoría técnica y coordinación de encuentros empresariales multisectoriales en cooperación con embajadas acreditadas y cámaras binacionales.",
    solucion: "Planificación de agendas institucionales, convocatoria sectorial de empresas y estructuración de rondas de negocios B2B.",
    resultado: "Generación de decenas de acuerdos preliminares de intercambio comercial, suministro técnico y cooperación bilateral."
  },
  {
    id: 5,
    numero: "05",
    titulo: "Formación para la Exportación de PyMEs Productivas",
    categoria: "mercados",
    alcance: "Centroamérica y Sudamérica",
    sector: "Pequeña y Mediana Empresa (PyME)",
    resumen: "Programa de fortalecimiento de capacidades exportadoras para grupos de pequeñas y medianas empresas con apoyo de cooperación europea.",
    solucion: "Diagnóstico de aptitud exportadora, adecuación organizacional y capacitación gerencial en estándares internacionales.",
    resultado: "Preparación integral de unidades productivas para competir en mercados regionales mediante consorcios y alianzas de exportación."
  },
  {
    id: 6,
    numero: "06",
    titulo: "Gobierno Corporativo y Plan de Sucesión en Empresa Familiar",
    categoria: "familia",
    alcance: "Nacional e Internacional",
    sector: "Empresas Familiares Multisectoriales",
    resumen: "Intervención gerencial en grupos empresariales familiares para ordenar roles directivos y asegurar el relevo generacional sin conflictos.",
    solucion: "Elaboración del esquema familygrama (pasado, presente y futuro), redacción del Protocolo Familiar y diseño del plan de sucesión con SOP.",
    resultado: "Transición directiva ordenada, profesionalización de la junta directiva y estrategia de perennidad patrimonial a largo plazo."
  }
];

// Estado global de la aplicación
let videoActual = 0;

// Inicialización del DOM
document.addEventListener("DOMContentLoaded", () => {
  iniciarMenuMovil();
  iniciarCarruselVideos();
  iniciarContadores();
  renderizarTimeline();
  iniciarFiltrosAlianzas();
  iniciarFiltrosCasos();
  iniciarFormularioPresupuesto();
  iniciarBoletin();
});

// Menú Móvil con accesibilidad y cierre al click exterior
function iniciarMenuMovil() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isHidden = menu.classList.contains("hidden");
    menu.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", isHidden ? "true" : "false");
  });

  document.addEventListener("click", (e) => {
    if (!menu.classList.contains("hidden") && !menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
    }
  });
}

// Carrusel interactivo de Entrevistas TV en YouTube
function iniciarCarruselVideos() {
  const iframe = document.getElementById("hero-video-frame");
  if (!iframe) return;

  const tituloEl = document.getElementById("video-titulo");
  const programaEl = document.getElementById("video-programa");
  const descEl = document.getElementById("video-desc");
  const indicadoresEl = document.getElementById("video-indicadores");
  const contadorEl = document.getElementById("video-contador");
  const linkYoutube = document.getElementById("video-link-youtube");

  function actualizarSlide(index) {
    videoActual = (index + entrevistasOVG.length) % entrevistasOVG.length;
    const item = entrevistasOVG[videoActual];

    iframe.classList.remove("carousel-fade");
    void iframe.offsetWidth; // Trigger reflow para reiniciar animación
    iframe.classList.add("carousel-fade");

    iframe.src = `https://www.youtube.com/embed/${item.id}?rel=0&enablejsapi=1`;
    if (tituloEl) tituloEl.textContent = item.titulo;
    if (programaEl) programaEl.textContent = `${item.programa} • ${item.canal}`;
    if (descEl) descEl.textContent = item.descripcion;
    if (contadorEl) contadorEl.textContent = `${videoActual + 1} / ${entrevistasOVG.length}`;
    if (linkYoutube) linkYoutube.href = `https://www.youtube.com/watch?v=${item.id}`;

    if (indicadoresEl) {
      indicadoresEl.innerHTML = entrevistasOVG
        .map((_, idx) => `
          <button onclick="cambiarVideo(${idx})" aria-label="Ver video ${idx + 1}"
            class="h-2 rounded-full transition-all duration-300 ${
              idx === videoActual
                ? 'w-7 bg-red-600 shadow-sm'
                : 'w-2 bg-gray-600 hover:bg-gray-400'
            }">
          </button>
        `).join("");
    }
  }

  window.cambiarVideo = (idx) => actualizarSlide(idx);
  window.siguienteVideo = () => actualizarSlide(videoActual + 1);
  window.anteriorVideo = () => actualizarSlide(videoActual - 1);

  actualizarSlide(0);
}

// Animación de estadísticas (Contador incremental en viewport)
function iniciarContadores() {
  const contadores = document.querySelectorAll("[data-target]");
  if (!contadores.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"), 10);
        const suffix = el.getAttribute("data-suffix") || "";
        let current = 0;
        const duration = 1600;
        const stepTime = 30;
        const totalSteps = duration / stepTime;
        const increment = Math.max(1, Math.ceil(target / totalSteps));

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            el.textContent = `${target}${suffix}`;
            clearInterval(timer);
          } else {
            el.textContent = `${current}${suffix}`;
          }
        }, stepTime);

        observer.unobserve(el);
      }
    });
  }, { threshold: 0.25 });

  contadores.forEach((c) => observer.observe(c));
}

// Renderizado de Línea de Tiempo en organizacion.html
function renderizarTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  container.innerHTML = hitosTrayectoria.map((hito, index) => {
    const esPar = index % 2 === 0;
    return `
      <div class="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-10 group">
        <!-- Contenido Izquierdo (Desktop) -->
        <div class="hidden md:block md:w-5/12 ${esPar ? 'text-right pr-8' : 'order-3 text-left pl-8'}">
          <span class="inline-flex items-center px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full ${
            esPar ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-800 border border-green-200'
          } mb-2">
            ${hito.periodo}
          </span>
          <h3 class="text-base font-bold text-gray-900 group-hover:text-red-700 transition">${hito.titulo}</h3>
          <p class="text-xs font-semibold text-gray-500 mt-1">${hito.instituciones}</p>
          <p class="text-xs text-gray-600 mt-2 leading-relaxed">${hito.detalle}</p>
        </div>

        <!-- Nodo Central Conector -->
        <div class="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 ${
          esPar ? 'border-red-700' : 'border-green-700'
        } shadow-md md:order-2 ml-0 md:mx-auto shrink-0 group-hover:scale-110 transition duration-300">
          <span class="w-2.5 h-2.5 rounded-full ${esPar ? 'bg-red-700' : 'bg-green-700'}"></span>
        </div>

        <!-- Contenido Derecho / Mobile -->
        <div class="w-full md:w-5/12 pl-12 md:pl-0 -mt-8 md:mt-0 ${esPar ? 'md:order-3 md:pl-8' : 'md:order-1 md:pr-8 md:text-right'}">
          <!-- Vista Móvil -->
          <div class="md:hidden bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <span class="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full bg-red-50 text-red-700 border border-red-200 mb-2">
              ${hito.periodo}
            </span>
            <h3 class="text-base font-bold text-gray-900">${hito.titulo}</h3>
            <p class="text-xs font-semibold text-gray-500 mt-1">${hito.instituciones}</p>
            <p class="text-xs text-gray-600 mt-2 leading-relaxed">${hito.detalle}</p>
          </div>

          <!-- Tarjeta de Respaldo Desktop -->
          <div class="hidden md:block p-4 rounded-xl bg-white border border-gray-100 shadow-sm group-hover:border-gray-200 transition">
            <div class="flex items-center ${esPar ? 'justify-start' : 'justify-end'} gap-2">
              <span class="w-2 h-2 rounded-full ${esPar ? 'bg-green-600' : 'bg-red-600'}"></span>
              <p class="text-xs font-bold text-gray-700 uppercase tracking-wide">Etapa Institucional</p>
            </div>
            <p class="text-xs text-gray-500 mt-1">Evolución documentada de nuestra metodología gerencial y proyección internacional.</p>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Filtros y Renderizado de Conexiones de Conocimientos y Cooperación (organizacion.html)
function iniciarFiltrosAlianzas() {
  const container = document.getElementById("alianzas-container");
  const tabs = document.querySelectorAll(".alianza-tab");
  if (!container) return;

  function renderAlianzas(regionSeleccionada) {
    const filtradas = regionSeleccionada === "todas"
      ? conexionesCooperacion
      : conexionesCooperacion.filter(a => a.region === regionSeleccionada);

    container.innerHTML = filtradas.map(a => `
      <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm card-hover card-hover-green flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase ${
              a.region === 'europa' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
              a.region === 'norteamerica' ? 'bg-red-50 text-red-700 border border-red-200' :
              a.region === 'asia-oceania' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
              'bg-green-50 text-green-800 border border-green-200'
            }">
              ${a.paises}
            </span>
          </div>
          <h4 class="text-base font-bold text-gray-900 leading-snug">${a.titulo}</h4>
          <p class="text-xs font-semibold text-green-700 mt-1">${a.tipo}</p>
          <p class="text-xs text-gray-600 mt-2.5 leading-relaxed">${a.detalle}</p>
        </div>
        <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-medium">
          <span>Grupo OVG Solutions</span>
          <span class="text-green-700 font-semibold">Intercambio Activo</span>
        </div>
      </div>
    `).join("");
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("bg-red-700", "text-white", "shadow-sm");
        t.classList.add("bg-white", "text-gray-700", "hover:bg-gray-100");
      });
      tab.classList.remove("bg-white", "text-gray-700", "hover:bg-gray-100");
      tab.classList.add("bg-red-700", "text-white", "shadow-sm");

      const region = tab.getAttribute("data-region") || "todas";
      renderAlianzas(region);
    });
  });

  renderAlianzas("todas");
}

// Filtros y Renderizado de Casos de Éxito Genéricos y Confidenciales (servicios-contacto.html)
function iniciarFiltrosCasos() {
  const container = document.getElementById("casos-container");
  const tabs = document.querySelectorAll(".caso-tab");
  if (!container) return;

  function renderCasos(categoriaSeleccionada) {
    const filtrados = categoriaSeleccionada === "todos"
      ? casosConsultoria
      : casosConsultoria.filter(c => c.categoria === categoriaSeleccionada);

    container.innerHTML = filtrados.map(c => `
      <div class="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm card-hover card-hover-red flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="w-8 h-8 rounded-lg bg-red-50 text-red-700 font-extrabold text-xs flex items-center justify-center border border-red-100">
              #${c.numero}
            </span>
            <div class="flex flex-wrap items-center justify-end gap-1.5">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-700">
                ${c.alcance}
              </span>
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-green-50 text-green-800 border border-green-200">
                ${c.sector}
              </span>
            </div>
          </div>

          <h3 class="text-base sm:text-lg font-bold text-gray-900 mt-2 leading-snug">${c.titulo}</h3>

          <div class="mt-4 space-y-2.5 text-xs text-gray-600">
            <p><strong class="text-gray-900">Situación / Desafío:</strong> ${c.resumen}</p>
            <p><strong class="text-red-700">Intervención OVG:</strong> ${c.solucion}</p>
          </div>
        </div>

        <div class="mt-5 pt-4 border-t border-gray-100 bg-gray-50/70 -mx-7 -mb-7 p-4 sm:px-7 rounded-b-2xl">
          <p class="text-xs text-gray-800">
            <strong class="text-green-800">Impacto / Resultado:</strong> ${c.resultado}
          </p>
        </div>
      </div>
    `).join("");
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("bg-red-700", "text-white", "shadow-sm");
        t.classList.add("bg-white", "text-gray-700", "hover:bg-gray-100");
      });
      tab.classList.remove("bg-white", "text-gray-700", "hover:bg-gray-100");
      tab.classList.add("bg-red-700", "text-white", "shadow-sm");

      const cat = tab.getAttribute("data-categoria") || "todos";
      renderCasos(cat);
    });
  });

  renderCasos("todos");
}

// Envío estructurado de solicitud de presupuesto a WhatsApp oficial (+58 412 280 06 50)
function iniciarFormularioPresupuesto() {
  const form = document.getElementById("presupuesto-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre")?.value.trim() || "";
    const empresa = document.getElementById("empresa")?.value.trim() || "Particular / No especificada";
    const telefono = document.getElementById("telefono")?.value.trim() || "No especificado";
    const email = document.getElementById("email")?.value.trim() || "";
    const pais = document.getElementById("pais")?.value.trim() || "Caracas, Venezuela";
    const area = document.getElementById("area-servicio")?.value || "Consultoría General";
    const mensaje = document.getElementById("mensaje")?.value.trim() || "";

    if (!nombre || !email || !mensaje) {
      mostrarToast("Por favor complete los campos requeridos (*).", "error");
      return;
    }

    const textoWhatsApp = encodeURIComponent(
      `💼 *SOLICITUD DE PRESUPUESTO — OVG SOLUTIONS*\n` +
      `-------------------------------------------\n` +
      `👤 *Solicitante:* ${nombre}\n` +
      `🏢 *Empresa:* ${empresa}\n` +
      `📞 *Teléfono:* ${telefono}\n` +
      `✉️ *Correo:* ${email}\n` +
      `📍 *Ubicación:* ${pais}\n` +
      `🎯 *Área de Servicio:* ${area}\n\n` +
      `📝 *Requerimiento:* \n${mensaje}\n` +
      `-------------------------------------------\n` +
      `_Enviado desde OVG Solutions: Estrategia de Negocios Internacionales_`
    );

    mostrarToast("¡Solicitud preparada! Redirigiendo a WhatsApp corporativo...", "exito");

    setTimeout(() => {
      window.open(`https://wa.me/584122800650?text=${textoWhatsApp}`, "_blank");
    }, 600);
  });
}

// Formulario de suscripción a boletín ejecutivo
function iniciarBoletin() {
  const forms = document.querySelectorAll(".boletin-form");
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input[type='email']");
      if (input && input.value) {
        mostrarToast("¡Suscripción exitosa! Recibirá nuestros boletines ejecutivos.", "exito");
        input.value = "";
      }
    });
  });
}

// Notificación Flotante (Toast)
function mostrarToast(mensaje, tipo = "exito") {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "fixed bottom-5 right-5 z-50 max-w-sm px-5 py-3.5 rounded-xl text-white text-sm font-semibold shadow-2xl flex items-center gap-3 transform translate-y-20 opacity-0 pointer-events-none";
    document.body.appendChild(toast);
  }

  toast.className = `fixed bottom-5 right-5 z-50 max-w-sm px-5 py-3.5 rounded-xl text-white text-sm font-semibold shadow-2xl flex items-center gap-3 transform translate-y-0 opacity-100 pointer-events-auto transition-all duration-300 ${
    tipo === "exito" ? "bg-green-700 border border-green-600" : "bg-red-700 border border-red-600"
  }`;

  toast.innerHTML = `
    <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      ${tipo === 'exito'
        ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>'
        : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>'
      }
    </svg>
    <span>${mensaje}</span>
  `;

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-20", "opacity-0");
  }, 4000);
}
