// src/hooks/useGame.js
import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
};

export default useGame;
