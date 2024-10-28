import Link from 'next/link';
import Image from 'next/image';
import Globalsearchbar from './search/Globalsearchbar';
const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={70} height={70} />
            </Link>
          </div>
           <Globalsearchbar/>
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/redux" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Redux
            </Link>
            <Link href="/testing" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Testing
            </Link>
            <Link href="/graphql" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              GraphQL
            </Link>
            <Link href="/rest" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              REST API
            </Link>
            <Link href="/serveractions" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Server Actions
            </Link>
            <Link href="/signin" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Sign In
            </Link>
            <Link href="/signup" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Sign Up
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-center items-center flex-wrap gap-4 px-4 py-4">
        <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
          Home
        </Link>
        <Link href="/redux" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
          Redux
        </Link>
        <Link href="/testing" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
          Testing
        </Link>
        <Link href="/graphql" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
          GraphQL
        </Link>
        <Link href="/rest" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
          REST API
        </Link>
        <Link href="/serveractions" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
          Server Actions
        </Link>
        <Link href="/signin" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
          Sign In
        </Link>
        <Link href="/signup" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
