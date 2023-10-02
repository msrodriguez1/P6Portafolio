import Header from '../components/Header';
import Footer from '../components/Footer';



export const metadata ={
  title: "Proyectos y trabajos",
  description:"Next.js , React, MongoDB"
}
export default function page() {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <main className="flex-grow w-full flex flex-col justify-between">
        <div className="text-center mb-4 mt-16">
          <h1 className="text-xl font-semibold">Mis Proyectos</h1>
        </div>

        <div className="flex-grow flex flex-col justify-between p-4 ">
          <div className="flex flex-row space-x-4 mt-6 rounded-md shadow-lg bg-white p-4">
            <div  className="flex flex-col">
            <h1 className=" font-medium mb-8 text-base">Métricas en Tiempo Real</h1>
            <img src="/Migracion.png" alt="Migración" className="w-1/3 h-auto" />
            </div>
            <ul  className="list-disc list-inside pl-5 mt-4 text-sm">
              <li>Llamada a API de migración entre países</li>
              <li>Filtros para facilitar la búsqueda de datos</li>
              <li>Uso de recursos visuales para mostrar la data como gráficos</li>
              <li> Principales Tecnologías usadas: Javascript, Librería Chart.js, Librería Axxios</li>
            </ul>
          </div>

          <div className="flex flex-row mt-6  space-x-4  rounded-md overflow-hidden shadow-lg bg-white p-4">
          <div  className="flex flex-col">

            <h1 className=" font-medium mb-8 text-base">Sitio Web Restaurant</h1>
            <img src="/Anakena.png" alt="Anakena" className="w-1/3 h-auto" />
            </div>
            <ul  className="list-disc list-inside pl-5 mt-4 text-sm">
              <li>Sitio web multipágina: página de inicio, inspiraciones, carta y nosotros.</li>
              <li>Componente de gestión de reservas para el usuario(CRUD)</li>
              <li> Principales Tecnologías usadas: Javascript, Firebase</li>

            </ul>
          </div>

          <div className="flex flex-row space-x-4 mt-6 rounded-md overflow-hidden shadow-lg bg-white p-4">
          <div  className="flex flex-col">

            <h1 className=" font-medium mb-8 text-base">Perfumería Online</h1>
            <img src="/Lelabo.png" alt="Le Labo" className="w-1/3 h-auto" />
           </div>
            <ul  className="list-disc list-inside pl-5 mt-4 text-sm">
              <li>Ecommerce de perfumería multipágina: catálogo de productos, página de producto, mi perfil y página de inicio.</li>
              <li>Registro de usuario e inicio de sesión</li>
              <li>Creación y edición de carrito de compras</li>
              <li>Principales Tecnologías usadas: React, MongoDB</li>

            </ul>
          </div>
        </div>
      </main>

      <Footer className="h-24" />  {/* Aquí puedes ajustar la altura según lo que necesites */}
    </div>
  );
}

