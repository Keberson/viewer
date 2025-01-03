import React, {useEffect, useState} from "react";

import Viewer from "./Viewer/Viewer";
import OSDViewer from "./Viewer/OSDViewer/OSDViewer";
import { downloadUziImage } from "./Viewer/service/download";

const Playground = () => {
    const [imageUrl, setImageUrl] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

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
                !loading && imageUrl !== '' &&
                    <>
                        <div className="header" style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                            <div style={{display: "flex", gap: 10}}>
                                <button>Прямоугольник</button>
                                <button>Полигон</button>
                            </div>
                            <div style={{display: "flex", gap: 10}}>
                                <button>Перемещать</button>
                                <button>Создать</button>
                            </div>
                            <div style={{display: "flex", gap: 10}}>
                                <button>С попапом</button>
                                <button>Без попапа</button>
                            </div>
                        </div>
                        <div className="content">
                            {/*<Viewer*/}
                            {/*    tool={"polygon"}*/}
                            {/*    needPopup={true}*/}
                            {/*    viewerType={"osd"}*/}
                            {/*    imageUrl={imageUrl}*/}
                            {/*/>*/}
                            <OSDViewer tool={"polygon"} imageUrl={imageUrl} />
                        </div>
                    </>
            }
        </div>
    );
}

export default Playground;
