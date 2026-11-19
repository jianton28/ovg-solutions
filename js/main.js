/**
 * METODOGER — Solutions OVG
 * JavaScript Vanilla Corporativo
 */

// 1. Base de datos de entrevistas en TV y conferencias (Hero Section)
const entrevistasOVG = [
  {
    id: "4pZmR2lirYE",
    titulo: "Estrategia de Negocios Internacionales y Competitividad",
    programa: "Entrevista Especial TV",
    canal: "Televisión Nacional",
    descripcion: "Análisis gerencial sobre apertura de mercados globales, inserción competitiva de empresas venezolanas y estructuración de alianzas estratégicas internacionales."
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
  },
  {
    id: "f6AchS7QvgU",
    titulo: "Oportunidades de Negocio Internacional en Venezuela",
    programa: "Brújula Internacional",
    canal: "Globovisión",
    descripcion: "Perspectivas de diplomacia comercial, articulación con embajadas y cámaras binacionales, y superación de barreras para la exportación e inversión extranjera."
  }
];

// 2. Hitos de Trayectoria Histórica (1978 – Actualidad)
const hitosTrayectoria = [
  {
    periodo: "1978 – 1982",
    titulo: "Génesis Académica en Reino Unido e Investigación Aplicada",
    instituciones: "Univ. de Carabobo • Sheffield Hallam University • Schiller International Univ. (Londres/París)",
    detalle: "Tras licenciarse en Relaciones Industriales (Univ. de Carabobo, 1978), el Dr. Omar Valenti realiza postgrados en Gerencia de Recursos Humanos (DHRM) en Sheffield Hallam University (1980), Gerencia de Personal en Londres (1981) y su MBA en Schiller International University en Londres y París (1982). Nace la investigación fundacional que da origen a la metodología METODOGER y al Sistema SICOA."
  },
  {
    periodo: "18 de Junio de 1985",
    titulo: "Fundación y Registro Oficial de METODOGER S.R.L.",
    instituciones: "Registro Mercantil de Caracas • Nº 13, Tomo 61A",
    detalle: "Constitución formal en Caracas de METODOGER S.R.L. por el Dr. Omar Valenti González y Vidalina Velásquez Capote. Se consolida como firma pionera en consultoría gerencial, reingeniería organizativa y desarrollo de recursos humanos para empresas medianas y en expansión."
  },
  {
    periodo: "1990 – 1993",
    titulo: "Doctorado Europeo y Registro en Organismos Multilaterales",
    instituciones: "Univ. Autónoma de Barcelona • Durham University Business School • Banco Mundial • BID • UE",
    detalle: "Realización de estudios doctorales europeos en Creación y Dirección de Empresas (UAB en coordinación con Durham University Business School, Inglaterra). Acreditación e ingreso formal en el Registro de Consultores de Banco Mundial (WB), Banco Interamericano de Desarrollo (BID), Unión Europea (UE), ALIDE y CAN."
  },
  {
    periodo: "09 de Diciembre de 1996",
    titulo: "Actualización Mercantil y Expansión de Objeto Social",
    instituciones: "Registro Mercantil Distrito Capital • Nº 11, Tomo 77-A Qto (Exp. Nº 187590)",
    detalle: "Ampliación de estatutos y certificación oficial de METODOGER S.R.L. (RIF: J-00225515-3 / NIT: 0082497250) incorporando formalmente áreas de Comercio Electrónico, Negocios Internacionales y Representación de Firmas Extranjeras."
  },
  {
    periodo: "1997",
    titulo: "Entrenamiento Avanzado en Gerencia y PyMEs en Japón",
    instituciones: "Kitakyushu International Techno-cooperative Association • Japan Institute of Labor (JIL)",
    detalle: "Participación en Kitakyushu en el Programa Avanzado de Gerencia del Desarrollo Industrial y la Pequeña y Mediana Empresa, integrando a los marcos de trabajo la metodología japonesa de productividad sustentable y calidad continua."
  },
  {
    periodo: "2000",
    titulo: "Especialización en Capital Humano en India",
    instituciones: "Institute of Applied Manpower Research (IAMAR) • Nueva Delhi, India",
    detalle: "Entrenamiento de alto nivel en Desarrollo del Recurso Humano para la Economía y el Empleo. Articulación de relaciones estratégicas de negocios y franquicias tecnológicas con corporaciones del polo informático de Bangalore."
  },
  {
    periodo: "2001 – 2010",
    titulo: "Alianzas en Asia, Pasantía SBA en EE.UU. y Creación del CEDIE",
    instituciones: "Mimansa Inc (Corea del Sur) • US Small Business Administration (SBA) • CEDIE",
    detalle: "Afiliación con Mimansa Inc para import/export y joint ventures con Corea y China. Pasantía gerencial en la SBA (Carolina del Sur, EE.UU.) y certificación BuyUSA.com. Creación del Centro de Creación, Investigación y Desarrollo de la Iniciativa Empresarial (CEDIE)."
  },
  {
    periodo: "2011 – Actualidad",
    titulo: "OVG Solutions: Empresa Familiar, Sucesión y Alcance Global",
    instituciones: "Venezuela • Estados Unidos • Red Internacional de Consultoría",
    detalle: "Evolución hacia OVG Solutions: consultoría integral especializada en gobierno corporativo de empresas familiares, diseño del protocolo y familygrama de sucesión generacional, alianzas de coinversión transfronteriza y asesoría gerencial online."
  }
];

