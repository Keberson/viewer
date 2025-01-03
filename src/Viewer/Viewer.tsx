import React from 'react';

import OSDViewer from "./OSDViewer/OSDViewer";
import ImageViewer from "./ImageViewer/ImageViewer";

import './viewer.scss';
import NextIcon from "./assets/NextIcon";
import PrevIcon from "./assets/PrevIcon";

interface ViewerProps {
    viewerType: "osd" | "img",
    tool: "rectangle" | "polygon",
    needPopup?: boolean,
    imageUrl: string,
    drawingEnabled?: boolean,
    callbackNext?: () => void,
    callbackPrev?: () => void,
}

const Viewer: React.FC<ViewerProps> = (
    {
        tool,
        needPopup = false,
        viewerType,
        imageUrl,
        drawingEnabled = false,
        callbackPrev = null,
        callbackNext = null
    }) => {
    return (
        <div className="viewer-wrapper">
            {
                callbackNext && (
                    <div className="viewer-navigation right">
                        <button onClick={callbackNext}><NextIcon/></button>
                    </div>
                )
            }
            {
                callbackPrev && (
                    <div className="viewer-navigation left">
                        <button onClick={callbackPrev}><PrevIcon/></button>
                    </div>
                )
            }
            {
                viewerType === "osd" &&
                <OSDViewer tool={tool} needPopup={needPopup} imageUrl={imageUrl} drawingEnable={drawingEnabled}/>
            }
            {
                viewerType === "img" &&
                <ImageViewer tool={tool} needPopup={needPopup} imageUrl={imageUrl} drawingEnabled={drawingEnabled}/>
            }
        </div>
    );
}

export default Viewer;
