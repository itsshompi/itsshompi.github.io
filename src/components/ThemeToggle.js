import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 1000,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '24px',
                color: 'var(--text-primary)',
                transition: 'color 0.3s'
            }}
            title="Toggle Dark Mode"
        >
            {theme === 'light' ? (
                <i className="fa fa-moon-o" aria-hidden="true"></i>
            ) : (
                <i className="fa fa-sun-o" aria-hidden="true"></i>
            )}
        </button>
    );
};

export default ThemeToggle;
