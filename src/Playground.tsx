import React, {useEffect, useState} from "react";

import './Playground.scss';
import '@annotorious/react/annotorious-react.css';

import Viewer from "./Viewer/Viewer";
import {downloadUziImage} from "./Viewer/service/download";
import {useGetUziIdsQuery} from "./Viewer/service/uzi";

const Playground = () => {
    const uziID = 'f6e7314f-9607-41a2-be2b-1b5c41115118';

    const [imageUrl, setImageUrl] = useState<string>('');
    const [viewerType, setViewerType] = useState<'osd' | 'img'>('osd');
    const [tool, setTool] = useState<'rectangle' | 'polygon'>('rectangle');
    const [needPopup, setNeedPopup] = useState<boolean>(false);
    const [drawingEnabled, setDrawingEnable] = useState<boolean>(false);
    const [index, setIndex] = useState(0);

    const {isLoading, data, isError} = useGetUziIdsQuery(uziID);

    const callbackNextIndex = () => setIndex(index + 1);
    const callbackPrevIndex = () => setIndex(index - 1);

    const getStyle = (isActive: boolean) => {
        return {
            backgroundColor: isActive ? "green" : "red",
        }
    };

    useEffect(() => {
        if (data) {
            if (imageUrl !== '') {
                window.URL.revokeObjectURL(imageUrl);
            }

            const downloadHandler = async () => {
                return await downloadUziImage(uziID, data[index].id);
            }

            downloadHandler()
                .then(response => {
                    if (response) {
                        setImageUrl(response);
                    }
                })
                .catch(error => {
                    console.error(error);
                })
        }
    }, [data, index]);

    return (
        <div className="playground">
            {
                (isLoading) && <span className="loader"></span>
            }
            {
                imageUrl !== '' && (
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
                            <Viewer
                                viewerType={viewerType}
                                tool={tool}
                                needPopup={needPopup}
                                imageUrl={imageUrl}
                                drawingEnabled={drawingEnabled}
                                callbackNext={data && index + 1 < data.length ? callbackNextIndex : undefined}
                                callbackPrev={data && index - 1 > 0 ? callbackPrevIndex : undefined}
                                pages={data ? {current: index + 1, length: data.length} : undefined}
                            />
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default Playground;
