import React from 'react';

import { OpenSeadragonAnnotationPopup, OpenSeadragonAnnotator, OpenSeadragonViewer } from "@annotorious/react";
import CommentPopup from "../CommentPopup/CommentPopup";
import {IViewer} from "../interfaces/IViewer";

interface ViewerProps extends IViewer {}

const OSDViewer: React.FC<ViewerProps> = ({ mode, tool, needPopup, image }) => {
    return (
        <OpenSeadragonAnnotator
            drawingEnabled={mode === "draw"}
            tool={tool}
        >
            <OpenSeadragonViewer
                options={{
                    tileSources: {
                        type: 'image',
                        url: `data:image/png;base64,${image}`,
                    },
                    prefixUrl: '/openseadragon-images/'
                }}
                className="openseadragon"
            />

            {
                needPopup && (
                    <OpenSeadragonAnnotationPopup popup={props => (
                        <CommentPopup {...props} />
                    )} />
                )
            }
        </OpenSeadragonAnnotator>
    );
}

export default OSDViewer;
