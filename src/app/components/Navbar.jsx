import Link from 'next/link';

function Navbar() {
  return (
    <nav >
      <ul className="flex justify-center space-x-6 gap-3">
        <li>
          <Link href="/proyectos">
            <span className="cursor-pointer text-black transition duration-300">Proyectos</span>
          </Link>
        </li>
        <li>
          <Link href="/contacto">
            <span className="cursor-pointer text-black  transition duration-300">Contacto</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}



export default Navbar;
