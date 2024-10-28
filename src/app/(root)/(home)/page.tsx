"use client";
import Link from 'next/link'

export default function Page() {
  function handleClick() {
    // Get the current time
    const currentTime = new Date().toLocaleString();

    // Check if the browser supports geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        alert(`Current time: ${currentTime}\nLocation: Latitude ${latitude}, Longitude ${longitude}`);
      }, () => {
        alert(`Current time: ${currentTime}\nLocation: Unable to retrieve location.`);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  return (
    <div>
      <h1>Home</h1>
      <h1>Next Js starter kit</h1>
      <Link href="/about">About</Link>
      <Link href="/store">Store Page</Link>
      <button className="btn-blue" onClick={handleClick}>Click me!</button>
    </div>
  );
}
