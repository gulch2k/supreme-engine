import React from 'react';
import '../index.css';

export const Footer = () => {
    return (
        <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', minHeight: '100vh' }}>
            <footer>
                <div className='footer-container'>
                <h5>Copyright © 2023 CryOfCommerce Inc. All Rights Reserved.</h5>
                </div>
            </footer>
        </div>
    );
};