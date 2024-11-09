// import Image from "next/image";
// import localFont from "next/font/local";

// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the API route
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Message from the Backend:</h1>
      <p>{message}</p>
    </div>
  );
}
