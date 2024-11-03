'use client';

import { useState } from 'react';
import { FaSearch, FaInfoCircle, FaClipboardList } from 'react-icons/fa';

export default function Home() {
  const [bin, setBin] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    const res = await fetch(`https://binlist.io/lookup/${bin}`);
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="w-full max-w-4xl px-4">
      <div className="my-8">
        <h1 className="text-3xl font-bold text-center">BIN Checker</h1>
        <div className="flex items-center mt-4">
          <input
            className="p-2 w-full border border-gray-300 rounded-l"
            type="text"
            value={bin}
            onChange={(e) => setBin(e.target.value)}
            placeholder="Enter BIN"
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-r flex items-center"
            onClick={handleCheck}
          >
            <FaSearch className="h-5 w-5 mr-1" />
            Check
          </button>
        </div>
        {result && (
          <div className="mt-4 p-4 border border-gray-300 rounded bg-white">
            <p><strong>Scheme:</strong> {result.scheme}</p>
            <p><strong>Type:</strong> {result.type}</p>
            <p><strong>Country:</strong> {result.country.name} {result.country.emoji}</p>
          </div>
        )}
      </div>

      <section id="about" className="my-8">
        <h2 className="text-2xl font-bold flex items-center">
          <FaInfoCircle className="h-6 w-6 mr-1" />
          About
        </h2>
        <p>This BIN Checker allows you to easily check the Bank Identification Number (BIN) of your card to get detailed information about it.</p>
      </section>

      <section id="features" className="my-8">
        <h2 className="text-2xl font-bold flex items-center">
          <FaClipboardList className="h-6 w-6 mr-1" />
          Features
        </h2>
        <ul className="list-disc list-inside">
          <li>Instant BIN lookup</li>
          <li>Accurate card scheme identification</li>
          <li>Details on card type and issuing country</li>
        </ul>
      </section>

      <section id="faq" className="my-8">
        <h2 className="text-2xl font-bold flex items-center">
          <FaInfoCircle className="h-6 w-6 mr-1" />
          FAQ
        </h2>
        <div className="mb-4">
          <h3 className="font-semibold">What is a BIN?</h3>
          <p>A Bank Identification Number (BIN) is the initial set of four to six numbers on a credit card. It identifies the institution that issued the card.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">How does this tool work?</h3>
          <p>Our tool uses the BIN to lookup detailed information from a reliable database to provide accurate card information.</p>
        </div>
      </section>
    </div>
  );
}
