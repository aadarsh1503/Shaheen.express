// DirectionContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const DirectionContext = createContext();

export const DirectionProvider = ({ children }) => {
    const [direction, setDirection] = useState(() => {
        // Local storage se initial value load karein
        return localStorage.getItem('direction') || 'ltr';
    });

    const toggleDirection = () => {
        const newDirection = direction === 'ltr' ? 'rtl' : 'ltr';
        setDirection(newDirection);
        localStorage.setItem('direction', newDirection); // Direction persist karein
    };

    useEffect(() => {
        // Ensure `dir` attribute document level par update ho
        document.documentElement.setAttribute('dir', direction);
    }, [direction]);

    return (
        <DirectionContext.Provider value={{ direction, toggleDirection }}>
            <div dir={direction}>{children}</div>
        </DirectionContext.Provider>
    );
};

export const useDirection = () => useContext(DirectionContext);
