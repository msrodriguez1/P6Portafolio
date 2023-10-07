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
      <main className="h-screen flex flex-column justify-center items-center">
        <div className=" flex-column justify-center items-center w-1/3 h-1/4 rounded-md shadow-lg bg-white p-4">
        <h2>Contactame</h2>
          <div className="flex-column justify-center items-center">
        <p>mail: maria.rodriguezalliende@gmail.com</p>
        <p>celular: +56995533525</p>
        <p>linkedIn: https//:linkedinurlprueba.cl</p>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
