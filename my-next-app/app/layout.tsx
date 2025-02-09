// app/layout.tsx
'use client';
import "@/app/globals.css"; // Tailwind CSS 스타일 적용
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="ko">
          <body className="h-screen bg-gray-100">{children}</body>
      </html>
  );
}
