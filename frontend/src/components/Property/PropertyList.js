// src/components/Property/PropertyList.js
import React, { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import Property from './Property';

const PropertyList = () => {
    const { board } = useContext(GameContext);

    return (
        <div className="property-list">
            {board.map(property => (
                <Property key={property.id} property={property} />
            ))}
        </div>
    );
};

export default PropertyList;
