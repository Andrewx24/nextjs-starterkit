import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
      <h2 className="text-4xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-lg mb-6">Sorry, we couldn’t find the requested resource.</p>
      <Link href="/">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md shadow-lg transition-all duration-300">
          Return Home
        </button>
      </Link>
    </div>
  );
}
