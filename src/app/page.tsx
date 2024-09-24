'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">¡Landing Page!</h1>
      <Link href="/home">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Ingresar!
        </button>
      </Link>
    </main>
  );
}
