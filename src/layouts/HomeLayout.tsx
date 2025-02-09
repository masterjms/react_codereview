import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/homepage.css';
import '../styles/global.css';

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className="home-layout">
      <Header />
      <main className="home-main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
