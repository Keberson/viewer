import React from 'react';

import CommentPopup from "../CommentPopup/CommentPopup";
import {ImageAnnotationPopup, ImageAnnotator} from "@annotorious/react";

interface ImageViewerProps {
    mode?: "click" | "drag",
    tool: "rectangle" | "polygon",
    needPopup: boolean,
    imageUrl: string
}

const ImageViewer: React.FC<ImageViewerProps> = ({ mode = "click", tool, needPopup, imageUrl }) => {
    return (
        <>
            <ImageAnnotator
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
