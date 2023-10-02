import Link from 'next/link';
import Navbar from './Navbar';
import Rrss from './Rrss';

function Header() {
  return (
    <header className="flex items-center justify-center p-4 px-16 bg-white space-x-12 w-full overflow-visible">
      <Navbar />
      <Link href="/">
        <span className="rounded cursor-pointer inline-block bg-verdeClaro text-white p-4 -mt-2 -mb-2 shadow-lg hover:bg-verdeOscuro transition duration-300">
          MSRA
        </span>
      </Link>
      <Rrss/>
    </header>
  );
}

export default Header;


