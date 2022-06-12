import React from 'react';
import Header from './Header';
import Head from 'next/head';

const Master: React.FC = ({ children }) => {
    return (
        <>
           
            <Header>
                {children}
            </Header>
        </>
    );
};

export default Master;