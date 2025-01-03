import React, {useEffect, useState} from "react";

import './Playground.scss';
import '@annotorious/react/annotorious-react.css';

import Viewer from "./Viewer/Viewer";
import {downloadUziImage} from "./Viewer/service/download";

const Playground = () => {
    const [imageUrl, setImageUrl] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [viewerType, setViewerType] = useState<'osd' | 'img'>('osd');
    const [tool, setTool] = useState<'rectangle' | 'polygon'>('rectangle');
    const [needPopup, setNeedPopup] = useState<boolean>(false);
    const [drawingEnabled, setDrawingEnable] = useState<boolean>(false);

    const getStyle = (isActive: boolean) => {
        return {
            backgroundColor: isActive ? "green" : "red",
        }
    };

    useEffect(() => {
        const downloadHandler = async () => {
            return await downloadUziImage('f6e7314f-9607-41a2-be2b-1b5c41115118', 'c341dbb0-f592-4f20-9d14-adccd90c6c99');
        }

        setLoading(true);
        downloadHandler()
            .then(response => {
                if (response) {
                    setImageUrl(response);
                }
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="playground">
            {
                loading && <span className="loader"></span>
            }
            {
                !loading && imageUrl !== '' && (
                    <>
                        <div className="header"
                             style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                            <div style={{display: "flex", gap: 10}}>
                                <button onClick={() => setTool('rectangle')}
                                        style={getStyle(tool === "rectangle")}>Прямоугольник
                                </button>
                                <button onClick={() => setTool('polygon')}
                                        style={getStyle(tool === "polygon")}>Полигон
                                </button>
                            </div>
                            <div style={{display: "flex", gap: 10}}>
                                <button disabled={viewerType === "img"} onClick={() => setDrawingEnable(false)}
                                        style={getStyle(!drawingEnabled)}>Перемещать
                                </button>
                                <button disabled={viewerType === "img"} onClick={() => setDrawingEnable(true)}
                                        style={getStyle(drawingEnabled)}>Рисовать
                                </button>
                            </div>
                            <div style={{display: "flex", gap: 10}}>
                                <button onClick={() => setNeedPopup(true)} style={getStyle(needPopup)}>С попапом
                                </button>
                                <button onClick={() => setNeedPopup(false)} style={getStyle(!needPopup)}>Без попапа
                                </button>
                            </div>
                            <div style={{display: "flex", gap: 10}}>
                                <button onClick={() => setViewerType('osd')} style={getStyle(viewerType === "osd")}>OSD
                                    Viewer
                                </button>
                                <button onClick={() => setViewerType('img')}
                                        style={getStyle(viewerType === "img")}>Image Viewer
                                </button>
                            </div>
                        </div>
                        <div className="content">
                            <Viewer viewerType={viewerType} tool={tool} needPopup={needPopup} imageUrl={imageUrl}
                                    drawingEnabled={drawingEnabled}/>
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default Playground;
