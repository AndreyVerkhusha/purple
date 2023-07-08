import React from 'react';
import logo_footer from '../images/logo_footer.svg';

const Page6 = () => {
    return (
        <div className={'page_6 section'}>
            <div className="inner">
                <img src={logo_footer}/>
                <ul className="column_list">
                    <li>
                        <div>Services</div>
                        <div>Web Hosting</div>
                        <div>Domains</div>
                        <div>Premium Hosting</div>
                        <div>Private Server</div>
                        <div>E-mail Hosting</div>
                    </li>
                    <li>
                        <div>Support</div>
                        <div>Pricing Plan</div>
                        <div>Documentation</div>
                        <div>Guide</div>
                        <div>Tutorial</div>
                    </li>
                    <li>
                        <div>Company</div>
                        <div>About</div>
                        <div>Blog</div>
                        <div>Join Us</div>
                        <div>Press</div>
                        <div>Partners</div>
                    </li>
                    <li>
                        <div>Legal</div>
                        <div>Claim</div>
                        <div>Privacy</div>
                        <div>Terms</div>
                    </li>
                    <li>
                        <div>Subcribe to our newsletter</div>
                        <div>Funding freemium long tail hypotheses first mover advantage assets
                            ownership
                        </div>
                    </li>
                </ul>
            </div>
            <div className="author">With love © Andrey Verkhusha 2022. All right reserved</div>
        </div>
    );
};

export default Page6;