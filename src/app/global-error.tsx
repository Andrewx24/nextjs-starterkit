'use client'; // Ensure the component is a Client Component

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-red-50 min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Something went wrong!</h2>
        {error?.digest && <p className="text-sm text-gray-500">Error ID: {error.digest}</p>}
        <button
          onClick={() => reset()}
          className="mt-6 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md shadow-sm"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
