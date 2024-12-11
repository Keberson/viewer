import React from 'react';

import CommentPopup from "../CommentPopup/CommentPopup";
import {ImageAnnotationPopup, ImageAnnotator} from "@annotorious/react";
import {IViewer} from "../interfaces/IViewer";

interface ViewerProps extends IViewer {}

const ImageViewer: React.FC<ViewerProps> = ({ mode, tool, needPopup, image }) => {
    return (
        <>
            <ImageAnnotator>
                <img src={image} alt="Image" />
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
