// /app/store/page.tsx
import Link from 'next/link';

const StorePage = () => {
  const storeItems = [
    { id: '101', name: 'Wireless Headphones' },
    { id: '102', name: 'Bluetooth Speaker' },
    { id: '103', name: 'Smartphone' },
    { id: '104', name: 'Laptop' },
    { id: '105', name: 'Smartwatch' },
    { id: '106', name: 'Tablet' },
    { id: '107', name: 'Gaming Console' },
    { id: '108', name: '4K TV' },
    { id: '109', name: 'Digital Camera' },
    { id: '110', name: 'VR Headset' },
  ];

  return (
    <div className='flex min-h-screen'>
      <h1>Store Items</h1>
      <ul>
        {storeItems.map((item) => (
          <li key={item.id}>
            <Link href={`/store/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StorePage;
 