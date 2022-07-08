const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    download: (url) => ipcRenderer.send("download", url),
});