// 3. Red Mundial de Cooperación y Alianzas (24 entidades clave agrupadas por regiones)
const redAlianzas = [
  // Europa
  {
    nombre: "Barnett Consulting Group",
    pais: "Reino Unido (Windsor)",
    region: "europa",
    categoria: "Consultoría Estratégica",
    detalle: "Asociados en calidad de consultores colaboradores en proyectos de desarrollo y reestructuración empresarial internacional."
  },
  {
    nombre: "Chartered Institute of Personnel and Development (CIPD)",
    pais: "Reino Unido (Londres)",
    region: "europa",
    categoria: "Membresía Profesional",
    detalle: "Membresía profesional y acreditación directiva en las más avanzadas prácticas de gestión de capital humano."
  },
  {
    nombre: "Institute of Management (IM)",
    pais: "Reino Unido",
    region: "europa",
    categoria: "Instituto Gerencial",
    detalle: "Vínculo académico-profesional para la aplicación de modelos británicos de efectividad directiva."
  },
  {
    nombre: "Vision Finance",
    pais: "Londres, Reino Unido",
    region: "europa",
    categoria: "Banca y Finanzas",
    detalle: "Representante para Venezuela y la región en estructuración de financiamiento y proyectos de inversión transfronterizos."
  },
  {
    nombre: "Business Lausanne School",
    pais: "Lausanne, Suiza",
    region: "europa",
    categoria: "Educación Ejecutiva",
    detalle: "Representación y cooperación académica para formación ejecutiva y benchmarking gerencial europeo."
  },
  {
    nombre: "Rhema Consultancy",
    pais: "Reino Unido",
    region: "europa",
    categoria: "Consultoría Internacional",
    detalle: "Colaboración en metodologías de desarrollo organizacional y diseño de estructuras institucionales."
  },
  {
    nombre: "Agrisystem & Arcotech",
    pais: "Reino Unido / España",
    region: "europa",
    categoria: "Desarrollo y Tecnología",
    detalle: "Cooperación en proyectos agroindustriales, sostenibilidad técnica y modernización de procesos productivos."
  },
  {
    nombre: "International Industrial Relations Association (IIRA)",
    pais: "Ginebra, Suiza",
    region: "europa",
    categoria: "Organismo Global",
    detalle: "Miembro titular de 6 comités mundiales de investigación en relaciones laborales y desarrollo organizacional."
  },

  // Norteamérica
  {
    nombre: "The Family Firm Institute (FFI)",
    pais: "Estados Unidos (Boston, MA)",
    region: "norteamerica",
    categoria: "Empresa Familiar",
    detalle: "Institución global líder en investigación y estándares éticos para consultoría en sucesión y protocolo familiar."
  },
  {
    nombre: "International Council for Small Business (ICSB)",
    pais: "Estados Unidos (Washington, D.C.)",
    region: "norteamerica",
    categoria: "Desarrollo PyME",
    detalle: "Red internacional de expertos para el fomento, financiamiento y políticas de apoyo a la pequeña y mediana empresa."
  },
  {
    nombre: "American Society for Training & Development (ASTD)",
    pais: "Estados Unidos (Alexandria, VA)",
    region: "norteamerica",
    categoria: "Talento y Capacitación",
    detalle: "Adopción de estándares internacionales de diseño instruccional, desarrollo de competencias y evaluación."
  },
  {
    nombre: "EEC America Corp",
    pais: "Estados Unidos (Miami, FL)",
    region: "norteamerica",
    categoria: "Energía y Comunicaciones",
    detalle: "Alianza para proyectos de telecomunicaciones, energías sustentables y tecnología aplicada en Latinoamérica."
  },
  {
    nombre: "Management Structures & Systems, Inc.",
    pais: "Estados Unidos",
    region: "norteamerica",
    categoria: "Sistemas Gerenciales",
    detalle: "Intercambio técnico para el diagnóstico de sistemas de gestión y consultoría en reingeniería corporativa."
  },
  {
    nombre: "DAI & Cargill Technical Services Ltd.",
    pais: "Estados Unidos / Reino Unido",
    region: "norteamerica",
    categoria: "Proyectos Internacionales",
    detalle: "Cooperación con agencias de desarrollo internacional en licitaciones y proyectos multilaterales con impacto social."
  },
  {
    nombre: "Porta Immigration",
    pais: "Canadá",
    region: "norteamerica",
    categoria: "Movilidad Internacional",
    detalle: "Canalización de programas de movilidad ejecutiva y apertura de filiales empresariales en Norteamérica."
  },

  // Asia y Oceanía
  {
    nombre: "Japan Institute of Labor (JIL)",
    pais: "Tokio / Kitakyushu, Japón",
    region: "asia",
    categoria: "Productividad y Calidad",
    detalle: "Vínculo institucional derivado de programas de alta gerencia industrial y sistemas Kaizen aplicados a PyMEs."
  },
  {
    nombre: "Mimansa Inc",
    pais: "Seúl, Corea del Sur",
    region: "asia",
    categoria: "Trading & Joint Ventures",
    detalle: "Articulación de import/export, alianzas de suministro y joint ventures con fabricantes en Corea del Sur, China y el Sudeste Asiático."
  },
  {
    nombre: "Institute of Applied Manpower Research (IAMAR)",
    pais: "Nueva Delhi, India",
    region: "asia",
    categoria: "Investigación Laboral",
    detalle: "Cooperación en formación y planificación estratégica del capital humano y economía del empleo."
  },
  {
    nombre: "King Pac Industrial Corp.",
    pais: "Tailandia",
    region: "asia",
    categoria: "Manufactura Industrial",
    detalle: "Enlace comercial e intercambio de materias primas industriales para la región andina y el Caribe."
  },
  {
    nombre: "Shandong Toshimi",
    pais: "China",
    region: "asia",
    categoria: "Maquinaria y Tecnología",
    detalle: "Canal de vinculación comercial para adquisición de maquinaria, bienes de capital y soluciones industriales."
  },
  {
    nombre: "The Institute & Ministry of Small Business",
    pais: "Australia / Nueva Zelanda",
    region: "asia",
    categoria: "Políticas PyME",
    detalle: "Cooperación en políticas de emprendimiento, benchmarking y programas del New Zealand Trade Development Board."
  },
  {
    nombre: "Polo Trade Finance Ltd",
    pais: "Israel / EE.UU. / Nueva Zelanda",
    region: "asia",
    categoria: "Comercio Exterior",
    detalle: "Estructuración de cartas de crédito, garantías comerciales y financiamiento para exportaciones e importaciones complejas."
  },

  // Latinoamérica y Organismos
  {
    nombre: "Organismos Multilaterales (World Bank, BID, UE, ALIDE, CAN)",
    pais: "Washington / Bruselas / Lima",
    region: "latinoamerica",
    categoria: "Banca Multilateral",
    detalle: "Consultor individual acreditado para misiones de asistencia técnica, evaluación de proyectos y desarrollo del sector productivo."
  },
  {
    nombre: "Ministerio de Relaciones Exteriores de Venezuela (MRE)",
    pais: "Caracas, Venezuela",
    region: "latinoamerica",
    categoria: "Diplomacia Comercial",
    detalle: "Articulación con la Coordinación de Diplomacia Comercial y la red de agregados comerciales y embajadas en el exterior."
  }
];

