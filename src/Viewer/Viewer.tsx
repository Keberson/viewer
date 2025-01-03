import React from 'react';

import OSDViewer from "./OSDViewer/OSDViewer";
import ImageViewer from "./ImageViewer/ImageViewer";

import './viewer.css';

interface ViewerProps {
    viewerType: "osd" | "img",
    tool: "rectangle" | "polygon",
    needPopup: boolean,
    imageUrl: string
}

const Viewer: React.FC<ViewerProps> = ({ tool, needPopup, viewerType, imageUrl }) => {
    return (
        <div className="viewer-wrapper">
            {
                viewerType === "osd" ?
                    <OSDViewer tool={tool} needPopup={needPopup} imageUrl={imageUrl} />
                    :
                    <ImageViewer tool={tool} needPopup={needPopup} imageUrl={imageUrl} />
            }
        </div>
    );
}

export default Viewer;
