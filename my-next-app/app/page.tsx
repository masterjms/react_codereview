'use client';
import Link from 'next/link';

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold">코딩 테스트 리뷰 사이트</h1>
          <div className="mt-4">
              <Link href="/login" className="px-4 py-2 bg-blue-500 text-white rounded">Login</Link>
              <Link href="/review" className="ml-4 px-4 py-2 bg-green-500 text-white rounded">Start</Link>
          </div>
      </div>
  );
}
