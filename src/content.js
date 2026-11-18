// Textos del sitio. Fuente única: prompt de la dirección (Melany López), 18/11/2026.
// No añadir datos que no figuren en el prompt.

export const SITE = {
  url: 'https://isauroblanco.com',
  nombre: 'Isauro Blanco',
  email: 'info@habilmind.com',
};

export const LEGAL = [
  { label: 'Aviso legal', href: 'https://trust.habilmind.dev/aviso-legal-sitios-web-habilmind' },
  { label: 'Política de privacidad', href: 'https://trust.habilmind.dev/politica-privacidad-sitios-web-habilmind' },
  { label: 'Política de cookies', href: 'https://trust.habilmind.dev/politica-cookies-sitios-web-habilmind' },
];

export const NAV = [
  { to: '/', label: 'Inicio' },
  { to: '/biografia', label: 'Biografía' },
  { to: '/trayectoria', label: 'Trayectoria' },
  { to: '/legado', label: 'Legado' },
  { to: '/publicaciones', label: 'Publicaciones' },
  { to: '/conferencias-y-medios', label: 'Conferencias y medios' },
  { to: '/in-memoriam', label: 'In memoriam' },
  { to: '/galeria', label: 'Galería' },
];

export const BIO_ENTRADILLA =
  'Filósofo, pedagogo y psicólogo educativo y clínico, Isauro Blanco Pedraza fue **reconocido en Latinoamérica y España** por su trayectoria como conferencista y como asesor de padres, alumnos, profesores y directores de escuelas, universidades y empresas de América y Europa.';

export const CIFRAS = [
  { icon: 'GraduationCap', valor: 'Más de 40 años', texto: 'de experiencia en el aula y en la investigación educativa' },
  { icon: 'Users', valor: 'Más de 150.000', texto: 'alumnos con el Programa Hábilmente, según su biografía profesional' },
  { icon: 'Award', valor: '2007', texto: 'Mención Honorífica en los Premios Nacionales de Investigación e Innovación Educativa, Ministerio de Educación de España' },
  { icon: 'Globe', valor: 'América y Europa', texto: 'conferencias, asesorías y colegios en ambos continentes' },
];

export const QUIEN_FUE =
  'Isauro Blanco Pedraza fue filósofo, pedagogo y psicólogo educativo y clínico. Dedicó su vida profesional a **enseñar y a investigar cómo aprende el ser humano**: sus habilidades cognitivas, su mundo emocional y su desarrollo neurológico. Fue profesor, director de colegios, autor de libros, **conferencista internacional** y asesor de equipos directivos, docentes y familias en América y Europa. Falleció en Madrid el 29 de junio de 2025. **Su obra y sus ideas siguen presentes** en las escuelas donde se aplican.';

export const IDEAS = [
  { icon: 'Lightbulb', titulo: 'Educar es una relación', texto: 'Para Isauro Blanco, si el niño no hace contacto con el docente y el docente no hace contacto con cada alumno, **el aprendizaje no ocurre**.', fuente: 'Entrevista en Capitel, 2023' },
  { icon: 'BrainCircuit', titulo: 'El aprendizaje tiene base neurológica', texto: 'Acercó la **neuropsicología** a las aulas y a las familias para comprender mejor cómo aprenden los niños y los adolescentes.' },
  { icon: 'Compass', titulo: 'Las habilidades se pueden desarrollar', texto: 'Sostenía que la escuela debe **activar las habilidades** que cada persona necesita para actuar sobre el mundo.', fuente: 'Fundación Santillana, 2020' },
  { icon: 'Users', titulo: 'Acompañar al docente', texto: 'Fue **pionero en aplicar el coaching** a la formación de profesores y directores: al docente no se le deja solo, se le forma y se le acompaña en el aula.' },
];

