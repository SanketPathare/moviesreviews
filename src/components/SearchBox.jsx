'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      <form
        className="flex justify-between w-full max-w-2xl mx-auto border border-neutral-800 rounded-lg overflow-hidden"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search keywords..."
          className="w-full h-12 sm:h-14 px-4 placeholder-gray-500 outline-none bg-transparent flex-1 text-sm sm:text-base"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="px-4 sm:px-6 text-sky-600 disabled:text-gray-400 text-sm sm:text-base whitespace-nowrap"
          disabled={search === ''}
        >
          Search
        </button>
      </form>
    </div>
  );
}