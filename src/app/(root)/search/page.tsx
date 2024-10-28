// app/search/page.tsx
export default function SearchPage({ searchParams }: { searchParams: { q: string } }) {
    const query = searchParams.q
  
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-4">Search Results</h1>
        {query ? (
          <p>Showing results for: {query}</p>
        ) : (
          <p>Please enter a search term</p>
        )}
      </main>
    )
  }