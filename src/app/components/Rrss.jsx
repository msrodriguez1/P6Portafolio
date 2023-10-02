// components/Navbar.js

import Link from 'next/link';
import { FaPinterest, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';


function Rrss() {
  return (
    <nav  className="flex items-center justify-between p-4 gap-3 space-x-4">
        <FaTwitter/>
        <FaLinkedin/>
        <FaPinterest/>
        <FaFacebook/>
    </nav>
  );
}

export default Rrss;