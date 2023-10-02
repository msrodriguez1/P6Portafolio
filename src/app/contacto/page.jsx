import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata ={
  title: "Contacto",
  description:"RRSS, mail, teléfono"
}

export default function page() {
  return (
    <div>
      <Header />
      <main>
        <h2>Contacto</h2>
        <p>Información de contacto...</p>
      </main>
      <Footer />
    </div>
  );
}