export const IN_MEMORIAM_PORTADA =
  'Isauro Blanco falleció en Madrid el 29 de junio de 2025. Educadores, exalumnos, colegios y colegas de México, España y otros países **le han rendido homenaje**. Este espacio recoge su historia para que **su obra siga acompañando a quienes educan**.';

export const BIO_SECCIONES = [
  {
    titulo: 'Un comienzo marcado por la palabra',
    parrafos: [
      'Isauro Blanco **empezó a dar clases a los 19 años**. Él mismo contó que se acercó a la educación para superar un problema personal: era tartamudo. Con el tiempo entendió, decía, que aquello había sido un regalo, porque lo llevó a leer, reflexionar y observar mucho. De esa experiencia nació una convicción que lo acompañó siempre: **la educación puede transformar a las personas**.',
      'Educador de origen mexicano, vivió sus últimos años en Madrid.',
    ],
    fuentes: [
      { texto: 'Entrevista en Capitel, 2023', href: 'https://capitel.humanitas.edu.mx/entrevista-al-doctor-isauro-blanco-fundador-y-director-pedagogico-de-la-metodologia-asc-la-ensenanza-es-mas-una-relacion-que-una-tecnica/' },
      { texto: 'Punto Bajío, 25/01/2026' },
      { texto: 'Su columna «La pedagogía del siglo XXI», El Universal, 13/10/2010' },
    ],
  },
  {
    titulo: 'Formación',
    parrafos: [
      'Fue filósofo, pedagogo y psicólogo educativo y clínico. Según las semblanzas publicadas junto a sus columnas y en programas de formación de directivos, era **doctor en Psicología por la Pennsylvania State University** (Penn State, Estados Unidos).',
    ],
    fuentes: [
      { texto: 'El Universal, 13/10/2010, firma de su columna', href: 'http://subdireccionenlacedgetizac.blogspot.com/2010/10/la-pedagogia-del-siglo-xxi.html' },
      { texto: 'Programa de EIM Consultores', href: 'https://silo.tips/download/no-title-2106' },
    ],
  },
  {
    titulo: 'Del aula a la dirección de colegios',
    parrafos: [
      'Hacia 1976 llegó a Querétaro, en México, para colaborar con el **Tecnológico de Monterrey**. Fue profesor de filosofía y director del área de Enseñanza Media, y también dio clases en Ciencias de la Comunicación y en una maestría de Administración de Empresas. Desde entonces asesoraba colegios y construía materiales para desarrollar las **habilidades de pensamiento**. Su trabajo lo llevó también a Venezuela, donde se centró en las habilidades que condicionan el aprendizaje, y trabajó con niños con dificultades de aprendizaje y con adolescentes.',
    ],
    fuentes: [
      { texto: 'Entrevista en Capitel, 2023', href: 'https://capitel.humanitas.edu.mx/entrevista-al-doctor-isauro-blanco-fundador-y-director-pedagogico-de-la-metodologia-asc-la-ensenanza-es-mas-una-relacion-que-una-tecnica/' },
      { texto: 'Punto Bajío, 2026' },
    ],
  },
  {
    titulo: 'España y el Colegio Balder',
    parrafos: [
      'En 1994, según contó, se trasladó a España. Fue **director pedagógico del Colegio Balder**, en Las Rozas (Madrid), un colegio que ofrece educación desde infantil hasta bachillerato. Según relató, una de sus primeras decisiones fue **retirar los libros de texto** y apostar por un aprendizaje interdisciplinario, con colaboración entre alumnos y formación en valores. El colegio figura en la guía «100 Colegios» del diario El Mundo, que destacaba como rasgo propio la aplicación de un sistema de desarrollo de habilidades intelectuales.',
    ],
    fuentes: [
      { texto: 'Entrevista en Capitel, 2023', href: 'https://capitel.humanitas.edu.mx/entrevista-al-doctor-isauro-blanco-fundador-y-director-pedagogico-de-la-metodologia-asc-la-ensenanza-es-mas-una-relacion-que-una-tecnica/' },
      { texto: 'Dialnet, «Colegios que aprenden: 3 pasos hacia la Calidad», Qualitas Hodie n.º 119, 2006', href: 'https://dialnet.unirioja.es/servlet/articulo?codigo=2214000' },
      { texto: 'Noroeste, 16/11/2015', href: 'https://www.noroeste.com.mx/culiacan/aprenden-a-formar-habitos-intelectuales-GMNO940413' },
      { texto: 'El Mundo, «100 Colegios»', href: 'https://www.elmundo.es/sociedad/colegios/lista/balder.html' },
      { texto: 'BOE de 5/07/1997, autorización de «Centro Escolar Balder», Las Rozas' },
      { texto: 'Colegio Balder, historia', href: 'https://colegiobalder.com/historia/' },
    ],
  },
  {
    titulo: 'Mención Honorífica en los Premios Nacionales de Investigación e Innovación Educativa 2007',
    parrafos: [
      'En 2007, Isauro Blanco formó parte del equipo del Colegio Balder galardonado con una **Mención Honorífica**, en la modalidad de Innovación Educativa, de los Premios Nacionales de Investigación e Innovación Educativa del **Ministerio de Educación de España**, por el trabajo «Metodología para el desarrollo de competencias por rincones, mediante planes de trabajo». La Orden ESD/3378/2008, publicada en el BOE el 25 de noviembre de 2008, recoge a los autores del trabajo.',
    ],
    fuentes: [
      { texto: 'BOE-A-2008-19014', href: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2008-19014' },
      { texto: 'REDINED', href: 'https://redined.educacion.gob.es/xmlui/handle/11162/66243' },
      { texto: 'Dialnet', href: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5426073' },
      { texto: 'Colegio Balder, método', href: 'https://colegiobalder.com/metodo-balder/' },
    ],
  },
  {
    titulo: 'Maestro de maestros',
    parrafos: [
      'Fue **pionero en aplicar el coaching a la formación de profesores y directores**. Defendía que al docente no se le deja solo: **se le forma y se le acompaña dentro del aula**.',
    ],
  },
  {
    titulo: 'El autor de Hábilmente',
    parrafos: [
      'Fue autor del **Programa de Habilidades de Pensamiento Hábilmente**, un conjunto de materiales graduados y sistemáticos para desarrollar las habilidades cognitivas de los estudiantes, que según su biografía profesional se aplica en numerosos centros escolares y llega a **más de 150.000 alumnos**.',
    ],
  },
  {
    titulo: 'Escritor y conferencista',
    parrafos: [
      'Escribió libros sobre **neuropsicología, familia, escuela y coaching educativo**, y artículos para revistas y prensa, entre ellos para Ruta Maestra (Santillana Colombia) y Cuadernos de Pedagogía. Participó en **congresos internacionales** y en conferencias en México, España y Colombia, entre otros lugares, organizadas por instituciones como Santillana, Edelvives, la UNAM y Fundación Trilema.',
    ],
  },
  {
    titulo: 'Una voz activa hasta el final',
    parrafos: [
      'Hasta sus últimos años siguió publicando, escribiendo artículos, dando entrevistas y grabando ponencias. Residía en Madrid, donde falleció el 29 de junio de 2025. Quienes lo escucharon recuerdan su claridad, su cercanía y su capacidad para **explicar con sencillez ideas profundas**.',
    ],
  },
];

export const BIO_CITA = {
  texto: 'Lo que hace la educación es activar aquellos códigos que más pueden ayudar a cada persona para que tenga una existencia llena de realizaciones.',
  autor: 'Isauro Blanco, Fundación Santillana, 2020',
};

export const TRAYECTORIA = [
  { cuando: 'A los 19 años', icon: 'GraduationCap', titulo: 'Primeras clases', texto: 'Empieza a dar clases siendo muy joven y descubre en la educación **su vocación**.' },
  { cuando: 'Hacia 1976', icon: 'School', titulo: 'Tecnológico de Monterrey, campus Querétaro', texto: 'Profesor de filosofía y, después, **director del área de Enseñanza Media**. Imparte también clases en Ciencias de la Comunicación y en una maestría de Administración de Empresas.' },
  { cuando: '1994', icon: 'Globe', titulo: 'Llegada a España', texto: 'Según contó, se traslada a España.' },
  { cuando: '2007', icon: 'Award', titulo: 'Mención Honorífica en los Premios Nacionales de Investigación e Innovación Educativa', texto: 'Forma parte del equipo del Colegio Balder distinguido por su trabajo de **metodología por rincones**. Orden publicada en el BOE el 25 de noviembre de 2008.' },
  { cuando: '2015', icon: 'BookOpen', titulo: 'Libros del maestro Hábilmente', texto: 'Limusa edita los libros del maestro del **Programa de Habilidades de Pensamiento Hábilmente** para preescolar y primaria.' },
  { cuando: '2018', icon: 'BookOpen', titulo: 'Aprender haciendo: Coaching escolar estratégico', texto: 'Publica este libro con Khaf (Edelvives), clave para la **formación del coach escolar**.' },
  { cuando: '2019', icon: 'BookOpen', titulo: 'Mente y aprendizaje', texto: 'Ediciones SM publica su obra sobre **neuropsicología aplicada a la educación**.' },
  { cuando: '2020', icon: 'BookOpen', titulo: 'Cuadernos de Pedagogía', texto: 'Publica en el n.º 514 (noviembre de 2020) el artículo "Coaching escolar estratégico: aprender haciendo".' },
  { cuando: '2023', icon: 'Mic', titulo: 'Una voz que seguía creciendo', texto: 'Publica "**Adolescencia, oportunidad y desafío**" y concede una entrevista a Capitel, de la Universidad Humanitas, sobre su trayectoria.' },
  { cuando: '29 de junio de 2025', icon: 'Heart', titulo: 'Fallecimiento', texto: 'Isauro Blanco fallece en Madrid. Educadores, exalumnos y colegios de varios países **le rinden homenaje**.' },
];

export const FACETAS = [
  { icon: 'Compass', titulo: 'Asesorías y materiales', texto: 'Asesoró colegios, **creó materiales para desarrollar habilidades de pensamiento**, trabajó en Venezuela y colaboró con colegios piloto en México.' },
  { icon: 'School', titulo: 'Colegio Balder', texto: 'Fue director pedagógico del Colegio Balder, en Las Rozas (Madrid), donde **retiró los libros de texto** y apostó por un aprendizaje interdisciplinario.' },
  { icon: 'BrainCircuit', titulo: 'Pruebas psicopedagógicas', texto: 'Es el **autor principal de pruebas psicopedagógicas** sobre habilidades del aprendizaje, estilos de aprendizaje, autoconcepto y bienestar emocional, que hoy se utilizan en la plataforma educativa Habilmind.' },
];

export const LOGROS = [
  { icon: 'Award', titulo: 'Mención Honorífica, Premios Nacionales de Investigación e Innovación Educativa (2007)', texto: 'Reconocimiento del **Ministerio de Educación de España** al trabajo del Colegio Balder en el que participó como autor, según el BOE del 25 de noviembre de 2008.' },
  { icon: 'BookOpen', titulo: 'El Programa Hábilmente', texto: 'Materiales graduados y sistemáticos para desarrollar las habilidades de pensamiento. Según su biografía profesional, se aplica en numerosos centros escolares con **más de 150.000 alumnos**.' },
  { icon: 'Users', titulo: 'Coaching escolar', texto: '**Pionero en aplicar el coaching** a la formación de profesores y directores. Su libro "Aprender haciendo: Coaching escolar estratégico" explica las funciones y la formación del coach escolar.' },
  { icon: 'BrainCircuit', titulo: 'Neuropsicología para educadores', texto: 'Con libros como "Mente y aprendizaje" y "Mindware", **acercó la neurología a la educación** para orientar a docentes y familias.' },
  { icon: 'Mic', titulo: 'Voz internacional', texto: 'Conferencias en congresos y encuentros en **México, España y Colombia**, organizados por instituciones educativas como Santillana, Edelvives, la UNAM y Fundación Trilema.' },
  { icon: 'Newspaper', titulo: 'Artículos para docentes y familias', texto: 'Escribió artículos en Ruta Maestra (Santillana Colombia) y en Cuadernos de Pedagogía sobre **aprendizaje, adolescencia, cambio educativo y coaching escolar**.' },
];

export const CITAS = [
  { texto: 'La enseñanza es más una relación que una técnica.', fuente: 'Capitel, 2023' },
  { texto: 'Nuestra debilidad se convirtió en nuestro motor de desarrollo. Nuestra debilidad es nuestra fuerza.', fuente: 'Fundación Santillana, 2020' },
  { texto: 'La escuela nos dota de las habilidades que nos permiten no solo conocer y comprender el mundo, sino también interpretarlo, reorganizarlo, modificarlo y poder finalmente interaccionar con otros y con el propio mundo.', fuente: 'Fundación Santillana, 2020' },
  { texto: 'Es necesaria la confianza de la familia en la escuela y en los educadores, ambos tenemos un proyecto común.', fuente: 'Learning Leaders Summit, Fundación Trilema' },
];

export const HABILMENTE =
  'Hábilmente es el **Programa de Habilidades de Pensamiento** que Isauro Blanco creó para incidir de manera directa en el **desarrollo de las habilidades cognitivas** de los estudiantes y lograr un aprendizaje más fluido. Se ha editado en libros del maestro para preescolar y primaria (Limusa, 2015).';

export const LIBROS = [
  {
    id: 'mente-y-aprendizaje', titulo: 'Mente y aprendizaje', subtitulo: 'neuropsicología aplicada a la educación',
    portada: 'libro-mente-y-aprendizaje', datos: ['Ediciones SM', 'Noviembre de 2019', '168 páginas', 'ISBN 978-84-1318-260-5'],
    editorial: 'Ediciones SM', fecha: '2019-11', isbn: '978-84-1318-260-5', paginas: 168,
    texto: 'Un esfuerzo por **acercar la neurología a la educación** y proporcionar a padres y docentes sugerencias de intervención educativa que permitan desarrollar mejor el potencial de cada niño.',
    tienda: 'https://oes.fundacion-sm.org/otras-publicaciones/libros/biblioteca-de-innovacion-educativa/mente-y-aprendizaje/',
  },
  {
    id: 'aprender-haciendo', titulo: 'Aprender haciendo', subtitulo: 'Coaching escolar estratégico',
    portada: 'libro-aprender-haciendo', datos: ['Khaf (Edelvives)', 'Primera edición, noviembre de 2018', '194 páginas', 'ISBN 978-84-15995-27-2'],
    editorial: 'Khaf (Edelvives)', fecha: '2018-11', isbn: '978-84-15995-27-2', paginas: 194,
    texto: 'Un libro clave para la **formación del coach escolar**: explica sus funciones y la formación teórica y práctica necesaria para desempeñar ese rol con éxito en el ámbito educativo.',
    tienda: 'https://www.amazon.com/-/es/Isauro-Blanco-Pedraza/dp/841599527X',
  },
  {
    id: 'universo-inteligencia', titulo: 'El universo de la inteligencia', subtitulo: 'hay más dentro de ti',
    portada: 'libro-universo-inteligencia', datos: ['Limusa', 'Tercera edición', 'ISBN 978-607-05-0252-1'],
    editorial: 'Limusa', isbn: '978-607-05-0252-1',
    texto: 'La enseñanza del siglo XXI enfrenta un **cambio radical** en su alcance, metodología y recursos, ya que el escenario humano presenta exigencias y también riquezas antes inexploradas.',
    tienda: 'https://www.gandhi.com.mx/el-universo-de-la-inteligencia-hay-mas-dentro-de-ti',
  },
  {
    id: 'mindware', titulo: 'Mindware', subtitulo: 'neuropsicología aplicada a la educación',
    datos: ['Edición de 2014'], fecha: '2014',
    texto: 'La verdadera revolución educativa del siglo XXI **se inicia en el cerebro humano**; la neuropsicología nos está abriendo horizontes ilimitados.',
    tienda: 'https://www.amazon.com.mx/Mindware-Neuropsicolog%C3%ADa-educaci%C3%B3n-Isauro-Blanco-ebook/dp/B077F83T56',
  },
  {
    id: 'padres-comprometidos', titulo: 'Padres comprometidos', subtitulo: 'el valor de una buena educación',
    datos: [],
    texto: 'La educación de los hijos siempre ha sido **un reto para los padres de familia**; sin embargo, parece que en la actualidad esta tarea se ha vuelto más complicada.',
    tienda: 'https://www.amazon.com.mx/Padres-Comprometidos-valor-buena-educaci%C3%B3n-ebook/dp/B077G7GV8G',
  },
  {
    id: 'escuelas-comprometidas', titulo: 'Escuelas comprometidas', subtitulo: 'el aprendizaje según el diseño humano',
    datos: ['Edición de 2016'], fecha: '2016',
  },
  {
    id: 'adolescencia', titulo: 'Adolescencia, oportunidad y desafío',
    datos: ['Edición de 2023'], fecha: '2023',
  },
  {
    id: 'habilmente', titulo: 'Hábilmente', subtitulo: 'serie de libros del maestro, preescolar y primaria',
    datos: ['Limusa', '2015'], editorial: 'Limusa', fecha: '2015',
  },
];

export const ARTICULOS = [
  { titulo: 'La adolescencia: oportunidad y desafío', fecha: '24 de marzo de 2023', medio: 'Ruta Maestra, Santillana Colombia', href: 'https://rutamaestra.santillana.com.co/la-adolescencia-oportunidad-y-desafio/' },
  { titulo: 'Educación infantil: los cimientos del aprendizaje', fecha: '20 de octubre de 2022', medio: 'Ruta Maestra, Santillana Colombia', href: 'https://rutamaestra.santillana.com.co/educacion-infantil-los-cimientos-del-aprendizaje/' },
  { titulo: 'Los adolescentes frente al dilema: proyecto o ilusión', fecha: '16 de diciembre de 2021', medio: 'Ruta Maestra, Santillana Colombia', href: 'https://rutamaestra.santillana.com.co/los-adolescentes-frente-al-dilema-proyecto-o-ilusion/' },
  { titulo: 'El cambio: entre el anhelo y el miedo', fecha: '23 de febrero de 2021', medio: 'Ruta Maestra, Santillana Colombia', href: 'https://rutamaestra.santillana.com.co/el-cambio-entre-el-anhelo-y-el-miedo/' },
  { titulo: 'La educación es arte y relación', fecha: '14 de abril de 2020', medio: 'Ruta Maestra, Santillana Colombia', href: 'https://rutamaestra.santillana.com.co/la-educacion-es-arte-y-relacion/' },
  { titulo: 'Arquitectura neurológica del aprendizaje', fecha: '11 de marzo de 2019', medio: 'Ruta Maestra, Santillana Colombia', href: 'https://rutamaestra.santillana.com.co/arquitectura-neurologica-del-aprendizaje/' },
  { titulo: 'Coaching escolar estratégico: aprender haciendo', fecha: 'Noviembre de 2020', medio: 'Cuadernos de Pedagogía, n.º 514, pp. 64-70', href: 'https://redined.educacion.gob.es/xmlui/handle/11162/262748' },
];

export const VIDEOS = [
  { id: 'UM3A64_QAqY', titulo: 'La crisis es instructiva, no destructiva', contexto: 'TEDxSantiaguitoED', texto: 'La escuela debe aprender cómo reformar su sistema a fin de que se convierta en escuela para la vida.' },
  { id: 'udvscg_bSC8', titulo: 'Fundamentos neurológicos del aprendizaje infantil', contexto: 'Jornada «Dale al COCO», Oviedo (Edelvives)' },
  { id: '7h6kmw-zNrY', titulo: 'La innovación en el salón de clases', contexto: 'Sexto Congreso del Sistema Incorporado «Moviendo el aula», UNAM (SI SOMOS UNAM)' },
  { id: 'OHC6rmUgUd0', titulo: 'El aprendizaje según el diseño humano', contexto: '5.º Congreso Nacional Santillana Compartir, México, 26 de febrero de 2019' },
  { id: 'PqxFjOd-AqU', titulo: 'El aprendizaje empieza en el corazón', contexto: 'Santillana Colombia y CIEC, ciclo «El sentido de la educación en tiempos de crisis»' },
  { id: 'tsvKX5GNw30', titulo: 'Intervención en el Learning Leaders Summit', contexto: 'Fundación Trilema' },
];

export const PONENCIA = {
  titulo: 'La educación está escrita en códigos neurológicos',
  contexto: 'Ponencia en el congreso «Sembramos Futuro» (Madrid)',
  // El enlace http://congreso.sscc.es/ponencia/2/2-neurociencia/ devolvía error 500 el 18/11/2026: se muestra sin enlace.
};

export const ENTREVISTAS = [
  { titulo: 'Conversación con Isauro Blanco', contexto: 'Carlos Magro, Fundación Santillana, 1 de enero de 2020', href: 'https://www.fundacionsantillana.com/blog/isauro-blanco-entrevista/' },
  { titulo: 'La enseñanza es más una relación que una técnica', contexto: 'Capitel, Universidad Humanitas, 3 de noviembre de 2023', href: 'https://capitel.humanitas.edu.mx/entrevista-al-doctor-isauro-blanco-fundador-y-director-pedagogico-de-la-metodologia-asc-la-ensenanza-es-mas-una-relacion-que-una-tecnica/' },
];

export const IN_MEMORIAM_TEXTOS = [
  'Isauro Blanco falleció en Madrid el 29 de junio de 2025. Seguía **activo, lúcido y generoso con sus ideas**: publicaba, escribía artículos, daba entrevistas y grababa ponencias.',
  'Quienes lo conocieron lo recuerdan como **un maestro que explicaba con sencillez ideas profundas**, y como una persona cercana. Docentes, exalumnos, directivos y colegios de México, España y otros países le han rendido homenaje.',
  'Este sitio quiere hacer algo que él habría entendido bien: seguir compartiendo lo aprendido. Su obra continúa en cada aula donde se enseña **con relación, con ciencia y con sentido**.',
];

export const GALERIA = [
  { img: 'isauro-retrato-traje', alt: 'Isauro Blanco, retrato' },
  { img: 'isauro-conferencia-escenario', alt: 'Isauro Blanco durante una conferencia' },
  { img: 'isauro-retrato-sonriendo', alt: 'Isauro Blanco, retrato' },
  { img: 'isauro-panel', alt: 'Isauro Blanco en un panel de expertos' },
  { img: 'isauro-globo-plasma', alt: 'Isauro Blanco, retrato' },
  { img: 'isauro-conferencia-atril', alt: 'Isauro Blanco durante una conferencia' },
  { img: 'isauro-retrato-sentado', alt: 'Isauro Blanco, retrato' },
  { img: 'isauro-de-pie', alt: 'Isauro Blanco, retrato' },
];