// 4. Casos de Éxito y Consultorías Documentadas (13 Casos)
const casosConsultoria = [
  {
    id: 1,
    numero: "01",
    titulo: "Promoción Comercial y Negocios España – Venezuela",
    categoria: "comercio",
    pais: "España / Venezuela",
    sector: "Cooperación Bilateral",
    resumen: "Coordinación y desarrollo de relaciones de negocio transfronterizas desde 1990 para el fomento de inversiones y acuerdos de cooperación empresarial bilateral.",
    solucion: "Diseño de agendas de inversión, perfiles de contrapartes locales y facilitación de mesas de negociación con empresarios españoles interesados en el mercado venezolano.",
    resultado: "Establecimiento de vínculos duraderos de suministro y canales de cooperación técnica entre ambos países."
  },
  {
    id: 2,
    numero: "02",
    titulo: "Estructuración de Joint Ventures y Asociaciones de Capital",
    categoria: "joint-ventures",
    pais: "América Latina / Internacional",
    sector: "Inversión y Sociedades",
    resumen: "Análisis y formulación de casos de negocio para desarrollar esquemas de asociación estratégica entre inversionistas extranjeros y empresas locales.",
    solucion: "Evaluación financiera, compatibilidad de culturas corporativas y diseño de marcos jurídicos-operativos para alianzas estratégicas seguras.",
    resultado: "Creación de consorcios operativos con mitigación de riesgos cambiarios y de entorno regulatorio."
  },
  {
    id: 3,
    numero: "03",
    titulo: "Venta Internacional de Laboratorio Farmacéutico",
    categoria: "joint-ventures",
    pais: "Venezuela / Mercados Globales",
    sector: "Industria Farmacéutica",
    resumen: "Proceso de valuación estratégica, búsqueda y negociación confidencial para la venta de activos corporativos de un laboratorio farmacéutico venezolano.",
    solucion: "Elaboración del memorando de información confidencial (InfoMemo), data room y prospección directa de compradores multinacionales en el exterior.",
    resultado: "Cierre exitoso de la transacción con comprador internacional, maximizando el valor para los accionistas fundadores."
  },
  {
    id: 4,
    numero: "04",
    titulo: "Franquicias de Capacitación Tecnológica desde India",
    categoria: "franquicias-pymes",
    pais: "India / Venezuela",
    sector: "Tecnología de Información (TI)",
    resumen: "Reclutamiento de socios máster y apertura de franquicias de centros de formación informática para corporación tecnológica líder de la India.",
    solucion: "Adaptación del modelo operativo al mercado local, prospección de inversionistas calificados y supervisión del traspaso pedagógico y de licencias.",
    resultado: "Despliegue de centros de formación técnica certificada con alto impacto en la capacitación de jóvenes profesionales."
  },
  {
    id: 5,
    numero: "05",
    titulo: "Exportación de Lencería Infantil y Búsqueda de Insumos en EE.UU.",
    categoria: "comercio",
    pais: "Venezuela / Estados Unidos",
    sector: "Textil y Confección",
    resumen: "Asesoría en terreno en Estados Unidos para la adquisición de materias primas de calidad superior y apertura de canales de exportación para PyME textil.",
    solucion: "Investigación directa en hubs textiles norteamericanos, negociación de precios de insumos y homologación arancelaria para penetración en tiendas minoristas.",
    resultado: "Reducción del 28% en costos de aprovisionamiento y primera colocación de producto terminado en el mercado estadounidense."
  },
  {
    id: 6,
    numero: "06",
    titulo: "Comercio Electrónico B2B entre PyMEs de EE.UU. y Venezuela",
    categoria: "franquicias-pymes",
    pais: "Estados Unidos / Venezuela",
    sector: "E-Commerce B2B",
    resumen: "Consultoría de intermediación digital e integración en plataformas de comercio electrónico para pequeñas empresas manufactureras exportadoras.",
    solucion: "Configuración de catálogos digitales B2B, protocolos seguros de pago y logística de consolidación de carga puerta a puerta.",
    resultado: "Conexión comercial automatizada con pedidos recurrentes y tiempos de despacho reducidos a la mitad."
  },
  {
    id: 7,
    numero: "07",
    titulo: "Inteligencia de Mercado y Oportunidades de Inversión",
    categoria: "joint-ventures",
    pais: "Venezuela / Europa y Asia",
    sector: "Multisectorial",
    resumen: "Generación de informes de inteligencia económica para grupos corporativos extranjeros evaluando su entrada a sectores productivos venezolanos.",
    solucion: "Análisis de riesgo país, marco legal, incentivos tributarios, infraestructura logística y disponibilidades de mano de obra técnica.",
    resultado: "Toma de decisiones fundamentada que evitó inversiones desalineadas y canalizó capitales hacia sectores con alto retorno."
  },
  {
    id: 8,
    numero: "08",
    titulo: "Reclutamiento de Distribuidores para Bodega Vinícola de Turquía",
    categoria: "comercio",
    pais: "Turquía / Latinoamérica",
    sector: "Alimentos y Bebidas",
    resumen: "Búsqueda, selección y validación de importadores mayoristas en América Latina para prestigiosa empresa líder productora y exportadora de vinos de Turquía.",
    solucion: "Filtro de capacidades logísticas y financieras de los distribuidores, coordinación de catas especializadas y acuerdos de distribución exclusiva.",
    resultado: "Firma de contratos de distribución para 3 países de la región con colocación sostenida de contenedores en el primer año."
  },
  {
    id: 9,
    numero: "09",
    titulo: "Ferias Internacionales Empresariales con Embajadas Acreditadas",
    categoria: "diplomacia-telecom",
    pais: "Caracas, Venezuela",
    sector: "Diplomacia y Comercio",
    resumen: "Consultoría estratégica ad-honorem para dos embajadas acreditadas en Caracas para la estructuración y montaje de dos eventos empresariales multisectoriales.",
    solucion: "Planificación logística, convocatoria de empresarios locales, diseño de rondas B2B y coordinación de agendas con 200 y 100 empresas expositoras.",
    resultado: "Eventos catalogados como hitos de diplomacia económica, generando decenas de intenciones de negocio binacional."
  },
  {
    id: 10,
    numero: "10",
    titulo: "Internacionalización de PyME Metalmecánica hacia Centroamérica",
    categoria: "franquicias-pymes",
    pais: "Venezuela / Centroamérica y Caribe",
    sector: "Metalmecánico y Manufactura",
    resumen: "Plan de expansión internacional para empresa fabricante de estructuras y piezas metálicas hacia mercados de la Cuenca del Caribe y Comunidad Andina.",
    solucion: "Auditoría de competitividad fabril, adaptación a normas técnicas regionales, registro de marcas y misión de visitas a distribuidores industriales.",
    resultado: "Apertura formal de representaciones comerciales y exportación de componentes para proyectos de infraestructura civil."
  },
  {
    id: 11,
    numero: "11",
    titulo: "Representación Tecnológica de Vanguardia de Bangalore (India)",
    categoria: "diplomacia-telecom",
    pais: "India / Venezuela y Latam",
    sector: "High-Tech y Software",
    resumen: "Representación y captación de negocios corporativos en América Latina para una corporación de alta tecnología con sede en el silicon valley de Bangalore.",
    solucion: "Mapeo de grandes clientes en banca, telecomunicaciones y gobierno; demostraciones de soluciones de misión crítica y soporte bilingüe de negociación.",
    resultado: "Cierre de contratos de licenciamiento corporativo y alianzas con integradores de sistemas de la región."
  },
  {
    id: 12,
    numero: "12",
    titulo: "Misión Comercial de Telecomunicaciones y Energía en Centroamérica",
    categoria: "diplomacia-telecom",
    pais: "Guatemala / Honduras / Venezuela",
    sector: "Telecomunicaciones y Energía",
    resumen: "Acompañamiento a dos empresas de telecomunicaciones e IT en misión de prospección y entrada comercial en Guatemala y Honduras.",
    solucion: "Agenda intensiva de visitas de alto nivel, presentaciones ejecutivas y ruedas de negocio bilaterales con alrededor de 40 empresas e instituciones locales.",
    resultado: "Concreción de alianzas de provisión de infraestructura y acuerdos preliminares en el marco de la cooperación energética regional."
  },
  {
    id: 13,
    numero: "13",
    titulo: "Coinversión para Fabricación de Miniplantas Modulares en Contenedores",
    categoria: "joint-ventures",
    pais: "Reino Unido / España / Venezuela",
    sector: "Miniplantas Industriales",
    resumen: "Consultoría y representación de corporación europea para captación de coinversión local en el montaje de planta de ensamblaje de miniplantas en contenedores.",
    solucion: "Estructuración técnica del proyecto (miniplantas para más de 700 tipos de productos manufacturables), modelo de retorno y búsqueda de socios de capital.",
    resultado: "Propuesta de inversión validada con grupos empresariales de la región para transferencia tecnológica y sustitución de importaciones."
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
              <p class="text-xs font-bold text-gray-700 uppercase tracking-wide">Hito Verificado</p>
            </div>
            <p class="text-xs text-gray-500 mt-1">Metodología aplicada y acreditación internacional documentada.</p>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Filtros y Renderizado de Alianzas Internacionales (organizacion.html)
function iniciarFiltrosAlianzas() {
  const container = document.getElementById("alianzas-container");
  const tabs = document.querySelectorAll(".alianza-tab");
  if (!container) return;

  function renderAlianzas(regionSeleccionada) {
    const filtradas = regionSeleccionada === "todas"
      ? redAlianzas
      : redAlianzas.filter(a => a.region === regionSeleccionada);

    container.innerHTML = filtradas.map(a => `
      <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm card-hover card-hover-green flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase ${
              a.region === 'europa' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
              a.region === 'norteamerica' ? 'bg-red-50 text-red-700 border border-red-200' :
              a.region === 'asia' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
              'bg-green-50 text-green-800 border border-green-200'
            }">
              ${a.categoria}
            </span>
            <span class="text-xs font-semibold text-gray-400">${a.pais}</span>
          </div>
          <h4 class="text-base font-bold text-gray-900 leading-snug">${a.nombre}</h4>
          <p class="text-xs text-gray-600 mt-2.5 leading-relaxed">${a.detalle}</p>
        </div>
        <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-medium">
          <span>Red OVG Solutions</span>
          <span class="text-green-700 font-semibold">Cooperación Activa</span>
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

// Filtros y Renderizado de los 13 Casos de Éxito (servicios-contacto.html)
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
            <div class="flex items-center gap-1.5">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-700">
                ${c.pais}
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

// Envío estructurado de solicitud de presupuesto a WhatsApp
function iniciarFormularioPresupuesto() {
  const form = document.getElementById("presupuesto-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre")?.value.trim() || "";
    const empresa = document.getElementById("empresa")?.value.trim() || "Particular / No especificada";
    const telefono = document.getElementById("telefono")?.value.trim() || "No especificado";
    const email = document.getElementById("email")?.value.trim() || "";
    const pais = document.getElementById("pais")?.value.trim() || "Venezuela";
    const area = document.getElementById("area-servicio")?.value || "Consultoría General";
    const mensaje = document.getElementById("mensaje")?.value.trim() || "";

    if (!nombre || !email || !mensaje) {
      mostrarToast("Por favor complete los campos requeridos (*).", "error");
      return;
    }

    const textoWhatsApp = encodeURIComponent(
      `💼 *SOLICITUD DE CONSULTORÍA — OVG SOLUTIONS*\n` +
      `-------------------------------------------\n` +
      `👤 *Solicitante:* ${nombre}\n` +
      `🏢 *Empresa:* ${empresa}\n` +
      `📞 *Teléfono:* ${telefono}\n` +
      `✉️ *Correo:* ${email}\n` +
      `📍 *Ubicación:* ${pais}\n` +
      `🎯 *Área de Servicio:* ${area}\n\n` +
      `📝 *Requerimiento:* \n${mensaje}\n` +
      `-------------------------------------------\n` +
      `_Enviado desde el portal web oficial (solutionsovg.com)_`
    );

    mostrarToast("¡Solicitud preparada! Redirigiendo a WhatsApp corporativo...", "exito");

    setTimeout(() => {
      window.open(`https://wa.me/584166280650?text=${textoWhatsApp}`, "_blank");
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
        mostrarToast("¡Suscripción exitosa! Recibirá nuestros análisis de comercio y gerencia.", "exito");
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


// Formulario de suscripción a boletín ejecutivo
function iniciarBoletin() {
  const forms = document.querySelectorAll(".boletin-form");
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input[type='email']");
      if (input && input.value) {
        mostrarToast("¡Suscripción exitosa! Recibirá nuestros análisis de comercio y gerencia.", "exito");
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