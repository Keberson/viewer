import React from 'react';
import {ImageAnnotationPopup, ImageAnnotator} from "@annotorious/react";

import CommentPopup from "../CommentPopup/CommentPopup";

interface ImageViewerProps {
    drawingEnabled?: boolean,
    tool: "rectangle" | "polygon",
    needPopup: boolean,
    imageUrl: string
}

const ImageViewer: React.FC<ImageViewerProps> = ({drawingEnabled = false, tool, needPopup, imageUrl}) => {
    return (
        <>
            <ImageAnnotator
                drawingEnabled={drawingEnabled}
                tool={tool}
            >
                <img src={imageUrl} alt="" className="full-height" />
            </ImageAnnotator>

            {needPopup &&
                <ImageAnnotationPopup
                    popup={props => (
                        <CommentPopup {...props} />
                    )}
                />
            }
        </>
    );
}

export default ImageViewer;
