import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function Main() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
          }
          if (currentPage === 'Projects') {
            return <Projects />;
          }
          return <Contact />;
        };

    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </>
    );
}
