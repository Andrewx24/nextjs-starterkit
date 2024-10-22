// app/starwars/page.tsx

type Person = {
  name: string;
  gender: string;
  height: string;
};

const fetchStarWarsData = async (): Promise<Person[]> => {
  const query = `
    query {
      people {
        name
        gender
        height
      }
    }
  `;

  // Add Next.js fetch options for static caching
  const response = await fetch(`/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Cache the result statically (if the data doesn't change often)
      next: { revalidate: 86400 }, // revalidate after 1 day (86400 seconds)
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch Star Wars characters');
  }

  const { data } = await response.json();
  return data.people || [];
};

const StarWarsComponent = async () => {
  try {
    const people = await fetchStarWarsData();

    return (
      <div>
        <h1>Star Wars Characters</h1>
        <ul>
          {people.map((person, index) => (
            <li key={index}>
              <h2>{person.name}</h2>
              <p>Gender: {person.gender}</p>
              <p>Height: {person.height}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    return <div>Failed to load Star Wars data.</div>;
  }
};

export default StarWarsComponent;
