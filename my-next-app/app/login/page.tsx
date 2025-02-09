'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // 로그인 로직 (예제에서는 바로 리뷰 페이지로 이동)
        router.push('/review');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-bold">로그인</h2>
            <input
                className="mt-2 p-2 border"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className="mt-2 p-2 border"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleLogin}>로그인</button>
        </div>
    );
}
