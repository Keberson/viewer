import React from 'react';

import OSDViewer from "./OSDViewer/OSDViewer";
import ImageViewer from "./ImageViewer/ImageViewer";
import {IViewer} from "./interfaces/IViewer";

interface ViewerProps extends IViewer {
    viewerType: "osd" | "img"
}

const Viewer: React.FC<ViewerProps> = ({ mode, tool, needPopup, viewerType, image }) => {
    return (
        <>
            {
                viewerType === "osd" ?
                <OSDViewer  mode={mode} tool={tool} needPopup={needPopup} image={image} />
                :
                <ImageViewer mode={mode} tool={tool} needPopup={needPopup} image={image} />
            }
        </>
    );
}

export default Viewer;
