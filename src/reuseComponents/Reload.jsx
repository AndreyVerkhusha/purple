import React from 'react';
import reload_svg from "../images/reload.svg";

const Reload = ({setReload}) => {
    return (
        <div
            className="reload"
            onClick={() => setReload(prev => prev + 1)}
        >
            <img src={reload_svg}/>
        </div>
    );
};

export default Reload;