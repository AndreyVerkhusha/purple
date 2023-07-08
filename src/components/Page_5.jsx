import React from 'react';
import imac from '../images/imac.svg';

const Page5 = () => {
    return (
        <div className={'page_5 section'}>
            <div className={'container'}>
                <div className="title">Coruma Finance</div>
                <div className="info">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </div>
                <div className="inner">
                    <img src={imac}/>
                    <div className="item">Accquired 8 long time customers</div>
                    <div className="item">hired 24 talented developers</div>
                    <div className="item">300% Growth in first year</div>
                </div>
                <div className="back_figure"/>
                <div className="back_figure_2"/>
            </div>
        </div>
    );
};

export default Page5;