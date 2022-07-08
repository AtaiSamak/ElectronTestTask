import { ipcRenderer } from "electron";

const download = (url: string) => {
    ipcRenderer.send("download", {
        payload: {
            url: url,
        },
    });
};

export default download;
