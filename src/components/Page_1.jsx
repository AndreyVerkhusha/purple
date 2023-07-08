import React from 'react';

import logo from '../images/Logo.svg';
import card_b from '../images/card_b.svg';
import card_s from '../images/card_s.svg';
import logo_bottom1 from '../images/logo_bottom1.svg';
import logo_bottom2 from '../images/logo_bottom2.svg';
import logo_bottom3 from '../images/logo_bottom3.svg';
import logo_bottom4 from '../images/logo_bottom4.svg';

const Page1 = () => {
    return (
        <div className="page_1 section">
            <div className={'container'}>
                <header className="header"><img src={logo} alt="logo"/></header>
                <main className="main">
                    <div className="text_block">
                        <div className="title">
                            <div>Scale Fintech</div>
                            <div>Safe And Secure</div>
                        </div>
                        <p className="p">
                            Ship your fintech products to your customers
                            with fast and reliable processes. Secure and highly
                            customizable. Rise Finance is the best partner for you
                            if you want to scale your finance products worldwide.
                        </p>
                    </div>
                    <div className="image_block">
                        <div className="card_b"><img src={card_b} alt="card_b"/></div>
                        <div className="card_s"><img src={card_s} alt="card_s"/></div>
                    </div>
                </main>
                <footer className="footer">
                    <ul>
                        <li><img src={logo_bottom1} alt=""/></li>
                        <li><img src={logo_bottom2} alt=""/></li>
                        <li><img src={logo_bottom3} alt=""/></li>
                        <li><img src={logo_bottom4} alt=""/></li>
                    </ul>
                </footer>
            </div>
        </div>
    );
};

export default Page1;