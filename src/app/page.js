import Header from './components/Header';
import Footer from './components/Footer';
import '../styles/global.css';
import Head from 'next/head';





const experienceData = [
  {
    year: "2023-presente",
    title: "Subgerente de Tecnología - Crece Capital SAC",
    description: "Desarrollo de plataformas web y productos digitales.Manejo de bases de datos y servidores. ",
  },
  {
    year: "2021-2022",
    title: "Analista de datos - Scotiabank Chile",
    description: "Manejo de bases de datos, reportería en línea y ETLS.",
  },
  {
    year: "2021-2020",
    title: "Junior Consultant - Aurous Consulting",
    description: "Asesoría en transformación digital de empresas en Chile.",
  },
  //... agregar más experiencias
];


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
</Head>
      <Header />

      <main className="flex-grow">
        {/* Sección de presentación */}
        <div className="flex flex-row items-center justify-around  bg-grisFrClaro">
          {/* Imagen de presentación */}
          <div className="w-1/4">
            <img src="/imagen.png" alt="Tu Nombre" className="w-350 h-auto filter contrast-115 grayscale" />
          </div>
          {/* Frase o descripción */}
          <div className="w-3/5 font-lato">
            <h1 className="text-xl font-semibold mb-4 font-lato">María Rodriguez</h1>
              <h3>Plasticidad</h3>
              <h3>Abrir caminos usando mis herramientas y conocimientos</h3>
              <h3>Innovación y nuevas ideas por delante</h3>
          </div>
        </div>

        {/* Sección de educación y experiencia */}
        <div >
          {/* Educación/Estudios */}


         {/* Sección de Experiencia */}
         <section className="relative flex flex-col items-start bg-cafeClaro">
          <div className=" w-full h-32 flex flex-row items-center justify-center p-4">
          <h1 className="text-xl font-medium">Mi experiencia</h1>
          </div>
            <div className="ml-80">
            {/* Línea vertical para la timeline */}
            <div className="absolute left-60 w-0.5 bg-gray-300"></div>

            {/* Puntos de la línea temporal */}
            {experienceData.map((experience, idx) => (
              <div key={idx} className="relative mb-20 w-full flex items-center">
                
                {/* Círculo para cada punto en la timeline */}
                <div className="w-2 h-2 bg-gray-300 rounded-full border-1 border-white mr-6"></div>
                
                {/* Contenido de cada punto */}
                <div className="w-120 rounded-md overflow-hidden shadow-lg bg-white p-4">
                 <div className="px-8 py-3">
                  <h4 className="text-sm font-medium">{experience.year}</h4>
                  <p className="text-sm text-gray-600">{experience.title}</p>
                  <p className="text-sm">{experience.description}</p>
                </div>
                </div>
              </div>
            ))}
            </div>
          </section>

<section clasName="flex flex-column bg-verdeClaro p-4">
<div className=" w-full h-32 flex flex-row items-center justify-center p-4 bg-verdeClaro">
          <h1 className="text-xl font-medium">Mis Estudios</h1>
          </div>
  <div className="flex flex-row justify-around bg-verdeClaro">
          
  <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white p-4">
  {/* Imagen de la tarjeta */}

  {/* Contenido de la tarjeta */}
  <div className="px-6 py-3">
    <div className="font-regular text-m mb-2">Ingeniería Industrial Mecánica</div>
    <p className="text-gray-700 text-sm">
    Pontificia Universidad Católica de Chile
    </p>
    <p className="text-gray-700 text-sm">
2014 - 2019
    </p>
    <p className="text-gray-700 text-sm">
     Major en Diseño e Innovación
    </p>
  </div>

  {/* Botón o acción de la tarjeta */}

</div>


<div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white p-4">
  {/* Imagen de la tarjeta */}

  {/* Contenido de la tarjeta */}
  <div className="px-6 py-3">
    <div className="font-regular text-m mb-2">Master en Ciencias de la Ingeniería</div>
    <p className="text-gray-700 text-sm">
    Pontificia Universidad Católica de Chile
    </p>
    <p className="text-gray-700 text-sm">
2018 - 2020
    </p>
    <p className="text-gray-700 text-sm">
    Tesis en diseño e ingeniería mecánica
    </p>
  </div>

  {/* Botón o acción de la tarjeta */}

</div>
<div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white p-4">
  {/* Imagen de la tarjeta */}

  {/* Contenido de la tarjeta */}
  <div className="px-6 py-3">
    <div className="font-regular text-m mb-2">Bootcamp FullStack Developer</div>
    <p className="text-gray-700 text-sm">
      Universidad del Desarrollo
    </p>
    <p className="text-gray-700 text-sm">
2023
    </p>
  </div>

  {/* Botón o acción de la tarjeta */}

</div>

          </div>
          </section>
        </div>

        <section className="mt-16 flex flex-col items-center justify-center">
          <div className="grid grid-cols-4 gap-4">
            <div className="p-2">
              <img src="/javascript.png" alt="JavaScript" className="mx-auto h-16 " />
            </div>
            <div className="p-2">
              <img src="/react.png" alt="React" className="mx-auto h-16 " />
            </div>
            <div className="p-2">
              <img src="/node.png" alt="Node.js" className="mx-auto h-16 " />
            </div>
            <div className="p-2">
              <img src="/next.png" alt="JavaScript" className="mx-auto h-7 " />
            </div>
            <div className="p-2">
              <img src="/tailwind.png" alt="React" className="mx-auto h-7 " />
            </div>
            <div className="p-2">
              <img src="/mongo.png" alt="Node.js" className="mx-auto h-10 " />
            </div>
            <div className="p-2">
              <img src="/firebase.png" alt="JavaScript" className="mx-auto h-16 " />
            </div>
            <div className="p-2">
              <img src="/appscript.png" alt="React" className="mx-auto h-16 " />
            </div>
            <div className="p-2">
              <img src="/figma.png" alt="Node.js" className="mx-auto h-16 " />
            </div>
            <div className="p-2">
              <img src="/sql.png" alt="JavaScript" className="mx-auto h-16 " />
            </div>
            <div className="p-2">
              <img src="/css.png" alt="React" className="mx-auto h-16 " />
            </div>
            <div className="w-1/4 p-2">
              <img src="/aws.png" alt="Node.js" className="mx-auto h-16 " />
            </div>          
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


