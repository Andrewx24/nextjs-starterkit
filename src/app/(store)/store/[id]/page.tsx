// /app/store/[id]/page.tsx
import Link from "next/link";
const StoreItemPage = ({ params }: { params: { id: string } }) => {
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
  
    // Find the item based on the `id` from params
    const item = storeItems.find((item) => item.id === params.id);
  
    // If no item is found, you can handle it by showing an error or a message
    if (!item) {
      return <div>Item not found</div>;
    }
  
    return (
      <div className="flex min-h-screen">
        <h1>{item.name}</h1>
        <p>This page displays details for the store item with ID: {item.id}.</p>
      <br />
        <Link href="/store">
        <button>Back to store</button>
        Back to store</Link>
      </div>
    );
  };
  
  export default StoreItemPage;
  