import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import React from 'react';

const Layout: React.FC = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
