export interface IViewer {
    mode: "move" | "draw",
    tool: "rectangle" | "polygon",
    needPopup: boolean,
    image: string
}
