// components/Sidebar.tsx
'use client';
export default function Sidebar({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
    return (
        <div className={`fixed left-0 top-0 h-full bg-gray-900 text-white p-4 w-64 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <button className="text-white p-2 mb-4 bg-gray-700 rounded" onClick={onToggle}>
                {isOpen ? '🔼 닫기' : '🔽 열기'}
            </button>
            {isOpen && (
                <div className="h-5/6 flex flex-col justify-between">
                    <h2 className="text-lg font-bold mb-2">리뷰 히스토리</h2>
                    <div className="bg-gray-800 p-4 rounded-lg w-11/12 h-full mx-auto flex flex-col gap-2 overflow-y-auto">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <button key={item} className="w-full p-3 bg-gray-700 rounded text-white text-left">
                                이전 코드 리뷰 {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}




