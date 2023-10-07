// components/Navbar.js

import Link from 'next/link';
import { FaPinterest, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';


function Rrss() {
  return (
    <nav  className="flex items-center justify-between p-4 gap-3 space-x-4">

        <FaTwitter/>
        <a href="www.linkedin.com/in/maría-rodriguez-alliende-809301145">
        <FaLinkedin/>
        </a>
        <a href="https://pin.it/7zztY8c">
        <FaPinterest/>
        </a>
        <a href="https://www.facebook.com/solee.rodriguez/">
        <FaFacebook/>
        </a>
    </nav>
  );
}

export default Rrss;