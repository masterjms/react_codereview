// components/Navbar.tsx
'use client';
import Link from 'next/link';

export default function Navbar({ className, onToggleSidebar }: { className?: string; onToggleSidebar: () => void }) {
    return (
        <nav className={`p-4 text-white flex ${className}`}>
            <button className="mr-4 bg-gray-700 px-2 py-1 rounded flex items-center" onClick={onToggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            <span className="font-bold">홈</span>
        </nav>
    );
}


