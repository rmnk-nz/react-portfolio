import React from 'react';
import '../styles/Navbar.css'

function Navbar ({ currentPage, handlePageChange }) {
    return (
        <nav className="nav-bar">
            <ul className="nav-list">
                <li className="nav-item">
                    <a
                    href="#About"
                    onClick={() => handlePageChange('About')}
                    className={`nav-link ${currentPage === 'About' ? 'active' : ''}`}
                    >
                    About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="#Projects"
                    onClick={() => handlePageChange('Projects')}
                    className={`nav-link ${currentPage === 'Projects' ? 'active' : ''}`}
                    >
                    Projects
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="#Contact"
                    onClick={() => handlePageChange('Contact')}
                    className={`nav-link ${currentPage === 'Contact' ? 'active' : ''}`}
                    >
                    Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="#Resume"
                    onClick={() => handlePageChange('Resume')}
                    className={`nav-link ${currentPage === 'Resume' ? 'active' : ''}`}
                    >
                    Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;