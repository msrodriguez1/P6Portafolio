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
          <h1>Mis Proyectos</h1>
        </div>

        <div className="flex-grow flex flex-col justify-between">
          <div className="flex flex-col  mb-16">
            <h1 className="mb-8">Métricas en Tiempo Real</h1>
            <img src="/Migracion.png" alt="Migración" className="w-1/3 h-auto" />
          </div>

          <div className="flex flex-col  mb-16">
            <h1 className="mb-8">Sitio Web Restaurant</h1>
            <img src="/Anakena.png" alt="Anakena" className="w-1/3 h-auto" />
          </div>

          <div className="flex flex-col  mb-16">
            <h1 className="mb-8">Perfumería Online</h1>
            <img src="/Lelabo.png" alt="Le Labo" className="w-1/3 h-auto" />
          </div>
        </div>
      </main>

      <Footer className="h-24" />  {/* Aquí puedes ajustar la altura según lo que necesites */}
    </div>
  );
}

