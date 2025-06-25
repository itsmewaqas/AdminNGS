import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface CollapsibleSectionProps {
    title: string;
    children: ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}

const CollapsibleTabs: React.FC<CollapsibleSectionProps> = ({
    title,
    children,
    isOpen,
    onToggle
}) => {
    return (
        <div className='CollapsibleTabs'>
            <div className='CollapsibleTabsHeader' onClick={onToggle}>
                <strong>{title}</strong>
                <span>{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <div className='CollapsibleTabsContent'>
                    {children}
                </div>
            )}
        </div>
    );
};

export default CollapsibleTabs;