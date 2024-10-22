// app/starwars/page.tsx
"use client";

import { useEffect, useState } from 'react';

type Person = {
  name: string;
  height: string;
  mass: string;
  gender: string;
};

const StarWarsComponent = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Call your internal API route
        const response = await fetch('/api/rest');
        const data = await response.json();
        setPeople(data.results || []);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            <h2 className=' text-blue-800'>{person.name}</h2>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Gender: {person.gender}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StarWarsComponent;
