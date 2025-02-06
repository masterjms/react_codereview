// app/review/page.tsx
'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function Review() {
    const [code, setCode] = useState('');
    const [outputMode, setOutputMode] = useState<'DETAIL' | 'MODEL_ANSWER'>('DETAIL');
    const [output, setOutput] = useState(['', '', '']);

    return (
        <Layout>
            <div className="flex flex-1 flex-col p-4">
                <div className="flex flex-1 gap-4">
                    <div className="w-1/2 bg-orange-50 p-4 rounded-lg flex justify-center items-center shadow-md">
                        <textarea
                            className="w-full h-full p-6 border border-orange-300 rounded-lg resize-none focus:ring-2 focus:ring-orange-400"
                            placeholder="코드를 입력하세요..."
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                    </div>
                    <div className="w-1/2 bg-orange-50 p-4 rounded-lg flex flex-col gap-2 shadow-md">
                        {/* Output 모드 선택 버튼 */}
                        <div className="flex gap-2 mb-2">
                            <button className={`px-3 py-1 text-xs rounded transition-all ${outputMode === 'DETAIL' ? 'bg-orange-500 text-white shadow' : 'bg-orange-200 text-gray-800'}`} onClick={() => setOutputMode('DETAIL')}>
                                리뷰 세부
                            </button>
                            <button className={`px-3 py-1 text-xs rounded transition-all ${outputMode === 'MODEL_ANSWER' ? 'bg-orange-500 text-white shadow' : 'bg-orange-200 text-gray-800'}`} onClick={() => setOutputMode('MODEL_ANSWER')}>
                                모범 답안
                            </button>
                        </div>
                        {outputMode === 'DETAIL' ? (
                            output.map((text, index) => (
                                <textarea
                                    key={index}
                                    className="w-11/12 h-1/3 p-4 border border-orange-300 rounded-lg resize-none focus:ring-2 focus:ring-orange-400"
                                    placeholder={`분석 결과 ${index + 1}`}
                                    value={text}
                                    readOnly
                                />
                            ))
                        ) : (
                            <textarea
                                className="w-11/12 h-full p-4 border border-orange-300 rounded-lg resize-none focus:ring-2 focus:ring-orange-400"
                                placeholder="모범 답안이 여기에 표시됩니다."
                                readOnly
                            />
                        )}
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all shadow-md"
                        onClick={() => setOutput([`분석 결과 1: ${code.length} 글자`, `분석 결과 2: ${code.length * 2} 글자`, `분석 결과 3: ${code.length * 3} 글자`])}
                    >
                        코드 검사
                    </button>
                </div>
            </div>
        </Layout>
    );
}