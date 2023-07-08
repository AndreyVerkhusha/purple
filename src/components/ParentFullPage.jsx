import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";

import Page_1 from "./Page_1";
import Page_2 from "./Page_2";
import Page_3 from "./Page_3";
import Page_4 from "./Page_4";
import Page_5 from "./Page_5";
import Page_6 from "./Page_6";

let ParentFullPage = () => {
    const anchors = ["page_1", "page_2", "page_3","page_4", "page_5", "page_6" ];
    return (
        <ReactFullpage
            anchors={anchors}
            navigation
            navigationTooltips={anchors}
            navigat
            onLeave={(origin, destination, direction) => {
                /*console.log("onLeave event", {origin, destination, direction});*/
            }}
            render={({state, fullpageApi}) => {
                /*console.log("render prop change", state, fullpageApi);*/
                return (
                    <div>
                        <Page_1/>
                        <Page_2/>
                        <Page_3/>
                        <Page_4/>
                        <Page_5/>
                        <Page_6/>
                    </div>
                );
            }}
        />
    )
}
export default ParentFullPage;