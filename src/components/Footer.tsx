import Link from 'next/link';
import Image from 'next/image';
import  Path from '@/components/Path';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={50} height={50} />
            </Link>
          </div>
          <nav>
            <Link href="/" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
          </nav>
        </div>
        <div className="text-center text-gray-500 text-xs mt-4">
       <Path/>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
