'use client';
// components/Layout.tsx (리뷰 페이지 전용 레이아웃)
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeTab, setActiveTab] = useState<'URL' | 'IMG' | null>(null);
    const [selectedOption, setSelectedOption] = useState<'OPTION1' | 'OPTION2'>('OPTION1');

    return (
        <div className="h-screen flex flex-col bg-orange-50">
            <Navbar className="bg-orange-300 text-white shadow-md" onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
            <div className="flex flex-1">
                <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
                <div className={`flex-1 flex flex-col p-4 transition-all ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}> 
                    {/* 새로운 컨테이너 크기 조정 (1/5 크기로 설정) */}
                    <div className="bg-orange-100 w-full h-1/5 p-4 rounded-lg shadow-md flex">
                        {/* 왼쪽 컨테이너 (URL & IMG) */}
                        <div className="w-1/2 flex flex-col gap-2">
                            <div className="flex gap-2 mb-2">
                                <button className={`px-3 py-1 text-xs bg-orange-400 text-white rounded ${activeTab === 'URL' ? 'bg-orange-300' : ''}`} onClick={() => setActiveTab('URL')}>
                                    URL
                                </button>
                                <button className={`px-3 py-1 text-xs bg-orange-400 text-white rounded ${activeTab === 'IMG' ? 'bg-orange-300' : ''}`} onClick={() => setActiveTab('IMG')}>
                                    IMG
                                </button>
                            </div>
                            {activeTab === 'URL' && (
                                <textarea className="w-2/3 h-3/4 p-2 border rounded resize-none" placeholder="여기에 URL을 입력하세요..."></textarea>
                            )}
                            {activeTab === 'IMG' && (
                                <input type="file" className="w-1/3 p-1 text-xs border rounded" accept="image/*" />
                            )}
                        </div>
                        {/* 오른쪽 컨테이너 (옵션 선택) */}
                        <div className="w-1/2 flex flex-col gap-2 justify-center items-center">
                            <button
                                className={`min-w-[240px] px-3 py-2 text-xs rounded text-center ${
                                    selectedOption === 'OPTION1' ? 'bg-orange-400 text-white' : 'bg-orange-200 text-gray-800'
                                }`}
                                onClick={() => setSelectedOption('OPTION1')}
                            >
                                Step1 : 알고리즘 풀이 코드 개선 중심
                            </button>
                            <button
                                className={`min-w-[240px] px-3 py-2 text-xs rounded text-center ${
                                    selectedOption === 'OPTION2' ? 'bg-orange-400 text-white' : 'bg-orange-200 text-gray-800'
                                }`}
                                onClick={() => setSelectedOption('OPTION2')}
                            >
                                Step2 : 로직 최적화 중심
                            </button>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
