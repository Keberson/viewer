import React, {useEffect, useState} from "react";
import {PopupProps} from "@annotorious/react";


const CommentPopup: React.FC<PopupProps> = ({ annotation, onCreateBody, onUpdateBody }) => {
    const [comment, setComment] = useState('');

    useEffect(() => {
        const commentBody = annotation.bodies.find(body => body.purpose === 'commenting');
        setComment(commentBody && commentBody.value ? commentBody.value : '');
    }, [annotation.bodies]);

    const onSave = () => {
        const updated = {
            purpose: 'commenting',
            value: comment
        };

        const commentBody = annotation.bodies.find(body => body.purpose === 'commenting');

        if (commentBody) {
            onUpdateBody(commentBody, updated);
        } else {
            onCreateBody(updated);
        }
    };

    return (
        <div>Popup</div>
    );
}

export default CommentPopup;
