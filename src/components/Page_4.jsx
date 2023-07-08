import React from 'react';
import logo_page4 from '../images/logo_page4.svg';
import phone from '../images/phone.svg';

const Page4 = () => {
    return (
        <div className="page_4 section">
            <div className={'container'}>
                <div className="title">Case Study</div>
                <div className="info">Some results from our clients</div>
                <div className="inner">
                    <div className="block_info">
                        <div className="group_block">
                            <div className="title_text">Coruma Finance</div>
                            <div className="info_text">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            </div>
                            <div className="btn_read-me">read more about this client</div>
                        </div>
                        <div><img src={logo_page4} alt=""/></div>
                    </div>
                    <div className="stages_block">
                        <ul className="list_stages">
                            <li>Accquired 8 long time customers</li>
                            <li>300% Growth in first year</li>
                            <li>hired 24 talented developers</li>
                        </ul>
                    </div>
                    <div className="phone_block"><img src={phone} alt=""/></div>
                </div>
                <div className="back_figure"/>
            </div>
        </div>
    );
};

export default Page4;