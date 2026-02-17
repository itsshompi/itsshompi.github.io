import React from 'react';
import sunIcon from '../images/sun.svg';
import moonIcon from '../images/moon.svg';

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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5px',
            }}
            title="Toggle Dark Mode"
        >
            {theme === 'light' ? (
                <img src={moonIcon} alt="Dark Mode" style={{ width: '24px', height: '24px', filter: 'var(--icon-filter)' }} />
            ) : (
                <img src={sunIcon} alt="Light Mode" style={{ width: '24px', height: '24px', filter: 'var(--icon-filter)' }} />
            )}
        </button>
    );
};

export default ThemeToggle;
