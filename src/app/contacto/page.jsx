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
        <div className=" flex-column justify-between w-2/3 h-2/3 rounded-md shadow-lg bg-white p-4">
        <h2>mail: maria.rodriguezalliende@gmail.com</h2>
        <h2>celular: +56995533525</h2>
        <h2>linkedIn: https//:linkedinurlprueba.cl</h2>

        </div>
      </main>
      <Footer />
    </div>
  );
}
